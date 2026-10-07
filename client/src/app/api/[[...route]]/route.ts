import { Hono } from "hono";
import { handle } from "hono/vercel";
import { createContactApp } from "@/lib/contact-api";
export const runtime = "nodejs";
const app = new Hono().basePath("/api").route("/", createContactApp());
export const POST = handle(app);
