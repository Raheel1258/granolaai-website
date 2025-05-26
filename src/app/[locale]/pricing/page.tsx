import BuiltForPeople from "@/components/BuiltForPeople";
import GranolaPricingPage from "../../../components/Faq";
import Pricing from "../../../components/Pricing";
// import TrustedBySection from "@/components/TrustedBySection";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <Pricing />
      <GranolaPricingPage />
      <BuiltForPeople />
      {/* <TrustedBySection /> */}
    </main>
  );
}
