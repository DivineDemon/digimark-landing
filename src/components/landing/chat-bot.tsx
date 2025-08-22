"use client";

import { ArrowUp, BotMessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { type MouseEvent, useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import { ragAction } from "@/app/(server-actions)/rag-action";
import { cn } from "@/lib/utils";
import DMLogo from "../../assets/img/logo-sec.svg";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const ChatBot = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [showChat, setShowChat] = useState<boolean>(false);
  const [nextSteps, setNextSteps] = useState<string[]>([
    "Explore AI & Chatbot Solution",
    "Web or Mobile App Development",
    "MVP / SaaS Development",
    "Workflow Automation",
    "Not sure yet - guide me",
  ]);
  const [animatedMessages, setAnimatedMessages] = useState<number[]>([]);
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([
    {
      role: "assistant",
      content:
        "Hi 👋 Welcome to DigiMark Developers! We build AI-powered solutions, custom software, and mobile apps for businesses worldwide. What would you like help with today?",
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
      let aiReply = response.choices?.[0]?.message?.content || "";
      let nextStepsArr: string[] = [];
      if (aiReply.includes("=")) {
        const [main, suggestions] = aiReply.split("=");
        if (main) aiReply = main.trim();
        if (suggestions) {
          try {
            const arrMatch = suggestions.match(/\[(.*)\]/);

            if (arrMatch) {
              nextStepsArr = JSON.parse(arrMatch[0].replace(/([\w\s.,!?'-]+)(?=,|\])/g, '"$1"').replace(/""/g, '"'));
            }
          } catch {
            // Intentionally Empty
          }
        }
      }
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
      setNextSteps(nextStepsArr);
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
      setNextSteps([]);
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
      className="fixed right-5 bottom-5 z-[51] flex size-12 cursor-pointer items-center justify-center rounded-full bg-primary p-3 md:right-10 md:bottom-10"
      onClick={handleToggle}
      aria-expanded={isOpen}
    >
      <div
        className={cn(
          "-right-2.5 absolute bottom-14 h-[calc(100vh-200px)] w-[380px] overflow-hidden rounded-xl bg-white shadow-[0px_0px_20px_15px_#00000024] transition-opacity duration-500 ease-in-out md:right-0 md:w-[400px]",
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
              <div className="flex w-full items-center justify-start gap-2.5">
                <Image src={DMLogo} alt="dm-logo" className="size-9" />
                <span className="font-semibold">Chat with Digibot</span>
              </div>
            </div>
            <div className="flex h-[627px] w-full flex-col items-start justify-start gap-3.5 overflow-y-auto px-5 pt-5">
              {messages.length === 0 ? (
                <span className="text-muted-foreground text-sm">No messages yet.</span>
              ) : (
                <div className="flex h-full max-h-full w-full flex-col items-start justify-start gap-3.5 overflow-y-auto">
                  {messages.map((msg, idx) => {
                    const isLastAssistant = msg.role === "assistant" && idx === messages.length - 1;
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
                            "bg-[#6BB64A] text-white": msg.role === "user",
                          })}
                        >
                          {isLastAssistantLoading ? (
                            <div className="flex items-center gap-1 p-1.5">
                              <div className="size-1.5 animate-[fadeDots_0.8s_infinite] rounded-full bg-black shadow-dot" />
                              <div
                                className="size-1.5 animate-[fadeDots_0.8s_infinite] rounded-full bg-black shadow-dot"
                                style={{ animationDelay: "0.1s" }}
                              />
                              <div
                                className="size-1.5 animate-[fadeDots_0.8s_infinite] rounded-full bg-black shadow-dot"
                                style={{ animationDelay: "0.3s" }}
                              />
                            </div>
                          ) : (
                            <span className={shouldAnimate ? "animate-fadein" : undefined}>
                              <Markdown>{msg.content as string}</Markdown>
                              {isLastAssistant && nextSteps.length > 0 && !loading && (
                                <div className="flex w-full flex-wrap gap-2 pt-2.5">
                                  {nextSteps.map((step, i) => (
                                    <span
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        sendToAI(step);
                                      }}
                                      key={i}
                                      className="rounded-md border border-[#6BB64A] p-2 font-semibold text-[#6BB64A] text-[12px] text-sm leading-[12px] shadow transition-colors duration-200 ease-in-out hover:bg-[#6BB64A] hover:text-white"
                                    >
                                      {step}
                                    </span>
                                  ))}
                                </div>
                              )}
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
                  "flex w-full items-center justify-center gap-2 rounded-xl p-2.5 shadow ring-2 ring-black/25 transition-colors duration-200 ease-in-out",
                  {
                    "ring-2 ring-[#6BB64A]": inputFocused && !loading,
                  },
                )}
                onSubmit={(e) => {
                  e.preventDefault();
                  if (message.trim() === "") return;
                  sendToAI(message.trim());
                  setMessage("");
                }}
              >
                <Input
                  placeholder="Message..."
                  className="flex-1 resize-none border-none shadow-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
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
                  We're here to make things easier for you! 🚀
                </span>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setShowChat(true);
                }}
                className="-bottom-[45px] absolute inset-x-0 z-[1] mx-auto flex h-[78px] w-[85%] items-center justify-center rounded-lg bg-[#1D4354] p-5 text-white shadow transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <div className="flex w-full flex-col items-center justify-center gap-2">
                  <span className="w-full text-left font-bold text-[14px] leading-[14px]">Ask a question</span>
                  <span className="w-full text-left text-[14px] leading-[14px]">DigiBot and team can help</span>
                </div>
                <ChevronRight className="ml-2 size-5" />
              </div>
            </div>
            <div className="flex max-h-full w-full flex-col items-start justify-start">
              <span className="w-full px-8 pt-16 text-left font-bold text-xl">Quick Questions</span>
              <div className="flex max-h-full w-full flex-wrap items-start justify-start gap-2 overflow-y-auto px-8 py-5">
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
                    className="rounded-md bg-[#6BB64A] px-4 py-2 font-semibold text-[14px] text-white leading-[14px] shadow-md transition-transform duration-200 ease-in-out hover:scale-105"
                  >
                    {item}
                  </span>
                ))}
              </div>
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
