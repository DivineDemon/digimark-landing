import { Flame } from "lucide-react";

import { howItWorks } from "@/lib/constants";

import MaxWidthWrapper from "../max-width-wrapper";
import HowItWorksCard from "./how-it-works-card";

const HowItWorks = () => {
  return (
    <MaxWidthWrapper className="h-fit" isTopAccent={true}>
      <div className="flex w-full flex-col items-center justify-center gap-5 py-20">
        <span className="mx-auto flex rounded-full border bg-white px-3 py-1 text-xs font-medium shadow">
          <Flame className="mt-[0.5px] mr-2 size-3.5" />
          How we Work
        </span>
        <span className="w-full text-center text-[48px] leading-[48px] font-[600] tracking-tighter">
          Our Proven Process
        </span>
        <span className="text-muted-foreground w-full text-center">
          A streamlined, end-to-end process designed to turn your vision
          <br />
          into lasting impact.
        </span>
        <div className="!mt-10 grid w-full grid-cols-3 gap-3">
          {howItWorks.map((item) => (
            <HowItWorksCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default HowItWorks;
