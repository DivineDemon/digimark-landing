import Image from "next/image";

import { ChevronRight } from "lucide-react";

import HeroBrandOne from "@/assets/img/herobrand1.svg";
import HeroBrandTwo from "@/assets/img/herobrand2.svg";
import HeroBrandThree from "@/assets/img/herobrand3.svg";
import ProductOfTheDay from "@/assets/img/product-of-the-day.svg";
import Boxes from "@/assets/img/squares-footer.png";

import CustomButton from "../custom-button";
import MaxWidthWrapper from "../max-width-wrapper";

const CTA = () => {
  return (
    <MaxWidthWrapper className="h-fit" isBottomBorder={true} isTopAccent={true}>
      <div className="relative h-[400px] w-full overflow-hidden rounded-xl border bg-white shadow">
        <Image
          src={Boxes}
          alt="boxes-effect"
          className="z-0 w-full drop-shadow-xs"
        />
        <div className="absolute top-0 left-0 z-[1] flex h-full w-full flex-col items-center justify-center gap-10 rounded-3xl">
          <span className="w-full text-center text-[45px] leading-[45px] font-[600] tracking-tighter">
            Smarter, Simpler
            <br />
            Scheduling
          </span>
          <CustomButton size="lg" className="mx-auto">
            <span>Get Started</span>
            <ChevronRight className="size-4 text-gray-200" />
          </CustomButton>
          <div className="flex w-full items-center justify-center gap-10">
            <Image src={ProductOfTheDay} alt="herobrand2" className="w-24" />
            <Image src={ProductOfTheDay} alt="herobrand2" className="w-24" />
            <Image src={ProductOfTheDay} alt="herobrand2" className="w-24" />
            <Image src={HeroBrandTwo} alt="herobrand2" className="w-24" />
            <Image src={HeroBrandOne} alt="herobrand1" className="w-24" />
            <Image src={HeroBrandThree} alt="herobrand3" className="w-24" />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CTA;
