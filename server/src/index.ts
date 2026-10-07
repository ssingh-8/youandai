import { Hono } from "hono";
import { cors } from "hono/cors";
import { createContactApp } from "./contact-api.js";
export const app = new Hono();
app.use(
  "*",
  cors({
    origin: (process.env.ALLOWED_ORIGINS || "http://localhost:3000")
      .split(",")
      .map((origin) => origin.trim()),
    allowMethods: ["POST", "GET", "OPTIONS"],
  }),
);
app.get("/health", (c) => c.json({ ok: true, time: new Date().toISOString() }));
app.route("/", createContactApp());
export default app;
