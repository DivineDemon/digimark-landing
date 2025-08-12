"use client";

import { ArrowUp, BotMessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { type MouseEvent, useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import { ragAction } from "@/app/(server-actions)/rag-action";
import { cn } from "@/lib/utils";
import DMLogo from "../../assets/img/test/dmlogo.webp";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const ChatBot = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [showChat, setShowChat] = useState<boolean>(false);
  const [animatedMessages, setAnimatedMessages] = useState<number[]>([]);
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([
    {
      role: "assistant",
      content:
        "👋 Hi there! I'm DigiBot, an AI assistant. I'll do my best to help you with your questions and guide you through anything you need. If something's a bit too tricky for me, I'll pass you along to our human support team—no worries, they've got your back. 😊 Feel free to ask me anything to get started!",
    },
  ]);
  const [_pendingMsgIdx, setPendingMsgIdx] = useState<number | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendToAI = async (userMsg: string) => {
    setLoading(true);

    setMessages((prev) => [
      ...prev,
      { role: "user", content: userMsg },
      {
        role: "assistant",
        content: "__loading__",
      } as ChatCompletionMessageParam,
    ]);
    setPendingMsgIdx(messages.length + 2);

    try {
      const response = await ragAction(userMsg, messages);
      const aiReply = response.choices?.[0]?.message?.content || "";
      setMessages((prev) => {
        const newMsgs = prev.map((msg, idx) =>
          idx === prev.length - 1
            ? ({
                role: "assistant",
                content: aiReply,
              } as ChatCompletionMessageParam)
            : msg,
        );
        setAnimatedMessages((anim) => [...anim, newMsgs.length - 1]);
        return newMsgs;
      });
    } catch (_err) {
      setMessages((prev) => {
        const newMsgs = prev.map((msg, idx) =>
          idx === prev.length - 1
            ? ({
                role: "assistant",
                content: "Sorry, something went wrong.",
              } as ChatCompletionMessageParam)
            : msg,
        );
        setAnimatedMessages((anim) => [...anim, newMsgs.length - 1]);
        return newMsgs;
      });
    } finally {
      setLoading(false);
      setPendingMsgIdx(null);
      setTimeout(() => {
        setAnimatedMessages([]);
      }, 600);
    }
  };

  const handleToggle = (e?: MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="fixed right-10 bottom-10 z-[1] flex size-12 cursor-pointer items-center justify-center rounded-full bg-primary p-3"
      onClick={handleToggle}
      aria-expanded={isOpen}
    >
      <div
        className={cn(
          "absolute right-0 bottom-14 h-[calc(100vh-350px)] w-[400px] overflow-hidden rounded-xl bg-white shadow transition-opacity duration-500 ease-in-out",
          {
            "pointer-events-auto opacity-100": isOpen,
            "pointer-events-none opacity-0": !isOpen,
          },
        )}
      >
        {showChat ? (
          <div className="flex h-full w-full flex-col items-start justify-start">
            <div className="flex w-full items-center justify-start gap-2.5 border-b p-2.5">
              <Button
                size="icon"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowChat(false);
                }}
              >
                <ChevronLeft className="size-5" />
              </Button>
              <div className="size-9 shrink-0 rounded-full bg-primary p-2">
                <Image src={DMLogo} alt="dm-logo" className="size-full" />
              </div>
            </div>
            <div className="flex h-[447px] w-full flex-col items-start justify-start gap-3.5 overflow-y-auto px-5 pt-5">
              {messages.length === 0 ? (
                <span className="text-muted-foreground text-sm">No messages yet.</span>
              ) : (
                <div className="flex h-full max-h-full w-full flex-col items-start justify-start gap-3.5 overflow-y-auto">
                  {messages.map((msg, idx) => {
                    const isLastAssistantLoading =
                      loading &&
                      idx === messages.length - 1 &&
                      msg.role === "assistant" &&
                      msg.content === "__loading__";
                    const shouldAnimate = animatedMessages.includes(idx);
                    return (
                      <div
                        key={idx}
                        className={cn("flex w-fit max-w-3/4 flex-col items-start justify-start gap-1.5", {
                          "ml-auto": msg.role === "user",
                          "mr-auto": msg.role === "assistant",
                        })}
                      >
                        <div
                          className={cn("w-fit max-w-full rounded-lg px-4 py-2 text-sm", {
                            "bg-muted text-black": msg.role === "assistant",
                            "bg-blue-500 text-white": msg.role === "user",
                          })}
                        >
                          {isLastAssistantLoading ? (
                            <div className="flex items-center">
                              <div className="mx-1 h-2 w-2 animate-[fadeDots_0.8s_infinite] rounded-full bg-black shadow-dot" />
                              <div
                                className="mx-1 h-2 w-2 animate-[fadeDots_0.8s_infinite] rounded-full bg-black shadow-dot"
                                style={{ animationDelay: "0.1s" }}
                              />
                              <div
                                className="mx-1 h-2 w-2 animate-[fadeDots_0.8s_infinite] rounded-full bg-black shadow-dot"
                                style={{ animationDelay: "0.3s" }}
                              />
                            </div>
                          ) : (
                            <span className={shouldAnimate ? "animate-fadein" : undefined}>
                              <Markdown>{msg.content as string}</Markdown>
                            </span>
                          )}
                        </div>
                        <div
                          className={cn("flex w-full items-center gap-2", {
                            "justify-end pr-2": msg.role === "user",
                            "justify-start pl-2": msg.role === "assistant",
                          })}
                        >
                          <span className="font-medium text-[12px] text-gray-500 leading-[12px]">
                            {msg.role === "assistant" ? "DigiBot" : "You"}
                          </span>
                          <span className="font-medium text-[12px] text-gray-500 leading-[12px]">•</span>
                          <span className="font-medium text-[12px] text-gray-500 leading-[12px]">Just Now</span>
                        </div>
                      </div>
                    );
                  })}
                  <div ref={messagesEndRef}></div>
                </div>
              )}
            </div>
            <div className="w-full p-5">
              <form
                className={cn(
                  "flex w-full flex-col items-center justify-center gap-2 rounded-xl border p-2.5 shadow transition-colors duration-200 ease-in-out",
                  {
                    "ring-2 ring-blue-500": inputFocused && !loading,
                  },
                )}
                onSubmit={(e) => {
                  e.preventDefault();
                  if (message.trim() === "") return;
                  sendToAI(message.trim());
                  setMessage("");
                }}
              >
                <Textarea
                  placeholder="Message..."
                  className="resize-none border-none shadow-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
                  onFocus={(e) => {
                    setInputFocused(true);
                    e.stopPropagation();
                  }}
                  onBlur={() => setInputFocused(false)}
                  onClick={(e) => e.stopPropagation()}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={loading}
                />
                <div className="flex w-full items-center justify-end">
                  <Button
                    size="icon"
                    type="submit"
                    variant="default"
                    className="rounded-full"
                    disabled={message === "" || loading}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ArrowUp className="size-5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="flex h-full w-full flex-col items-start justify-start">
            <div className="relative h-[200px] w-full bg-black">
              <Image
                src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
                alt="header-img"
                className="z-[0] h-full w-full object-cover opacity-35 grayscale"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 z-[1] flex flex-col items-start justify-start p-4 text-white">
                <Image src={DMLogo} alt="dm-logo" className="mb-3.5 size-14" />
                <span className="mb-1.5 w-full text-left font-bold text-[36px] leading-[36px]">Need any help ?</span>
                <span className="w-full text-left font-medium text-[14px] leading-[14px]">
                  We're just a message away!
                </span>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setShowChat(true);
                }}
                className="-bottom-[45px] absolute inset-x-0 z-[1] mx-auto flex h-[78px] w-[85%] items-center justify-center rounded-lg border bg-white p-5 shadow transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <div className="flex w-full flex-col items-center justify-center gap-2">
                  <span className="w-full text-left font-bold text-[14px] leading-[14px]">Ask a question</span>
                  <span className="w-full text-left text-[14px] text-muted-foreground leading-[14px]">
                    AI Agent and team can help
                  </span>
                </div>
                <div className="size-12 shrink-0 rounded-full bg-primary p-3">
                  <Image src={DMLogo} alt="dm-logo" className="size-full" />
                </div>
                <ChevronRight className="ml-2 size-5" />
              </div>
            </div>
            <div className="flex max-h-full w-full flex-wrap items-start justify-start gap-2 overflow-y-auto px-8 pt-16 pb-8">
              {[
                "What is DigiMark",
                "Our Services",
                "How We Work",
                "Why Partner With Us",
                "Pricing",
                "Case Studies",
                "Get a Free Consultation",
                "FAQs",
                "Our Tech Stack",
                "Our Engagement Model",
              ].map((item, idx) => (
                <span
                  key={idx}
                  onClick={async (e) => {
                    e.stopPropagation();
                    setShowChat(true);
                    await sendToAI(item);
                  }}
                  className="rounded-md border px-4 py-2 font-semibold text-[14px] leading-[14px] shadow transition-colors duration-200 ease-in-out hover:border-blue-500 hover:text-blue-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <BotMessageSquare
        className={cn("size-full text-white transition-all duration-500 ease-in-out", {
          "rotate-[360deg]": isOpen,
        })}
      />
    </div>
  );
};

export default ChatBot;
