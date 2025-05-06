"use client";
import { useState } from "react";
import { FAQAccordionItem } from "./FaqAccordionItem";
import { FAQItem } from "@/app/pricing/types";

export const FAQSection = ({ faqs }: { faqs: FAQItem[] }) => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="my-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
          Questions & answers
        </h2>
      </div>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq) => (
          <FAQAccordionItem
            key={faq.id}
            faq={faq}
            isOpen={openFaq === faq.id}
            toggleFaq={toggleFaq}
          />
        ))}
      </div>
    </div>
  );
};
