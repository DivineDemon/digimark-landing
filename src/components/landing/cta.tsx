import Image from "next/image";

import { ChevronRight } from "lucide-react";

import Boxes from "@/assets/img/squares-footer.png";

import CustomLink from "../custom-link";
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
            Engineering Excellence
            <br />
            Across Every Industry
          </span>
          <CustomLink
            href="https://calendly.com/digimark-developers"
            size="lg"
            className="mx-auto"
          >
            <span>Get Started</span>
            <ChevronRight className="size-4 text-gray-200" />
          </CustomLink>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CTA;
