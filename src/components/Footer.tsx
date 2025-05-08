import { footerLinks, otherFooterLinks } from "@/constants/nav-links";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { calendlyLink, signupLink, linkedinLink } from "@/constants/nav-links";

const Footer = () => {
  return (
    <footer className="px-[24px] pt-[32px] pb-[16px] flex flex-col gap-8 bg-[#fafafa]">
      <section className="flex overflow-visible relative flex-col items-center py-16 w-full sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl gap-8 justify-center px-0 mx-auto max-w-7xl text-xl text-center lg:gap-8">
        <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8">
          <h2 className="text-3xl lg:text-5xl text-colored font-bold tracking-[-0.015em] leading-[0.95] text-balance">
            Get started for free in less than 10 minutes
          </h2>
          <p className="text-xl font-medium lg:text-2xl text-gray-500">
            Get started with a 30 day free trial. You&apos;ll have full access
            to the NestQ platform, with help from our team, to make sure you get
            the most out of your experience.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Link href={calendlyLink} passHref>
            <button
              className="flex-none bg-[#82de68] justify-center flex gap-2 items-center from-accent to-accent-strong hover:scale-[101%] transform-gpu text-colored-primary rounded-full focus:ring-2 focus:ring-accent font-medium focus:ring-offset-2 focus:outline-none text-sm sm:text-base lg:text-xl shadow-[inset_0px_0.5px_1px_rgb(255_255_255_/_0.5)] group relative overflow-hidden duration-75 z-20 px-3 sm:px-6 h-10 sm:h-12 lg:h-14 transition-all cursor-pointer whitespace-nowrap"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:rv:"
              data-state="closed"
            >
              {/* Calendar icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
              <span>Book a demo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="w-4 h-4 sm:w-5 sm:h-5 opacity-30"
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
          <Link href={signupLink} passHref>
            <button
              className="flex-none bg-white justify-center flex gap-2 items-center hover:scale-[101%] transform-gpu text-black rounded-full focus:ring-2 focus:ring-gray-300 font-medium focus:ring-offset-2 focus:outline-none text-base lg:text-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] group relative overflow-hidden duration-75 z-20 px-6 h-12 lg:h-14 transition-all cursor-pointer lg:pl-7 lg:pr-4 border border-gray-200 hover:border-gray-300"
              type="button"
            >
              {/* Gift icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 16 16"
              >
                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
              </svg>
              <span>Try for free</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="w-5 h-5 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </section>
      <div className="flex flex-wrap gap-x-4 justify-end items-center mx-auto w-full max-w-7xl text-secondary">
        <Image
          src="/logo-single-letter.svg"
          alt="NestQ Logo"
          width={43}
          height={41}
          className="-ml-2.5 w-11 h-11"
        />
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
        <Link title="LinkedIn" className="p-1" href={linkedinLink}>
          <Image
            src={"/linkedin-icon.svg"}
            alt="linkedin"
            width={16}
            height={16}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2 items-end mx-auto w-full max-w-7xl md:items-center md:gap-4 md:flex-row text-tertiary">
        <p>© NestQ inc 2025</p>
        <p>Made with ♥︎ in Canada</p>
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
