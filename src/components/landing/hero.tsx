"use client";

import Image from "next/image";
import { ClutchBadge } from "react-static-clutch-embed";
import CalendlyIcon from "@/assets/icons/calendly.svg";
import TestHome from "@/assets/img/test/test-home.jpg";
import CustomLink from "../custom-link";
import MaxWidthWrapper from "../max-width-wrapper";
import "react-static-clutch-embed/styles/badge.css";

const Hero = () => {
  return (
    <MaxWidthWrapper className="h-fit pt-24" isTopAccent={false}>
      <div className="grid h-full w-full grid-cols-1 rounded-2xl border border-[#E1E2E3] bg-white px-2 py-4 md:grid-cols-2 md:py-20 lg:pl-20">
        <div className="flex w-full flex-col items-center justify-center lg:pr-10">
          <span className="w-full text-left font-[600] text-[54px] leading-[50px] tracking-tighter md:my-10 lg:text-[70px] lg:leading-[70px]">
            Boost Your Business with ROI Driven Solutions
          </span>
          <span className="w-full text-left text-muted-foreground">
            Empowering SMEs with tailored SaaS development, AI integrations, and end-to-end automation to drive growth
            and efficiency.
          </span>
          <CustomLink href="https://calendly.com/digimark-developers" size="lg" className="mt-5 mb-2.5 w-full">
            <Image src={CalendlyIcon} alt="calendly-icon" width={16} height={16} className="size-8" />
            <span>Get Started</span>
          </CustomLink>
        </div>
        <div className="col-span-1 flex w-full flex-col items-center justify-center gap-10">
          <div className="aspect-square h-[300px] w-full border-y border-l p-1 sm:aspect-auto sm:h-[400px] sm:w-[90%] sm:rounded-l-2xl md:ml-auto">
            <div className="h-full w-full overflow-hidden rounded-lg border-y border-l sm:rounded-l-2xl">
              <Image
                src={TestHome}
                alt="test-hero"
                className="h-full w-full object-cover object-center sm:object-right"
              />
            </div>
          </div>

          <div className="mx-auto mt-5 flex w-full items-center justify-center sm:ml-auto sm:w-3/4 sm:justify-end">
            <ClutchBadge
              data={{
                rating: 4.9,
                reviewsCount: 11,
                links: {
                  reviewsCount: "https://www.clutch.co/profile/digimark-developers",
                  logo: "https://clutch.co/logos/digimark-developers.svg",
                  stars: "https://clutch.co/stars/4.9.svg",
                },
              }}
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Hero;
