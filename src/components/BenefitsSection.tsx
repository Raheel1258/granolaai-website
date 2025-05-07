import { benefitsData } from "@/constants/benefits-data";
import { BenefitCard } from "./BenefitsCard";

export const BenefitsSection: React.FC = () => {
  return (
    <div className="py-20 md:py-36">
      <div className="grid grid-cols-12 gap-4 lg:gap-8 mx-auto w-full xl:w-[1280px] px-4 lg:px-10 xl:px-2">
        {/* Header section */}
        <div className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-12 md:col-start-2 md:col-end-12">
          <div className="mb-16 text-center">
            <div className="mb-12 text-center px-4 sm:px-8 lg:px-0">
              <h1 className="break-normal pb-1 font-extralight text-[2.5rem] sm:text-[3rem] md:text-[3.25rem] lg:text-[5rem] leading-x-tight mb-5 text-jump-gradient pb-1">
                Everything changes with NestQ.
              </h1>
              <div className="mx-10 mt-10">
                <p className="text-[1rem] md:text-[1.25rem] leading-tight">
                More than time saved: Gain peace of mind, elevate client experiences, and future-proof your practice.                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits cards using map */}
        {benefitsData.map((benefit, index) => {
          // Determine the grid classes based on index
          const isEven = index % 2 === 0;
          const gridClasses = isEven
            ? "col-start-1 col-end-13 sm:col-start-1 sm:col-end-7 md:col-start-2 md:col-end-7"
            : "col-start-1 col-end-13 sm:col-start-7 sm:col-end-13 md:col-start-7 md:col-end-12";

          return (
            <div key={index} className={gridClasses}>
              <BenefitCard {...benefit} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
