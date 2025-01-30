import Image from "next/image";
import { Fragment } from "react";

import DummyBrandTwo from "@/assets/img/dummy-brand2.svg";
import EarthGIF from "@/assets/img/earth.gif";
import { cn } from "@/lib/utils";

const Clientele = () => {
  return (
    <div className="mb-24 mt-48 grid w-full grid-cols-2 text-white md:grid-cols-4">
      {[...Array(7)].map((_, idx) => (
        <Fragment key={idx}>
          <div
            className={cn(
              "group col-span-1 hidden aspect-square w-full flex-col items-center justify-center gap-2.5 p-5 md:flex",
              {
                "border-b border-r border-white/30": idx < 3,
                "border-b border-white/30": idx === 3,
                "border-r border-white/30": idx > 3,
              }
            )}
          >
            <Image
              src={DummyBrandTwo}
              alt="dummy-brand-2"
              className="h-20 translate-y-12 transition-transform duration-200 group-hover:-translate-y-2 lg:translate-y-7"
            />
            <span className="w-full text-center text-gray-400 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </span>
          </div>
          <div
            key={idx}
            className={cn(
              "group col-span-1 flex aspect-square w-full flex-col items-center justify-center gap-2.5 p-5 md:hidden",
              {
                "border-r border-white/30": idx % 2 === 0,
                "border-b border-white/30": idx < 6,
              }
            )}
          >
            <Image
              src={DummyBrandTwo}
              alt="dummy-brand-2"
              className="h-20 translate-y-12 transition-transform duration-200 group-hover:-translate-y-2 md:translate-y-7"
            />
            <span className="w-full text-center text-gray-400 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </span>
          </div>
        </Fragment>
      ))}
      <div className="col-span-1 flex aspect-square w-full flex-col items-center justify-center gap-2.5 border-white/30 p-5">
        <Image src={EarthGIF} alt="earth-gif" className="size-32" />
        <span className="w-full text-center font-semibold">
          500+ clients worldwide
        </span>
      </div>
    </div>
  );
};

export default Clientele;
