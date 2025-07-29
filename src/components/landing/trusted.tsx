import Image from "next/image";

import { trusted } from "@/lib/constants";

import MaxWidthWrapper from "../max-width-wrapper";

const Trusted = () => {
  const logos = [...trusted, ...trusted, ...trusted];

  return (
    <MaxWidthWrapper className="h-fit" isTopAccent>
      <div className="grid w-full grid-cols-4 gap-4 p-5">
        <div className="flex items-center justify-center">
          <span className="font-medium text-[12px] text-muted-foreground leading-[18px]">
            We partner with visionary
            <br />
            organizations to redefine
            <br />
            what's possible.
          </span>
        </div>
        <div
          className="relative col-span-3 overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex animate-marquee gap-10">
            {logos.map((brand, i) => (
              <Image
                key={`${brand.id}-${i}`}
                src={brand.image}
                alt={`brand-${brand.id}`}
                className="aspect-video w-24 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Trusted;
