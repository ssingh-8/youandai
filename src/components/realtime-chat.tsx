"use client";

import { ChatMessageItem } from "@/components/chat-message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChatScroll } from "@/hooks/use-chat-scroll";
import { useRealtimeChat, type ChatMessage } from "@/hooks/use-realtime-chat";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

interface RealtimeChatProps {
  roomName: string;
  username: string;
  onMessage?: (messages: ChatMessage[]) => void;
  messages?: ChatMessage[];
  presetMessages?: string[];
  showPresetMessages?: boolean;
}

/**
 * Realtime chat component
 * @param roomName - The name of the room to join. Each room is a unique chat.
 * @param username - The username of the user
 * @param onMessage - The callback function to handle the messages. Useful if you want to store the messages in a database.
 * @param messages - The messages to display in the chat. Useful if you want to display messages from a database.
 * @returns The chat component
 */
export const RealtimeChat = ({
  roomName,
  username,
  onMessage,
  messages: initialMessages = [],
  presetMessages,
}: RealtimeChatProps) => {
  const { containerRef, scrollToBottom } = useChatScroll();

  const [showPresetMessages, setShowPresetMessages] = useState(true);

  const {
    messages: realtimeMessages,
    sendMessage,
    isConnected,
  } = useRealtimeChat({
    roomName,
    username,
  });
  const [newMessage, setNewMessage] = useState("");

  // Merge realtime messages with initial messages
  const allMessages = useMemo(() => {
    const mergedMessages = [...initialMessages, ...realtimeMessages];
    // Remove duplicates based on message id
    const uniqueMessages = mergedMessages.filter(
      (message, index, self) =>
        index === self.findIndex((m) => m.id === message.id)
    );
    // Sort by creation date
    const sortedMessages = uniqueMessages.sort((a, b) =>
      a.createdAt.localeCompare(b.createdAt)
    );

    return sortedMessages;
  }, [initialMessages, realtimeMessages]);

  useEffect(() => {
    if (onMessage) {
      onMessage(allMessages);
    }
  }, [allMessages, onMessage]);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    scrollToBottom();
  }, [allMessages, scrollToBottom]);

  const handleSendMessage = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!newMessage.trim() || !isConnected) return;

      sendMessage(newMessage);
      setNewMessage("");
    },
    [newMessage, isConnected, sendMessage]
  );

  return (
    <div className="flex flex-col h-full w-full bg-background text-foreground antialiased">
      {/* Messages */}
      <div ref={containerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {allMessages.length === 0 ? (
          <div className="text-center text-sm text-muted-foreground">
            No messages yet. Start the conversation!
          </div>
        ) : null}
        <div className="space-y-1">
          {allMessages.map((message, index) => {
            const prevMessage = index > 0 ? allMessages[index - 1] : null;
            const showHeader =
              !prevMessage || prevMessage.user.name !== message.user.name;

            return (
              <div
                key={message.id}
                className="animate-in fade-in slide-in-from-bottom-4 duration-300"
              >
                <ChatMessageItem
                  message={message}
                  isOwnMessage={message.user.name === username}
                  showHeader={showHeader}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-border">
        {showPresetMessages && presetMessages && presetMessages.length > 0 ? (
          <div className="flex flex-wrap gap-2 p-4 pt-3 text-xs text-muted-foreground">
            {presetMessages.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => {
                  setNewMessage(preset), setShowPresetMessages(false);
                }}
                className="rounded-2xl border border-border bg-muted px-3 py-1.5 text-left text-xs font-medium text-foreground transition hover:border-accent hover:text-accent"
              >
                {preset}
              </button>
            ))}
          </div>
        ) : null}
        <form
          onSubmit={handleSendMessage}
          className="flex w-full gap-2 border-t border-border p-4"
        >
          <Input
            className={cn(
              "rounded-full bg-background text-sm transition-all duration-300",
              isConnected && newMessage.trim()
                ? "w-[calc(100%-36px)]"
                : "w-full"
            )}
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            disabled={!isConnected}
          />
          {isConnected && newMessage.trim() && (
            <Button
              variant="secondary"
              className="aspect-square text-primary rounded-full animate-in fade-in slide-in-from-right-4 duration-300"
              type="submit"
              disabled={!isConnected}
            >
              <Send className="size-4" />
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};
