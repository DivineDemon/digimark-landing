import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";
import Benefits from "@/sections/benefits";
import Clientele from "@/sections/clientele";
import Founder from "@/sections/founder";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import Services from "@/sections/services";
import Testimonials from "@/sections/testimonials";

const Page = () => {
  return (
    <div className="relative flex w-full flex-col items-start justify-start bg-brand-950">
      <MaxWidthWrapper className="z-[1] p-5">
        <Navbar />
        <Hero />
        <Founder />
        <Services />
        <Clientele />
      </MaxWidthWrapper>
      {/* <div className="absolute z-0 -bottom-0 inset-x-0 h-96 rounded-t-full bg-brand-300/50 filter blur-2xl"></div> */}
      <Testimonials />
      <MaxWidthWrapper className="z-[1]">
        <Projects />
        <Benefits />
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
