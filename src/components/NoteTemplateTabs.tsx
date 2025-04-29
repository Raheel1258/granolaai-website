"use client";
import React, { useState } from "react";
import SkeletonListLoader from "./SkeletonListLoader";

const NoteTemplateSection = () => {
  const [activeTab, setActiveTab] = useState("Customer discovery");
  const [version, setVersion] = useState(0);

  const templates = [
    "Customer discovery",
    "1 on 1",
    "User Interview",
    "Pitch",
    "Standup",
  ];

  const renderTemplateContent = (template: string) => {
    const keyPrefix = template.replace(/\s/g, "-").toLowerCase();

    const section = (title: string, headings: string[]) => (
      <div className="w-full select-none not-prose h-full">
        <h2 className="text-lg font-semibold sm:text-xl lg:text-2xl">
          {title}
        </h2>
        <div className="flex gap-2 mt-1 mb-6 text-xs lg:mt-2 lg:text-sm text-black">
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="-mt-0.5 size-4 lg:size-5 opacity-70"
            >
              <path d="M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V10ZM10 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H10ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H12ZM11.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V10ZM14 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H14Z"></path>
              <path
                fillRule="evenodd"
                d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Today 4:00 PM</span>
          </div>
          <div className="">Jim, Michaela +5</div>
        </div>
        <div className="w-full">
          {headings.map((heading, idx) => (
            <SkeletonListLoader key={`${keyPrefix}-${idx}`} heading={heading} />
          ))}
        </div>
      </div>
    );

    switch (template) {
      case "Customer discovery":
        return section("Upstart Health intro call", [
          "About them",
          "Key takeaways",
          "Decision-making-insights",
          "Budget & timeline",
          "Next steps",
        ]);
      case "1 on 1":
        return section("Casey <> Rahul 1 on 1", [
          "What's the latest",
          "Feedback for them",
          "Feedback for me",
          "Next Milestone",
        ]);
      case "User Interview":
        return section("Kallo - User interview", [
          "Goals and motivations",
          "Pain points",
          "Current solutions",
          "User thoughts",
          "User suggestions",
        ]);
      case "Pitch":
        return section("LunaLogic / Quantum Ventures", [
          "Team",
          "Problem",
          "Product",
          "Go-to-market",
          "Traction",
          "Fundraising",
        ]);
      case "Standup":
        return section("Team standup", [
          "Done yesterday",
          "Doing today",
          "Blockers",
          "Kudos",
        ]);
      default:
        return (
          <div className="w-full select-none not-prose h-full">
            <h2 className="text-lg font-semibold sm:text-xl lg:text-2xl">
              Default Template
            </h2>
            <p>No template selected</p>
          </div>
        );
    }
  };

  return (
    <section className="flex overflow-visible relative flex-col items-center px-4 py-16 w-full max-w-3xl sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:grid lg:gap-20">
      <div>
        <div className="flex-col col-span-full gap-4 hidden md:flex">
          <h2 className="text-3xl lg:text-5xl text-balance font-bold tracking-[-0.015em] leading-[0.95] text-colored">
            Customizable templates for your most common meeting types
          </h2>
          <p className="col-span-2 max-w-2xl text-2xl font-medium text-balance text-colored-secondary">
            Get notes in the exact format your team needs.
          </p>
        </div>
        <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8 md:hidden">
          <h2 className="text-3xl lg:text-5xl text-colored font-bold tracking-[-0.015em] leading-[0.95] text-balance">
            Customizable templates for your most common meeting types
          </h2>
          <p className="text-xl font-medium lg:text-2xl text-colored-secondary">
            Get notes in the exact format your team needs.
          </p>
        </div>
        <div
          className="flex-wrap flex-none gap-1 justify-center my-8 w-full max-w-md md:max-w-sm md:justify-start hidden md:flex"
          aria-label="Choose note template"
        >
          {templates.map((template) => (
            <button
              key={template}
              role="tab"
              aria-selected={activeTab === template ? "true" : "false"}
              onClick={() => {
                if (template === activeTab) {
                  setVersion((v) => v + 1); // Force remount
                } else {
                  setActiveTab(template);
                  setVersion((v) => v + 1); // Also update for visual effect
                }
              }}
              className={`font-medium px-3 h-12 flex-none text-lg md:text-xl flex items-center justify-center leading-none select-none rounded-full hover:bg-neutral-200 border border-tertiary ${
                activeTab === template
                  ? "bg-black text-white"
                  : "bg-transparent text-black"
              } outline-none`}
            >
              {template}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center pt-4 w-full md:pt-0">
        <div
          key={version}
          className="overflow-hidden rounded-lg shadow-lg flex relative flex-col flex-1 h-full backdrop-blur-lg font-basic bg-white border-0.5 @container rotate-[2deg] w-full max-w-sm md:max-w-none"
        >
          <div className="relative flex-1 bg-white p-6 lg:p-12 aspect-[3/4] overflow-hidden select-none w-full">
            {renderTemplateContent(activeTab)}
          </div>
        </div>
        <div
          className="flex flex-wrap justify-center gap-2 mt-6 md:hidden"
          aria-label="Choose note template (mobile)"
        >
          {templates.map((template) => (
            <button
              key={template}
              role="tab"
              aria-selected={activeTab === template ? "true" : "false"}
              onClick={() => {
                if (template === activeTab) {
                  setVersion((v) => v + 1);
                } else {
                  setActiveTab(template);
                  setVersion((v) => v + 1);
                }
              }}
              className={`font-medium px-4 h-10 text-base flex items-center justify-center leading-none select-none rounded-full hover:bg-neutral-200 border border-tertiary ${
                activeTab === template
                  ? "bg-black text-white"
                  : "bg-transparent text-black"
              } outline-none`}
            >
              {template}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoteTemplateSection;
