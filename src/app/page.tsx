import Founder from "@/components/founder";
import Hero from "@/components/hero";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";

const Page = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start bg-brand-950">
      <MaxWidthWrapper className="p-5">
        <Navbar />
        <Hero />
        <Founder />
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
