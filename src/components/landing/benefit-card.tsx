import Image, { type StaticImageData } from "next/image";

interface BenefitCardProps {
  data: {
    title: string;
    description: string;
    image: StaticImageData;
  };
}

const BenefitCard = ({ data }: BenefitCardProps) => {
  return (
    <div className="relative col-span-1 flex max-h-[400px] w-full flex-col items-start justify-start gap-5 overflow-hidden rounded-2xl border bg-white p-8 shadow">
      <span className="w-full text-left text-[18px] leading-[18px] font-semibold">
        {data.title}
      </span>
      <span className="text-muted-foreground w-full pr-16 text-left text-[14px] leading-[20px]">
        {data.description}
      </span>
      <div className="z-0 mx-auto mt-10 aspect-square w-[65%] rounded-3xl border" />
      <div className="absolute inset-x-0 top-52 z-[1] mx-auto aspect-square w-[65%] rounded-3xl border border-gray-300 bg-white" />
      <div className="absolute inset-x-0 top-[226px] z-[2] mx-auto flex aspect-square h-1/2 w-[71.5%] flex-col items-start justify-start gap-5 overflow-hidden rounded-3xl border border-gray-400/65 bg-white">
        <Image
          src={data.image}
          alt="test-choose-1"
          className="w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default BenefitCard;
