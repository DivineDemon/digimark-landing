import { Users2 } from "lucide-react";
import Image from "next/image";
import { teamMembers } from "@/lib/constants";
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
      <div className="mx-auto my-14 flex w-full max-w-4xl flex-wrap items-center justify-around md:w-3/5 ">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="mt-2 flex flex-col items-center justify-center py-3">
            <div className="flex size-28 shrink-0 items-center justify-end overflow-hidden rounded-full bg-white shadow">
              <Image src={member.image} alt={`${member.name} photo`} className="size-full object-cover object-top" />
            </div>
            <span className="mt-2.5 w-full text-center font-semibold text-[18px] sm:text-[22px]">{member.name}</span>
            <span className="w-3/4 text-center text-[10px] text-muted-foreground sm:text-[14px]">
              {member.designation}
            </span>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Team;
