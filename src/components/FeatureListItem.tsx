import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface FeatureListItemProps {
  feature: {
    titleKey: string;
    textKey: string;
    image: string;
  };
  className?: string;
  isActive: boolean;
  onClick: () => void;
}

const FeatureListItem = ({
  feature,
  className,
  isActive,
  onClick,
}: FeatureListItemProps) => {
  const t = useTranslations("featureSection");

  return (
    <div
      className={`p-4 cursor-pointer transition-all duration-300 ${
        isActive ? "bg-[#F8F8FF]" : "hover:bg-[#F8F8FF]"
      } ${className}`}
      onClick={onClick}
    >
      <h3 className="text-[1.25rem] font-semibold mb-2">{t(feature.titleKey)}</h3>
      <p className="text-[0.875rem] text-gray-600">{t(feature.textKey)}</p>
    </div>
  );
};

export default FeatureListItem;
