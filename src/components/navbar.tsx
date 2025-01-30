"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import {
  Contact,
  Edit,
  FolderKanban,
  HandPlatter,
  PackageOpen,
  PackageSearch,
  PanelRight,
  Rss,
  X,
} from "lucide-react";

import Logo from "@/assets/img/logo.png";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);

  useOnClickOutside(mobileMenuRef, () => {
    setToggleMobileMenu(false);
  });

  return (
    <nav className="flex w-full items-center justify-between border-y border-white bg-transparent py-3.5">
      <Image src={Logo} alt="company-logo" className="w-32 lg:w-40" />
      <div className="hidden items-center justify-center gap-10 text-sm font-medium uppercase text-white lg:flex xl:text-base">
        <span>Services</span>
        <span>Projects</span>
        <span>Our Process</span>
        <span>Open Source</span>
        <span>Our Blog</span>
      </div>
      <button className="hidden items-center justify-center gap-3 rounded-full bg-white py-1.5 pl-6 pr-1.5 lg:flex">
        <span className="flex-1 text-left text-sm font-semibold uppercase xl:text-base">
          contact us
        </span>
        <div className="size-8 rounded-full bg-brand-500 p-2 text-white">
          <Edit className="size-full" />
        </div>
      </button>
      <button
        type="button"
        onClick={() => setToggleMobileMenu(true)}
        className="flex size-10 items-center justify-center rounded-md p-2 transition-colors duration-150 hover:bg-brand-500/30 lg:hidden"
      >
        <PanelRight className="size-full text-white" />
      </button>
      <div
        ref={mobileMenuRef}
        className={cn(
          "fixed right-0 top-0 z-[5] flex h-screen w-60 translate-x-60 flex-col items-center justify-start border-l border-brand-500/30 bg-brand-950 text-white transition-all duration-200 ease-in-out lg:hidden",
          {
            "translate-x-0": toggleMobileMenu,
          }
        )}
      >
        <div className="flex w-full items-center justify-center border-b border-brand-500/30 py-2.5 pl-5 pr-3.5">
          <span className="flex-1 text-left font-semibold">Menu</span>
          <button
            type="button"
            onClick={() => setToggleMobileMenu(false)}
            className="size-5"
          >
            <X className="size-full" />
          </button>
        </div>
        <div
          onClick={() => setToggleMobileMenu(false)}
          className="flex w-full items-center justify-center gap-5 p-3.5 transition-colors duration-150 hover:bg-brand-500/30 hover:text-white"
        >
          <HandPlatter className="size-4" />
          <span className="flex-1 text-left text-sm">Services</span>
        </div>
        <div
          onClick={() => setToggleMobileMenu(false)}
          className="flex w-full items-center justify-center gap-5 p-3.5 transition-colors duration-150 hover:bg-brand-500/30 hover:text-white"
        >
          <FolderKanban className="size-4" />
          <span className="flex-1 text-left text-sm">Projects</span>
        </div>
        <div
          onClick={() => setToggleMobileMenu(false)}
          className="flex w-full items-center justify-center gap-5 p-3.5 transition-colors duration-150 hover:bg-brand-500/30 hover:text-white"
        >
          <PackageSearch className="size-4" />
          <span className="flex-1 text-left text-sm">Our Process</span>
        </div>
        <div
          onClick={() => setToggleMobileMenu(false)}
          className="flex w-full items-center justify-center gap-5 p-3.5 transition-colors duration-150 hover:bg-brand-500/30 hover:text-white"
        >
          <PackageOpen className="size-4" />
          <span className="flex-1 text-left text-sm">Open Source</span>
        </div>
        <div
          onClick={() => setToggleMobileMenu(false)}
          className="flex w-full items-center justify-center gap-5 p-3.5 transition-colors duration-150 hover:bg-brand-500/30 hover:text-white"
        >
          <Rss className="size-4" />
          <span className="flex-1 text-left text-sm">Our Blog</span>
        </div>
        <div
          onClick={() => setToggleMobileMenu(false)}
          className="flex w-full items-center justify-center gap-5 p-3.5 transition-colors duration-150 hover:bg-brand-500/30 hover:text-white"
        >
          <Contact className="size-4" />
          <span className="flex-1 text-left text-sm">Contact Us</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
