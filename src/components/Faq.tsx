import { FAQItem, ResourceItem } from "@/app/pricing/types";
import { FAQSection } from "./FaqSection";
import { ResourcesSection } from "./ResourceSection";
import { Testimonial } from "./Testimonal";
import { CheckCircle, Plus } from "lucide-react";

export default function GranolaPricingPage() {
  const faqs: FAQItem[] = [
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

  // Resources data
  const resources: ResourceItem[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 text-teal-600"
        >
          <path
            fillRule="evenodd"
            d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Security",
      description: "How we secure your data & privacy",
      href: "/security",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 text-blue-600"
        >
          <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
        </svg>
      ),
      title: "Policies",
      description: "Everything you need to know our terms",
      href: "https://www.granola.ai/policies",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 text-purple-600"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Other FAQs",
      description: "All other questions you may have",
      href: "https://www.granola.ai/docs/search",
    },
  ];

  return (
    <div className="min-h-screen py-0 px-4 sm:px-6 md:px-8">
      <section className="w-full max-w-4xl p-4 sm:p-6 rounded-2xl border backdrop-blur-lg transition-colors mb-20 mt-[-50px] bg-white/60 hover:bg-white/80 mx-auto">
        {" "}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <header className="flex flex-col gap-2 items-start">
            <h2 className="text-lg font-bold">Enterprise</h2>
            <p className="flex gap-2 items-baseline">
              <span className="text-3xl font-bold">Starts at $35</span>
              <span className="text-sm text-gray-500">per user per month</span>
            </p>
            <div className="flex gap-4 mt-2">
              <a
                className="px-4 py-2 font-medium rounded-lg border-2 border-gray-200 shadow-md transition-all hover:shadow-lg hover:border-gray-300 bg-white/60 hover:bg-white hover:-translate-y-1"
                href="#"
              >
                Talk to us
              </a>
              <a
                className="px-4 py-2 font-medium rounded-lg border-2 border-gray-200 shadow-md transition-all hover:shadow-lg hover:border-gray-300 bg-white/60 hover:bg-white hover:-translate-y-1"
                href="#"
              >
                Learn more
              </a>
            </div>
          </header>

          <ul className="flex flex-col gap-2">
            <li className="flex gap-2 w-full">
              <div className="p-1 mt-0.5 rounded-full size-5 bg-green-50 text-green-600 flex-shrink-0">
                <CheckCircle size={16} />
              </div>
              <p>
                <span>Opt out of model training for everyone in your team</span>
              </p>
            </li>
            <li className="flex gap-2 w-full">
              <div className="p-1 mt-0.5 rounded-full size-5 bg-green-50 text-green-600 flex-shrink-0">
                <CheckCircle size={16} />
              </div>
              <p>
                <span>Admin controls for meeting link sharing</span>
              </p>
            </li>
            <li className="flex gap-2 w-full">
              <div className="p-1 mt-0.5 rounded-full size-5 bg-green-50 text-green-600 flex-shrink-0">
                <CheckCircle size={16} />
              </div>
              <p>
                <span>Priority support and usage analytics</span>
              </p>
            </li>
            <li className="flex gap-2 w-full">
              <div className="p-1 mt-0.5 rounded-full size-5 bg-gray-100 text-gray-500 flex-shrink-0">
                <Plus size={16} />
              </div>
              <p>
                <span>Everything included in Business</span>
              </p>
            </li>
          </ul>
        </div>
      </section>
      <Testimonial />
      <FAQSection faqs={faqs} />
      <ResourcesSection resources={resources} />
    </div>
  );
}
