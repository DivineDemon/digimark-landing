import Image from "next/image";

import CalendlyIcon from "@/assets/icons/calendly.svg";
import HeroBrandOne from "@/assets/img/herobrand1.svg";
import HeroBrandTwo from "@/assets/img/herobrand2.svg";
import HeroBrandThree from "@/assets/img/herobrand3.svg";
import TestHome from "@/assets/img/test/test-home.jpg";

import CustomLink from "../custom-link";
import MaxWidthWrapper from "../max-width-wrapper";

const Hero = () => {
  return (
    <MaxWidthWrapper className="h-fit pt-24" isTopAccent={false}>
      <div className="grid h-full w-full grid-cols-2 rounded-2xl border border-[#E1E2E3] bg-white py-20 pl-20">
        <div className="flex w-full flex-col items-center justify-center pr-10">
          <span className="my-10 w-full text-left text-[70px] leading-[70px] font-[600] tracking-tighter">
            Boost Your Business with ROI Driven Solutions
          </span>
          <span className="text-muted-foreground w-full text-left">
            Empowering SMEs with tailored SaaS development, AI integrations, and
            end-to-end automation to drive growth and efficiency.
          </span>
          <CustomLink
            href="https://calendly.com/digimark-developers"
            size="lg"
            className="mt-5 mb-2.5 w-full"
          >
            <Image
              src={CalendlyIcon}
              alt="calendly-icon"
              width={16}
              height={16}
              className="size-8"
            />
            <span>Get Started</span>
          </CustomLink>
        </div>
        <div className="col-span-1 flex w-full flex-col items-center justify-center gap-10">
          <div className="ml-auto aspect-square h-[400px] w-[90%] rounded-l-2xl border-y border-l p-1">
            <div className="h-full w-full rounded-l-2xl border-y border-l">
              <Image
                src={TestHome}
                alt="test-hero"
                className="h-full w-full rounded-l-2xl object-cover object-right"
              />
            </div>
          </div>
          <div className="ml-auto flex w-3/4 items-center justify-between">
            <Image src={HeroBrandTwo} alt="herobrand2" className="w-28" />
            <Image src={HeroBrandOne} alt="herobrand1" className="w-28" />
            <Image src={HeroBrandThree} alt="herobrand3" className="w-28" />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Hero;
