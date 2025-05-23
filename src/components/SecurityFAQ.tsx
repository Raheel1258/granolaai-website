"use client";
import { useState } from "react";
import { useTranslations } from 'next-intl';

export const SecurityFAQ = () => {
  const t = useTranslations('security.faq');

  const securityQA = [
    {
      question: t('dataSecurity.questions.security.question'),
      answer: t('dataSecurity.questions.security.answer'),
    },
    {
      question: t('dataSecurity.questions.vulnerabilities.question'),
      answer: t('dataSecurity.questions.vulnerabilities.answer'),
    },
    {
      question: t('dataSecurity.questions.privateCloud.question'),
      answer: t('dataSecurity.questions.privateCloud.answer'),
    }
  ];

  const storageQA = [
    {
      question: t('dataStorage.questions.accountDeletion.question'),
      answer: t('dataStorage.questions.accountDeletion.answer'),
    },
    {
      question: t('dataStorage.questions.dataExport.question'),
      answer: t('dataStorage.questions.dataExport.answer'),
    },
    {
      question: t('dataStorage.questions.backupPolicy.question'),
      answer: t('dataStorage.questions.backupPolicy.answer'),
    },
    {
      question: t('dataStorage.questions.retentionPolicies.question'),
      answer: t('dataStorage.questions.retentionPolicies.answer'),
    },
  ];

  return (
    <div className="col-span-full mt-8">
      <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8 mb-12">
        <h2 className="text-3xl lg:text-5xl text-colored font-bold tracking-[-0.015em] leading-[0.95] text-balance">
          {t('dataSecurity.title')}
        </h2>
      </div>

      <div className="p-4" id="security-qa">
        <div
          className="col-span-full mx-auto w-full max-w-2xl"
          data-orientation="vertical"
        >
          {securityQA.map((item, index) => (
            <FAQItem
              key={`security-${index}`}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-xl h-px bg-teal-700/10" />

      <div className="col-span-full mt-8">
        <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8 mb-12">
          <h2 className="text-3xl lg:text-5xl text-colored font-bold tracking-[-0.015em] leading-[0.95] text-balance">
            {t('dataStorage.title')}
          </h2>
        </div>

        <div className="p-4" id="storage-qa">
          <div
            className="col-span-full mx-auto w-full max-w-2xl"
            data-orientation="vertical"
          >
            {storageQA.map((item, index) => (
              <FAQItem
                key={`storage-${index}`}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Generate a unique ID for accessibility
  const id = `faq-${question
    .replace(/\s+/g, "-")
    .toLowerCase()
    .substring(0, 15)}`;

  return (
    <div
      data-state={isOpen ? "open" : "closed"}
      data-orientation="vertical"
      className="w-full text-left"
    >
      <button
        type="button"
        aria-controls={id}
        aria-expanded={isOpen}
        data-state={isOpen ? "open" : "closed"}
        data-orientation="vertical"
        id={`${id}-button`}
        className="flex items-center py-4 w-full border-b group"
        data-radix-collection-item=""
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="flex-1 text-lg font-semibold text-left md:text-xl text-colored">
          {question}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className={`size-5 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            fillRule="evenodd"
            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        data-state={isOpen ? "open" : "closed"}
        id={id}
        hidden={!isOpen}
        role="region"
        aria-labelledby={`${id}-button`}
        data-orientation="vertical"
        className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down prose"
        style={{
          ...({
            "--radix-accordion-content-height":
              "var(--radix-collapsible-content-height)",
            "--radix-accordion-content-width":
              "var(--radix-collapsible-content-width)",
          } as React.CSSProperties),
        }}
      >
        <div className="pt-2 pb-4 px-1">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};
