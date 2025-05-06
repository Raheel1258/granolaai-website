"use client";
import { FAQSection } from "./FaqSection";
import { ResourcesSection } from "./ResourceSection";
import { Testimonial } from "./Testimonal";
import { CheckCircle, Plus } from "lucide-react";
import { faqs } from "../constants/faqs-data";
import { resources } from "../constants/resources-data";

export default function GranolaPricingPage() {
  return (
    <div className="min-h-screen py-0 px-4 sm:px-6 md:px-8">
      <section className="w-full max-w-4xl p-4 sm:p-6 rounded-2xl border backdrop-blur-lg transition-colors mb-20 mt-[-50px] bg-white/60 hover:bg-white/80 mx-auto">
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
