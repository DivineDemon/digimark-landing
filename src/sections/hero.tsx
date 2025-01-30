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
    <header className="mb-24 mt-14 grid w-full grid-cols-1 gap-10 overflow-hidden lg:grid-cols-3">
      <div className="relative col-span-1 w-full lg:col-span-2">
        <Image src={HeroFolder} alt="hero-folder" className="z-0 h-full" />
        <div className="absolute inset-0 z-[1] hidden h-full w-full flex-col items-center justify-between px-9 pb-9 pt-16 text-white md:flex">
          <span className="w-full text-left text-[96px] font-[600] uppercase leading-[76px] tracking-tighter xl:text-[120px] xl:leading-[100px]">
            let&apos;s build
            <br />
            the next
          </span>
          <span className="z-[2] -mt-10 w-full text-left text-[96px] font-[600] uppercase leading-[76px] tracking-tighter lg:-mt-[170px] xl:-mt-[100px] xl:text-[120px] xl:leading-[100px]">
            tech thing
          </span>
          {threeDs.map((image) => (
            <Image
              key={image.id}
              src={image.image}
              className={cn(
                "ease-[cubic-bezier(0.77, 0, 0.175, 1)] absolute right-12 top-5 z-0 w-[225px] rotate-[22.5deg] transition-transform duration-1000 lg:right-10 lg:top-14 lg:w-[175px] xl:right-14 xl:top-14 xl:w-[225px]",
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
              <span className="text-[60px] font-[600] leading-[60px] tracking-tighter xl:text-[72px] xl:leading-[72px]">
                10Y
              </span>
              <span className="pt-[5px] text-2xl font-medium uppercase tracking-tighter lg:text-[20px] xl:text-[30px] xl:leading-[32px]">
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
        <div className="absolute inset-0 z-[1] flex h-full w-full flex-col items-center justify-start px-5 py-7 text-white md:hidden">
          <span className="w-full text-left text-4xl font-bold">
            Let&apos;s build
          </span>
          <span className="z-[2] w-full text-left text-4xl font-bold">
            the next tech thing.
          </span>
          {threeDs.map((image) => (
            <Image
              key={image.id}
              src={image.image}
              className={cn(
                "ease-[cubic-bezier(0.77, 0, 0.175, 1)] absolute right-5 top-1 z-0 w-[125px] rotate-[22.5deg] transition-transform duration-1000",
                {
                  "translate-y-0 scale-100": image.id === activeIndex + 1,
                  "-translate-y-[8rem] scale-0": image.id < activeIndex + 1,
                  "translate-y-[8rem] scale-0": image.id > activeIndex + 1,
                }
              )}
              alt={`image-${image.id}`}
            />
          ))}
          <div className="mt-5 flex w-full items-center justify-between border-t border-white pt-2.5">
            <div className="flex items-center justify-center gap-2.5">
              <span className="text-3xl font-[600] tracking-tighter">10Y</span>
              <span className="text-xs font-medium uppercase tracking-tighter">
                of design-driven
                <br />
                product development
              </span>
            </div>
            <div className="flex items-center justify-center">
              <div className="size-5 rounded-full bg-white p-0.5">
                <Zap className="size-full text-black" />
              </div>
              <div className="flex items-center rounded-full bg-secondary px-3 py-1 uppercase">
                <span className="w-full text-xs font-medium">
                  let&apos;s talk
                </span>
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
