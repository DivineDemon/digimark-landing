"use client";

import Image from "next/image";
import { useState } from "react";

import { Factory } from "lucide-react";

import { industries } from "@/lib/constants";
import { cn } from "@/lib/utils";

import MaxWidthWrapper from "../max-width-wrapper";

const Industries = () => {
  const [selectedBrand, setSelectedBrand] = useState<{
    id: number;
    name: string;
    icon: string;
    image: string;
    content: string;
  }>(industries[0]!);

  return (
    <MaxWidthWrapper className="h-fit" isTopAccent={false}>
      <div className="grid w-full gap-10 py-20 md:grid-cols-2">
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <span className="mr-auto flex rounded-full border bg-white px-2.5 py-1 text-xs font-medium shadow">
            <Factory className="mt-[0.5px] mr-2 size-3.5" />
            Industries
          </span>
          <span className="w-full text-left text-[48px] leading-[48px] font-[600] tracking-tighter">
            Engineering Excellence
            <br />
            Across Every Industry
          </span>
          <span className="text-muted-foreground w-full text-left">
            At Digimark, we marry deep vertical expertise with best-in-class
            engineering. From automating month-end closes to powering
            patient-booking portals, our team has architected, developed, and
            scaled mission-critical systems that boost efficiency, security, and
            ROI.
          </span>
        </div>
        <div className="col-span-1 flex w-full flex-col items-center justify-center gap-5">
          <div className="relative w-full overflow-hidden rounded-3xl shadow">
            <Image
              src={selectedBrand.image}
              alt="team"
              width={500}
              height={500}
              className="z-0 aspect-video w-full object-cover"
            />
            <div
              className={cn(
                "absolute inset-0 z-[1] flex aspect-video w-full flex-col items-start justify-between px-7 py-5",
                {
                  "bg-red-500/40": selectedBrand.id === 1,
                  "bg-blue-500/40": selectedBrand.id === 2,
                  "bg-green-500/40": selectedBrand.id === 3,
                  "bg-yellow-500/40": selectedBrand.id === 4,
                }
              )}
            >
              <Image
                src={selectedBrand.icon}
                alt="trusted-one"
                width={56}
                height={56}
                className="w-14"
              />
              <span className="w-full text-left text-[24px] leading-[30px] font-semibold tracking-tight text-white/85">
                {selectedBrand.content}
              </span>
            </div>
          </div>
          <div className="grid w-full grid-cols-4 gap-2">
            {industries.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedBrand(item)}
                className="col-span-1 flex w-full cursor-pointer items-center justify-center border-t border-gray-300 pt-2.5 shadow-[inset_0px_10px_10px_0px_#00000011]"
              >
                <span
                  className={cn("truncate text-lg font-semibold", {
                    "opacity-50": selectedBrand.name !== item.name,
                  })}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Industries;
