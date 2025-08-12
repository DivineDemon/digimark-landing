const ChatBot = () => {
  return <div className=""></div>;
};

export default ChatBot;

// "use client";

// import { BotMessageSquare, Loader2, Send, X } from "lucide-react";
// import Image from "next/image";
// import type { ChatCompletionMessageParam } from "openai/resources/index.mjs";
// import { useEffect, useRef, useState } from "react";
// import Markdown from "react-markdown";
// import { toast } from "sonner";
// import { ragAction } from "@/app/(server-actions)/rag-action";
// import { initialMessages } from "@/lib/constants";
// import { cn } from "@/lib/utils";
// import DMLogo from "../../assets/img/test/dmlogo.webp";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";

// const ChatBot = () => {
//   const popupRef = useRef<HTMLDivElement>(null);
//   const [query, setQuery] = useState<string>("");
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
//   const [showInitialMessages, setShowInitialMessages] = useState<boolean>(true);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       const target = event.target as HTMLElement;
//       const isInitialMessageClick =
//         target.closest(".initial-message-container") || target.closest(".initial-message-button");

//       if (
//         popupRef.current &&
//         !popupRef.current.contains(target) &&
//         !target.closest(".chat-toggle-button") &&
//         !isInitialMessageClick
//       ) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleToggle = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setIsOpen((prev) => !prev);
//   };

//   const handleInitialMessageClick = (message: string) => {
//     setQuery(message);
//     setShowInitialMessages(false);
//     handleChat(message);
//   };

//   const handleChat = async (customMessage?: string) => {
//     const messageToSend = customMessage || query;
//     if (!messageToSend.trim()) return;

//     setLoading(true);
//     setMessages((prev) => [...prev, { role: "user", content: messageToSend }, { role: "assistant", content: "" }]);
//     setQuery("");
//     setShowInitialMessages(false);

//     try {
//       const response: ReadableStream = await ragAction(messageToSend, messages);

//       if (!response) {
//         toast.error("No response body received");
//         return;
//       }

//       const reader = response.getReader();
//       const decoder = new TextDecoder();
//       let botMessage = "";

//       while (true) {
//         const { value, done } = await reader.read();
//         if (done) break;

//         const chunk = decoder.decode(value, { stream: true });

//         const jsonObjects = chunk
//           .split("\n")
//           .filter((line) => line.trim())
//           .map((line) => {
//             try {
//               return JSON.parse(line);
//             } catch (_e) {
//               return null;
//             }
//           })
//           .filter((json) => json !== null);

//         for (const jsonObj of jsonObjects) {
//           let content = "";

//           if (typeof jsonObj === "string") {
//             content = jsonObj;
//           } else if (jsonObj?.choices?.[0]?.delta?.content) {
//             const deltaContent = jsonObj.choices[0].delta.content;

//             if (typeof deltaContent === "string") {
//               content = deltaContent;
//             } else if (typeof deltaContent === "object" && deltaContent?.response) {
//               content = deltaContent.response;
//             }
//           } else if (jsonObj?.response) {
//             content = jsonObj.response;
//           }

//           if (content) {
//             botMessage += content;
//             setMessages((prev) =>
//               prev.map((msg, index) => (index === prev.length - 1 ? { ...msg, content: botMessage } : msg)),
//             );
//           }
//         }
//       }
//     } catch (_error) {
//       toast.error("Chat Failed!");
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           content: "Error processing request.",
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed right-10 bottom-10 z-[1]">
//       <button
//         onClick={handleToggle}
//         aria-expanded={isOpen}
//         aria-label={isOpen ? "Close chat bot" : "Open chat bot"}
//         className="chat-toggle-button flex size-20 cursor-pointer items-center justify-center rounded-full bg-primary p-5"
//       >
//         <BotMessageSquare
//           className={cn("size-full text-white transition-all duration-500 ease-in-out", { "rotate-[360deg]": isOpen })}
//         />
//       </button>

//       <div
//         ref={popupRef}
//         className={cn(
//           "absolute right-0 bottom-24 flex aspect-[8/16] h-[calc(100vh-415px)] flex-col items-start justify-between rounded-2xl bg-primary shadow transition-opacity duration-500 ease-in-out lg:aspect-[3/4]",
//           {
//             "pointer-events-auto opacity-100": isOpen,
//             "pointer-events-none opacity-0": !isOpen,
//           },
//         )}
//       >
//         <div className="flex w-full items-center justify-between rounded-t-2xl bg-primary py-5 pr-2.5 pl-5 text-white">
//           <div className="flex flex-1 items-center gap-3">
//             <div className="size-10 shrink-0 rounded-full bg-white p-2">
//               <Image src={DMLogo} alt="logo" className="size-full" />
//             </div>
//             <div className="flex flex-1 flex-col items-center justify-center gap-2">
//               <span className="w-full gap-4 text-left font-semibold text-[18px] leading-[18px]">DigiBot</span>
//               <span className="w-full gap-4 text-left font-semibold text-[12px] text-muted-foreground leading-[12px]">
//                 Your Friendly Assistant Bot
//               </span>
//             </div>
//           </div>
//           <div onClick={() => setIsOpen(false)} className="mr-0.5 size-10 rounded-lg p-1.5 hover:bg-white/10">
//             <X className="size-full" />
//           </div>
//         </div>
//         <div
//           // style={{
//           //   backgroundImage: `url(${TopologyEffect.src})`,
//           //   backgroundSize: "cover",
//           //   backgroundPosition: "center",
//           //   backgroundRepeat: "no-repeat",
//           // }}
//           className="flex h-[calc(100%-137px)] w-full flex-col items-start justify-start gap-2.5 overflow-y-auto rounded-t-2xl bg-gray-200 p-2.5"
//         >
//           {messages.map((message, idx) => {
//             const isLast = idx === messages.length - 1;
//             const isAssistant = message.role === "assistant";

//             return (
//               <div className="flex w-full flex-col items-center justify-center gap-2">
//                 <span
//                   className={cn("w-full text-left text-[12px] text-muted-foreground leading-[12px]", {
//                     "ml-auto w-fit max-w-[85%]": !isAssistant,
//                     "mr-auto w-fit max-w-[85%]": isAssistant,
//                   })}
//                 >
//                   {isAssistant ? "DigiBot" : "You"}
//                 </span>
//                 <div
//                   key={idx}
//                   className={cn("flex flex-col items-start justify-start gap-2 rounded-md font-medium leading-[26px]", {
//                     "flex items-center": isAssistant && isLast && loading,
//                     "ml-auto w-fit max-w-[85%] bg-black/50 px-5 py-3.5 text-white backdrop-blur-[2px]": !isAssistant,
//                     "mr-auto w-fit max-w-[85%] bg-white/50 py-3.5 pr-10 pl-5 text-black backdrop-blur-[2px]":
//                       isAssistant,
//                   })}
//                 >
//                   <div className="flex flex-col items-start justify-start">
//                     <Markdown>{message.content as string}</Markdown>
//                   </div>
//                   {isAssistant && isLast && loading && <Loader2 className="mr-auto size-4 shrink-0 animate-spin" />}
//                 </div>
//               </div>
//             );
//           })}
//           {messages.length === 0 && showInitialMessages && (
//             <div className="initial-message-container mt-auto flex w-full flex-col items-center justify-center gap-2">
//               <span className="w-full text-left text-[12px] text-muted-foreground leading-[12px]">DigiBot</span>
//               <div className="flex w-full flex-col gap-2 rounded-lg bg-white p-2.5 font-medium">
//                 <span className="w-full text-left leading-[26px]">
//                   Hello there! I am DigiBot, your friendly bot 👋 Looking for anything specific? I can help you to find
//                   the services you're looking for 👇👇👇👇
//                 </span>
//                 {initialMessages.map((message, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => handleInitialMessageClick(message)}
//                     className="initial-message-button w-fit cursor-pointer rounded-lg border bg-primary px-3.5 py-2.5 text-left text-white shadow"
//                   >
//                     {message}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleChat();
//           }}
//           className="flex w-full items-center justify-center gap-2.5 rounded-b-2xl border-t bg-white p-2.5"
//         >
//           <Input
//             type="text"
//             value={query}
//             placeholder="Ask a question..."
//             onChange={(e) => setQuery(e.target.value)}
//             className="flex-1 text-sm placeholder:text-sm"
//             disabled={loading}
//           />
//           <Button disabled={loading || !query.trim()} type="submit" variant="default" size="icon">
//             {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ChatBot;
