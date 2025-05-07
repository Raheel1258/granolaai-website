import React from "react";
import { SparklesIcon, ShieldIcon, GlobeIcon } from "./ui/icons";
interface ComplianceCardProps {
  title: string;
  status?: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  iconType: "shield" | "globe" | "lock" | "ai";
  bgColor: string;
}

const iconMap = {
  shield: ShieldIcon,
  ai: SparklesIcon,
  lock: ShieldIcon,
  globe: GlobeIcon,
};

export const ComplianceCard: React.FC<ComplianceCardProps> = ({
  title,
  status,
  description,
  linkText,
  linkUrl,
  iconType,
  bgColor,
}) => {
  const IconComponent = iconMap[iconType as keyof typeof iconMap];
  return (
    <div className="flex sticky top-0 gap-4 items-start p-4 rounded-xl border bg-white/80">
      <div className={`flex-none w-16 h-16 ${bgColor} rounded-full`}>
        <div className="grid relative place-items-center w-full h-full">
          {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-colored">{title}</h3>
          {status && (
            <p className="px-2 py-0.5 text-xs font-medium tracking-wide uppercase bg-black/10 rounded-full">
              {status}
            </p>
          )}
        </div>
        <p>{description}</p>
        <a
          className="underline underline-offset-2 decoration-tertiary hover:decoration-accent-strong hover:text-accent-strong"
          href={linkUrl}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};
