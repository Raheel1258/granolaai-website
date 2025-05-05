import BuiltForPeople from "@/components/BuiltForPeople";
import GranolaPricingPage from "../../components/Faq";
import Pricing from "../../components/Pricing";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <Pricing />
      <GranolaPricingPage />
      <BuiltForPeople />
    </main>
  );
}
