import { MessageCircleQuestion, ShieldQuestionIcon } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS_LIST } from "@/lib/constants";
import MaxWidthWrapper from "../max-width-wrapper";

export function FAQS() {
  return (
    <MaxWidthWrapper className="h-fit px-3 py-20" isTopAccent={false}>
      <div className="mb-10 flex w-full flex-col items-center justify-center gap-5">
        <span className="mx-auto flex rounded-full border bg-white px-2.5 py-1 font-medium text-xs shadow">
          <ShieldQuestionIcon className="mt-[0.5px] mr-2 size-3.5" />
          FAQs
        </span>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="mx-auto flex font-semibold text-5xl">Frequently Asked Questions</span>
        </div>
        <span className="w-full px-2.5 text-center text-muted-foreground">
          Got questions? We've gathered the most common ones and answered them
          <br />
          right here — so you can find what you need without the hunt.
        </span>
      </div>
      <Accordion
        type="single"
        collapsible
        className="flex w-full flex-col items-center justify-center gap-2.5"
        defaultValue="item-1"
      >
        {FAQS_LIST.map((faq) => (
          <AccordionItem key={faq.id} value={`item-${faq.id}`} className="w-full rounded-xl border bg-white shadow">
            <AccordionTrigger className="w-full p-4 font-medium">
              <div className="flex w-full items-center justify-center gap-2.5">
                <MessageCircleQuestion className="size-5" />
                <span className="flex-1 text-left">{faq.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance px-4 pb-4 text-gray-500">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </MaxWidthWrapper>
  );
}
