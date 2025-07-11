import Footer from "@/components/footer";
import Benefits from "@/components/landing/benefits";
import ChatBot from "@/components/landing/chat-bot";
import CTA from "@/components/landing/cta";
import { FAQS } from "@/components/landing/faqs";
import Hero from "@/components/landing/hero";
import HowItWorks from "@/components/landing/how-it-works";
import Industries from "@/components/landing/industries";
import KeyBenefit from "@/components/landing/key-benefit";
import SubBenefits from "@/components/landing/sub-benefits";
import Trusted from "@/components/landing/trusted";
import VideoBot from "@/components/landing/video-bot";
import WallOfLove from "@/components/landing/wall-of-love";
import WhoWeAre from "@/components/landing/who-we-are";
import { Toaster } from "@/components/ui/sonner";

const Page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#F4F4F4]">
      <Hero />
      <Trusted />
      <HowItWorks />
      <Benefits />
      <Industries />
      <WallOfLove />
      <FAQS />
      <KeyBenefit />
      <SubBenefits />
      <WhoWeAre />
      <CTA />
      <Footer />
      <VideoBot />

      <ChatBot />
      <Toaster richColors={true} duration={1500} />
    </div>
  );
};

export default Page;
