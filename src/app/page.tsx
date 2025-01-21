import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";
import Clientele from "@/sections/clientele";
import Founder from "@/sections/founder";
import Hero from "@/sections/hero";
import Services from "@/sections/services";
import Testimonials from "@/sections/testimonials";

const Page = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start bg-brand-950">
      <MaxWidthWrapper className="p-5">
        <Navbar />
        <Hero />
        <Founder />
        <Services />
        <Clientele />
      </MaxWidthWrapper>
      <Testimonials />
    </div>
  );
};

export default Page;
