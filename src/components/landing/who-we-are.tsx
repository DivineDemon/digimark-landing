import { Info, Plus, Sparkles } from "lucide-react";

import { whoWeAre } from "@/lib/constants";
import MaxWidthWrapper from "../max-width-wrapper";

const WhoWeAre = () => {
  return (
    <MaxWidthWrapper className="h-full py-20" isTopAccent>
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <span className="mx-auto flex rounded-full border bg-white px-2.5 py-1 font-medium text-xs shadow">
          <Info className="mt-[0.5px] mr-2 size-3.5" />
          About Us
        </span>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="mx-auto flex font-semibold text-5xl">Who We Are</span>
        </div>
        <span className="w-full px-2.5 text-center text-muted-foreground">
          We are a team of passionate developers, designers, and strategists dedicated
          <br />
          to building innovative digital solutions that empower businesses to thrive in the digital age.
        </span>
      </div>
      <div className="mx-auto my-10 flex w-3/4 flex-col items-center justify-center gap-4 rounded-lg border bg-white p-8 shadow">
        <div className="flex w-full items-start justify-start gap-2">
          <Info className="mt-1 size-4 shrink-0" />
          <p>
            At <span className="font-bold">Digimark Developers</span>, we help ambitious startups and growing businesses
            across the&nbsp;
            <span className="font-bold">USA and Canada</span> turn ideas into high-impact digital products. As a&nbsp;
            <span className="font-bold">product and services-based technology partner</span>, we offer e
            <span className="font-bold">nd-to-end solutions</span> from strategy and design to development, deployment,
            and scale.
          </p>
        </div>
        <div className="flex w-full items-start justify-start gap-2">
          <Info className="mt-1 size-4 shrink-0" />
          <p>
            We are a <span className="font-bold">trusted partner</span> for both
            <span className="font-bold"> funded startups</span> and
            <span className="font-bold"> growth companies</span>. Our focus is simple:
            <span className="font-bold">&nbsp; build solutions that drive results</span>. Whether it's a
            <span className="font-bold"> custom SaaS platform</span>, an intelligent
            <span className="font-bold"> AI-powered chatbot</span>, a user-friendly
            <span className="font-bold"> mobile app</span>, or&nbsp;
            <span className="font-bold"> automation tools</span>, that save time and money we deliver technology that
            moves your business forward.
          </p>
        </div>
        <div className="flex w-full items-start justify-start gap-2">
          <Info className="mt-1 size-4 shrink-0" />
          <p>
            We pride ourselves on&nbsp;
            <span className="font-bold">&nbsp; transparent communication, fast turnaround</span>, and long-term
            partnerships built on trust. From&nbsp;
            <span className="font-bold"> UI/UX design</span> to
            <span className="font-bold"> cloud engineering</span>, we align every solution with your business goals
            ensuring you get not just a product, but a&nbsp;
            <span className="font-bold"> competitive advantage</span>.
          </p>
        </div>
      </div>
      <div>
        <div className="flex w-full flex-col items-center justify-center py-2"></div>
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
            {whoWeAre.slice(0, 4).map((item) => (
              <div key={item.id} className="col-span-1 aspect-square w-full p-2.5">
                <div className="flex aspect-square w-full flex-col items-center justify-center gap-5 rounded-xl border bg-white p-5 shadow">
                  <div className="relative size-16 rounded-lg border border-gray-300 bg-[#F4F4F4] p-5 shadow">
                    <div className="absolute top-2 left-2 size-[4px] rounded-full bg-gray-300" />
                    <div className="absolute top-2 right-2 size-[4px] rounded-full bg-gray-300" />
                    <Sparkles className="size-full text-black/85" />
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
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default WhoWeAre;
