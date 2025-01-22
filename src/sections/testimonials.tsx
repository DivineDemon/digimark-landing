"use client";

import Image from "next/image";
import { useState } from "react";

import { CircleChevronLeft, CircleChevronRight, Star } from "lucide-react";

import DummyClient from "@/assets/img/dummy-client.png";
import DummyDP from "@/assets/img/dummy-dp.png";
import TestimonialPage from "@/assets/img/testimonial-page.png";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import TestimonialCard from "@/components/testimonials/testimonial-card";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % 10);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + 10) % 10);
  };

  return (
    <div className="z-[1] mb-24 mt-48 flex w-full items-end justify-end">
      <MaxWidthWrapper className="mx-0 !ml-auto max-w-screen-2xl">
        <div className="flex w-full items-start justify-start gap-5">
          <div className="min-w-sm relative shrink-0">
            <Image
              src={DummyClient}
              alt="dummy-client"
              className="z-0 h-full"
            />
            <div className="absolute inset-0 z-[1] flex h-full w-full flex-col items-start justify-end gap-5 bg-gradient-to-t from-brand-950 via-transparent to-transparent text-white">
              <span className="text-[96px] font-semibold !leading-[96px]">
                4.9
              </span>
              <span className="text-left text-xl font-semibold !leading-[22px]">
                Clutch average based on
                <br />
                80+ reviews. All chances
                <br />
                are you'll be impressed too.
              </span>
              <div className="flex w-full items-start justify-start gap-2.5">
                <button onClick={handlePrev} id="prev">
                  <CircleChevronLeft className="size-16" />
                </button>
                <button onClick={handleNext} id="next">
                  <CircleChevronRight className="size-16" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-start justify-start gap-5 overflow-hidden">
            {[...Array(10)].map((_, idx) => (
              <TestimonialCard key={idx} currentIndex={currentIndex} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Testimonials;
