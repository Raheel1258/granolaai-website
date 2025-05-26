"use client";

import {
  footerLinks,
  navbarLinks,
  otherFooterLinks,
  calendlyLink,
} from "@/constants/nav-links";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { LanguageSwitcher } from "./LanguageSwither";
import { useLocale, useTranslations } from "next-intl";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const locale = useLocale();

  const t = useTranslations("navigation");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full flex justify-center fixed sm:top-[20px] top-0 z-50">
      <header
        className={`w-full sm:max-w-[680px] sm:rounded-full h-[56px] flex items-center justify-between p-[8px] relative ${
          isScrolled && !isMenuOpen
            ? "shadow-lg bg-[#f5f6f7]"
            : "sm:border bg-white"
        }`}
      >
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={80}
            height={28}
            className="mx-[12px]"
          />
        </Link>
        <nav className="sm:flex hidden">
          <ul className="flex items-center w-full">
            {navbarLinks.map((link, index: number) => (
              <Link
                key={index}
                href={`/${locale}/${link.path}`}
                className="px-[12px] py-[6px] rounded-full hover:bg-black/5"
              >
                {locale === "fr" ? link.nameFr : link.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Link href={calendlyLink} passHref>
            <Button
              variant={isScrolled ? "green" : "default"}
              className="flex items-center justify-center text-sm sm:w-[180px]"
            >
              <span className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
              </span>
              {t("bookDemo")}
            </Button>
          </Link>

          {/* Mobile menu icon */}
          <button className="sm:hidden flex p-[8px]" onClick={toggleMenu}>
            <Image
              src={isMenuOpen ? "/close-icon.svg" : "/menu-icon.svg"}
              alt="menu icon"
              width={24}
              height={24}
            />
          </button>
        </div>
        {/* Mobile Drawer Menu */}
        <div
          className={`absolute top-[56px] left-0 w-full h-[calc(100vh-56px)] flex flex-col justify-between bg-white sm:hidden 
          origin-top transition-all duration-300 ease-in-out
          ${
            isMenuOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          }
          `}
        >
          <div className="flex flex-col items-start p-4 space-y-2">
            {navbarLinks.map((link, index: number) => (
              <Link
                key={index}
                href={link.path}
                className="w-full text-right text-5xl px-4 py-2 rounded-md hover:bg-black/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {locale === "fr" ? link.nameFr : link.name}
              </Link>
            ))}
          </div>
          <div className="text-right flex flex-col gap-8 p-4">
            <div className="flex flex-wrap text-right gap-x-4 justify-end">
              {footerLinks.map((link, index: number) => (
                <Link key={index} href={link.path} className="hover:underline">
                  {locale === "fr" ? link.nameFr : link.name}
                </Link>
              ))}
              <Link href="" className="flex items-center justify-center">
                <Image
                  src="/linkedin-icon.svg"
                  alt="linkedin"
                  width={16}
                  height={16}
                />
              </Link>
              <Link href="" className="flex items-center justify-center">
                <Image src="/x-icon.svg" alt="x" width={16} height={16} />
              </Link>
            </div>
            <div className="flex flex-wrap text-right gap-x-4 justify-end">
              <LanguageSwitcher />
            </div>
            <div className="flex flex-col items-end gap-2">
              <p>{t("copyright")}</p>
              <p>{t("madeIn")}</p>
              {otherFooterLinks.map((link, index: number) => (
                <Link key={index} href={link.path} className="hover:underline">
                  {locale === "fr" ? link.nameFr : link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>{" "}
        <div className="sm:flex hidden">
          <LanguageSwitcher />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
