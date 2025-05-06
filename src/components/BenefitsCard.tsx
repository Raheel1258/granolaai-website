import React from "react";
interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  benefits: string[];
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  benefits,
}) => {
  return (
    <div className="relative rounded-2xl md:rounded-3xl lg:rounded-4xl p-4 md:py-6 md:px-8 bg-white border border-gray-300 sm:h-full mb-2 md:mb-6 sm:mb-0">
      <div className="flex items-center gap-x-3 mb-4">
        {icon}
        <h3 className="text-xl md:text-2xl">{title}</h3>
      </div>
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="bg-gray-100 text-black rounded-md text-base lg:text-lg leading-tight mb-4 px-5 py-4"
        >
          {benefit}
        </div>
      ))}
    </div>
  );
};
