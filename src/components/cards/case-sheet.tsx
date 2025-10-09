"use client";

import { casesData } from "@/lib/constants";
import { X } from "lucide-react";
import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";
import CustomLink from "../custom-link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

interface CaseSheetProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  caseId: number;
}

const CaseSheet = ({ open, setOpen, caseId }: CaseSheetProps) => {
  const caseItem = casesData.find((c) => c.id === caseId);

  if (!caseItem) return null;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full gap-0 border-0 md:max-w-[50vw]">
        {/* HEADER */}
        <SheetHeader className="flex w-full flex-row items-center justify-center gap-5 border-b p-5">
          <Image
            src={caseItem.logo}
            alt={`${caseItem.title} logo`}
            width={500}
            height={500}
            className={`aspect-square size-10 shrink-0 rounded-md object-cover ${caseItem.title === "Setter AI" ? "invert" : ""}`}
          />
          <div className="flex flex-1 flex-col items-center justify-center">
            <SheetTitle className="w-full text-left">{caseItem.title}</SheetTitle>
            <SheetDescription className="w-full text-left">
              {caseItem.description}
            </SheetDescription>
          </div>
          <div
            onClick={() => setOpen(false)}
            className="size-10 cursor-pointer rounded-full bg-gray-200 p-2.5 text-gray-600 hover:bg-gray-300 transition"
          >
            <X className="size-full" />
          </div>
        </SheetHeader>

        {/* BODY */}
        <div className="flex h-full w-full flex-col items-start justify-start overflow-y-auto">
          <div className="flex w-full flex-col items-center justify-center gap-5 p-10">
            <span className="w-full text-left font-light text-[48px] leading-[60px]">
              {caseItem.header}
            </span>
            <span className="mr-auto w-full max-w-prose text-pretty text-left text-muted-foreground text-sm">
              {caseItem.header_desc}
            </span>
            <div className="flex w-full items-start justify-start gap-2">
              {["Brand", "Product", "Web"].map((item, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-gray-200 px-4 py-2 text-[12px] text-gray-600 leading-[12px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* IMAGES */}
          <div className="grid w-full grid-cols-2 gap-2.5">
            <Image
              src={caseItem.image}
              alt={`${caseItem.title} main project image`}
              width={1000}
              height={1000}
              className="col-span-2 h-full w-full object-cover"
            />
            <Image
              src={caseItem.image2}
              alt={`${caseItem.title} secondary image`}
              width={1000}
              height={1000}
              className="col-span-1 h-full w-full object-cover"
            />
            <Image
              src={caseItem.image3}
              alt={`${caseItem.title} secondary image`}
              width={1000}
              height={1000}
              className="col-span-1 h-full w-full object-cover"
            />
          </div>
          {/* Text Sections */}
          <div className="flex flex-col w-full gap-10 p-8">
            {caseItem.sections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed text-sm">
                  {section.content.trim()}
                </p>
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className="flex w-full flex-col items-center justify-center gap-5 p-10">
            <span className="w-full text-left font-light text-[48px] leading-[60px]">
              Let&apos;s create something extraordinary together
            </span>
            <span className="mr-auto w-full max-w-prose text-pretty text-left text-muted-foreground text-sm">
              We start every partnership with a free discovery call — a chance
              to understand your goals, challenges, and vision. It&apos;s an
              open conversation to explore ideas, share insights, and see if
              we&apos;re the right fit. Book yours today and let&apos;s begin
              shaping your next project.
            </span>
            <CustomLink
              href="https://calendly.com/digimark-developers"
              size="lg"
              className="mr-auto"
            >
              Book a Call
            </CustomLink>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CaseSheet;
