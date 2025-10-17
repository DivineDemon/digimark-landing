"use client";

import { Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { casesData } from "@/lib/constants";
import CaseCard from "../cards/case-card";
import MaxWidthWrapper from "../max-width-wrapper";

const CaseStudies = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Dynamically set how many cards per slide (1 on mobile, 2 on tablet, 3 on desktop)
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 431)
        setCardsPerSlide(1); // mobile
      else if (window.innerWidth <= 768)
        setCardsPerSlide(2); // tablet
      else setCardsPerSlide(3); // desktop
    };
    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(casesData.length / cardsPerSlide);

  //  Auto-slide interval (no flicker)
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % totalSlides);
      }, 4000);
    }

    return () => clearInterval(intervalRef.current!);
  }, [isPaused, totalSlides]);

  // Get cards for each slide
  const getCardsForSlide = (slideIdx: number) => {
    const start = slideIdx * cardsPerSlide;
    let cards = casesData.slice(start, start + cardsPerSlide);
    if (cards.length < cardsPerSlide) {
      cards = cards.concat(casesData.slice(0, cardsPerSlide - cards.length));
    }
    return cards;
  };

  return (
    <MaxWidthWrapper className="pt-20" isBottomBorder>
      {/* === Header Section === */}
      <div className="mb-10 flex flex-col items-center justify-center gap-5 text-center">
        <span className="mx-auto flex items-center rounded-full border bg-white px-3 py-1.5 font-medium text-xs shadow">
          <Briefcase className="mr-2 size-4" />
          Case Studies
        </span>

        <h2 className="font-semibold text-4xl sm:text-5xl">Success Stories</h2>

        <p className="max-w-2xl px-4 text-muted-foreground text-sm sm:text-base">
          Discover how DigiMark Developers has helped businesses transform their ideas into impactful digital solutions.
          Explore real-world examples of our work in AI, software development, automation, and more.
        </p>
      </div>

      {/* === Carousel Section === */}
      <div
        className="relative flex w-full items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slide Container */}
        <div
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIdx) => (
            <div
              key={slideIdx}
              className={`grid w-full flex-shrink-0 gap-6 px-2.5 ${
                cardsPerSlide === 1 ? "grid-cols-1" : cardsPerSlide === 2 ? "grid-cols-2" : "grid-cols-3"
              }`}
            >
              {getCardsForSlide(slideIdx).map((caseItem) => (
                <CaseCard key={caseItem.id} {...caseItem} />
              ))}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="-translate-y-1/2 absolute top-1/2 left-2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
          onClick={() => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides)}
        >
          <ChevronLeft className="size-5" />
        </button>

        <button
          className="-translate-y-1/2 absolute top-1/2 right-2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
          onClick={() => setCurrent((prev) => (prev + 1) % totalSlides)}
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 w-2 rounded-full transition-all ${current === idx ? "w-5 bg-blue-600" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default CaseStudies;
