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
      <Image
        src={HeroFolder}
        alt="flipped-folder"
        className="z-0 w-full scale-x-[-1] transform"
      />
      <div className="absolute inset-0 z-[1] flex h-full w-full flex-col items-center justify-between gap-8 p-8">
        <div className="flex w-full items-end justify-between">
          <span className="w-full text-left text-[120px] font-[600] uppercase !leading-[100px] tracking-tighter text-brand-950">
            our
            <br />
            projects
          </span>
          <div className="flex items-center justify-center -space-x-6 pr-8">
            <Image
              src={DummyDP}
              alt="dummy-dp"
              className="size-28 rounded-full"
            />
            <div className="flex size-28 shrink-0 items-center justify-center rounded-full bg-brand-950">
              <Play className="size-7 text-white" fill="white" />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-8 overflow-x-hidden">
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
            <ChevronLeftCircle
              onClick={handlePrev}
              className="size-10 cursor-pointer"
            />
            <ChevronRightCircle
              onClick={handleNext}
              className="ml-5 mr-10 size-10 cursor-pointer"
            />
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
      </div>
    </div>
  );
};

export default Projects;
