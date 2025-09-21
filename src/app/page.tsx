import ChatBot from "@/components/bots/chat-bot";
import VideoBot from "@/components/bots/video-bot";
import Footer from "@/components/footer";
import Benefits from "@/components/landing/benefits";
import CaseStudies from "@/components/landing/case-studies";
import ContactUs from "@/components/landing/contact-us";
import CTA from "@/components/landing/cta";
import { FAQS } from "@/components/landing/faqs";
import Hero from "@/components/landing/hero";
import HowItWorks from "@/components/landing/how-it-works";
import Industries from "@/components/landing/industries";
import KeyBenefit from "@/components/landing/key-benefit";
import Team from "@/components/landing/team";
import Trusted from "@/components/landing/trusted";
import WallOfLove from "@/components/landing/wall-of-love";
import WhatWeDo from "@/components/landing/what-we-do";
import WhoWeAre from "@/components/landing/who-we-are";
import { Toaster } from "@/components/ui/sonner";

const Page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#F4F4F4]">
      <Hero />
      <Trusted />
      <WhoWeAre />
      <Benefits />
      <WhatWeDo />
      <HowItWorks />
      <Industries />
      <CaseStudies />
      <WallOfLove />
      <Team />
      <KeyBenefit />
      <FAQS />
      <ContactUs />
      <CTA />
      <Footer />
      <VideoBot />
      <ChatBot />
      <Toaster richColors={true} duration={1500} />
    </div>
  );
};

export default Page;
