"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { LeadMagnetDialogTrigger } from "./lead-magnet";

export function LiveChatAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          id="live-chat-panel"
          className="w-[320px] rounded-3xl border border-white/20 bg-white/95 p-4 shadow-hero backdrop-blur-lg"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-hero text-lg font-semibold text-white">
                Y
              </span>
              <div>
                <p className="text-sm font-semibold text-primary">You &amp; AI Assistant</p>
                <p className="text-xs text-slate-500">Online • respond in under 2 minutes</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-slate-400 transition hover:text-primary"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <ul className="mt-4 space-y-2 text-xs text-slate-600">
            <li className="rounded-2xl border border-white/40 bg-white/80 px-3 py-2 shadow-sm">
              How can AI improve our sales forecasting?
            </li>
            <li className="rounded-2xl border border-white/40 bg-white/80 px-3 py-2 shadow-sm">
              What’s a realistic AI ROI timeline?
            </li>
            <li className="rounded-2xl border border-white/40 bg-white/80 px-3 py-2 shadow-sm">
              Can you integrate with our Azure stack?
            </li>
          </ul>
          <LeadMagnetDialogTrigger>
            <Link
              href="#"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-semibold text-primary shadow-accent transition-colors hover:bg-accent/90"
            >
              Chat with an AI Consultant
            </Link>
          </LeadMagnetDialogTrigger>
        </div>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary shadow-accent transition hover:bg-accent/90 ${
          open ? "" : "animate-hop"
        }`}
        aria-expanded={open}
        aria-controls="live-chat-panel"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        <span className="sr-only">
          {open ? "Hide You & AI Assistant" : "Chat with You & AI"}
        </span>
      </button>
    </div>
  );
}

