import Image, { type StaticImageData } from "next/image";

interface HowItWorksCardProps {
  data: {
    id: number;
    title: string;
    ring1: StaticImageData;
    ring2: StaticImageData;
    description: string;
  };
}

const HowItWorksCard = ({ data }: HowItWorksCardProps) => {
  return (
    <div className="col-span-1 flex h-[400px] w-full flex-col items-start justify-between overflow-hidden rounded-2xl border border-gray-300 bg-white p-5 shadow-sm">
      <div className="flex w-full flex-col items-start justify-start">
        <div className="flex size-8 items-center justify-center rounded-sm bg-gray-200 font-medium text-gray-500 text-sm">
          0{data.id}
        </div>
        <span className="mt-5 mb-2.5 w-full text-left font-semibold text-[16px] leading-[18px]">{data.title}</span>
        <span className="w-full pr-16 text-left text-muted-foreground text-sm">{data.description}</span>
      </div>
      <div className="relative mx-auto mt-[44px] flex aspect-square w-[200px] items-center justify-center">
        {/* Rotating Ring 2 */}
        <div
          style={{
            animationDuration: "10s",
          }}
          className="absolute flex aspect-square w-[220px] animate-spin items-center justify-center rounded-full border border-gray-300/50"
        >
          <div className="-top-5 absolute size-10 rounded-full border bg-white p-2 shadow">
            <Image src={data.ring1} alt="outlook" className="size-full" />
          </div>
        </div>
        {/* Rotating Ring 1 */}
        <div
          style={{
            animationDuration: "5s",
          }}
          className="absolute flex aspect-square w-[140px] animate-spin items-center justify-center rounded-full border border-gray-300/75"
        >
          <div className="-top-5 absolute size-10 rounded-full border bg-white p-2 shadow">
            <Image src={data.ring2} alt="outlook" className="size-full" />
          </div>
        </div>
        {/* Inner Most Circle */}
        <div className="absolute flex aspect-square w-[60px] items-center justify-center rounded-full border border-gray-300">
          <Image src="/favicon.webp" alt="favicon" className="size-[35px]" width={35} height={35} />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
