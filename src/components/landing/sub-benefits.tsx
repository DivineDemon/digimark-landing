import { Plus } from "lucide-react";

import { subBenefits } from "@/lib/constants";

const SubBenefits = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center divide-y divide-gray-300 border-y border-gray-300">
      <div className="relative grid w-full grid-cols-6 divide-x divide-gray-300">
        <div className="absolute -top-3 left-[15.7%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute -top-3 left-[32.3%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute -top-3 left-[49%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute -top-3 left-[65.7%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute -top-3 right-[15.7%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute -bottom-3 left-[15.7%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute -bottom-3 left-[32.3%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute -bottom-3 left-[49%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute -bottom-3 left-[65.7%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute right-[15.7%] -bottom-3 z-[1] size-6 border-none bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
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
              <span className="w-full text-center text-[14px] leading-[16px] font-medium text-black/85">
                {item.name}
              </span>
            </div>
          </div>
        ))}
        <div className="col-span-1 aspect-square w-full p-2.5" />
      </div>
      <div className="relative grid w-full grid-cols-6 divide-x divide-gray-300">
        <div className="absolute -bottom-3 left-[15.7%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute -bottom-3 left-[32.3%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute -bottom-3 left-[49%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute -bottom-3 left-[65.7%] z-[1] size-6 border-none bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute right-[15.7%] -bottom-3 z-[1] size-6 border-none bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
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
              <span className="w-full text-center text-[14px] leading-[16px] font-medium text-black/85">
                {item.name}
              </span>
            </div>
          </div>
        ))}
        <div className="col-span-1 aspect-square w-full p-2.5" />
      </div>
    </div>
  );
};

export default SubBenefits;
