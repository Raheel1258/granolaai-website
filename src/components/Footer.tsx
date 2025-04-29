import { footerLinks, otherFooterLinks } from "@/constants/nav-links";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DeviceDrawer from "./DeviceDrawer";
import DeviceDrawerContent from "./DeviceDrawerContent";

const Footer = () => {
  return (
    <footer className="px-[24px] pt-[32px] pb-[16px] flex flex-col gap-8 bg-[#fafafa]">
      <section className="flex overflow-visible relative flex-col items-center py-16 w-full sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl gap-8 justify-center px-0 mx-auto max-w-7xl text-xl text-center lg:gap-8">
        <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8">
          <h2 className="text-3xl lg:text-5xl text-colored font-bold tracking-[-0.015em] leading-[0.95] text-balance">
            Ready for calmer, more productive meetings?
          </h2>
          <p className="text-xl font-medium lg:text-2xl text-colored-secondary">
            Try Granola for a few meetings today. It&apos;s free to get started.
          </p>
        </div>
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
      </section>
      <div className="flex flex-wrap gap-x-4 justify-end items-center mx-auto w-full max-w-7xl text-secondary">
        <svg
          width="1024"
          height="1024"
          viewBox="0 0 1024 1024"
          fill="none"
          className="-ml-2.5 w-12 h-12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_327_606)">
            <g filter="url(#filter0_ddii_327_606)">
              <path
                d="M425.908 571.994C340.133 571.994 273.341 509.421 273.341 422.943C273.341 335.761 340.133 274.594 433.642 274.594H605.192V278.109L572.851 339.98H558.789C580.584 361.775 593.24 390.601 593.24 423.646C593.24 463.018 575.663 498.172 549.649 516.452V518.561C584.1 535.435 605.895 577.619 605.895 625.428C605.895 710.5 535.588 770.262 432.939 770.262C356.303 770.262 290.918 737.217 257.17 682.377L318.337 627.537C343.648 666.91 387.239 691.517 435.048 691.517C483.56 691.517 517.308 665.503 517.308 627.537C517.308 593.79 492.7 571.291 458.249 571.291C447.703 571.291 443.485 571.994 425.908 571.994ZM359.819 422.943C359.819 463.721 390.051 494.656 432.939 494.656C475.826 494.656 507.465 463.721 507.465 422.943C507.465 384.273 475.826 351.932 432.939 351.932C390.754 351.932 359.819 383.57 359.819 422.943Z"
                fill="url(#paint0_linear_327_606)"
              ></path>
              <rect
                x="659.61"
                y="211.801"
                width="97.0974"
                height="601.344"
                rx="48.5487"
                fill="url(#paint1_linear_327_606)"
                stroke="white"
                strokeWidth="18"
                className="blinking-cursor"
              ></rect>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_ddii_327_606"
              x="235.17"
              y="187.801"
              width="552.538"
              height="663.344"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="7"></feOffset>
              <feGaussianBlur stdDeviation="11"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0.254167 0 0 0 0 0.147417 0 0 0 0.15 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_327_606"
              ></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="1"></feOffset>
              <feGaussianBlur stdDeviation="1"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_327_606"
                result="effect2_dropShadow_327_606"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_327_606"
                result="shape"
              ></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="-1"></feOffset>
              <feGaussianBlur stdDeviation="1"></feGaussianBlur>
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              ></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="shape"
                result="effect3_innerShadow_327_606"
              ></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="2"></feOffset>
              <feGaussianBlur stdDeviation="1"></feGaussianBlur>
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              ></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.65 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="effect3_innerShadow_327_606"
                result="effect4_innerShadow_327_606"
              ></feBlend>
            </filter>
            <linearGradient
              id="paint0_linear_327_606"
              x1="431.533"
              y1="274.594"
              x2="431.533"
              y2="770.262"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#005723" />
              <stop offset="1" stopColor="#004126" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_327_606"
              x1="708.159"
              y1="220.801"
              x2="708.159"
              y2="804.144"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#74E34C" />
              <stop offset="1" stopColor="#7EFF7B" />
            </linearGradient>
            <clipPath id="clip0_327_606">
              <rect width="1024" height="1024" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        <div className="flex-1"></div>
        {footerLinks.map((link, index: number) => {
          return (
            <Link
              key={index}
              href={link.path}
              className="transition-all hover:underline underline-offset-2 hover:underline-offset-4 text-black"
            >
              {link.name}
            </Link>
          );
        })}
        <Link title="LinkedIn" className="p-1" href="https://www.linkedin.com/">
          <Image
            src={"/linkedin-icon.svg"}
            alt="linkedin"
            width={16}
            height={16}
          />
        </Link>
        <Link href={""} className="flex items-center justify-center">
          <Image src={"/x-icon.svg"} alt="x" width={16} height={16} />
        </Link>
      </div>
      <div className="flex flex-col gap-2 items-end mx-auto w-full max-w-7xl md:items-center md:gap-4 md:flex-row text-tertiary">
        <p>© Granola inc 2025</p>
        <p>Made with ♥︎ in Shoreditch</p>
        <div className="flex-1"></div>
        {otherFooterLinks.map((link, index: number) => {
          return (
            <Link
              key={index}
              href={link.path}
              className="transition-all hover:underline underline-offset-2 hover:underline-offset-4"
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
