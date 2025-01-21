"use client";

import Image from "next/image";

import { Play } from "lucide-react";

import DummyDP from "@/assets/img/dummy-dp.png";
import HeroFolder from "@/assets/img/hero-folder.webp";
import ServiceCard from "@/components/services/service-card";
import { services } from "@/lib/constants";

const Services = () => {
  return (
    <div className="relative mb-24 mt-48 flex w-full items-center justify-center">
      <Image
        src={HeroFolder}
        alt="flipped-folder"
        className="z-0 w-full scale-x-[-1] transform"
      />
      <div className="absolute inset-0 z-[1] flex h-full w-full flex-col items-center justify-between p-8">
        <div className="flex w-full items-end justify-between">
          <span className="w-full text-left text-[120px] font-[600] uppercase !leading-[100px] tracking-tighter text-brand-950">
            our
            <br />
            services
          </span>
          <div className="flex items-center justify-center -space-x-6 pr-8">
            <Image
              src={DummyDP}
              alt="dummy-dp"
              className="size-28 rounded-full"
            />
            <div className="flex size-28 shrink-0 items-center justify-center rounded-full bg-brand-950">
              <Play className="size-7 text-white" fill="white" />
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
