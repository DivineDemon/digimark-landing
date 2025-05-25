"use client";

import { useEffect, useRef, useState } from "react";

import { BotMessageSquare } from "lucide-react";

import { cn } from "@/lib/utils";

const VideoBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen) {
      videoRef.current?.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="bg-primary fixed right-10 bottom-10 z-[1] flex size-20 cursor-pointer items-center justify-center rounded-full p-5"
      onClick={handleToggle}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close video bot" : "Open video bot"}
    >
      <div
        className={cn(
          "absolute -top-56 right-0 size-52 rounded-lg border shadow transition-opacity duration-500 ease-in-out",
          {
            "pointer-events-auto opacity-100": isOpen,
            "pointer-events-none opacity-0": !isOpen,
          }
        )}
      >
        <video
          loop={true}
          muted={false}
          ref={videoRef}
          playsInline={true}
          src="/bot-video.mp4"
          className="h-full w-full object-cover"
        />
      </div>

      <BotMessageSquare
        className={cn(
          "size-full text-white transition-all duration-500 ease-in-out",
          {
            "rotate-[360deg]": isOpen,
          }
        )}
      />
    </div>
  );
};

export default VideoBot;
