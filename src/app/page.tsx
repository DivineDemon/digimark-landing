import Footer from "@/components/footer";
import Benefits from "@/components/landing/benefits";
import Business from "@/components/landing/business";
import CTA from "@/components/landing/cta";
import ExploreApps from "@/components/landing/explore-apps";
import Hero from "@/components/landing/hero";
import HowItWorks from "@/components/landing/how-it-works";
import Scheduling from "@/components/landing/scheduling";
import Testimonials from "@/components/landing/testimonials";
import Trusted from "@/components/landing/trusted";
import WallOfLove from "@/components/landing/wall-of-love";

const Page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#F4F4F4]">
      <Hero />
      <Trusted />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <ExploreApps />
      <Business />
      <WallOfLove />
      <Scheduling />
      <CTA />
      <Footer />
    </div>
  );
};

export default Page;
