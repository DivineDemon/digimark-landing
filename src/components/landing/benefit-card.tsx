import { Label } from "../ui/label";
import { Select, SelectTrigger, SelectValue } from "../ui/select";

interface BenefitCardProps {
  data: {
    title: string;
    description: string;
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
      <div className="absolute inset-x-0 top-[226px] z-[2] mx-auto flex aspect-square w-[71.5%] flex-col items-start justify-start gap-5 rounded-3xl border border-gray-400/65 bg-white p-5">
        <span className="w-full text-left text-[18px] leading-[18px] font-semibold text-gray-400">
          Notice and buffers
        </span>
        <div className="grid w-full grid-cols-2 gap-5">
          <div className="col-span-2 flex w-full flex-col items-center justify-center gap-1">
            <Label className="w-full text-left text-[13px] leading-[13px] font-semibold">
              Minimum Notice
            </Label>
            <Select disabled={true}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="2 Days" />
              </SelectTrigger>
            </Select>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-1">
            <Label className="w-full text-left text-[13px] leading-[13px] font-semibold">
              Buffer before event
            </Label>
            <Select disabled={true}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="30 mins" />
              </SelectTrigger>
            </Select>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-1">
            <Label className="w-full text-left text-[13px] leading-[13px] font-semibold">
              Buffer after event
            </Label>
            <Select disabled={true}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="45 mins" />
              </SelectTrigger>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
