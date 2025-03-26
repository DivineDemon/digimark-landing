import Image from "next/image";

import { ChevronRight, Plus } from "lucide-react";

import { brands } from "@/lib/constants";
import { cn } from "@/lib/utils";

import MaxWidthWrapper from "../max-width-wrapper";

const ExploreApps = () => {
  return (
    <MaxWidthWrapper className="h-fit" isTopAccent={false}>
      <div className="rounded-xl border border-gray-300 bg-white px-10 py-24 shadow">
        <div className="grid w-full grid-cols-3 items-center justify-center">
          <div className="col-span-2 flex w-full flex-col items-center justify-center gap-5">
            <span className="mr-auto flex rounded-full border bg-white px-2.5 py-1 text-xs font-medium shadow">
              App store
            </span>
            <span className="w-full px-2.5 text-left text-[48px] leading-[48px] font-[600] tracking-tighter">
              Connect your favorite apps
            </span>
            <span className="text-muted-foreground w-full px-2.5 text-left">
              Cal.com has built-in integrations for all the apps you already
              know and love.
            </span>
            <span className="mr-auto flex rounded-full border bg-gray-100 px-3 py-1 text-xs font-medium">
              Explore our Apps&nbsp;
              <ChevronRight className="mt-[0.5px] ml-2 size-3.5" />
            </span>
          </div>
          <div className="relative col-span-1 grid w-full grid-cols-4">
            <div className="absolute top-[42.5%] left-[21.5%] size-6 bg-white p-1">
              <Plus className="text-muted-foreground size-full" />
            </div>
            <div className="absolute top-[42.5%] left-[46.5%] size-6 bg-white p-1">
              <Plus className="text-muted-foreground size-full" />
            </div>
            <div className="absolute top-[42.5%] left-[71.5%] size-6 bg-white p-1">
              <Plus className="text-muted-foreground size-full" />
            </div>
            {brands.map((brand) => (
              <div
                key={brand.id}
                className={cn(
                  "col-span-1 flex aspect-square w-full items-center justify-center border-gray-300",
                  {
                    "border-r border-b": brand.id < 4,
                    "border-b": brand.id === 4,
                    "border-r": brand.id > 4 && brand.id < 8,
                  }
                )}
              >
                <Image src={brand.image} alt="brand" className="size-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ExploreApps;
