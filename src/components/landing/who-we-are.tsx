import { ArrowBigRight, ChevronRight, Plus, Sparkle } from "lucide-react";
import Image from "next/image";

import { whoWeAre } from "@/lib/constants";

import MaxWidthWrapper from "../max-width-wrapper";
import CustomLink from "../custom-link";

const WhoWeAre = () => {
  return (
    <MaxWidthWrapper className="h-full py-20" isTopAccent>
      <div className="flex w-full flex-col items-center justify-center py-7">
        <span className="mx-auto flex rounded-full border bg-white px-2.5 py-1 font-medium text-xs shadow">
          <Sparkle className="mt-[0.5px] mr-2 size-3.5" />
          Who We Are
        </span>
      </div>
      <div className="flex w-full flex-col items-center justify-center rounded-lg  px-8  ">
        <p className="font-semibold text-5xl">Who We Are</p>
        <div className="my-10 flex w-full flex-col items-center justify-center">
          <div className="space-y-4">
            <div className="flex gap-2 items-start">
              <ArrowBigRight className="w-10 -pt-4" />
              <p>
                At <span className="font-bold">Digimark Developers</span>, we
                help ambitious startups and growing businesses across the{" "}
                <span className="font-bold">USA and Canada</span> turn ideas
                into high-impact digital products. As a{" "}
                <span className="font-bold">
                  product and services-based technology partner
                </span>
                , we offer e
                <span className="font-bold">nd-to-end solutions</span> from
                strategy and design to development, deployment, and scale.
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <ArrowBigRight className="w-11 -pt-4" />
              <p>
                We are a <span className="font-bold">trusted partner</span> for
                both <span className="font-bold"> funded startups</span> and{" "}
                <span className="font-bold"> growth companies</span>. Our focus
                is simple:
                <span className="font-bold">
                  {" "}
                  build solutions that drive results
                </span>
                . Whether it’s a{" "}
                <span className="font-bold"> custom SaaS platform</span>, an
                intelligent{" "}
                <span className="font-bold"> AI-powered chatbot</span>, a
                user-friendly
                <span className="font-bold"> mobile app</span>, or{" "}
                <span className="font-bold"> automation tools</span>, that save
                time and money we deliver technology that moves your business
                forward.
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <ArrowBigRight className="w-9 -pt-4" />
              <p>
                We pride ourselves on{" "}
                <span className="font-bold">
                  {" "}
                  transparent communication, fast turnaround
                </span>
                , and long-term partnerships built on trust. From{" "}
                <span className="font-bold"> UI/UX design</span> to
                <span className="font-bold"> cloud engineering</span>, we align
                every solution with your business goals ensuring you get not
                just a product, but a{" "}
                <span className="font-bold"> competitive advantage</span>.
              </p>
            </div>
          </div>
          {/* <div className="my-10 flex w-full flex-col items-center justify-center">
          <div className="grid w-fit grid-cols-4 border-b">
            <div className="relative size-20 border-r p-4 lg:size-32 lg:p-8">
              <Image src={WWA1} alt="" className="size-full" />{" "}
              <div className="-right-3 -bottom-3 absolute size-6 bg-white p-1">
                <Plus className="size-full text-gray-300" />
              </div>
            </div>
            <div className="relative size-20 border-r p-4 lg:size-32 lg:p-8">
              <Image src={WWA3} alt="" className="size-full" />
              <div className="-right-3 -bottom-3 absolute size-6 bg-white p-1">
                <Plus className="size-full text-gray-300" />
              </div>
            </div>
            <div className="relative size-20 border-r p-4 lg:size-32 lg:p-8">
              <Image src={WWA5} alt="" className="size-full" />
              <div className="-right-3 -bottom-3 absolute size-6 bg-white p-1">
                <Plus className="size-full text-gray-300" />
              </div>
            </div>
            <div className="relative size-20 p-4 lg:size-32 lg:p-8">
              <Image src={WWA4} alt="" className="size-full" />
            </div>
          </div>
          <div className="grid w-fit grid-cols-4">
            <div className="relative size-20 border-r p-4 lg:size-32 lg:p-8">
              <Image src={WWA3} alt="" className="size-full" />
            </div>
            <div className="relative size-20 border-r p-4 lg:size-32 lg:p-8">
              <Image src={WWA1} alt="" className="size-full" />
            </div>
            <div className="relative size-20 border-r p-4 lg:size-32 lg:p-8">
              <Image src={WWA2} alt="" className="size-full" />
            </div>
            <div className="relative size-20 p-4 lg:size-32 lg:p-8">
              <Image src={WWA1} alt="" className="size-full" />
            </div>
          </div>
        </div>
        <p className="text-center text-muted-foreground">
          Cal.com works with all apps already in your flow ensuring everything works perfectly together.
        </p>*/}
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
              <div
                key={item.id}
                className="col-span-1 aspect-square w-full p-2.5"
              >
                <div className="flex aspect-square w-full flex-col items-center justify-center gap-5 rounded-xl border bg-white p-5 shadow">
                  {/* <div className="relative size-16 rounded-lg border border-gray-300 bg-[#F4F4F4] p-5 shadow">
                          <div className="absolute top-2 left-2 size-[4px] rounded-full bg-gray-300" />
                          <div className="absolute top-2 right-2 size-[4px] rounded-full bg-gray-300" />
                          <item.icon className="size-full text-black/85" />
                          <div className="absolute bottom-2 left-2 size-[4px] rounded-full bg-gray-300" />
                          <div className="absolute right-2 bottom-2 size-[4px] rounded-full bg-gray-300" />
                        </div> */}
                  <span className="w-full text-center font-bold text-[18px] text-black/85 leading-[20px]">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
            <div className="col-span-1 aspect-square w-full p-2.5" />
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-8">
          <CustomLink href="https://calendly.com/digimark-developers">
            Sign up <ChevronRight/>
          </CustomLink>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default WhoWeAre;
