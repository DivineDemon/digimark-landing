import Image, { type StaticImageData } from "next/image";

interface TestimonialCardProps {
  data: {
    id: number;
    name: string;
    social_logo: string;
    description: string;
    client_image: StaticImageData;
    social_handle: string;
  };
}

const TestimonialCard = ({ data }: TestimonialCardProps) => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-5 rounded-2xl border border-gray-200 bg-white p-5">
      <div className="flex w-full items-center justify-center gap-5">
        <div className="relative size-[42px] rounded-full">
          <Image
            src={data.client_image}
            width={42}
            height={42}
            alt="client"
            className="aspect-square rounded-full object-cover"
          />
          <Image
            src={data.social_logo}
            alt="social"
            width={20}
            height={20}
            className="-right-2.5 absolute bottom-0 size-5 rounded-full border bg-white p-[2px] shadow"
          />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-1">
          <span className="w-full text-left font-medium text-[18px] leading-[18px] tracking-tight">
            {data.name}
          </span>
          <span className="w-full text-left text-[14px] text-muted-foreground leading-[14px]">
            {data.social_handle}
          </span>
        </div>
      </div>
      <span className="w-full text-left text-[14px] text-black/75 leading-[18px]">
        {data.description}
      </span>
    </div>
  );
};

export default TestimonialCard;
