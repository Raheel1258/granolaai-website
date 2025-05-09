import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="overflow-visible relative flex-col px-4 py-16 w-full max-w-3xl sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl grid gap-2 items-stretch lg:gap-6 lg:grid-cols-2">
      <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8 mb-8">
        <h2 id="platform" className="text-3xl lg:text-5xl text-colored font-bold tracking-[-0.015em] leading-[0.95] text-balance">
          How it works
        </h2>
      </div>

      <div className="overflow-hidden p-6 rounded-xl border shadow-lg flex relative flex-col gap-4">
        <div
          className="overflow-visible absolute inset-0 select-none z-[-1] transform scaleX(-1)"
          style={{
            background:
              "radial-gradient(at 53% 78%, rgba(255, 255, 0, 0.3) 0px, transparent 50%), radial-gradient(at 71% 91%, rgba(51, 255, 0, 0.3) 0px, transparent 50%), radial-gradient(at 31% 91%, rgba(255, 128, 0, 0.17) 0px, transparent 50%)",
          }}
        ></div>
        <h2 className="text-xl font-semibold lg:text-2xl">
          <span>Granola is like Apple Notes, but it also&nbsp;&nbsp;</span>
          <span className="inline-flex relative gap-2 items-baseline pr-2 pl-8 rounded-full text-accent-text">
            <div className="flex absolute inset-y-0 -inset-x-1 items-center pl-2 rounded-full bg-accent-wash text-accent-strong">
              <div className="flex justify-center items-center w-6 h-6 gap-[3px]">
                <div
                  className="bg-green-500 rounded-full transition-all duration-300 ease-in-out w-[3px]"
                  style={{ height: "65%" }}
                ></div>
                <div
                  className="bg-green-500 rounded-full transition-all duration-300 ease-in-out w-[3px]"
                  style={{ height: "66%" }}
                ></div>
                <div
                  className="bg-green-500 rounded-full transition-all duration-300 ease-in-out w-[3px]"
                  style={{ height: "55%" }}
                ></div>
              </div>
            </div>
            <span>transcribes</span>
          </span>
          <span>&nbsp;&nbsp;your meeting</span>
        </h2>
        <div className="flex-1"></div>
        <div className="overflow-hidden bg-white rounded-lg shadow-lg -mb-8 border w-full aspect-square md:aspect-[4/3]">
          <div className="flex justify-between items-center p-2.5 w-full h-10">
            <div className="flex items-center w-full space-x-2">
              <div className="rounded-full aspect-square bg-red-400 border-red-500 w-2.5 h-2.5"></div>
              <div className="rounded-full aspect-square bg-yellow-300 border-yellow-400 w-2.5 h-2.5"></div>
              <div className="rounded-full aspect-square bg-green-400 border-green-500 w-2.5 h-2.5"></div>
            </div>
          </div>
          <div className="relative px-8 py-2 w-full text-sm aspect-video font-basic">
            <div className="flex items-center" style={{ height: "24px" }}>
              <span>100, growingg</span>
            </div>
            <div className="flex items-center" style={{ height: "24px" }}>
              <span>Use tuesday.ai, v manual</span>
            </div>
            <div className="flex items-center" style={{ height: "24px" }}>
              <span>180</span>
            </div>
            <div className="flex items-center" style={{ height: "24px" }}>
              <span></span>
            </div>
            <div className="flex items-center" style={{ height: "24px" }}>
              <span>&quot;a priority for q2&quot;</span>
              <div className="w-0.5 h-7 inline-block rounded-full bg-accent opacity-100"></div>
            </div>
          </div>
          <div className="flex absolute bottom-4 left-1/2 z-10 gap-3 items-center p-2.5 bg-white rounded-full border shadow-lg transition-all transform -translate-x-1/2">
            <div className="flex justify-center items-center w-6 h-6 gap-[3px]">
              <div
                className="bg-green-500 rounded-full transition-all duration-300 ease-in-out w-[3px]"
                style={{ height: "69%" }}
              ></div>
              <div
                className="bg-green-500 rounded-full transition-all duration-300 ease-in-out w-[3px]"
                style={{ height: "78%" }}
              ></div>
              <div
                className="bg-green-500 rounded-full transition-all duration-300 ease-in-out w-[3px]"
                style={{ height: "58%" }}
              ></div>
            </div>
            <div style={{ opacity: 1, transform: "none" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="mr-1 w-5 h-5 text-tertiary"
              >
                <path d="M5.25 3A2.25 2.25 0 0 0 3 5.25v9.5A2.25 2.25 0 0 0 5.25 17h9.5A2.25 2.25 0 0 0 17 14.75v-9.5A2.25 2.25 0 0 0 14.75 3h-9.5Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden p-6 rounded-xl border shadow-lg flex relative flex-col gap-4">
        <div
          className="overflow-visible absolute inset-0 select-none z-[-1]"
          style={{
            background:
              "radial-gradient(at 53% 78%, rgba(255, 255, 0, 0.3) 0px, transparent 50%), radial-gradient(at 71% 91%, rgba(51, 255, 0, 0.3) 0px, transparent 50%), radial-gradient(at 31% 91%, rgba(255, 128, 0, 0.17) 0px, transparent 50%)",
          }}
        ></div>
        <h2 className="text-xl font-semibold lg:text-2xl">
          When the meeting ends, Granola&nbsp;&nbsp;
          <span className="inline-flex relative gap-2 items-baseline pr-2 pl-8 rounded-full text-accent-text">
            <div className="flex absolute inset-y-0 -inset-x-1 items-center pl-2 rounded-full bg-accent-wash text-accent-strong">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="w-5 h-5"
              >
                <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684ZM13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z"></path>
              </svg>
            </div>
            <span>enhances</span>
          </span>
          &nbsp;&nbsp;the notes you&apos;ve written
        </h2>
        <div className="flex-1"></div>
        <div className="overflow-hidden bg-white rounded-lg shadow-lg -mb-8 w-full border aspect-square md:aspect-[4/3]">
          <div className="flex justify-between items-center p-2.5 w-full h-10">
            <div className="flex items-center w-full space-x-2">
              <div className="rounded-full aspect-square bg-red-400 border-red-500 w-2.5 h-2.5"></div>
              <div className="rounded-full aspect-square bg-yellow-300 border-yellow-400 w-2.5 h-2.5"></div>
              <div className="rounded-full aspect-square bg-green-400 border-green-500 w-2.5 h-2.5"></div>
            </div>
          </div>
          <video playsInline loop autoPlay className="-mt-2">
            <source
              src="/homepageAssets/enhancing-looper.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="flex flex-col col-span-full gap-4 items-center py-12 mx-auto text-colored">
        <blockquote className="max-w-3xl text-2xl italic text-center md:text-3xl text-balance">
          Granola has become indispensable - feels like I&apos;m living in the
          future.
        </blockquote>
        <div className="flex gap-4 items-center -ml-2">
          <Image
            src="/assets/images/johnBorthwick.jpeg"
            width={48}
            height={48}
            alt="John Borthwick"
            className="rounded-full flex-shrink-0 size-10 md:size-12 bg-neutral-200"
          />
          <div className="flex flex-col">
            <span className="font-semibold leading-tight md:text-lg">
              John Borthwick
            </span>
            <p className="text-sm font-normal text-black">
              Investor, Betaworks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
