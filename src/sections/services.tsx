"use client";

import Image from "next/image";
import { useState } from "react";

import { Play } from "lucide-react";

import DummyDP from "@/assets/img/dummy-dp.png";
import HeroFolder from "@/assets/img/hero-folder.webp";
import ServiceCard from "@/components/services/service-card";
import { services } from "@/lib/constants";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % 4);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + 4) % 4);
  };

  return (
    <div className="relative mb-24 mt-48 flex w-full items-center justify-center">
      <Image
        src={HeroFolder}
        alt="flipped-folder"
        className="z-0 w-full scale-x-[-1] transform"
      />
      <div className="absolute inset-0 z-[1] flex h-full w-full flex-col items-center justify-between gap-4 p-3 md:gap-0 md:p-5 xl:p-8">
        <div className="flex w-full items-end justify-between">
          <span className="w-full text-left text-3xl font-[600] uppercase tracking-tighter text-brand-950 md:text-5xl lg:text-6xl xl:text-[120px] xl:leading-[100px]">
            our
            <br />
            services
          </span>
          <div className="flex items-center justify-center -space-x-2 pr-3 xl:-space-x-6 xl:pr-8">
            <Image
              src={DummyDP}
              alt="dummy-dp"
              className="size-10 rounded-full md:size-14 xl:size-28"
            />
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-950 md:size-14 xl:size-28">
              <Play className="size-4 text-white xl:size-7" fill="white" />
            </div>
          </div>
        </div>
        <div className="flex w-full items-start justify-start overflow-hidden md:grid md:grid-cols-2 md:gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              handleNext={handleNext}
              handlePrev={handlePrev}
              currentIndex={currentIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
