import { serve } from '@hono/node-server';
import app from './index.js';

const port = Number(process.env.PORT ?? 8787);

if (!Number.isFinite(port) || port <= 0) {
  console.warn(`Invalid PORT '${process.env.PORT}'. Falling back to 8787.`);
}

const listenPort = Number.isFinite(port) && port > 0 ? port : 8787;

serve({ fetch: app.fetch, port: listenPort }, () => {
  console.log(`Hono server listening at http://localhost:${listenPort}`);
});
