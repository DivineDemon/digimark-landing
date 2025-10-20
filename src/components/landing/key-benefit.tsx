import { Sparkle } from "lucide-react";
import Image from "next/image";

import Benifit1 from "../../assets/img/key1.jpg";
import Benifit2 from "../../assets/img/key2.jpg";
import Benifit3 from "../../assets/img/key3.jpg";
import MaxWidthWrapper from "../max-width-wrapper";

const KeyBenefit = () => {
  return (
    <MaxWidthWrapper className="h-fit pt-20 pb-10" isTopAccent>
      <div className="mb-10 flex w-full flex-col items-center justify-center gap-5">
        <span className="mx-auto flex rounded-full border bg-white px-2.5 py-1 font-medium text-xs shadow">
          <Sparkle className="mt-[0.5px] mr-2 size-3.5" />
          Key Benefits
        </span>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="mx-auto flex font-semibold text-5xl">Flexible Engagement Models</span>
        </div>
        <span className="w-full px-2.5 text-center text-muted-foreground">
          Whether you need a full project delivered, an expert, or an entire
          <br />
          team, we offer tailored solutions to match your goals, budget, and timeline.
        </span>
      </div>
      <div className="w-full px-4 lg:px-16">
        <div className="grid grid-cols-1 space-y-5 lg:grid-cols-2 lg:space-y-10">
          <Image src={Benifit1} alt="" className="h-88 rounded-2xl object-cover shadow-lg [image-rendering:smooth] transition-transform duration-500 hover:scale-105" />
          <div className="lg:pl-10">
            <div className="flex size-8 items-center justify-center rounded-sm bg-gray-200 font-medium text-gray-500 text-sm">
              01
            </div>
            <p className="mt-5 mb-2.5 text-left font-semibold text-[30px] leading-[35px]">Project Outsourcing</p>
            <p className="w-full pr-16 text-left text-muted-foreground text-sm">
              Ideal for startups and businesses that want to offload entire projects. We handle everything from planning
              to deployment while you focus on growth. Perfect for MVPs, SaaS platforms, mobile apps, and AI solutions.
            </p>
          </div>
          <div className="">
            <div className="flex size-8 items-center justify-center rounded-sm bg-gray-200 font-medium text-gray-500 text-sm">
              02
            </div>
            <p className="mt-5 mb-2.5 text-left font-semibold text-[30px] leading-[35px]">Individual Hiring</p>
            <p className="w-full pr-16 text-left text-muted-foreground text-sm">
              Need a specific skill or resource? Hire vetted developers, designers, or AI engineers on-demand to fill
              talent gaps or scale your team quickly with full transparency and control.
            </p>
          </div>
          <Image src={Benifit2} alt="" className="h-88 rounded-2xl object-cover shadow-lg transition-transform duration-500 hover:scale-105" />
          <Image src={Benifit3} alt="" className="h-88 rounded-2xl object-cover shadow-lg transition-transform duration-500 hover:scale-105" />
          <div className="lg:pl-10">
            <div className="flex size-8 items-center justify-center rounded-sm bg-gray-200 font-medium text-gray-500 text-sm">
              03
            </div>
            <p className="mt-5 mb-2.5 text-left font-semibold text-[30px] leading-[35px]">Dedicated Team</p>
            <p className="w-full pr-16 text-left text-muted-foreground text-sm">
              For businesses that need a long-term, scalable tech team. We assemble a dedicated squad that works as an
              extension of your in-house team aligned with your goals, culture, and processes.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default KeyBenefit;
