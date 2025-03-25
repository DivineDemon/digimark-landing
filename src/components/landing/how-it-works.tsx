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
          How it Works
        </span>
        <span className="w-full text-center text-[48px] leading-[48px] font-[600] tracking-tighter">
          With us, appointment scheduling is easy
        </span>
        <span className="text-muted-foreground w-full text-center">
          Effortless scheduling for business and individuals, powerful solutions
          for fast-
          <br />
          growing modern companies.
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
