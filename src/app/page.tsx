import Footer from "@/components/footer";
import Benefits from "@/components/landing/benefits";
import ChatBot from "@/components/landing/chat-bot";
import CTA from "@/components/landing/cta";
import Hero from "@/components/landing/hero";
import HowItWorks from "@/components/landing/how-it-works";
import Industries from "@/components/landing/industries";
import Trusted from "@/components/landing/trusted";
import VideoBot from "@/components/landing/video-bot";
import WallOfLove from "@/components/landing/wall-of-love";
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
      <CTA />
      <Footer />
      <VideoBot />
      <ChatBot />
      <Toaster richColors={true} duration={1500} />
    </div>
  );
};

export default Page;
