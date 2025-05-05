"use client";
import { useState } from "react";
import { CheckCircle, Plus } from "lucide-react";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const plans = [
    {
      name: "Free trial",
      price: "Free",
      period: "",
      buttonText: "Get started",
      buttonVariant: "accent",
      androidButton: "Join the Windows waitlist",

      features: [
        "25 free meetings",
        "AI chat with any meeting",
        "Create your own note templates",
      ],
    },
    {
      name: "Individual",
      price: billingPeriod === "monthly" ? "$18" : "$180",
      period: billingPeriod === "monthly" ? "per month" : "per year",
      buttonText: "Subscribe",
      buttonVariant: "outline",
      androidButton: "Sign up in app",
      features: [
        { text: "Unlimited meetings for you", highlight: true },
        "AI chat with any meeting",
        "Create your own note templates",
      ],
    },
    {
      name: "Business",
      price: billingPeriod === "monthly" ? "$14" : "$140",
      period:
        billingPeriod === "monthly"
          ? "per user per month"
          : "per user per year",
      buttonText: "Get started",
      buttonVariant: "outline",
      androidButton: "Sign up in app",

      features: [
        { text: "Unlimited meetings for the whole team", highlight: true },
        "Share templates across your team",
        "Consolidated billing & admin",
        { text: "Everything included in Individual", icon: "plus" },
      ],
    },
  ];

  return (
    <main className="flex-1 w-full lg:mx-auto">
      <section className="absolute inset-x-0 mt-0 h-200">
        <div
          className="overflow-visible absolute inset-0 select-none z-0 opacity-60"
          style={{
            background:
              "radial-gradient(at 53% 78%, hsla(60,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 71% 91%, hsla(108,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 31% 91%, hsla(30,100%,50%,0.17) 0px, transparent 50%)",
          }}
        />
      </section>

      <section className="relative flex flex-col gap-16 items-center px-4 py-16 w-full sm:px-6 md:py-24 lg:gap-32 lg:py-20 lg:px-8 mx-auto mt-16 mb-16 max-w-xl md:grid-cols-1 sm:max-w-full lg:max-w-7xl">
        <div className="flex flex-col gap-4 items-center mx-auto max-w-5xl text-center">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
            Help your whole
            <br />
            company work smarter
          </h1>
          <p className="max-w-2xl text-xl font-medium text-gray-600">
            With Granola, both teams and individuals can share knowledge more
            easily, keeping on top of the things that matter
          </p>
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border shadow-lg flex flex-col p-0 w-full h-full backdrop-blur-lg transition-colors bg-white/60 hover:bg-white/80"
            >
              <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow md:p-5 md:pb-6">
                <h2 className="text-lg font-semibold">{plan.name}</h2>
                <div className="flex gap-2 items-baseline">
                  <h3 className="text-3xl font-semibold">{plan.price}</h3>
                  {plan.period && (
                    <span className="text-sm text-gray-500">{plan.period}</span>
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <button className="w-full flex items-center justify-center px-4 py-4 border border-green-600 rounded-md shadow-sm bg-green-600 text-white text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      <span className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></svg>
                      </span>
                      {plan.androidButton}
                    </button>
                  </div>
                </div>
              </div>

              <ul className="flex-1 p-4 py-4 space-y-3 w-full text-base md:px-5 md:pt-4 md:pb-6">
                {plan.features.map((feature, j) => {
                  const featureText =
                    typeof feature === "string" ? feature : feature.text;
                  const isHighlighted =
                    typeof feature === "object" && feature.highlight;
                  const isPlusIcon =
                    typeof feature === "object" && feature.icon === "plus";

                  return (
                    <li key={j} className="flex gap-2 w-full">
                      {isPlusIcon ? (
                        <div className="p-1 mt-0.5 rounded-full size-5 bg-gray-100 text-gray-500 flex-shrink-0">
                          <Plus size={16} />
                        </div>
                      ) : (
                        <div className="p-1 mt-0.5 rounded-full size-5 bg-green-50 text-green-600 flex-shrink-0">
                          <CheckCircle size={16} />
                        </div>
                      )}
                      <p>
                        <span className={isHighlighted ? "font-medium" : ""}>
                          {featureText}
                        </span>
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <section className="w-full p-6 rounded-2xl border backdrop-blur-lg transition-colors lg:mt-0 bg-white/60 hover:bg-white/80">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <header className="flex flex-col gap-2 items-start">
              <h2 className="text-lg font-semibold">Enterprise</h2>
              <p className="flex gap-2 items-baseline">
                <span className="text-3xl font-semibold">Starts at $35</span>
                <span className="text-sm text-gray-500">
                  per user per month
                </span>
              </p>
              <div className="flex gap-4 mt-2">
                <a
                  className="relative px-6 py-3 font-medium rounded-lg border-2 border-gray-200 shadow-md transition-all hover:shadow-lg hover:border-gray-300 bg-white/60 hover:bg-white hover:-translate-y-1"
                  href="#"
                >
                  Talk to us
                </a>
                <a
                  className="relative px-6 py-3 font-medium rounded-lg border-2 border-gray-200 shadow-md transition-all hover:shadow-lg hover:border-gray-300 bg-white/60 hover:bg-white hover:-translate-y-1"
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
                  <span>
                    Opt out of model training for everyone in your team
                  </span>
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
      </section>
    </main>
  );
}
