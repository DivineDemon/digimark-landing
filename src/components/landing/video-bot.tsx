"use client";

import { MonitorPlay } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
      className="fixed bottom-10 left-10 z-[1] flex size-12 cursor-pointer items-center justify-center rounded-full bg-primary p-3"
      onClick={handleToggle}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close video bot" : "Open video bot"}
    >
      <div
        className={cn(
          "absolute bottom-14 left-0 size-96 overflow-hidden rounded-xl border shadow transition-opacity duration-500 ease-in-out",
          {
            "pointer-events-auto opacity-100": isOpen,
            "pointer-events-none opacity-0": !isOpen,
          },
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
      <MonitorPlay
        className={cn("size-full text-white transition-all duration-500 ease-in-out", {
          "rotate-[360deg]": isOpen,
        })}
      />
    </div>
  );
};

export default VideoBot;
