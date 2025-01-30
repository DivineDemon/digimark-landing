import Image, { type StaticImageData } from "next/image";

interface ProjectCardProps {
  project: {
    brand: StaticImageData;
    title: string;
    description: string;
    tags: string[];
    flag: string;
    video: StaticImageData;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="grid h-auto w-full shrink-0 grid-cols-2 rounded-xl bg-brand-950/50 md:h-full">
      <div className="col-span-1 flex w-full flex-col items-start justify-start p-2 text-white md:h-full md:p-5 xl:p-10">
        <Image src={project.brand} alt="dummy-brand-3" />
        <span className="mb-2.5 mt-5 hidden w-full text-pretty text-left md:flex md:text-xl lg:mb-5 lg:mt-7 lg:text-[45px] lg:leading-[50px]">
          {project.title}
        </span>
        <span className="hidden w-full text-left md:flex md:text-xs">
          {project.description}
        </span>
        <div className="mt-auto flex w-full items-center justify-start">
          <span className="hidden pt-1 uppercase md:flex">
            {project.tags.join(", ")}
          </span>
          <span className="flex pt-1 text-xs uppercase md:hidden">
            {project.tags.slice(0, 1).join(", ")}
          </span>
          &nbsp;|&nbsp;
          <span className="pt-0.5 text-xs md:text-2xl">{project.flag}</span>
        </div>
      </div>
      <div
        className="col-span-1 h-full w-full"
        style={{
          filter: "url(#flt_tag)",
        }}
      >
        <div
          className="h-full w-full overflow-hidden bg-white"
          style={{
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 15%)",
          }}
        >
          <Image
            src={project.video}
            alt="dummy-project-gif"
            className="h-full"
          />
        </div>
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
    </div>
  );
};

export default ProjectCard;
