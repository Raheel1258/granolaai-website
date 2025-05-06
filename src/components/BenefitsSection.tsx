import { BenefitCard } from "./BenefitsCard";
import {
  CheckBadgeIcon,
  SparklesIcon,
  ThumbsUpIcon,
  UserIcon,
} from "./ui/icons";

export const BenefitsSection: React.FC = () => {
  // Define all benefits data
  const benefitsData = [
    {
      icon: <ThumbsUpIcon className="w-8 h-8 text-blue" />,
      title: "Dramatically elevate client service",
      benefits: [
        "Stay 100% present in client meetings",
        "Never let anything slip through the cracks",
      ],
    },
    {
      icon: <UserIcon className="w-8 h-8 text-purple" />,
      title: "Spend time on clients, not admin tasks",
      benefits: [
        "Spend 4 minutes, not 40, on post-meeting work",
        "Prep with an AI one-pager for every meeting",
      ],
    },
    {
      icon: <CheckBadgeIcon className="w-8 h-8 text-green" />,
      title: "Stay compliant",
      benefits: [
        "Audit-friendly meeting notes for every meeting",
        "You control client data and record retention",
      ],
    },
    {
      icon: <SparklesIcon className="w-8 h-8 text-yellow" />,
      title: "AI future-proof your firm",
      benefits: [
        "Jump is the leading edge of advisor-centric AI",
        "We release new features daily",
      ],
    },
  ];

  return (
    <div className="py-20 md:py-36">
      <div className="grid grid-cols-12 gap-4 lg:gap-8 mx-auto w-full xl:w-[1280px] px-4 lg:px-10 xl:px-2">
        {/* Header section */}
        <div className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-12 md:col-start-2 md:col-end-12">
          <div className="mb-16 text-center">
            <div className="mb-12 text-center px-4 sm:px-8 lg:px-0">
              <h1 className="break-normal pb-1 font-extralight text-[2.5rem] sm:text-[3rem] md:text-[3.25rem] lg:text-[5rem] leading-x-tight mb-5 text-jump-gradient pb-1">
                Everything changes once you start using Jump.
              </h1>
              <div className="mx-10 mt-10">
                <p className="text-[1rem] md:text-[1.25rem] leading-tight">
                  It's not just time savings. It's peace of mind,
                  client-experience, and future-proofing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits cards - first row */}
        <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-7 md:col-start-2 md:col-end-7">
          <BenefitCard {...benefitsData[0]} />
        </div>
        <div className="col-start-1 col-end-13 sm:col-start-7 sm:col-end-13 md:col-start-7 md:col-end-12">
          <BenefitCard {...benefitsData[1]} />
        </div>

        {/* Benefits cards - second row */}
        <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-7 md:col-start-2 md:col-end-7">
          <BenefitCard {...benefitsData[2]} />
        </div>
        <div className="col-start-1 col-end-13 sm:col-start-7 sm:col-end-13 md:col-start-7 md:col-end-12">
          <BenefitCard {...benefitsData[3]} />
        </div>
      </div>
    </div>
  );
};
