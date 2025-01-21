"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Ellipsis, Zap } from "lucide-react";

import DummyBrand from "@/assets/img/dummy-brand.jpg";
import DummyDesign from "@/assets/img/dummy-design.webp";
import HeroFolder from "@/assets/img/hero-folder.webp";
import { threeDs } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % threeDs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [threeDs.length]);

  return (
    <header className="mb-24 mt-14 grid w-full grid-cols-3 gap-10 overflow-hidden">
      <div className="relative col-span-2 w-full">
        <Image src={HeroFolder} alt="hero-folder" className="z-0 h-full" />
        <div className="absolute inset-0 z-[1] flex h-full w-full flex-col items-center justify-between px-9 pb-9 pt-16 text-white">
          <span className="w-full text-left text-[120px] font-[600] uppercase !leading-[100px] tracking-tighter">
            let&apos;s build
            <br />
            the next
          </span>
          <span className="z-[2] -mt-[100px] w-full text-left text-[120px] font-[600] uppercase !leading-[100px] tracking-tighter">
            tech thing
          </span>
          {threeDs.map((image) => (
            <Image
              key={image.id}
              src={image.image}
              className={cn(
                "ease-[cubic-bezier(0.77, 0, 0.175, 1)] absolute right-14 top-14 z-0 w-[225px] rotate-[22.5deg] transition-transform duration-1000",
                {
                  "translate-y-0 scale-100": image.id === activeIndex + 1,
                  "-translate-y-[8rem] scale-0": image.id < activeIndex + 1,
                  "translate-y-[8rem] scale-0": image.id > activeIndex + 1,
                }
              )}
              alt={`image-${image.id}`}
            />
          ))}
          <div className="flex w-full items-center justify-between border-t border-white pt-9">
            <div className="flex items-center justify-center gap-5">
              <span className="text-7xl font-[600] !leading-[72px] tracking-tighter">
                10Y
              </span>
              <span className="pt-[5px] text-[30px] font-medium uppercase !leading-[32px] tracking-tighter">
                of design-driven
                <br />
                product development
              </span>
            </div>
            <div className="flex items-center justify-center">
              <div className="size-14 rounded-full bg-white p-3">
                <Zap className="size-full text-black" />
              </div>
              <div className="flex h-14 items-center rounded-full bg-secondary px-7 uppercase">
                <span className="text-xl font-medium">let&apos;s talk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex w-full flex-col items-start justify-start gap-5 rounded-[25px] bg-brand-500/25 p-5 backdrop-blur-sm">
        <div className="grid w-full grid-cols-3 gap-1.5">
          <div className="col-span-1 h-[5px] w-full rounded-full bg-white" />
          <div className="col-span-1 h-[5px] w-full rounded-full bg-white" />
          <div className="col-span-1 h-[5px] w-full rounded-full bg-white" />
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="flex w-full items-center justify-start gap-3.5">
            <Image
              src={DummyBrand}
              alt="dummy-brand"
              className="size-12 rounded-full"
            />
            <span className="text-lg font-bold text-gray-400">halolabteam</span>
            <span className="text-xl font-light text-gray-400">1h</span>
          </div>
          <Ellipsis className="size-10 text-white" />
        </div>
        <span className="mb-3.5 mt-7 px-1.5 text-2xl font-medium uppercase text-white">
          web design
          <br />& web development.
        </span>
        {/* Marquee Animation */}
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-none animate-move-left gap-6 pr-6 [animation-duration:30s]">
              {[...Array(10)].map((_, idx) => (
                <Image
                  key={idx}
                  src={DummyDesign}
                  alt="dummy-design"
                  className="aspect-square size-40 object-cover"
                />
              ))}
            </div>
          </div>
          <div className="mt-6 flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-none -translate-x-1/2 animate-move-left gap-6 pr-6 [animation-duration:15s]">
              {[...Array(10)].map((_, idx) => (
                <Image
                  key={idx}
                  src={DummyDesign}
                  alt="dummy-design"
                  className="aspect-square size-40 object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
