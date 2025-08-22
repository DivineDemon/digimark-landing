import { Users2 } from "lucide-react";
import Image from "next/image";
import Employee from "@/assets/img/dd.png";
import MaxWidthWrapper from "../max-width-wrapper";

const Team = () => {
  return (
    <MaxWidthWrapper className="h-full py-20" isTopAccent>
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <span className="mx-auto flex rounded-full border bg-white px-2.5 py-1 font-medium text-xs shadow">
          <Users2 className="mt-[0.5px] mr-2 size-3.5" />
          Our Soldiers
        </span>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="mx-auto flex font-semibold text-5xl">Our Team</span>
        </div>
        <span className="w-full px-2.5 text-center text-muted-foreground">
          We are a team of passionate and experienced professionals
          <br />
          dedicated to delivering exceptional digital solutions that drive results for our clients.
        </span>
      </div>
      <div className="mx-auto mt-14 mb-10 flex w-full max-w-1/2 items-center justify-center gap-14">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="flex w-fit flex-col items-center justify-center">
            <div className="flex size-28 shrink-0 items-center justify-end overflow-hidden rounded-full bg-white shadow">
              <Image src={Employee} alt="employee-img" className="mt-10 size-full object-cover" />
            </div>
            <span className="left-[24px] mt-2.5 w-full text-center font-semibold text-[24px]">Jane Doe</span>
            <span className="left-[14px] w-full text-center text-[14px] text-muted-foreground">
              Executive Sales Manager
            </span>
          </div>
        ))}
      </div>
      <div className="mx-auto mb-10 flex w-full max-w-1/2 items-center justify-center gap-14">
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="flex w-fit flex-col items-center justify-center">
            <div className="flex size-28 shrink-0 items-center justify-end overflow-hidden rounded-full bg-white shadow">
              <Image src={Employee} alt="employee-img" className="mt-10 size-full object-cover" />
            </div>
            <span className="left-[24px] mt-2.5 w-full text-center font-semibold text-[24px]">Jane Doe</span>
            <span className="left-[14px] w-full text-center text-[14px] text-muted-foreground">
              Executive Sales Manager
            </span>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Team;
