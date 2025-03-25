import { Briefcase } from "lucide-react";

import MaxWidthWrapper from "../max-width-wrapper";

const Benefits = () => {
  return (
    <MaxWidthWrapper className="h-fit" isTopAccent={true}>
      <div className="flex w-full flex-col items-center justify-center gap-5 py-20">
        <span className="mx-auto flex rounded-full border bg-white px-3 py-1 text-xs font-medium shadow">
          <Briefcase className="mt-[0.5px] mr-2 size-3.5" />
          Benefits
        </span>
        <span className="w-full text-center text-[48px] leading-[48px] font-[600] tracking-tighter">
          Your all-purpose scheduling app
        </span>
        <span className="text-muted-foreground w-full text-center">
          Discover a variety of our advanced features. Unlimited and free for
          individuals.
        </span>
        <div className="!mt-10 grid w-full grid-cols-2 gap-6">
          <div className="col-span-1 flex w-full flex-col items-start justify-start gap-2.5 rounded-2xl border bg-white p-5 shadow">
            <span className="mt-5 mb-2.5 w-full text-left text-[16px] leading-[18px] font-semibold">
              Avoid meeting overload
            </span>
            <span className="text-muted-foreground w-full pr-16 text-left text-sm">
              Only get booked when you want to. Set daily, weekly or monthly
              limits and add buffers around your events to allow you to focus or
              take a break.
            </span>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Benefits;
