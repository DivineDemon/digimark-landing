"use client";

import Image from "next/image";
import { useState } from "react";

import { ChevronRight, User } from "lucide-react";

import ClientTeam from "@/assets/img/client-team.png";
import TrustedOne from "@/assets/img/trusted1.svg";
import { cn } from "@/lib/utils";

import CustomButton from "../custom-button";
import MaxWidthWrapper from "../max-width-wrapper";

const Business = () => {
  const [selectedBrand, setSelectedBrand] = useState<number>(0);

  return (
    <MaxWidthWrapper className="h-fit" isTopAccent={false}>
      <div className="grid w-full grid-cols-2 gap-10 py-20">
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <span className="mr-auto flex rounded-full border bg-white px-2.5 py-1 text-xs font-medium shadow">
            <User className="mt-[0.5px] mr-2 size-3.5" />
            Business
          </span>
          <span className="w-full text-left text-[48px] leading-[48px] font-[600] tracking-tighter">
            Scheduling for
            <br />
            teams simplified
          </span>
          <span className="text-muted-foreground w-full text-left">
            Unlock effortless collaboration with our advanced group meeting
            capabilities. Use our routing forms and round-robin features to
            enhance your team's efficiency. From last-minute huddles to sales
            demos, and recurring meetings, your team deserves a team scheduling
            software that can handle life's complexities.
          </span>
          <CustomButton size="lg" className="mr-auto">
            <span>Sign up</span>
            <ChevronRight className="size-4 text-gray-200" />
          </CustomButton>
        </div>
        <div className="col-span-1 flex w-full flex-col items-center justify-center gap-5">
          <div className="relative w-full overflow-hidden rounded-3xl shadow">
            <Image
              src={ClientTeam}
              alt="team"
              className="z-0 aspect-video w-full object-cover"
            />
            <div className="absolute inset-0 z-[1] flex aspect-video w-full flex-col items-start justify-between bg-blue-500/40 px-7 py-5">
              <Image
                src={TrustedOne}
                alt="trusted-one"
                className="aspect-video w-24 invert"
              />
              <span className="w-full text-left text-[24px] leading-[30px] font-semibold tracking-tight text-white/85">
                See how Deel improved
                <br />
                CSAT by 20% with Cal.com
              </span>
            </div>
          </div>
          <div className="grid w-full grid-cols-4 gap-4">
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedBrand(idx)}
                className="col-span-1 flex w-full cursor-pointer items-center justify-center border-t border-gray-300 pt-2.5 shadow-[inset_0px_10px_10px_0px_#00000011]"
              >
                <Image
                  src={TrustedOne}
                  alt="trusted-one"
                  className={cn("aspect-video w-20", {
                    invert: idx !== selectedBrand,
                  })}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Business;
