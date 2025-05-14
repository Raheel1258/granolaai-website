"use client";
import React, { useState } from "react";
import Image from "next/image";
import FeatureListItem from "./FeatureListItem";
import { features } from "@/constants/features";
import { Button } from "./ui/button";
import { Calendar, CircleX, Clock, StepForwardIcon } from "lucide-react";
import Link from "next/link";
import FeatureProperty from "./FeatureProperty";

const FeatureSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="flex flex-col items-center w-full xl:px-[2.5rem] px-[1.5rem] xl:py-[7rem] py-[2.5rem]">
      <div className="flex flex-col items-center max-w-[51.5rem] xl:mb-[4.5rem] mb-[3rem]">
        <h2 className="xl:text-[3rem] text-[2.5rem] text-center mb-[1rem] font-bold text-black">
          Incredible Features
        </h2>
        <p className="text-black xl:text-[1.25rem] text-[1rem]">
          AI solutions designed for advisers
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start max-w-[1536px] w-full xl:gap-[4rem] gap-[1.5rem] xl:mt-[2rem]">
        <div className="border max-w-[438.4px] w-full flex flex-col border-[#F8F8FF] rounded-[1rem]">
          {features.map((item, index) => (
            <FeatureListItem
              key={index}
              feature={item}
              className={
                index !== features.length - 1
                  ? "border-b border-[#E2E8F0]"
                  : "border-none"
              }
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <div className="w-full flex flex-col xl:gap-[4rem]">
          <div className="w-full rounded-[1.125rem] hidden md:block">
            <Image
              src={features[activeIndex].image}
              alt={features[activeIndex].title}
              width={600}
              height={400}
              className="w-full h-full rounded-[1.125rem] object-contain"
            />
          </div>
          <div className="flex flex-col gap-[1.5rem] w-full md:mt-[40px] xl:mt-0">
            <div className="flex flex-col lg:flex-row gap-[1rem]">
              <Link href="/pricing" className="w-full md:w-auto">
                <Button
                  variant="green"
                  className="flex justify-center gap-[10px] w-full"
                  size="xl"
                >
                  Try it for free <StepForwardIcon />
                </Button>
              </Link>
              <Link href="https://calendly.com/abdennouraissaoui/meeting-with-abdennour" className="w-full md:w-auto">
                <Button size="xl" className="flex justify-center gap-[10px] w-full">
                  Schedule demo <StepForwardIcon />
                </Button>
              </Link>
            </div>
            <div className="flex md:justify-start justify-center flex-wrap gap-[1.5rem]">
              <FeatureProperty icon={<Clock />} text="Free 21 day trial" />
              <FeatureProperty icon={<Calendar />} text="Set up in 5 mins" />
              <FeatureProperty icon={<CircleX />} text="Cancel anytime" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
