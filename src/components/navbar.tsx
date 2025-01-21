import Image from "next/image";

import { Edit } from "lucide-react";

import Logo from "@/assets/img/logo.png";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-y border-white bg-transparent py-3.5">
      <Image src={Logo} alt="company-logo" className="w-40" />
      <div className="flex items-center justify-center gap-10 font-medium uppercase text-white">
        <span>Services</span>
        <span>Projects</span>
        <span>Our Process</span>
        <span>Open Source</span>
        <span>Our Blog</span>
      </div>
      <button className="flex items-center justify-center gap-3 rounded-full bg-white py-1.5 pl-6 pr-1.5">
        <span className="flex-1 text-left font-semibold uppercase">
          contact us
        </span>
        <div className="size-8 rounded-full bg-brand-500 p-2 text-white">
          <Edit className="size-full" />
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
