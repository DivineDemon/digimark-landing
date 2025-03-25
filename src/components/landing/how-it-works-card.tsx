import Image from "next/image";

import OutlookIcon from "@/assets/icons/outlook.svg";

interface HowItWorksCardProps {
  data: { id: number; title: string; description: string };
}

const HowItWorksCard = ({ data }: HowItWorksCardProps) => {
  return (
    <div className="col-span-1 flex h-[400px] w-full flex-col items-start justify-between overflow-hidden rounded-2xl border border-gray-300 bg-white p-5 shadow-sm">
      <div className="flex w-full flex-col items-start justify-start">
        <div className="flex size-8 items-center justify-center rounded-sm bg-gray-200 text-sm font-medium text-gray-500">
          0{data.id}
        </div>
        <span className="mt-5 mb-2.5 w-full text-left text-[16px] leading-[18px] font-semibold">
          {data.title}
        </span>
        <span className="text-muted-foreground w-full pr-16 text-left text-sm">
          {data.description}
        </span>
      </div>
      <div className="relative mx-auto mt-[44px] flex aspect-square w-[300px] items-center justify-center">
        {/* Rotating Ring 2 */}
        <div
          style={{
            animationDuration: "15s",
          }}
          className="absolute flex aspect-square w-80 animate-spin items-center justify-center rounded-full border border-gray-300/25"
        >
          <div className="absolute -top-5 size-10 rounded-full border bg-white p-2 shadow">
            <Image src={OutlookIcon} alt="outlook" className="size-full" />
          </div>
        </div>
        {/* Rotating Ring 1 */}
        <div
          style={{
            animationDuration: "10s",
          }}
          className="absolute flex aspect-square w-60 animate-spin items-center justify-center rounded-full border border-gray-300/50"
        >
          <div className="absolute -top-5 size-10 rounded-full border bg-white p-2 shadow">
            <Image src={OutlookIcon} alt="outlook" className="size-full" />
          </div>
        </div>
        {/* Inner Most Circle */}
        <div className="absolute flex aspect-square w-40 items-center justify-center rounded-full border border-gray-300/75">
          <span className="rounded-full border px-5 py-2 font-semibold shadow">
            Cal.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
