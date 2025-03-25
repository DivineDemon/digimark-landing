import Image from "next/image";

import { ChevronRight } from "lucide-react";

import GoogleIcon from "@/assets/icons/google.svg";
import HeroBrandOne from "@/assets/img/herobrand1.svg";
import HeroBrandTwo from "@/assets/img/herobrand2.svg";
import HeroBrandThree from "@/assets/img/herobrand3.svg";

import CustomButton from "../custom-button";
import MaxWidthWrapper from "../max-width-wrapper";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <MaxWidthWrapper className="h-fit pt-24" isTopAccent={false}>
      <div className="grid h-full w-full grid-cols-2 rounded-2xl border border-[#E1E2E3] bg-white py-20 pl-20">
        <div className="flex w-full flex-col items-center justify-center pr-10">
          <span className="mr-auto flex rounded-full border bg-gray-100 px-3 py-1 text-xs font-medium">
            Cal.com launches v5.1&nbsp;
            <ChevronRight className="mt-[0.5px] ml-2 size-3.5" />
          </span>
          <span className="my-10 w-full text-left text-[70px] leading-[70px] font-[600] tracking-tighter">
            The better way
            <br />
            to schedule
            <br />
            your meetings
          </span>
          <span className="text-muted-foreground w-full text-left">
            A fully customizable scheduling software for individuals, businesses
            taking calls and developers building scheduling platforms where
            users meet users.
          </span>
          <CustomButton size="lg" className="mt-5 mb-2.5 w-full">
            <Image
              src={GoogleIcon}
              alt="google-icon"
              width={16}
              height={16}
              className="size-4"
            />
            <span>Sign up with Google</span>
          </CustomButton>
          <Button
            size="lg"
            type="button"
            variant="outline"
            className="w-full rounded-lg border-[#E1E2E3] bg-gray-100"
          >
            Sign up with email
          </Button>
          <span className="text-muted-foreground mt-5 w-full text-center text-xs font-medium">
            No credit card required
          </span>
        </div>
        <div className="col-span-1 flex w-full flex-col items-center justify-center gap-10">
          <div className="ml-auto aspect-square h-[400px] w-3/4 rounded-l-2xl border-y border-l p-1">
            <div className="h-full w-full rounded-l-2xl border-y border-l" />
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
