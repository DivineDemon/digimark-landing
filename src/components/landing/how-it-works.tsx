import { Flame } from "lucide-react";

import { howItWorks } from "@/lib/constants";

import MaxWidthWrapper from "../max-width-wrapper";
import HowItWorksCard from "./how-it-works-card";

const HowItWorks = () => {
  return (
    <MaxWidthWrapper className="h-fit" isTopAccent={true}>
      <div className="flex w-full flex-col items-center justify-center gap-5 py-20">
        <span className="mx-auto flex rounded-full border bg-white px-3 py-1 font-medium text-xs shadow">
          <Flame className="mt-[0.5px] mr-2 size-3.5" />
          How we Work
        </span>
        <span className="w-full text-center font-[600] text-[48px] leading-[48px] tracking-tighter">
          Our Proven Process
        </span>
        <span className="w-full text-center text-muted-foreground">
          A streamlined, end-to-end process designed to turn your vision
          <br />
          into lasting impact.
        </span>
        <div className="!mt-10 grid w-full gap-3 md:grid-cols-2 lg:grid-cols-3">
          {howItWorks.map((item, index) => (
            <div
              key={item.id}
              className={index === 2 ? "mx-auto flex md:col-span-2 md:w-[50%] lg:col-span-1 lg:w-full" : ""}
            >
              <HowItWorksCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default HowItWorks;
