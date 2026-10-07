import assert from "node:assert/strict";
import { test } from "node:test";
import { createContactApp as clientApp } from "../client/src/lib/contact-api.ts";
import { createContactApp as serverApp } from "../server/src/contact-api.ts";

const inquiry = {
  name: "Test Person",
  email: "test@example.com",
  company: "",
  service: "AI search & AEO",
  goals: "Improve our answer search visibility.",
};
for (const [name, createApp] of [
  ["Vercel", clientApp],
  ["standalone", serverApp],
]) {
  const sendRequest = (app, body = inquiry) =>
    app.request("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  test(`${name}: missing delivery configuration fails instead of claiming success`, async () => {
    let called = false;
    const app = createApp({
      configured: false,
      send: async () => {
        called = true;
        return true;
      },
    });
    const res = await sendRequest(app);
    assert.equal(res.status, 503);
    assert.equal((await res.json()).ok, false);
    assert.equal(called, false);
  });
  test(`${name}: resolved provider errors and network errors fail`, async () => {
    for (const send of [
      async () => false,
      async () => {
        throw new Error("network");
      },
    ]) {
      const res = await sendRequest(createApp({ configured: true, send }));
      assert.equal(res.status, 502);
      assert.equal((await res.json()).ok, false);
    }
  });
  test(`${name}: accepted email succeeds even if optional archive fails`, async () => {
    const original = console.error;
    console.error = () => {};
    try {
      for (const archive of [
        async () => false,
        async () => {
          throw new Error("database");
        },
      ]) {
        const res = await sendRequest(
          createApp({ configured: true, send: async () => true, archive }),
        );
        assert.equal(res.status, 200);
        assert.equal((await res.json()).ok, true);
      }
    } finally {
      console.error = original;
    }
  });
  test(`${name}: optional company and service preserve older submissions`, async () => {
    let received;
    const { company, service, ...body } = inquiry;
    const res = await sendRequest(
      createApp({
        configured: true,
        send: async (data) => {
          received = data;
          return true;
        },
      }),
      body,
    );
    assert.equal(res.status, 200);
    assert.equal(received.company, "");
    assert.equal(received.service, "Not sure yet");
  });
  test(`${name}: malformed, oversized, and spam submissions never send`, async () => {
    let sends = 0;
    const app = createApp({
      configured: true,
      send: async () => {
        sends++;
        return true;
      },
    });
    for (const body of [
      null,
      { ...inquiry, email: "bad" },
      { ...inquiry, goals: "   " },
      { ...inquiry, website: "https://spam.example" },
      { ...inquiry, service: "bad" },
      { ...inquiry, name: "A".repeat(121) },
    ])
      assert.equal((await sendRequest(app, body)).status, 400);
    assert.equal(
      (await sendRequest(app, { ...inquiry, goals: "x".repeat(20000) })).status,
      413,
    );
    assert.equal(sends, 0);
  });
}
