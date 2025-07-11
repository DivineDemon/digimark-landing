"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { BotMessageSquare, CircleX, Loader2, Send } from "lucide-react";
import type { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { toast } from "sonner";

import { ragAction } from "@/app/(server-actions)/rag-action";
import { cn } from "@/lib/utils";

import DMLogo from "../../assets/img/test/dmlogo.webp";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const ChatBot = () => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const [showInitialMessages, setShowInitialMessages] = useState<boolean>(true);

  const initialMessages = [
    "What services do you offer?",
    "How can I contact support?",
    "What are your business hours?",
    "Where can I find documentation?",
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(".chat-toggle-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleInitialMessageClick = async (message: string) => {
    setQuery(message);
    setShowInitialMessages(false);
    await handleChat(message); // Send the message immediately
  };

  const handleChat = async (customMessage?: string) => {
    const messageToSend = customMessage || query;
    if (!messageToSend.trim()) return;

    setLoading(true);
    setMessages((prev) => [
      ...prev,
      { role: "user", content: messageToSend },
      { role: "assistant", content: "" },
    ]);
    setQuery("");
    setShowInitialMessages(false);

    try {
      const response: ReadableStream = await ragAction(messageToSend, messages);

      if (!response) {
        toast.error("No response body received");
        return;
      }

      const reader = response.getReader();
      const decoder = new TextDecoder();
      let botMessage = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });

        const jsonObjects = chunk
          .split("\n")
          .filter((line) => line.trim())
          .map((line) => {
            try {
              return JSON.parse(line);
            } catch (e) {
              console.error("JSON Parse Error:", e);
              return null;
            }
          })
          .filter((json) => json !== null);

        for (const jsonObj of jsonObjects) {
          let content = "";

          if (typeof jsonObj === "string") {
            content = jsonObj;
          } else if (jsonObj?.choices?.[0]?.delta?.content) {
            const deltaContent = jsonObj.choices[0].delta.content;

            if (typeof deltaContent === "string") {
              content = deltaContent;
            } else if (
              typeof deltaContent === "object" &&
              deltaContent?.response
            ) {
              content = deltaContent.response;
            }
          } else if (jsonObj?.response) {
            content = jsonObj.response;
          }

          if (content) {
            botMessage += content;
            setMessages((prev) =>
              prev.map((msg, index) =>
                index === prev.length - 1
                  ? { ...msg, content: botMessage }
                  : msg
              )
            );
          }
        }
      }
    } catch (error) {
      toast.error("Chat Failed!");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Error processing request.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed right-10 bottom-10 z-[1]">
      <button
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close chat bot" : "Open chat bot"}
        className="chat-toggle-button bg-primary flex size-20 cursor-pointer items-center justify-center rounded-full p-5"
      >
        <BotMessageSquare
          className={cn(
            "size-full text-white transition-all duration-500 ease-in-out",
            { "rotate-[360deg]": isOpen }
          )}
        />
      </button>

      <div
        ref={popupRef}
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.stopPropagation();
          }
        }}
        className={cn(
          "absolute right-0 bottom-24 flex aspect-[9/16] w-96 flex-col items-start justify-between rounded-lg bg-white shadow transition-opacity duration-500 ease-in-out",
          {
            "pointer-events-auto opacity-100": isOpen,
            "pointer-events-none opacity-0": !isOpen,
          }
        )}
      >
        <div className="bg-primary flex w-full items-center justify-between rounded-t-lg py-2.5 pr-2.5 pl-5 text-white">
          <div className="flex items-center gap-3">
            <Image src={DMLogo} alt="logo" className="size-5" />
            <span className="flex-1 gap-4 text-left font-semibold">
              {" "}
              DigiBot
            </span>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <CircleX />
          </Button>
        </div>
        <div className="flex h-[calc(100%-113px)] w-full flex-col items-start justify-start gap-2.5 overflow-y-auto p-2.5">
          {messages.map((message, idx) => {
            const isLast = idx === messages.length - 1;
            const isAssistant = message.role === "assistant";

            return (
              <span
                key={idx}
                className={cn("rounded-md px-3 py-1.5 text-xs", {
                  "flex items-center": isAssistant && isLast && loading,
                  "bg-primary ml-auto w-fit max-w-[80%] text-white":
                    !isAssistant,
                  "bg-secondary w-fit max-w-[80%] text-black": isAssistant,
                })}
              >
                {message.content as string}
                {isAssistant && isLast && loading && (
                  <Loader2 className="size-4 animate-spin" />
                )}
              </span>
            );
          })}

          {messages.length === 0 && showInitialMessages && (
            <div className="mt-auto flex w-full flex-col gap-2 pb-2">
              {initialMessages.map((message, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleInitialMessageClick(message);
                  }}
                  className="bg-secondary hover:bg-primary/10 w-fit rounded-md px-3 py-1.5 text-left text-xs transition-colors"
                >
                  {message}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleChat();
          }}
          className="flex w-full items-center justify-center gap-2.5 border-t p-2.5"
          onClick={(e) => e.stopPropagation()}
        >
          <Input
            type="text"
            value={query}
            placeholder="Ask a question..."
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-xs placeholder:text-xs"
            disabled={loading}
          />
          <Button
            disabled={loading || !query.trim()}
            type="submit"
            variant="default"
            size="icon"
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation();
              }
            }}
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
