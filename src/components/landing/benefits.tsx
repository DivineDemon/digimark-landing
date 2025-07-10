"use client";

import { Fragment, useEffect, useRef, useState } from "react";

import { Briefcase, Plus } from "lucide-react";

import { benefits } from "@/lib/constants";
import { cn } from "@/lib/utils";

import MaxWidthWrapper from "../max-width-wrapper";

const Benefits = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 because we prepend a clone
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const extendedBenefits = [
    benefits[benefits.length - 1], // Clone of last item
    ...benefits,
    benefits[0], // Clone of first item
  ];

  useEffect(() => {
    if (isHovered || isTransitioning) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, isTransitioning]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check if we need to jump to the opposite end (for seamless looping)
    if (currentIndex === extendedBenefits.length - 1) {
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(1); // Jump to the first real item (not the clone)
      }, 500);
    } else if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(extendedBenefits.length - 2); // Jump to the last real item
      }, 500);
    }

    const node = itemRefs.current[currentIndex];
    if (node && containerRef.current) {
      // Calculate scroll position without affecting vertical scroll
      const container = containerRef.current;
      const containerLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const nodeLeft = node.offsetLeft;
      const nodeWidth = node.offsetWidth;

      // Calculate target scroll position
      const targetScroll = nodeLeft - containerWidth / 2 + nodeWidth / 2;

      // Smooth scroll horizontally only
      container.scrollTo({
        left: targetScroll,
        behavior: isTransitioning ? "smooth" : "auto",
      });
    }

    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <MaxWidthWrapper
      className="h-fit !px-0"
      isBottomBorder={true}
      isTopAccent={true}
    >
      <div className="relative flex w-full flex-col items-center justify-center gap-5 py-20">
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
          className="scrollbar-hide mt-10 flex w-full snap-x snap-mandatory items-center justify-start gap-2.5 overflow-x-auto overflow-y-visible border-y border-gray-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {extendedBenefits.map((benefit, index) => (
            //@ts-ignore
            <Fragment key={`${benefit.id}-${index}`}>
              {index > 0 && (
                <div className="h-[266px] w-px border-l border-gray-300" />
              )}
              <div
                //@ts-ignore
                ref={(el) => (itemRefs.current[index] = el)}
                className="snap-center py-2.5"
              >
                <div
                  className={cn(
                    "flex h-[340px] w-[340px] shrink-0 flex-col items-center justify-between rounded-2xl border border-gray-300 bg-white p-7 shadow transition-all duration-500 md:h-[246px] md:w-[566px]",
                    {
                      "scale-100 opacity-100":
                        index === currentIndex || isTransitioning,
                      "scale-95 opacity-35":
                        index !== currentIndex && !isTransitioning,
                    }
                  )}
                >
                  <div className="group relative mr-auto flex size-14 items-center justify-center overflow-hidden rounded-lg border border-transparent bg-neutral-900 bg-gradient-to-b from-[#2c2c30] to-[#1d1d20] px-3 py-2 text-sm font-medium text-white transition-all duration-150 ease-in-out before:pointer-events-none before:absolute before:inset-0 before:rounded-lg before:shadow-[0px_2px_0.4px_0px_rgba(255,_255,_255,_0.16)_inset] hover:bg-neutral-800 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 focus-visible:outline-none lg:flex">
                    {/* @ts-ignore */}
                    <benefit.icon className="size-7 text-white" />
                  </div>
                  <span className="w-full text-left text-[24px] leading-[30px] font-semibold tracking-tight text-black/85">
                    {/* @ts-ignore */}

                    {benefit.title}
                  </span>
                  <p className="w-full text-left text-[16px] leading-[24px] text-pretty text-gray-600">
                    {/* @ts-ignore */}

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

        {/* Plus icons decoration */}
        <div className="absolute top-[42.75%] hidden gap-[564px] md:flex">
          <div className="size-6 bg-[#F4F4F4] p-1">
            <Plus className="text-muted-foreground size-full" />
          </div>
          <div className="size-6 bg-[#F4F4F4] p-1">
            <Plus className="text-muted-foreground size-full" />
          </div>
        </div>
        <div className="absolute bottom-[10.80%] hidden gap-[564px] md:flex">
          <div className="size-6 bg-[#F4F4F4] p-1">
            <Plus className="text-muted-foreground size-full" />
          </div>
          <div className="size-6 bg-[#F4F4F4] p-1">
            <Plus className="text-muted-foreground size-full" />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Benefits;
