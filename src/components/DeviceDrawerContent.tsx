import Image from "next/image";
import Link from "next/link";
import React from "react";

const DeviceDrawerContent = () => {
  return (
    <div className="text-center flex flex-col w-full items-center">
      <Image src={"/phone.svg"} alt="phone" width={48} height={48} />
      <h2 className="text-2xl font-semibold">On your phone?</h2>
      <p className="mt-1 text-base font-normal text-center">
        We&apos;ll email you a link to open later on your Mac
      </p>
      <div className="flex overflow-hidden gap-2 p-2 pl-0 w-full text-base bg-white rounded-full border-2 md:text-lg mt-8">
        <input
          className="px-4 py-1 w-full rounded-xl lg:px-6 lg:py-2 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
          placeholder="Your work email"
          required
          id="email"
          type="email"
          name="email"
          aria-label="Your work email"
        />
        <button
          className="flex-none px-6 py-1 font-medium rounded-full lg:pl-6 lg:pr-5 lg:py-2 bg-[#93f27e] text-black focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
          type="submit"
          aria-label="Send link"
        >
          Send link
        </button>
      </div>

      <div className="flex gap-4 mt-6 font-medium underline text-black decoration-colored-tertiary">
        <Link
          href="https://go.granola.so/download?utm_source=landing_page"
          passHref
        >
          Download Mac app
        </Link>
        <Link href="https://go.granola.so/windows" passHref>
          I&apos;m on a PC
        </Link>
      </div>
    </div>
  );
};

export default DeviceDrawerContent;
