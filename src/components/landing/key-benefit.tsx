import { Sparkle } from "lucide-react";
import Image from "next/image";

import Benifit1 from "../../assets/img/key1.png";
import Benifit2 from "../../assets/img/key2.png";
import Benifit3 from "../../assets/img/key3.jpg";
import MaxWidthWrapper from "../max-width-wrapper";

const KeyBenefit = () => {
  return (
    <MaxWidthWrapper className="h-fit py-20" isTopAccent>
      <div className="flex w-full flex-col items-center justify-center py-7">
        <span className="mx-auto flex rounded-full border bg-white px-2.5 py-1 font-medium text-xs shadow">
          <Sparkle className="mt-[0.5px] mr-2 size-3.5" />
          Key Benefits
        </span>
      </div>
      <div className="w-full px-4 lg:px-16">
        <div className="grid grid-cols-1 space-y-5 lg:grid-cols-2 lg:space-y-20">
          <Image src={Benifit1} alt="" className="h-88 rounded-2xl object-cover shadow-lg" />
          <div className="lg:py-10 lg:pl-10">
            <div className="flex size-8 items-center justify-center rounded-sm bg-gray-200 font-medium text-gray-500 text-sm">
              01
            </div>
            <p className="mt-5 mb-2.5 text-left text-[30px] leading-[35px] font-semibold">
              Project Outsourcing
            </p>
            
            <p className="text-muted-foreground w-full pr-16 text-left text-sm">
              Ideal for startups and businesses that want to offload entire projects. We handle everything from planning to deployment while you focus on growth. Perfect for MVPs, SaaS platforms, mobile apps, and AI solutions.
              </p>
           
          </div>

          <div className="py-10">
            <div className="flex size-8 items-center justify-center rounded-sm bg-gray-200 font-medium text-gray-500 text-sm">
              02
            </div>
            <p className="mt-5 mb-2.5 text-left text-[30px] leading-[35px] font-semibold">
             Individual Hiring
            </p>
            <p className="text-muted-foreground w-full pr-16 text-left text-sm">
             Need a specific skill or resource? Hire vetted developers, designers, or AI engineers on-demand to fill talent gaps or scale your team quickly with full transparency and control.</p>
            
          </div>
          <Image src={Benifit2} alt="" className="h-88 rounded-2xl object-cover shadow-lg" />

          <Image src={Benifit3} alt="" className="h-88 rounded-2xl object-cover shadow-lg" />
          <div className="lg:py-10 lg:pl-10">
            <div className="flex size-8 items-center justify-center rounded-sm bg-gray-200 font-medium text-gray-500 text-sm">
              03
            </div>
            <p className="mt-5 mb-2.5 text-left text-[30px] leading-[35px] font-semibold">
              Dedicated Team
              </p>
          
            <p className="text-muted-foreground w-full pr-16 text-left text-sm">
              For businesses that need a long-term, scalable tech team. We assemble a dedicated squad that works as an extension of your in-house team aligned with your goals, culture, and processes.
            </p>
            
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default KeyBenefit;
