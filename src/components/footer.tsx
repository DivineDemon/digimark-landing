import Image from "next/image";

import { Dribbble, Mail } from "lucide-react";

import Whatsapp from "@/assets/img/whatsapp.svg";

import MaxWidthWrapper from "./max-width-wrapper";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden bg-brand-500 py-12 xl:py-24">
      <MaxWidthWrapper>
        <div className="grid w-full grid-cols-1 items-center justify-center gap-10 p-5 md:grid-cols-2 md:gap-0 lg:grid-cols-3 xl:p-0">
          <div className="col-span-1 flex w-full flex-col items-center justify-center gap-14">
            <span className="w-full text-left text-4xl font-bold !leading-[36px] tracking-tighter text-brand-950">
              Subscribe to our newsletter to stay in touch with the latest.
            </span>
            <div className="flex w-full items-center justify-center gap-5 rounded-full border border-brand-950 py-2 pl-8 pr-2">
              <input
                type="email"
                className="flex-1 bg-transparent text-brand-950 placeholder:text-brand-950"
                placeholder="Your email address"
              />
              <div className="size-10 rounded-full bg-brand-950 p-2 text-white">
                <Mail />
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2.5">
              <span className="w-full text-left font-bold uppercase text-white">
                follow us here:
              </span>
              <div className="grid w-full grid-cols-7 items-center justify-center gap-2.5">
                {[...Array(7)].map((_, idx) => (
                  <div
                    key={idx}
                    className="size- group rounded-full border border-brand-950 p-3 transition-colors duration-200 hover:bg-brand-950"
                  >
                    <Dribbble className="size-full text-brand-950 transition-colors duration-200 group-hover:text-white" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-1 flex h-full w-full flex-col items-start justify-start gap-3.5 text-brand-950">
            <span className="w-full text-left text-2xl font-bold capitalize md:pl-28 lg:pl-16 xl:pl-28">
              our services+
            </span>
            <span className="w-full text-left text-2xl font-bold capitalize md:pl-28 lg:pl-16 xl:pl-28">
              projects
            </span>
            <span className="w-full text-left text-2xl font-bold capitalize md:pl-28 lg:pl-16 xl:pl-28">
              our process
            </span>
            <span className="w-full text-left text-2xl font-bold capitalize md:pl-28 lg:pl-16 xl:pl-28">
              open source
            </span>
            <span className="w-full text-left text-2xl font-bold capitalize md:pl-28 lg:pl-16 xl:pl-28">
              referral program
            </span>
            <span className="w-full text-left text-2xl font-bold capitalize md:pl-28 lg:pl-16 xl:pl-28">
              contacts
            </span>
            <span className="w-full text-left text-2xl font-bold capitalize md:pl-28 lg:pl-16 xl:pl-28">
              blog
            </span>
          </div>
          <div className="col-span-1 flex h-full w-full flex-col items-start justify-start gap-10 md:mt-12 lg:mt-0">
            <div className="flex w-full flex-col items-center justify-center gap-2.5">
              <span className="w-full text-left font-bold uppercase text-white">
                Drop us a line
              </span>
              <span className="w-full text-left text-2xl font-bold text-brand-950">
                info@digimark.com
              </span>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2.5">
              <span className="w-full text-left font-bold uppercase text-white">
                call us
              </span>
              <div className="flex w-full items-center justify-center gap-3.5">
                <Image src={Whatsapp} alt="whatsapp" className="size-6" />
                <span className="w-full text-left text-2xl font-bold text-brand-950">
                  +92 (326) 8860-405
                </span>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
