import Image from "next/image";

import { Star } from "lucide-react";

import DummyDP from "@/assets/img/dummy-dp.png";
import TestimonialPage from "@/assets/img/testimonial-page.png";

interface TestimonialCardProps {
  currentIndex: number;
}

const TestimonialCard = ({ currentIndex }: TestimonialCardProps) => {
  return (
    <div
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
          <span className="text-3xl font-bold text-brand-950">5.0</span>
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quos
          ipsa perspiciatis illum cum adipisci enim quasi, totam distinctio
          expedita error facilis necessitatibus odio perferendis?
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
  );
};

export default TestimonialCard;
