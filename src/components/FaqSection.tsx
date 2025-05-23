"use client";
import { useState } from "react";
import { FAQAccordionItem } from "./FaqAccordionItem";
import { useTranslations } from "next-intl";

export const FAQSection = () => {
  const t = useTranslations("pricing.faq");
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: "enterpriseVsBusiness",
      question: t("questions.enterpriseVsBusiness.question"),
      answer: t("questions.enterpriseVsBusiness.answer"),
    },
    {
      id: "adminControls",
      question: t("questions.adminControls.question"),
      answer: t("questions.adminControls.answer"),
    },
    {
      id: "integrations",
      question: t("questions.integrations.question"),
      answer: t("questions.integrations.answer"),
    },
    {
      id: "modelTraining",
      question: t("questions.modelTraining.question"),
      answer: t("questions.modelTraining.answer"),
    },
    {
      id: "compliance",
      question: t("questions.compliance.question"),
      answer: t("questions.compliance.answer"),
    },
    {
      id: "sso",
      question: t("questions.sso.question"),
      answer: t("questions.sso.answer"),
    },
    {
      id: "notifications",
      question: t("questions.notifications.question"),
      answer: t("questions.notifications.answer"),
    },
    {
      id: "platforms",
      question: t("questions.platforms.question"),
      answer: t("questions.platforms.answer"),
    },
  ];

  return (
    <div className="my-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
          {t("title")}
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
