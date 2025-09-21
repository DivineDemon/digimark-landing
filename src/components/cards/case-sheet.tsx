"use client";

import { X } from "lucide-react";
import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";
import CustomLink from "../custom-link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";

interface CaseSheetProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CaseSheet = ({ open, setOpen }: CaseSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full gap-0 border-0 md:max-w-[50vw]">
        <SheetHeader className="flex w-full flex-row items-center justify-center gap-5 border-b p-5">
          <Image
            src="https://framerusercontent.com/images/X49sY7TciBHxTW2UK1BaMcxis.jpg"
            alt="client-logo"
            width={500}
            height={500}
            className="aspect-square size-10 shrink-0 rounded-md object-cover"
          />
          <div className="flex flex-1 flex-col items-center justify-center">
            <SheetTitle className="w-full text-left">Harvard</SheetTitle>
            <SheetDescription className="w-full text-left">Empowering youth with neuroscience.</SheetDescription>
          </div>
          <div onClick={() => setOpen(false)} className="size-10 rounded-full bg-gray-200 p-2.5 text-gray-600">
            <X className="size-full" />
          </div>
        </SheetHeader>
        <div className="flex h-full w-full flex-col items-start justify-start overflow-y-auto">
          <div className="flex w-full flex-col items-center justify-center gap-5 p-10">
            <span className="w-full text-left font-light text-[48px] leading-[60px]">
              Helping empower the incarcerated youth with neuroscience.
            </span>
            <span className="mr-auto w-full max-w-prose text-pretty text-left text-muted-foreground text-sm">
              Collaborating closely with Monogram, we helped design the InCite Library, a digital platform created for
              the Center for Law, Brain & Behavior at Massachusetts General Hospital. This AI-powered library
              democratizes complex neuroscience and legal research by allowing incarcerated youth, legal professionals,
              and policymakers to access and understand critical information at varying reading levels.
            </span>
            <div className="flex w-full items-start justify-start gap-2">
              {["Brand", "Product", "Web"].map((item, idx) => (
                <span key={idx} className="rounded-full bg-gray-200 px-4 py-2 text-[12px] text-gray-600 leading-[12px]">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-2.5">
            <Image
              src="https://framerusercontent.com/images/EGCY2shnjWtz3nE6PtBundg6vkM.jpg"
              alt="project-photo"
              width={1000}
              height={1000}
              className="col-span-2 h-full w-full object-cover"
            />
            <Image
              src="https://framerusercontent.com/images/EGCY2shnjWtz3nE6PtBundg6vkM.jpg"
              alt="project-photo"
              width={1000}
              height={1000}
              className="zcol-span-1 h-full w-full object-cover"
            />
            <Image
              src="https://framerusercontent.com/images/EGCY2shnjWtz3nE6PtBundg6vkM.jpg"
              alt="project-photo"
              width={1000}
              height={1000}
              className="zcol-span-1 h-full w-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-5 p-10">
            <span className="w-full text-left font-light text-[48px] leading-[60px]">
              Let&apos;s create something extraordinary together
            </span>
            <span className="mr-auto w-full max-w-prose text-pretty text-left text-muted-foreground text-sm">
              We start every partnership with a free discovery call — a chance to understand your goals, challenges, and
              vision. It&apos;s an open conversation to explore ideas, share insights, and see if we&apos;re the right
              fit. Book yours today and let&apos;s begin shaping your next project.
            </span>
            <CustomLink href="https://calendly.com/digimark-developers" size="lg" className="mr-auto">
              Book a Call
            </CustomLink>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CaseSheet;
