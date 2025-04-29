import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DeviceDrawerContent = () => {
  return (
    <div className="text-center flex flex-col w-full items-center">
      <Image src={"/phone.svg"} alt="phone" width={48} height={48} />
      <h2 className="text-2xl font-semibold">On your phone?</h2>
      <p className="mt-1 text-base font-normal text-center">
        We&apos;ll email you a link to open later on your Mac
      </p>
      <div className="flex overflow-hidden gap-2 p-2 pl-0 w-full text-base bg-white rounded-full border-2 md:text-lg mt-8">
        <Input
          placeholder="Your work email"
          required
          id="email"
          type="email"
          name="email"
          aria-label="Your work email"
        />
        <Button
          variant="green"
          className="flex-none"
          type="submit"
          aria-label="Send link"
        >
          Send link
        </Button>
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
