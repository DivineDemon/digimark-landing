import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";
import Founder from "@/sections/founder";
import Hero from "@/sections/hero";
import Services from "@/sections/services";

const Page = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start bg-brand-950">
      <MaxWidthWrapper className="p-5">
        <Navbar />
        <Hero />
        <Founder />
        <Services />
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
