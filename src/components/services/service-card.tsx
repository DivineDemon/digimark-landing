import type { ForwardRefExoticComponent, RefAttributes } from "react";

import { ArrowUpRight, type LucideProps } from "lucide-react";

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="col-span-1 flex items-center justify-center gap-10 rounded-3xl bg-brand-950 p-10 text-white">
      <div className="flex h-full items-start justify-start">
        <div className="flex size-14 items-center justify-center rounded-full bg-brand-500 p-3">
          <service.icon className="size-full text-white" />
        </div>
        <div className="size-14 rounded-full border border-brand-500 bg-transparent p-3">
          <ArrowUpRight className="size-full text-brand-500" />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start justify-start gap-2.5">
        <span className="w-full text-left text-2xl font-bold text-brand-500">
          {service.title}
        </span>
        <span className="w-full text-left font-light text-white">
          {service.description}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
