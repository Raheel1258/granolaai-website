"use client";
import { useState } from "react";

export const SecurityFAQ = () => {
  const securityQA = [
    {
      question: "How does Granola secure customer data?",
      answer:
        "Granola employs industry-standard encryption protocols and security measures to protect customer data. All data is encrypted both in transit and at rest using AES-256 encryption. We regularly conduct security audits and follow secure development practices to ensure your data remains protected.",
    },
    {
      question: "Does Granola work locally or send data to the cloud?",
      answer:
        "Granola offers both options depending on your needs. Our enterprise version can run completely locally on your infrastructure without sending any data externally. Our cloud version uses secure, encrypted connections with strict access controls to protect your data.",
    },
    {
      question: "How does Granola manage security vulnerabilities?",
      answer:
        "We maintain a comprehensive vulnerability management program that includes regular automated scanning, manual code reviews, and third-party security assessments. Critical vulnerabilities are addressed within 24 hours, and we maintain a responsible disclosure policy.",
    },
    {
      question: "Does Granola conduct penetration testing?",
      answer:
        "Yes, Granola conducts regular penetration testing through both internal security teams and independent third-party security firms. These tests are performed quarterly and after significant infrastructure or codebase changes.",
    },
    {
      question: "Does Granola have any security certifications?",
      answer:
        "Granola is SOC 2 Type II certified and compliant with GDPR, CCPA, and HIPAA requirements where applicable. We regularly undergo independent audits to maintain these certifications.",
    },
    {
      question: "How can I report security vulnerabilities to Granola?",
      answer:
        "You can report security vulnerabilities by emailing security@granola.io. We operate a responsible disclosure program and work with security researchers to quickly address any reported issues.",
    },
    {
      question: "Does Granola implement endpoint security?",
      answer:
        "Yes, all Granola endpoints are protected with advanced threat detection, real-time monitoring, and automated response systems. We enforce strict device policies and access controls for all team members accessing production systems.",
    },
    {
      question: "Can I bring my own models?",
      answer:
        "Yes, Granola is designed to be model-agnostic. You can integrate your own proprietary or third-party models with our platform while maintaining full control over your intellectual property.",
    },
    {
      question: "Can I use a version of Granola in a private cloud?",
      answer:
        "Yes, Granola offers a private cloud deployment option for enterprise customers. This allows you to run Granola in your own cloud environment with dedicated resources and infrastructure.",
    },
    {
      question: "Do you support SSO/SAML?",
      answer:
        "Yes, Granola supports Single Sign-On (SSO) through SAML 2.0, allowing seamless integration with your existing identity providers such as Okta, Azure AD, Google Workspace, and others.",
    },
  ];

  const storageQA = [
    {
      question: "What happens to my data if I delete my account?",
      answer:
        "When you delete your account, all your personal data is permanently removed from our systems within 30 days. Any anonymized aggregate statistics derived from your data may be retained but cannot be traced back to you.",
    },
    {
      question: "Can I request a copy of all my data?",
      answer:
        "Yes, you can request a complete export of all your data at any time through your account settings or by contacting our support team. We'll provide your data in a machine-readable format within 72 hours of your request.",
    },
    {
      question: "Does Granola have a data backup policy?",
      answer:
        "Yes, Granola maintains regular backups of all customer data. We perform daily incremental backups and weekly full backups. All backups are encrypted and stored in geographically distributed locations to ensure data durability and availability.",
    },
    {
      question: "What are your data retention policies?",
      answer:
        "By default, we retain your data for as long as you maintain an active account. Enterprise customers can configure custom retention policies to meet specific regulatory or internal requirements. Data is automatically removed according to these policies unless legal holds require otherwise.",
    },
  ];

  return (
    <div className="col-span-full mt-8">
      <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8 mb-12">
        <h2 className="text-3xl lg:text-5xl text-colored font-bold tracking-[-0.015em] leading-[0.95] text-balance">
          Data Security
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
            Data Storage & Processing
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
