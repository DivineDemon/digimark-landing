import { teamMembers } from "@/lib/constants";
import { Users2 } from "lucide-react";
import Image from "next/image";
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
      <div className="mx-auto my-14 flex w-full md:w-3/5 max-w-4xl items-center justify-around flex-wrap  ">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center mt-2 py-3">
            <div className="flex size-28 shrink-0 items-center justify-end overflow-hidden rounded-full bg-white shadow">
              <Image
                src={member.image}
                alt={`${member.name} photo`}
                className="size-full object-top object-cover"
              />
            </div>
            <span className="mt-2.5 w-full text-center font-semibold text-[18px] sm:text-[22px]">
              {member.name}
            </span>
            <span className="w-3/4 text-center text-[10px] sm:text-[14px] text-muted-foreground">
              {member.designation}
            </span>
          </div>
        ))}
      </div>

    </MaxWidthWrapper>
  );
};

export default Team;
