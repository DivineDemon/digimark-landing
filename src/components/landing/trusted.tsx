import Image from "next/image";

import { trusted } from "@/lib/constants";

import MaxWidthWrapper from "../max-width-wrapper";

const Trusted = () => {
  return (
    <MaxWidthWrapper className="h-fit" isTopAccent={true}>
      <div className="grid w-full grid-cols-4 gap-4 p-5">
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-muted-foreground w-full text-left text-[12px] leading-[18px] font-medium">
            Trusted by fast-growing
            <br />
            companies around the world
          </span>
        </div>
        <div className="col-span-3 grid w-full grid-cols-5 gap-5">
          {trusted.map((brand) => (
            <Image
              key={brand.id}
              src={brand.image}
              alt={`brand-${brand.id}`}
              className="col-span-1 aspect-video w-24"
            />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Trusted;
