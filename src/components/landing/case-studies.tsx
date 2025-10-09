"use client";

import { casesData } from "@/lib/constants";
import { Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CaseCard from "../cards/case-card";
import MaxWidthWrapper from "../max-width-wrapper";

const CaseStudies = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = Math.ceil(casesData.length / 3);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearTimeout(timeoutRef.current!);
  }, [current, totalSlides]);

  const getCardsForSlide = (slideIdx: number) => {
    const start = slideIdx * 3;
    let cards = casesData.slice(start, start + 3);
    if (cards.length < 3) {
      cards = cards.concat(casesData.slice(0, 3 - cards.length));
    }
    return cards;
  };

  return (
    <MaxWidthWrapper className="pt-20" isBottomBorder={true}>
      <div className="mb-10 flex w-full flex-col items-center justify-center gap-5">
        <span className="mx-auto flex rounded-full border bg-white px-2.5 py-1 font-medium text-xs shadow">
          <Briefcase className="mt-[0.5px] mr-2 size-3.5" />
          Case Studies
        </span>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="mx-auto flex font-semibold text-5xl">
            Success Stories
          </span>
        </div>
        <span className="w-full px-2.5 text-center text-muted-foreground">
          Discover how DigiMark Developers has helped businesses transform their
          ideas into impactful digital solutions.
          <br />
          Explore real-world examples of our work in AI, software development,
          automation, and more.
        </span>
      </div>

      <div className="relative flex w-full items-center justify-center overflow-hidden">
        <div
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {Array(totalSlides)
            .fill(0)
            .map((_, slideIdx) => (
              <div key={slideIdx} className="flex w-full min-w-full">
                {getCardsForSlide(slideIdx).map((caseItem) => (
                  <CaseCard key={caseItem.id} {...caseItem} />
                ))}
              </div>
            ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CaseStudies;
