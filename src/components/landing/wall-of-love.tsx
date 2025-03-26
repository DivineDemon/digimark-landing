import Image from "next/image";

import { Plus, UserCheck } from "lucide-react";

import SupabaseIcon from "@/assets/icons/supabase.svg";
import AntWilson from "@/assets/img/ant-wilson.png";
import { testimonials } from "@/lib/constants";

import MaxWidthWrapper from "../max-width-wrapper";
import TestimonialCard from "./testimonial-card";

const WallOfLove = () => {
  return (
    <MaxWidthWrapper className="h-fit" isBottomBorder={true} isTopAccent={true}>
      <div className="flex w-full flex-col items-center justify-center gap-5 py-20">
        <span className="mx-auto flex rounded-full border bg-white px-2.5 py-1 text-xs font-medium shadow">
          <UserCheck className="mt-[0.5px] mr-2 size-3.5" />
          Wall of Love
        </span>
        <span className="w-full px-2.5 text-center text-[48px] leading-[48px] font-[600] tracking-tighter">
          See why our users love Cal.com
        </span>
        <span className="text-muted-foreground w-full px-2.5 text-center">
          Read the impact we've had from those who matter most - our customers.
        </span>
        <div className="mt-10 grid w-full grid-cols-3 gap-3">
          <div className="col-span-1 flex w-full flex-col items-start justify-start gap-3">
            {testimonials.slice(0, 5).map((item) => (
              <TestimonialCard key={item.id} data={item} />
            ))}
          </div>
          <div className="col-span-1 flex w-full flex-col items-start justify-start gap-3">
            {testimonials.slice(5, 10).map((item) => (
              <TestimonialCard key={item.id} data={item} />
            ))}
          </div>
          <div className="col-span-1 flex w-full flex-col items-start justify-start gap-3">
            {testimonials.slice(10, 15).map((item) => (
              <TestimonialCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default WallOfLove;
