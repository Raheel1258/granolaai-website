import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Feature = {
  title: string;
  text: string;
  image: string;
};

type FeatureListItemProps = {
  feature: Feature;
  isActive: boolean;
  className?: string;
  onClick: () => void;
};

const FeatureListItem: React.FC<FeatureListItemProps> = ({
  feature,
  isActive,
  onClick,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-full p-[1rem] flex items-start gap-[2rem] flex-shrink-0 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {isActive ? (
        <div className="w-[0.5rem] h-full min-h-[116px] bg-[#93f27e] rounded-[1.875rem] hidden md:block" />
      ) : (
        <div className="w-[0.5rem] h-[1rem] bg-transparent rounded-[1.875rem] hidden md:block" />
      )}

      <div className="flex flex-col">
        {isActive && (
          <div className="w-full h-[0.5rem] bg-[#93f27e] rounded-[1.875rem] block md:hidden mb-[10px]" />
        )}
        <h5 className="text-[1.25rem] font-medium mb-[0.5rem] text-black">
          {feature.title}
        </h5>

        {isActive && (
          <p className="text-[#4E506A] slide-down-fade mb-[30px] md:mb-0">
            {feature.text}
          </p>
        )}
        {isActive && (
          <Image
            src={feature.image}
            alt="feature image"
            width={288.9}
            height={269.23}
            className="md:hidden block object-contain w-[288.9px] h-[269.23px] rounded-[1.125rem] self-center"
          />
        )}
      </div>
    </div>
  );
};

export default FeatureListItem;
