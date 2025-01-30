import type { ForwardRefExoticComponent, RefAttributes } from "react";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  type LucideProps,
} from "lucide-react";

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  };
  currentIndex: number;
  handleNext: () => void;
  handlePrev: () => void;
}

const ServiceCard = ({
  service,
  currentIndex,
  handleNext,
  handlePrev,
}: ServiceCardProps) => {
  return (
    <div
      className="flex w-full shrink-0 items-start justify-start gap-2.5 rounded-xl bg-brand-950 p-2.5 text-white transition-transform duration-500 ease-in-out md:gap-5 md:rounded-3xl md:p-5 lg:gap-10 lg:p-10"
      style={{
        transform: `translateX(-${currentIndex * 100}%)`,
      }}
    >
      <div className="flex h-full items-start justify-start pt-0.5">
        <div className="flex size-6 items-center justify-center rounded-full border border-brand-500 bg-brand-500 p-0.5 lg:size-14 lg:p-3">
          <service.icon className="size-full text-white" />
        </div>
        <div className="size-6 rounded-full border border-brand-500 bg-transparent p-0.5 lg:size-14 lg:p-3">
          <ArrowUpRight className="size-full text-brand-500" />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start justify-start gap-2.5">
        <div className="flex w-full items-center justify-center">
          <span className="flex-1 text-left text-[20px] font-bold leading-[20px] text-brand-500 md:text-2xl">
            {service.title}
          </span>
          <div className="flex items-center justify-center gap-2.5 md:hidden">
            <button
              type="button"
              onClick={handlePrev}
              className="size-6 rounded-full border border-brand-500 bg-transparent p-0.5 text-brand-500"
            >
              <ArrowLeft className="size-full" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="size-6 rounded-full border border-brand-500 bg-transparent p-0.5 text-brand-500"
            >
              <ArrowRight className="size-full" />
            </button>
          </div>
        </div>
        <span className="line-clamp-3 w-full text-left text-[14px] font-light text-white lg:line-clamp-none lg:text-base">
          {service.description}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
