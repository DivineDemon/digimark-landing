import Image from "next/image";
import React from "react";

import { ChevronRight, Plus, Sparkle } from "lucide-react";

import WWA1 from "../../assets/img/wwa1.svg";
import WWA2 from "../../assets/img/wwa2.svg";
import WWA3 from "../../assets/img/wwa3.svg";
import WWA4 from "../../assets/img/wwa4.svg";
import WWA5 from "../../assets/img/wwa5.svg";
import CustomButton from "../custom-button";
import MaxWidthWrapper from "../max-width-wrapper";

const WhoWeAre = () => {
  return (
    <MaxWidthWrapper className="h-full py-20" isTopAccent>
      <div className="flex w-full flex-col items-center justify-center py-7">
        <span className="mx-auto flex rounded-full border bg-white px-2.5 py-1 text-xs font-medium shadow">
          <Sparkle className="mt-[0.5px] mr-2 size-3.5" />
          Who We Are
        </span>
      </div>
      <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white px-8 py-10 shadow-md">
        <p className="text-5xl font-semibold">Who We Are</p>
        <div className="my-10 flex w-full flex-col items-center justify-center">
          <div className="grid w-fit grid-cols-4 border-b">
            <div className="relative size-20 border-r p-4 lg:size-32 lg:p-8">
              <Image src={WWA1} alt="" className="size-full" />{" "}
              <div className="absolute -right-3 -bottom-3 size-6 bg-white p-1">
                <Plus className="size-full text-gray-300" />
              </div>
            </div>
            <div className="relative size-20 border-r p-4 lg:size-32 lg:p-8">
              <Image src={WWA3} alt="" className="size-full" />
              <div className="absolute -right-3 -bottom-3 size-6 bg-white p-1">
                <Plus className="size-full text-gray-300" />
              </div>
            </div>
            <div className="relative size-20 border-r p-4 lg:size-32 lg:p-8">
              <Image src={WWA5} alt="" className="size-full" />
              <div className="absolute -right-3 -bottom-3 size-6 bg-white p-1">
                <Plus className="size-full text-gray-300" />
              </div>
            </div>
            <div className="relative size-20 p-4 lg:size-32 lg:p-8">
              <Image src={WWA4} alt="" className="size-full" />
            </div>
          </div>
          <div className="grid w-fit grid-cols-4">
            <div className="relative size-20 border-r p-4 lg:size-32 lg:p-8">
              <Image src={WWA3} alt="" className="size-full" />
            </div>
            <div className="relative size-20 border-r p-4 lg:size-32 lg:p-8">
              <Image src={WWA1} alt="" className="size-full" />
            </div>
            <div className="relative size-20 border-r p-4 lg:size-32 lg:p-8">
              <Image src={WWA2} alt="" className="size-full" />
            </div>
            <div className="relative size-20 p-4 lg:size-32 lg:p-8">
              <Image src={WWA1} alt="" className="size-full" />
            </div>
          </div>
        </div>
        <p className="text-muted-foreground text-center">
          Cal.com works with all apps already in your flow ensuring everything
          works perfectly together.
        </p>
        <div className="mt-10 flex items-center justify-center gap-8">
          <CustomButton>
            Sign up <ChevronRight />
          </CustomButton>
          <CustomButton className="mt-0 bg-gray-200 text-black hover:bg-gray-300">
            Explore Apps <ChevronRight />
          </CustomButton>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default WhoWeAre;
