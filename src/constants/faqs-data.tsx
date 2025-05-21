import { FAQItem } from "@/app/[locale]/pricing/types";

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What's the difference between Enterprise and Business?",
    answer:
      "Enterprise includes additional features like opt-out of model training, admin controls for meeting link sharing, and priority support with usage analytics. It also includes all Business tier features.",
  },
  {
    id: "faq-2",
    question: "What admin controls will I have?",
    answer:
      "Admin controls include managing meeting link sharing, user permissions, data retention policies, and usage monitoring across your organization.",
  },
  {
    id: "faq-3",
    question: "What are your integration capabilities?",
    answer:
      "Granola integrates with popular calendar apps, video conferencing platforms, and productivity tools to seamlessly fit into your workflow.",
  },
  {
    id: "faq-4",
    question: "Do you train any models on my data?",
    answer:
      "Enterprise customers can opt out of model training for everyone in their team, ensuring your data is never used to train our models.",
  },
  {
    id: "faq-5",
    question: "Is Granola SOC-2 / HIPAA compliant?",
    answer:
      "Yes, Granola is SOC-2 compliant and we offer HIPAA compliance options for Enterprise customers with additional data protection measures.",
  },
  {
    id: "faq-6",
    question: "Does Granola have SSO?",
    answer:
      "Yes, Enterprise plans include Single Sign-On (SSO) support for streamlined and secure authentication.",
  },
  {
    id: "faq-7",
    question:
      "How do you notify other participants that Granola is being used?",
    answer:
      "Granola adds a discreet notification to meeting invites and at the start of meetings to inform participants that the meeting is being recorded and summarized.",
  },
  {
    id: "faq-8",
    question: "When will Granola be available on iOS, Windows, and Outlook?",
    answer:
      "We're currently developing native apps for iOS and Windows with Outlook integration. These are planned for release in the coming months.",
  },
];
