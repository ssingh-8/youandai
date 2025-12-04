"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { RealtimeChat } from "./realtime-chat";

export function LiveChatAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          id="live-chat-panel"
          className="w-[320px] rounded-3xl border border-border bg-card p-4 shadow-hero backdrop-blur-lg"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-hero text-lg font-semibold text-white">
                Y
              </span>
              <div>
                <p className="text-sm font-semibold text-card-foreground">
                  You &amp; AI Assistant
                </p>
                <p className="text-xs text-muted-foreground">
                  Online • respond in under 2 minutes
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-muted-foreground transition hover:text-foreground"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <RealtimeChat
            roomName="you-and-ai"
            username="Prospect"
            presetMessages={[
              "How can you help with inference optimization?",
              "What latency improvements are typical?",
              "Can you integrate with our existing stack?",
            ]}
          />
        </div>
      )}

      <div className="relative group">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-accent transition hover:bg-accent/90 ${
            open ? "" : "animate-hop"
          }`}
          aria-expanded={open}
          aria-controls="live-chat-panel"
          aria-describedby="live-chat-tooltip"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <MessageCircle className="h-5 w-5" />
          )}
        </button>
        {!open && (
          <span
            id="live-chat-tooltip"
            role="tooltip"
            className="pointer-events-none absolute bottom-[calc(100%+0.5rem)] 
          right-auto left-auto z-10 w-max -translate-x-1/2 rounded-full bg-foreground 
          px-4 py-1 text-xs font-medium text-background opacity-0 
          shadow-lg transition-opacity duration-200 group-hover:opacity-100"
          >
            Chat with an AI consultant
          </span>
        )}
      </div>
    </div>
  );
}
