import Image from "next/image";

import { Plus } from "lucide-react";

import SupabaseIcon from "@/assets/icons/supabase.svg";
import AntWilson from "@/assets/img/ant-wilson.png";

import MaxWidthWrapper from "../max-width-wrapper";

const Testimonials = () => {
  return (
    <MaxWidthWrapper
      className="h-fit !px-0"
      isBottomBorder={true}
      isTopAccent={true}
    >
      <div className="flex w-full flex-col items-center justify-center gap-5 py-20">
        <span className="mx-auto flex rounded-full border bg-white px-2.5 py-1 text-xs font-medium shadow">
          Testimonials
        </span>
        <span className="w-full px-2.5 text-center text-[48px] leading-[48px] font-[600] tracking-tighter">
          Don't take our word for it
        </span>
        <span className="text-muted-foreground w-full px-2.5 text-center">
          Our users are our best ambassadors. Discover why we're the top choice
          for
          <br />
          scheduling meetings.
        </span>
        <div className="mt-10 flex w-full items-center justify-center gap-2.5 overflow-x-hidden overflow-y-visible border-y border-gray-300">
          <div className="py-2.5 opacity-35">
            <div className="flex h-[246px] w-[566px] shrink-0 flex-col items-center justify-between rounded-2xl border border-gray-300 bg-white p-7 shadow">
              <span className="w-full text-left text-[24px] leading-[30px] font-semibold tracking-tight text-black/85">
                "I finally made the move to Cal after I couldn't find how to
                edit events in the Calendly dashboard."
              </span>
              <div className="flex w-full items-start justify-start gap-5">
                <div className="flex items-start justify-start gap-3.5 border-r border-gray-300 pr-5">
                  <Image
                    src={AntWilson}
                    alt="ant-wilson"
                    className="size-10 rounded-lg"
                  />
                  <div className="flex h-full flex-1 flex-col items-center justify-center gap-1.5">
                    <span className="w-full text-left text-[14px] leading-[14px] font-semibold">
                      Ant Wilson
                    </span>
                    <span className="text-muted-foreground w-full text-left text-[14px] leading-[14px]">
                      Co-Founder & CTO, Supabase
                    </span>
                  </div>
                </div>
                <Image src={SupabaseIcon} alt="supabase" className="size-10" />
              </div>
            </div>
          </div>
          <div className="h-[266px] w-px border-l border-gray-300" />
          <div className="py-2.5">
            <div className="flex h-[246px] w-[566px] shrink-0 flex-col items-center justify-between rounded-2xl border border-gray-300 bg-white p-7 shadow">
              <span className="w-full text-left text-[24px] leading-[30px] font-semibold tracking-tight text-black/85">
                "I finally made the move to Cal after I couldn't find how to
                edit events in the Calendly dashboard."
              </span>
              <div className="flex w-full items-start justify-start gap-5">
                <div className="flex items-start justify-start gap-3.5 border-r border-gray-300 pr-5">
                  <Image
                    src={AntWilson}
                    alt="ant-wilson"
                    className="size-10 rounded-lg"
                  />
                  <div className="flex h-full flex-1 flex-col items-center justify-center gap-1.5">
                    <span className="w-full text-left text-[14px] leading-[14px] font-semibold">
                      Ant Wilson
                    </span>
                    <span className="text-muted-foreground w-full text-left text-[14px] leading-[14px]">
                      Co-Founder & CTO, Supabase
                    </span>
                  </div>
                </div>
                <Image src={SupabaseIcon} alt="supabase" className="size-10" />
              </div>
            </div>
          </div>
          <div className="h-[266px] w-px border-l border-gray-300" />
          <div className="py-2.5 opacity-35">
            <div className="flex h-[246px] w-[566px] shrink-0 flex-col items-center justify-between rounded-2xl border border-gray-300 bg-white p-7 shadow">
              <span className="w-full text-left text-[24px] leading-[30px] font-semibold tracking-tight text-black/85">
                "I finally made the move to Cal after I couldn't find how to
                edit events in the Calendly dashboard."
              </span>
              <div className="flex w-full items-start justify-start gap-5">
                <div className="flex items-start justify-start gap-3.5 border-r border-gray-300 pr-5">
                  <Image
                    src={AntWilson}
                    alt="ant-wilson"
                    className="size-10 rounded-lg"
                  />
                  <div className="flex h-full flex-1 flex-col items-center justify-center gap-1.5">
                    <span className="w-full text-left text-[14px] leading-[14px] font-semibold">
                      Ant Wilson
                    </span>
                    <span className="text-muted-foreground w-full text-left text-[14px] leading-[14px]">
                      Co-Founder & CTO, Supabase
                    </span>
                  </div>
                </div>
                <Image src={SupabaseIcon} alt="supabase" className="size-10" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[44.75%] left-[24.5%] z-[1] size-6 bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute top-[44.75%] right-[24.5%] z-[1] size-6 bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute bottom-[11.75%] left-[24.5%] z-[1] size-6 bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div className="absolute right-[24.5%] bottom-[11.75%] z-[1] size-6 bg-[#F4F4F4] p-1">
          <Plus className="text-muted-foreground size-full" />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Testimonials;
