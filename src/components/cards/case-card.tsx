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

const CaseCard: React.FC<CaseCardProps> = ({ id, title, header, header_desc, mainImg, logo, tagList }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className=" hover:-translate-y-1 relative mb-2 flex h-[580px] cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:shadow-lg sm:h-[620px] sm:rounded-2xl md:h-[660px] md:rounded-3xl"
        onClick={() => setOpen(true)}
      >
        {/* Top Image Section (40%) with top padding */}
        <div className="relative h-[40%] w-full overflow-hidden px-3 pt-3 sm:pt-4 md:pt-5">
          <div className="h-full w-full overflow-hidden rounded-2xl">
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
        <div className="flex h-[60%] flex-col justify-between space-y-4 p-6 md:p-8">
          <div className="flex flex-col gap-4 overflow-hidden">
            {/* Title */}
            <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>

            {/* Header */}
            <span className=" font-semibold text-gray-900 text-lg leading-snug md:text-2xl">{header}</span>

            {/* Header Description */}
            <span className="text-muted-foreground text-sm leading-relaxed">{header_desc}</span>

            {/* Tags */}
            <div className="my-auto flex flex-wrap gap-2">
              {tagList.slice(0, 3).map((item, idx) => (
                <span key={idx} className="rounded bg-gray-100 px-3 py-1.5 font-semibold text-[10px] text-gray-600">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <button
              type="button"
              className="group relative flex h-12 w-full cursor-pointer items-center justify-center rounded-md border border-[#505692] px-4 font-medium text-[#505692] text-sm transition-all hover:bg-[#505692] hover:text-white"
            >
              {/* Text — now always visible */}
              <span>View Case Study</span>

              {/* Vertical border — now always visible */}
              <span className="absolute top-0 right-12 bottom-0 w-px bg-[#505692] transition-colors group-hover:bg-white" />

              {/* Arrow — always visible and aligned properly */}
              <ArrowRight className="absolute right-4 h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:text-white" />
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
