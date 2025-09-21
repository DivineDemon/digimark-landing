"use client";

import Image from "next/image";
import { useState } from "react";
import CaseSheet from "./case-sheet";

const CaseCard = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="relative col-span-1 h-full w-full cursor-pointer" onClick={() => setOpen(true)}>
        <Image
          src="https://framerusercontent.com/images/EGCY2shnjWtz3nE6PtBundg6vkM.jpg"
          alt="project-photo"
          width={1000}
          height={1000}
          className="z-[0] aspect-[9/16] h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-b from-transparent via-transparent to-black p-5">
          <div className="flex w-full items-center justify-center gap-3.5">
            <Image
              src="https://framerusercontent.com/images/X49sY7TciBHxTW2UK1BaMcxis.jpg"
              alt="client-logo"
              width={500}
              height={500}
              className="aspect-square size-10 rounded-md object-cover"
            />
            <div className="flex w-full flex-col items-center justify-center gap-2 text-white">
              <span className="w-full text-left font-semibold text-[14px] leading-[14px]">Harvard</span>
              <span className="w-full text-left text-[14px] text-gray-400 leading-[14px]">
                Empowering youth with neuroscience
              </span>
            </div>
          </div>
        </div>
      </div>
      <CaseSheet open={open} setOpen={setOpen} />
    </>
  );
};

export default CaseCard;
