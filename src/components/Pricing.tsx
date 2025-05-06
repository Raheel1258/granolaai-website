"use client";
import { CheckCircle, Plus } from "lucide-react";
import { getPlansData } from "../constants/plans-data";

export default function Pricing() {
  const billingPeriod = "monthly";
  const plans = getPlansData(billingPeriod);

  return (
    <main className="flex-1 w-full lg:mx-auto">
      <section className="absolute inset-x-0 mt-0 h-195">
        <div
          className="overflow-visible absolute inset-0 select-none z-0 opacity-60"
          style={{
            background:
              "radial-gradient(at 53% 78%, hsla(60,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 71% 91%, hsla(108,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 31% 91%, hsla(30,100%,50%,0.17) 0px, transparent 50%)",
          }}
        />
      </section>

      <section className="relative flex flex-col gap-16 items-center px-4 py-12 w-full sm:px-6 md:py-24 lg:gap-32 lg:py-20 lg:px-8 mx-auto mt-16 mb-16 max-w-xl md:grid-cols-1 sm:max-w-full lg:max-w-7xl">
        <div className="flex flex-col gap-4 items-center mx-auto max-w-5xl text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 tracking-tight leading-tight">
            Help your whole
            <br />
            company work smarter
          </h1>
          <p className="max-w-2xl text-xl font-medium text-gray-500">
            With Granola, both teams and individuals can share knowledge more
            easily, keeping on top of the things that matter
          </p>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-3">
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
                    <div className="flex flex-col gap-2">
                      <button className="w-full flex items-center justify-center px-4 py-4 rounded-md shadow-sm bg-[#8DEE6C] text-black font-semibold text-sm font-medium hover:bg-[#8DEE6C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        {plan.name === "Free trial" ? (
                          <>
                            <span className="mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                              </svg>
                            </span>
                            {plan.androidButton}
                          </>
                        ) : (
                          plan.androidButton
                        )}
                      </button>
                    </div>
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
      </section>
    </main>
  );
}
