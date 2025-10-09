"use client";

import Image from "next/image";
import { useState } from "react";
import CaseSheet from "./case-sheet";

interface CaseCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  logo: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ id, title, description, image, logo }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="relative col-span-1 h-full w-full cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Image
          src={image}
          alt={title}
          width={1000}
          height={1000}
          className="z-[0] aspect-[9/16] h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-b from-transparent via-transparent to-black p-5">
          <div className="flex w-full items-center justify-center gap-3.5">
            <Image
              src={logo}
              alt={`${title} logo`}
              width={500}
              height={500}
              className="aspect-square size-10 rounded-md object-cover"
            />
            <div className="flex w-full flex-col items-center justify-center gap-2 text-white hidden sm:block">
              <span className="w-full text-left font-semibold text-[14px] leading-[14px]">
                {title}
              </span>
              <span className="hidden w-full text-left text-[14px] text-gray-400 leading-[14px] sm:block">
                {description}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal or sheet */}
      <CaseSheet open={open} setOpen={setOpen} caseId={id} />
    </>
  );
};

export default CaseCard;
