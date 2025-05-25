"use client";

import { Fragment, useEffect, useRef, useState } from "react";

import { Briefcase, Plus } from "lucide-react";

import { benefits } from "@/lib/constants";
import { cn } from "@/lib/utils";

import MaxWidthWrapper from "../max-width-wrapper";

const Benefits = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const isContainerVisible = () => {
    if (!containerRef.current) return false;
    const rect = containerRef.current.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  };

  useEffect(() => {
    if (!isContainerVisible()) return;
    const node = itemRefs.current[currentIndex];
    if (node) {
      node.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentIndex]);

  return (
    <MaxWidthWrapper
      className="h-fit !px-0"
      isBottomBorder={true}
      isTopAccent={true}
    >
      <div className="flex w-full flex-col items-center justify-center gap-5 py-20">
        <span className="mx-auto flex rounded-full border bg-white px-2.5 py-1 text-xs font-medium shadow">
          <Briefcase className="mt-[0.5px] mr-2 size-3.5" />
          Benefits
        </span>
        <span className="w-full px-2.5 text-center text-[48px] leading-[48px] font-[600] tracking-tighter">
          Why Choose Us
        </span>
        <span className="text-muted-foreground w-full px-2.5 text-center">
          Where Technical Mastery Meets Unwavering Commitment.
        </span>
        <div
          ref={containerRef}
          className="mt-10 flex w-full items-center justify-start gap-2.5 overflow-x-auto overflow-y-visible border-y border-gray-300"
        >
          {benefits.map((benefit, index) => (
            <Fragment key={benefit.id}>
              {index > 0 && (
                <div className="h-[266px] w-px border-l border-gray-300" />
              )}
              <div
                // @ts-ignore
                ref={(el) => (itemRefs.current[index] = el)}
                className="py-2.5"
              >
                <div
                  className={cn(
                    "flex h-[246px] w-[566px] shrink-0 flex-col items-center justify-between rounded-2xl border border-gray-300 bg-white p-7 shadow transition-opacity duration-500",
                    {
                      "opacity-100": index === currentIndex,
                      "opacity-35": index !== currentIndex,
                    }
                  )}
                >
                  <div className="group relative mr-auto flex size-14 items-center justify-center overflow-hidden rounded-lg border border-transparent bg-neutral-900 bg-gradient-to-b from-[#2c2c30] to-[#1d1d20] px-3 py-2 text-sm font-medium text-white transition-all duration-150 ease-in-out before:pointer-events-none before:absolute before:inset-0 before:rounded-lg before:shadow-[0px_2px_0.4px_0px_rgba(255,_255,_255,_0.16)_inset] hover:bg-neutral-800 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 focus-visible:outline-none lg:flex">
                    <benefit.icon className="size-7 text-white" />
                  </div>
                  <span className="w-full text-left text-[24px] leading-[30px] font-semibold tracking-tight text-black/85">
                    {benefit.title}
                  </span>
                  <p className="w-full text-left text-[16px] leading-[24px] text-pretty text-gray-600">
                    {benefit.description
                      .split("\n")
                      .map((line: string, i: number) => (
                        <Fragment key={i}>
                          {line}
                          <br />
                        </Fragment>
                      ))}
                  </p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="absolute top-[44.75%] left-[24.5%] z-[1] size-6 bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute top-[44.75%] right-[24.5%] z-[1] size-6 bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute bottom-[11.75%] left-[24.5%] z-[1] size-6 bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute right-[24.5%] bottom-[11.75%] z-[1] size-6 bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Benefits;
