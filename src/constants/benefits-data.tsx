import {
  ThumbsUpIcon,
  UserIcon,
  CheckBadgeIcon,
  SparklesIcon,
} from "../components/ui/icons";

export const benefitsData = [
  {
    icon: <ThumbsUpIcon className="w-8 h-8 text-blue" />,
    titleKey: "clientExperience.title",
    benefits: [
      "clientExperience.benefits.present",
      "clientExperience.benefits.slipThrough",
    ],
  },
  {
    icon: <UserIcon className="w-8 h-8 text-purple" />,
    titleKey: "focusOnClients.title",
    benefits: [
      "focusOnClients.benefits.followUp",
      "focusOnClients.benefits.prep",
    ],
  },
  {
    icon: <CheckBadgeIcon className="w-8 h-8 text-green" />,
    titleKey: "compliance.title",
    benefits: [
      "compliance.benefits.audit",
      "compliance.benefits.confidential",
    ],
  },
  {
    icon: <SparklesIcon className="w-8 h-8 text-yellow" />,
    titleKey: "futureProof.title",
    benefits: [
      "futureProof.benefits.features",
    ],
  },
];
