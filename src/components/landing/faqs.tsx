import { ShieldQuestionIcon } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import MaxWidthWrapper from "../max-width-wrapper";

export function FAQS() {
  return (
    <MaxWidthWrapper className="h-fit px-3 py-20" isTopAccent={false}>
      <div className="flex w-full flex-col items-center justify-center py-7">
        <span className="mx-auto flex rounded-full border bg-white px-2.5 py-1 font-medium text-xs shadow">
          <ShieldQuestionIcon className="mt-[0.5px] mr-2 size-3.5" />
          FAQs
        </span>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full rounded-lg bg-white px-8 py-10 shadow-md"
        defaultValue="item-1"
      >
        <div className="flex w-full flex-col items-center justify-center py-10">
          <span className="mx-auto flex font-semibold text-5xl">FAQs</span>
        </div>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is DigiMark Developers?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              DigiMark Developers is a full-cycle technology partner delivering end-to-end digital solutions globally.
              We specialize in UI/UX design, custom software engineering, AI-powered SaaS and MVP development, mobile
              application solutions, intelligent chatbot and AI agent integration, deployment services, and
              performance-driven digital marketing
            </p>
            <p>
              From product research to launch and beyond, we act as a true partner aligning with your goals, adapting to
              your needs, and delivering measurable impact. With 400+ successful projects and a 95% retention rate,
              we’re trusted to turn ideas into real-world growth.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How does DigiMark help grow our business and increase sales?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              DigiMark uses data-driven marketing and AI-powered insights to target your ideal customers and boost
              conversions. Our digital campaigns are optimized for maximum ROI – from personalized content to automated
              outreach – ensuring every marketing dollar works harder. The result is more qualified leads and a clear
              lift in sales, allowing you to focus on scaling your business..
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What does “end-to-end digital solutions” mean for our business with DigiMark?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              With DigiMark, “end-to-end” means we cover everything from initial strategy to final launch and beyond. We
              manage market research, UX/UI design, development, deployment, and ongoing optimization under one roof.
              This holistic approach ensures all parts of your digital project work together seamlessly, saving time and
              maximizing results.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>What types of AI solutions do you offer? </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Digimark Developers offers a range of AI solutions including chatbot development, generative AI, computer
              vision, predictive analytics, and data engineering. We also provide AI PoC and MVP development to validate
              ideas quickly for industries like healthcare, fintech, retail, EdTech, and hospitality, helping businesses
              automate, personalize, and optimize operations.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>What measurable results can we expect from partnering with DigiMark? </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Partnering with DigiMark means expecting measurable improvements, not just promises. Our clients typically
              see faster growth in leads and revenue, thanks to more efficient operations and smarter marketing
              strategies. We provide clear reporting on key metrics, so you always see how our solutions are driving
              results and supporting your business goals.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Can you handle market research and user testing? </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Absolutely. Thorough market research and user testing are integral to our process, ensuring the product
              surpasses market and user expectations, driving success from the start.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>What types of AI solutions can you build for my business? </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We create a range of AI solutions tailored to your needs, from predictive analytics and natural language
              processing tools to computer vision systems and AI-driven automation. Each solution is customized to
              address your specific challenges and integrate seamlessly with your existing infrastructure{" "}
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>How secure & scalable are the AI systems you develop?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Security is built into everything we do from strong encryption and access controls to staying compliant
              with data protection standards. Our AI systems are also built to grow with your business, easily scaling
              to handle more users, data, or tasks without slowing down
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>How do you handle data privacy and compliance in AI development?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We are committed to upholding the highest industry standards and regulatory requirements, including GDPR
              and HIPAA. Our AI models are developed with robust data anonymization techniques and secure handling
              protocols to ensure full compliance and safeguard user privacy at every stage.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>Do you provide Post launch support?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Certainly. Our team provides continuous support and maintenance to ensure your AI solutions operate at
              peak performance. We also offer regular updates and scalability enhancements to align with the evolving
              needs of your business.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </MaxWidthWrapper>
  );
}
