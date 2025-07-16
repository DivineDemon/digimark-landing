import Image from "next/image";
import React from "react";

import { Sparkle } from "lucide-react";

import Benifit1 from "../../assets/img/test/test-choose3.jpg";
import MaxWidthWrapper from "../max-width-wrapper";

const KeyBenefit = () => {
  return (
    <MaxWidthWrapper className="h-fit py-20" isTopAccent>
      <div className="flex w-full flex-col items-center justify-center py-7">
        <span className="mx-auto flex rounded-full border bg-white px-2.5 py-1 text-xs font-medium shadow">
          <Sparkle className="mt-[0.5px] mr-2 size-3.5" />
          Key Benefits
        </span>
      </div>
      <div className="w-full px-4 lg:px-16">
        <div className="grid grid-cols-1 space-y-5 lg:grid-cols-2 lg:space-y-20">
          <Image
            src={Benifit1}
            alt=""
            className="h-88 rounded-2xl object-cover shadow-lg"
          />
          <div className="lg:py-10 lg:pl-10">
            <div className="flex size-8 items-center justify-center rounded-sm bg-gray-200 text-sm font-medium text-gray-500">
              01
            </div>
            <p className="mt-5 mb-2.5 text-left text-[30px] leading-[35px] font-semibold">
              Improve your scheduling efficiency
            </p>
            <p className="text-muted-foreground w-full pr-16 text-left text-sm">
              Cal.com empowers companies to reclaim valuable time and boost
              efficiency with enterprise-ready tools. By eliminating scheduling
              redundancies, you save time and money, freeing up resources to
              focus on what matters most.
            </p>
          </div>

          <div className="py-10">
            <div className="flex size-8 items-center justify-center rounded-sm bg-gray-200 text-sm font-medium text-gray-500">
              02
            </div>
            <p className="mt-5 mb-2.5 text-left text-[30px] leading-[35px] font-semibold">
              Analyze and optimize
            </p>
            <p className="text-muted-foreground w-full pr-16 text-left text-sm">
              Cal.com offers powerful tools to streamline your workflow,
              including advanced routing forms, automated processes, and
              AI-driven features. The Insights dashboard provides a clear
              overview of booking data, helping you spot opportunities and top
              performers with ease.
            </p>
          </div>
          <Image
            src={Benifit1}
            alt=""
            className="h-88 rounded-2xl object-cover shadow-lg"
          />

          <Image
            src={Benifit1}
            alt=""
            className="h-88 rounded-2xl object-cover shadow-lg"
          />
          <div className="lg:py-10 lg:pl-10">
            <div className="flex size-8 items-center justify-center rounded-sm bg-gray-200 text-sm font-medium text-gray-500">
              03
            </div>
            <p className="mt-5 mb-2.5 text-left text-[30px] leading-[35px] font-semibold">
              Reduce time and reallocate resources
            </p>
            <p className="text-muted-foreground w-full pr-16 text-left text-sm">
              Cal.com’s built-in features, like payment processing and
              round-robin booking, eliminate time waste and reduce costs.
              Empower your sales and support teams with tools to efficiently
              connect with clients.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default KeyBenefit;
