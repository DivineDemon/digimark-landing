import { Briefcase, Plus } from "lucide-react";

import { benefits } from "@/lib/constants";

import MaxWidthWrapper from "../max-width-wrapper";
import BenefitCard from "./benefit-card";
import SubBenefits from "./sub-benefits";

const Benefits = () => {
  return (
    <MaxWidthWrapper
      className="h-fit !px-0"
      isBottomBorder={true}
      isTopAccent={true}
    >
      <div className="flex w-full flex-col items-center justify-center gap-5 py-20">
        <span className="mx-auto flex rounded-full border bg-white px-2.5 py-1 text-xs font-medium shadow">
          <Briefcase className="mt-[0.5px] mr-2 size-3.5" />
          Benefits
        </span>
        <span className="w-full px-2.5 text-center text-[48px] leading-[48px] font-[600] tracking-tighter">
          Your all-purpose scheduling app
        </span>
        <span className="text-muted-foreground w-full px-2.5 text-center">
          Discover a variety of our advanced features. Unlimited and free for
          individuals.
        </span>
        <div className="!mt-10 grid w-full grid-cols-2 gap-6 px-2.5">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} data={benefit} />
          ))}
        </div>
        <span className="w-full py-20 text-center text-[48px] leading-[48px] font-[600] tracking-tighter">
          ...and so much more!
        </span>
        <SubBenefits />
      </div>
    </MaxWidthWrapper>
  );
};

export default Benefits;
