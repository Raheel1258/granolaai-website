import Image from "next/image";
import React from "react";
import DeviceDrawer from "./DeviceDrawer";
import DeviceDrawerContent from "./DeviceDrawerContent";

const HeroSection = () => {
  return (
    <section className="flex relative flex-col gap-4 justify-center items-center pb-24 w-full">
      <div
        className="overflow-visible absolute inset-0 select-none z-[-1]"
        style={{
          background:
            "radial-gradient(at 53% 78%, rgba(255, 255, 0, 0.3) 0px, transparent 50%), radial-gradient(at 71% 91%, rgba(51, 255, 0, 0.3) 0px, transparent 50%), radial-gradient(at 31% 91%, rgba(255, 128, 0, 0.17) 0px, transparent 50%)",
        }}
      ></div>
      <div className="flex flex-col gap-4 justify-center items-center px-6 pt-28 pb-12 lg:pb-16 lg:gap-8 md:pt-40 lg:pt-40">
        <a
          className="px-3 py-1.5 font-medium rounded-full border text-colored hover:bg-neutral-100 transition-colors flex gap-1 items-center"
          href="/app?utm_source=homepage"
        >
          📲 Get iOS early access
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="size-4 text-tertiary"
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-0.020em] text-center leading-[0.9] text-colored">
          <span className="text-colored-tertiary">The</span> AI notepad{" "}
          <span className="text-colored-tertiary">for people in</span>{" "}
          <br className="hidden md:block" /> back-to-back meetings
        </h1>
        <h2 className="px-14 w-full max-w-2xl text-lg font-medium leading-tight text-center lg:text-2xl text-colored-secondary">
          Granola takes your raw meeting notes and makes them awesome
        </h2>
        <div className="flex flex-col">
          <DeviceDrawer
            trigger={
              <button
                className="flex-none bg-[#82de68] justify-center flex gap-2 items-center from-accent to-accent-strong hover:scale-[101%] transform-gpu text-colored-primary rounded-full focus:ring-2 focus:ring-accent font-medium focus:ring-offset-2 focus:outline-none text-base lg:text-xl shadow-[inset_0px_0.5px_1px_rgb(255_255_255_/_0.5)] group relative overflow-hidden duration-75 z-20 px-6 h-12 lg:h-14 transition-all cursor-pointer lg:pl-7 lg:pr-4"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:rv:"
                data-state="closed"
              >
                <span>Send me a download link</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-5 h-5 opacity-30"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            }
            content={<DeviceDrawerContent />}
          />
        </div>
      </div>

      <div className="relative gap-2 items-center px-4 -mb-16 w-full max-w-4xl sm:px-6 md:-mb-32 md:flex xl:px-0">
        <div className="hidden md:flex absolute left-0 top-1/2 flex-col gap-1.5 items-stretch p-1.5 w-48 rounded-lg -translate-y-1/5 -translate-x-2/3 bg-black/20">
          <div className="overflow-hidden w-full rounded transition-all duration-300 aspect-video hover:scale-101">
            <Image
              alt="image"
              loading="lazy"
              width={16}
              height={9}
              className="z-0 transition-all"
              sizes="100vw"
              src="/assets/images/hero-image-one.jpg"
              style={{ color: "transparent", width: "100%", height: "auto" }}
            />
          </div>
          <div className="overflow-hidden w-full rounded transition-all duration-300 aspect-video hover:scale-101">
            <Image
              alt="image"
              loading="lazy"
              width={16}
              height={9}
              className="z-0 transition-all"
              sizes="100vw"
              src="/assets/images/hero-image-two.jpg"
              style={{ color: "transparent", width: "100%", height: "auto" }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center w-3/5 md:gap-2 md:w-[95%] md:ml-[3%] md:static">
          <p className="text-xs font-medium sm:text-base md:text-lg text-tertiary">
            Your notes + transcript
          </p>
          <div className="overflow-hidden rounded-lg shadow-lg flex relative flex-col flex-1 h-full backdrop-blur-lg font-basic bg-white border-0.5 @container w-full">
            <div className="flex relative flex-none gap-4 items-center pr-1 pl-2 py-[3%] md:h-8">
              <div className="flex items-center w-full space-x-[3%] md:space-x-2">
                <div className="rounded-full aspect-square bg-red-400 border-red-500 w-[3%] md:w-2.5 md:h-2.5"></div>
                <div className="rounded-full aspect-square bg-yellow-300 border-yellow-400 w-[3%] md:w-2.5 md:h-2.5"></div>
                <div className="rounded-full aspect-square bg-green-400 border-green-500 w-[3%] md:w-2.5 md:h-2.5"></div>
              </div>
            </div>

            <div className="relative flex-1 bg-white px-[5%] md:px-8 pt-4 aspect-[4/4.9] opacity-70 md:opacity-100">
              <div
                className="relative w-full"
                style={{ aspectRatio: "300 / 240" }}
              >
                <Image
                  alt="Raw meeting notes"
                  width={338.34}
                  height={270.66}
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  src="/assets/images/hero-image-three.svg"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: 0,
                    color: "transparent",
                  }}
                />
              </div>
              <div className="flex absolute bottom-4 left-1/2 z-10 gap-3 items-center p-2.5 bg-white rounded-full border shadow-lg transition-all transform -translate-x-1/2 origin-bottom scale-75 md:scale-100">
                <div className="flex justify-center items-center w-6 h-6 gap-[3px]">
                  <div
                    className="bg-green-500 rounded-full transition-all duration-300 ease-in-out w-[3px]"
                    style={{ height: "59%" }}
                  ></div>
                  <div
                    className="bg-green-500 rounded-full transition-all duration-300 ease-in-out w-[3px]"
                    style={{ height: "65%" }}
                  ></div>
                  <div
                    className="bg-green-500 rounded-full transition-all duration-300 ease-in-out w-[3px]"
                    style={{ height: "49%" }}
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
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="hidden flex-none w-6 h-6 md:block text-tertiary"
        >
          <path
            fillRule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          ></path>
        </svg>

        <div
          className="flex absolute right-4 top-6 flex-col gap-1 items-center w-3/5 sm:right-6 md:gap-2 md:top-auto md:static md:w-full"
          style={{ transform: "none" }}
        >
          <p className="mr-2 text-xs font-medium sm:text-base md:text-lg md:translate-x-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="inline mr-2 size-4 md:size-5 text-accent"
            >
              <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684ZM13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z"></path>
            </svg>
            <span>AI enhanced</span>
          </p>
          <div className="overflow-hidden rounded-lg shadow-lg flex relative flex-col flex-1 h-full backdrop-blur-lg font-basic bg-white border-0.5 @container w-full">
            <div className="flex relative flex-none gap-4 items-center pr-1 pl-2 py-[3%] md:h-8">
              <div className="flex items-center w-full space-x-[3%] md:space-x-2">
                <div className="rounded-full aspect-square bg-red-400 border-red-500 w-[3%] md:w-2.5 md:h-2.5"></div>
                <div className="rounded-full aspect-square bg-yellow-300 border-yellow-400 w-[3%] md:w-2.5 md:h-2.5"></div>
                <div className="rounded-full aspect-square bg-green-400 border-green-500 w-[3%] md:w-2.5 md:h-2.5"></div>
              </div>
            </div>

            <div className="relative flex-1 bg-white px-[5%] md:px-8 pt-4 aspect-[4/5] overflow-hidden">
              <div
                className="relative w-full"
                style={{ aspectRatio: "300 / 472" }}
              >
                <Image
                  alt="AI enhanced meeting summary based on raw notes"
                  loading="lazy"
                  width={359.59}
                  height={565.75}
                  decoding="async"
                  data-nimg="fill"
                  src="/assets/images/hero-image-four.svg"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: 0,
                    color: "transparent",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
