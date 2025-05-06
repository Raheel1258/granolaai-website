import React from "react";
import MeetingToWork from "./MeetingToWork";
import NoteTemplateTabs from "./NoteTemplateTabs";
import ShareNotes from "./ShareNotes";
import { BenefitsSection } from "./BenefitsSection";

const GradientSectionWrapper: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col items-center">
      <div
        className="absolute inset-0 select-none z-[-1] opacity-80 w-screen left-[50%] -translate-x-1/2"
        style={{
          background: `radial-gradient(at 71% 57%, rgba(51, 255, 0, 0.3) 0px, transparent 50%), 
                radial-gradient(at 53% 43%, rgba(255, 255, 0, 0.3) 0px, transparent 50%), 
                radial-gradient(at 31% 51%, rgba(255, 128, 0, 0.17) 0px, transparent 50%)`,
        }}
      ></div>
      <div className="w-full max-w-[1400px] flex flex-col items-center">
        <NoteTemplateTabs />
        <MeetingToWork />
        <ShareNotes />
        <BenefitsSection />
      </div>
    </div>
  );
};

export default GradientSectionWrapper;
