import { Users2 } from "lucide-react";
import Image from "next/image";
import { teamMembers } from "@/lib/constants";
import MaxWidthWrapper from "../max-width-wrapper";
import linkedinIcon from "@/assets/icons/socials/linkedin.png"; // replace with your icon

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
            <div className="flex size-28 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-gray-50 to-white shadow-md">
              <Image
                src={member.image}
                alt={`${member.name} photo`}
                width={112}
                height={112}
                className="size-full object-cover object-top rounded-full [image-rendering:smooth] transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>

            {/* Name with LinkedIn icon */}
            <div className="mt-2.5 flex items-center gap-2">
              <span className="text-center font-semibold text-[18px] sm:text-[22px]">
                {member.name}
              </span>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Image
                    src={linkedinIcon}
                    alt="LinkedIn"
                    width={30}
                    height={30}
                    className="rounded-full border bg-white p-[2px] shadow hover:scale-110 transition-transform"
                  />
                </a>
              )}
            </div>

            {/* Fixed height container for designation to prevent shifting */}
            <span
              className="w-3/4 text-center text-[11px] text-muted-foreground sm:text-[14px] mt-1"
              style={{ minHeight: "38px" }}
            >
              {member.designation}
            </span>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Team;
