import Image from "next/image";

import EarthGIF from "@/assets/img/earth.gif";
import { cn } from "@/lib/utils";

const Clientele = () => {
  return (
    <div className="mb-24 mt-48 grid w-full grid-cols-4 text-white">
      {[...Array(7)].map((_, idx) => (
        <div
          key={idx}
          className={cn(
            "group col-span-1 flex aspect-square w-full flex-col items-center justify-center gap-2.5 p-5",
            {
              "border-b border-r border-white/30": idx < 3,
              "border-b border-white/30": idx === 3,
              "border-r border-white/30": idx > 3,
            }
          )}
        >
          <span className="w-full text-center">icon</span>
          <span className="w-full text-center text-gray-400 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </span>
        </div>
      ))}
      <div className="col-span-1 flex aspect-square w-full flex-col items-center justify-center gap-2.5 border-white/30 p-5">
        <Image src={EarthGIF} alt="earth-gif" className="size-32" />
        <span className="font-semibold">500+ clients worldwide</span>
      </div>
    </div>
  );
};

export default Clientele;
