"use client";

import Image from "next/image";
import { useState } from "react";

import { ChevronLeftCircle, ChevronRightCircle, Play } from "lucide-react";

import DummyDP from "@/assets/img/dummy-dp.png";
import HeroFolder from "@/assets/img/hero-folder.webp";
import ProjectCard from "@/components/projects/project-card";
import { projects } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="relative mb-24 mt-48 flex w-full items-center justify-center">
      {/* <Image
        src={HeroFolder}
        alt="flipped-folder"
        className="z-0 aspect-[9/16] h-[320px] w-full scale-x-[-1] transform md:aspect-auto md:h-auto"
      /> */}
      <div
        className="relative h-[300px] w-full overflow-hidden md:h-[475px] lg:h-[800px]"
        style={{
          filter: "url(#flt_tag)",
        }}
      >
        <div
          className="relative h-full w-full overflow-hidden bg-brand-500"
          style={{
            clipPath:
              "polygon(35% 10%, 100% 10%, 100% 100%, 0 100%, 0 0, 25% 0)",
          }}
        ></div>
        <svg className="absolute">
          <defs>
            <filter id="flt_tag">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="8"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="flt_tag"
              />
              <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>
      {/* <div className="absolute inset-0 z-[1] flex h-full w-full flex-col items-center justify-between gap-3 p-3 md:gap-5 md:p-5 xl:gap-8 xl:p-8">
        <div className="flex w-full items-end justify-between">
          <span className="w-full text-left text-3xl font-[600] uppercase tracking-tighter text-brand-950 md:text-5xl lg:text-6xl xl:text-[120px] xl:leading-[100px]">
            our
            <br />
            projects
          </span>
          <div className="flex items-center justify-center -space-x-2 pr-3 xl:-space-x-6 xl:pr-8">
            <Image
              src={DummyDP}
              alt="dummy-dp"
              className="size-10 rounded-full md:size-14 xl:size-28"
            />
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-950 md:size-14 xl:size-28">
              <Play className="size-4 text-white xl:size-7" fill="white" />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-5 overflow-hidden lg:gap-8">
          <div
            className="flex w-full items-start justify-start"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="flex w-full items-center justify-center text-brand-950">
            <button type="button" onClick={handlePrev}>
              <ChevronLeftCircle className="size-10" />
            </button>
            <button type="button" onClick={handleNext} className="ml-5 mr-10">
              <ChevronRightCircle className="size-10" />
            </button>
            <div className="h-2 flex-1 rounded-full border border-brand-950">
              <div
                className={cn(
                  "h-full rounded-full bg-brand-950 transition-[width] duration-200",
                  {
                    "w-1/4": currentIndex === 0,
                    "w-1/2": currentIndex === 1,
                    "w-3/4": currentIndex === 2,
                    "w-full": currentIndex === 3,
                  }
                )}
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
