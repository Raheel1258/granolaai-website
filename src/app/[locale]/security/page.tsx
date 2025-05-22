import { ComplianceCard } from "@/components/ComplianceCard";
import { SecurityBasics } from "@/components/SecurityBasics";
import { SecurityFAQ } from "@/components/SecurityFAQ";
// import { TermsSection } from "@/components/TermSection";
// import { PrivacySection } from "@/components/PrivacySection";
import React from "react";

export default function SecurityPage() {
  return (
    <main className="flex-1 w-full lg:mx-auto">
      <section className="flex flex-col gap-16 px-4 py-48 mx-auto w-full max-w-6xl antialiased md:gap-16 lg:gap-24">
        <div
          className="overflow-visible absolute inset-0 select-none z-[-1] opacity-60 rotate-180"
          style={{
            background:
              "radial-gradient(at 53% 78%, hsla(60,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 71% 91%, hsla(108,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 31% 91%, hsla(30,100%,50%,0.17) 0px, transparent 50%)",
          }}
        />

        <div className="tracking-tight text-colored">
          <h1 className="w-full max-w-3xl text-5xl font-semibold md:text-7xl">
            Security, privacy, and how it all works
          </h1>
          <p className="mt-6 w-full max-w-lg text-lg font-medium lg:max-w-xl md:text-xl">
            Your security and privacy are of utmost importance to us. Find the
            most important details below, followed by FAQs, and then links to
            all our terms and policies at the bottom of this page.
          </p>
        </div>

        <div className="flex flex-col grid-cols-5 gap-16 antialiased md:gap-16 lg:gap-24 md:grid">
          <aside className="overflow-hidden relative col-span-2 col-start-4 space-y-4">
            <ComplianceCard
              title="TLS 1.2"
              description="We use strong encryption, in transit and at rest, using TLS 1.2, and strong hashing algorithms"
              iconType="shield"
              bgColor="bg-sky-700"
            />

            <ComplianceCard
              title="Artificial Intelligence"
              description="NestQ uses AI models to power parts of the application. As per the contract with our cloud providers, we own the input and output of these models, and no information is ever shared or used in training. AI is as safe as any other cloud service such as a database. available upon request"
              linkText="Read our Privacy Policy"
              linkUrl="https://app.nestq.ai/privacy"
              iconType="ai"
              bgColor="bg-blue-700"
            />
          </aside>

          <div className="flex flex-col col-span-3 col-start-1 row-start-1 gap-4 text-xl font-medium text-colored-secondary">
            <SecurityBasics />
          </div>
        </div>

        <div className="mx-auto w-full max-w-xl h-px bg-teal-700/10" />

        <SecurityFAQ />

        {/* <div className="mx-auto w-full max-w-xl h-px bg-teal-700/10 mt-4" /> */}

        {/* <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8">
          <h2 className="text-3xl lg:text-5xl text-colored font-bold tracking-[-0.015em] leading-[0.95] text-balance">
            Terms & Policies
          </h2>
        </div> */}

        {/* <TermsSection /> */}
        {/* <PrivacySection /> */}
      </section>
    </main>
  );
}
