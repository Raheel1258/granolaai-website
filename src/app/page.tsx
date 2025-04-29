import BuiltForPeople from "@/components/BuiltForPeople";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import MeetingPlatformsSection from "@/components/MeetingPlatformsSection";
import MeetingToWork from "@/components/MeetingToWork";
import NoteTemplateTabs from "@/components/NoteTemplateTabs";
import ShareNotes from "@/components/ShareNotes";
import TrustedBySection from "@/components/TrustedBySection";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <TrustedBySection />
      <HowItWorks />
      <MeetingPlatformsSection />
      <NoteTemplateTabs />
      <MeetingToWork />
      <ShareNotes />
      <BuiltForPeople />
    </main>
  );
}
