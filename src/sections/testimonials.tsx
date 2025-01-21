"use client";

import Image from "next/image";
import { useState } from "react";

import { CircleChevronLeft, CircleChevronRight, Star } from "lucide-react";

import DummyClient from "@/assets/img/dummy-client.png";
import DummyDP from "@/assets/img/dummy-dp.png";
import TestimonialPage from "@/assets/img/testimonial-page.png";
import MaxWidthWrapper from "@/components/max-width-wrapper";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % 10);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + 10) % 10);
  };

  return (
    <div className="mb-24 mt-48 flex w-full items-end justify-end">
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
              <div
                key={idx}
                className="relative flex flex-shrink-0 flex-nowrap items-center justify-center transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                <Image
                  src={TestimonialPage}
                  alt="testimonial-page"
                  className="z-0 h-[613px] w-full"
                />
                <div className="absolute inset-0 z-[1] flex h-full w-full flex-col items-center justify-between p-10">
                  <div className="flex w-full items-center justify-start gap-5 border-b border-white/50 pb-10">
                    <span className="text-3xl font-bold text-brand-950">
                      5.0
                    </span>
                    <div className="flex items-center justify-center gap-1.5">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          fill="#EAB308"
                          className="size-4 text-yellow-500"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="w-full max-w-prose text-pretty text-left text-[25px] font-bold !leading-[27px] text-brand-950">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Illo quos ipsa perspiciatis illum cum adipisci enim quasi,
                    totam distinctio expedita error facilis necessitatibus odio
                    perferendis?
                  </p>
                  <div className="flex w-full items-center justify-center gap-2.5">
                    <Image
                      src={DummyDP}
                      className="size-14 rounded-full"
                      alt="dummy-dp"
                    />
                    <div className="flex flex-1 flex-col items-center justify-center gap-1">
                      <span className="w-full text-left text-lg font-bold text-white">
                        John Doe
                      </span>
                      <span className="w-full text-left text-white/75">
                        Founder & CEO @SoftSys
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Testimonials;
