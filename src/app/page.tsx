import Copyright from "@/components/copyright";
import Footer from "@/components/footer";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";
import Benefits from "@/sections/benefits";
import Clientele from "@/sections/clientele";
import Contact from "@/sections/contact";
import Founder from "@/sections/founder";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import Services from "@/sections/services";
import Testimonials from "@/sections/testimonials";

const Page = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start bg-brand-950">
      <MaxWidthWrapper className="z-[1] p-5">
        <Navbar />
        <Hero />
        <Founder />
        <Services />
        <Clientele />
      </MaxWidthWrapper>
      <Testimonials />
      <MaxWidthWrapper className="z-[1]">
        <Projects />
        <Benefits />
        <Contact />
      </MaxWidthWrapper>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Page;
