import { Plus } from "lucide-react";

import { subBenefits } from "@/lib/constants";

import MaxWidthWrapper from "../max-width-wrapper";

const SubBenefits = () => {
  return (
    <MaxWidthWrapper className="pb-20" isBottomBorder={true}>
      <div className="flex w-full flex-col items-center justify-center py-10">
        <span className="mx-auto flex font-semibold text-5xl">Services</span>
      </div>

      <div className="flex w-full flex-col items-center justify-center divide-y divide-gray-300 border-gray-300 border-y">
        <div className="relative hidden w-full grid-cols-1 divide-x divide-gray-300 md:grid-cols-3 lg:grid lg:grid-cols-6">
          <div className="-top-3 absolute left-[15.7%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
            <Plus className="size-full text-muted-foreground" />
          </div>
          <div className="-top-3 absolute left-[32.3%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
            <Plus className="size-full text-muted-foreground" />
          </div>
          <div className="-top-3 absolute left-[49%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
            <Plus className="size-full text-muted-foreground" />
          </div>
          <div className="-top-3 absolute left-[65.7%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
            <Plus className="size-full text-muted-foreground" />
          </div>
          <div className="-top-3 absolute right-[15.7%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
            <Plus className="size-full text-muted-foreground" />
          </div>
          <div className="-bottom-3 absolute left-[15.7%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
            <Plus className="size-full text-muted-foreground" />
          </div>
          <div className="-bottom-3 absolute left-[32.3%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
            <Plus className="size-full text-muted-foreground" />
          </div>
          <div className="-bottom-3 absolute left-[49%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
            <Plus className="size-full text-muted-foreground" />
          </div>
          <div className="-bottom-3 absolute left-[65.7%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
            <Plus className="size-full text-muted-foreground" />
          </div>
          <div className="-bottom-3 absolute right-[15.7%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
            <Plus className="size-full text-muted-foreground" />
          </div>

          <div className="col-span-1 aspect-square w-full p-2.5" />
          {subBenefits.slice(0, 4).map((item) => (
            <div key={item.id} className="col-span-1 aspect-square w-full p-2.5">
              <div className="flex aspect-square w-full flex-col items-center justify-center gap-5 rounded-xl border bg-white p-5 shadow">
                <div className="relative size-16 rounded-lg border border-gray-300 bg-[#F4F4F4] p-5 shadow">
                  <div className="absolute top-2 left-2 size-[4px] rounded-full bg-gray-300" />
                  <div className="absolute top-2 right-2 size-[4px] rounded-full bg-gray-300" />
                  <item.icon className="size-full text-black/85" />
                  <div className="absolute bottom-2 left-2 size-[4px] rounded-full bg-gray-300" />
                  <div className="absolute right-2 bottom-2 size-[4px] rounded-full bg-gray-300" />
                </div>
                <span className="w-full text-center font-medium text-[14px] text-black/85 leading-[16px]">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
          <div className="col-span-1 aspect-square w-full p-2.5" />
        </div>
        <div className="grod-cols-1 relative hidden w-full divide-x divide-gray-300 md:grid-cols-3 lg:grid lg:grid-cols-6">
          <div className="-bottom-3 absolute left-[15.7%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
            <Plus className="size-full text-muted-foreground" />
          </div>
          <div className="-bottom-3 absolute left-[32.3%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
            <Plus className="size-full text-muted-foreground" />
          </div>
          <div className="-bottom-3 absolute left-[49%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
            <Plus className="size-full text-muted-foreground" />
          </div>
          <div className="-bottom-3 absolute left-[65.7%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
            <Plus className="size-full text-muted-foreground" />
          </div>
          <div className="-bottom-3 absolute right-[15.7%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
            <Plus className="size-full text-muted-foreground" />
          </div>
          <div className="col-span-1 aspect-square w-full p-2.5" />
          {subBenefits.slice(4, 8).map((item) => (
            <div key={item.id} className="col-span-1 aspect-square w-full p-2.5">
              <div className="flex aspect-square w-full flex-col items-center justify-center gap-5 rounded-xl border bg-white p-5 shadow">
                <div className="relative size-16 rounded-lg border border-gray-300 bg-[#F4F4F4] p-5 shadow">
                  <div className="absolute top-2 left-2 size-[4px] rounded-full bg-gray-300" />
                  <div className="absolute top-2 right-2 size-[4px] rounded-full bg-gray-300" />
                  <item.icon className="size-full text-black/85" />
                  <div className="absolute bottom-2 left-2 size-[4px] rounded-full bg-gray-300" />
                  <div className="absolute right-2 bottom-2 size-[4px] rounded-full bg-gray-300" />
                </div>
                <span className="w-full text-center font-medium text-[14px] text-black/85 leading-[16px]">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
          <div className="col-span-1 aspect-square w-full p-2.5" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:hidden">
          {subBenefits.map((item) => (
            <div key={item.id} className="col-span-1 aspect-square w-full p-2.5">
              <div className="flex aspect-square w-full flex-col items-center justify-center gap-5 rounded-xl border bg-white p-1 shadow lg:p-5">
                <div className="relative size-16 rounded-lg border border-gray-300 bg-[#F4F4F4] p-5 shadow">
                  <div className="absolute top-2 left-2 size-[4px] rounded-full bg-gray-300" />
                  <div className="absolute top-2 right-2 size-[4px] rounded-full bg-gray-300" />
                  <item.icon className="size-full text-black/85" />
                  <div className="absolute bottom-2 left-2 size-[4px] rounded-full bg-gray-300" />
                  <div className="absolute right-2 bottom-2 size-[4px] rounded-full bg-gray-300" />
                </div>
                <span className="w-full text-center font-medium text-[14px] text-black/85 leading-[16px]">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default SubBenefits;
