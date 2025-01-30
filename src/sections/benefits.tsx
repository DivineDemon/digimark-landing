import Image from "next/image";

import DummyBrandYellow from "@/assets/img/dummy-brand-yellow.svg";
import BenefitCard from "@/components/benefits/benefit-card";
import { benefits } from "@/lib/constants";

const Benefits = () => {
  return (
    <div className="relative mb-24 mt-48 flex w-full flex-col items-center justify-center gap-20">
      <span className="w-full text-left text-[72px] font-semibold uppercase leading-[72px] tracking-tighter text-white xl:text-[100px] xl:leading-[100px]">
        our
        <br />
        benefits
      </span>
      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div
          className="col-span-1 h-fit w-full overflow-hidden"
          style={{
            filter: "url(#flt_tag)",
          }}
        >
          <div
            className="h-full w-full overflow-hidden bg-white"
            style={{
              clipPath: "polygon(75% 0, 100% 15%, 100% 100%, 0 100%, 0 0)",
            }}
          >
            <div className="flex flex-col items-start justify-start gap-10 p-10">
              <Image src={DummyBrandYellow} alt="dummy-brand-yellow" />
              <span className="w-full text-pretty text-left text-[25px] font-bold !leading-[30px]">
                Working with Halo Lab means boosting your business through
                cutting-edge technologies.
              </span>
              <div className="grid w-full grid-cols-3 gap-1.5">
                <div className="col-span-1 h-1 w-full rounded-full bg-gray-300" />
                <div className="col-span-1 h-1 w-full rounded-full bg-gray-300" />
                <div className="col-span-1 h-1 w-full rounded-full bg-gray-300" />
              </div>
            </div>
          </div>
          <svg className="absolute">
            <defs>
              <filter id="flt_tag">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="8"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="flt_tag"
                />
                <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
              </filter>
            </defs>
          </svg>
        </div>
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.id} benefit={benefit} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
