import Image from "next/image";

import Vibes from "@/assets/img/vibes.svg";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  benefit: {
    id: number;
    title?: string;
    subtitle: string;
    description: string;
  };
}

const BenefitCard = ({ benefit }: BenefitCardProps) => {
  return (
    <div
      className="h-fit w-full overflow-hidden"
      style={{
        filter: "url(#flt_tag)",
      }}
    >
      <div
        className={cn("h-full w-full overflow-hidden", {
          "bg-brand-200": benefit.id === 1,
          "bg-brand-400": benefit.id === 2,
          "bg-brand-600": benefit.id === 3,
        })}
        style={{
          clipPath: "polygon(80% 0, 100% 15%, 100% 100%, 0 100%, 0 0)",
        }}
      >
        <div className="flex flex-col items-start justify-start gap-10 p-10">
          {benefit.title ? (
            <span className="w-full text-pretty border-b border-brand-950 pb-5 text-left text-5xl font-[650] !leading-[60px]">
              {benefit.title}
            </span>
          ) : (
            <div className="w-44 border-b border-brand-950">
              <Image src={Vibes} alt="vibes" className="-ml-8 -mt-2.5" />
            </div>
          )}
          <div className="-mt-5 flex w-full flex-col items-center justify-center">
            <span className="w-full text-left text-[25px] font-[700]">
              {benefit.subtitle}
            </span>
            <span className="mt-5 w-full text-pretty text-left">
              {benefit.description}
            </span>
          </div>
        </div>
      </div>
      <svg className="absolute">
        <defs>
          <filter id="flt_tag">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
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
  );
};

export default BenefitCard;
