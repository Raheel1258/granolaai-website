import BuiltForPeople from "@/components/BuiltForPeople";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import MeetingPlatformsSection from "@/components/MeetingPlatformsSection";
import GradientSectionWrapper from "@/components/GradientSectionWrapper";
import TrustedBySection from "@/components/TrustedBySection";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <TrustedBySection />
      <HowItWorks />
      <MeetingPlatformsSection />
      <GradientSectionWrapper />
      <BuiltForPeople />
    </main>
  );
}
