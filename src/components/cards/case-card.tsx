"use client";

import { ArrowRight } from "lucide-react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";
import CaseSheet from "./case-sheet";

interface CaseCardProps {
  id: number;
  title: string;
  header: string;
  header_desc: string;
  mainImg: StaticImageData;
  logo: StaticImageData;
  tagList: string[];
}

const CaseCard: React.FC<CaseCardProps> = ({
  id,
  title,
  header,
  header_desc,
  mainImg,
  logo,
  tagList,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="group relative flex flex-col overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg h-[580px] sm:h-[620px] md:h-[660px] cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {/* Top Image Section (40%) with top padding */}
        <div className="relative h-[40%] w-full overflow-hidden pt-3 sm:pt-4 md:pt-5 px-3">
          <div className="rounded-2xl overflow-hidden h-full w-full">
            <Image
              src={mainImg}
              alt={title}
              width={1000}
              height={1000}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Content Section (60%) */}
        <div className="flex flex-col justify-between h-[60%] p-6 md:p-8 space-y-4">
          <div className="flex flex-col gap-4 overflow-hidden">
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

            {/* Header */}
            <span className=" text-lg md:text-2xl leading-snug text-gray-900 font-semibold">
              {header}
            </span>

            {/* Header Description */}
            <span className="text-sm text-muted-foreground leading-relaxed">
              {header_desc}
            </span>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {tagList.slice(0, 3).map((item, idx) => (
                <span
                  key={idx}
                  className="rounded font-semibold bg-gray-100 px-3 py-1.5 text-[10px] text-gray-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <button
              type="button"
              className="group relative flex items-center justify-center w-full h-12 rounded-md border border-[#505692] px-4 text-sm font-medium text-[#505692] transition-all hover:bg-[#505692] hover:text-white cursor-pointer"
            >
              {/* Text — hidden on mobile */}
              <span className="hidden sm:inline">View Case Study</span>

              {/* Vertical border — hidden on mobile */}
              <span className="hidden sm:block absolute right-12 top-0 bottom-0 w-px bg-[#505692] transition-colors group-hover:bg-white" />

              {/* Arrow — slightly smaller on desktop */}
              <ArrowRight className="w-6 h-6 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:text-white sm:absolute sm:right-4" />
            </button>
          </div>


        </div>
      </div>

      {/* Modal / Sheet */}
      <CaseSheet open={open} setOpen={setOpen} caseId={id} />
    </>
  );
};

export default CaseCard;
