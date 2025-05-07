import {
  ThumbsUpIcon,
  UserIcon,
  CheckBadgeIcon,
  SparklesIcon,
} from "../components/ui/icons";

export const benefitsData = [
  {
    icon: <ThumbsUpIcon className="w-8 h-8 text-blue" />,
    title: "Deliver Exceptional Client Experiences",
    benefits: [
      "Be fully present in every client conversation.",
      "Never let anything slip through the cracks",
    ],
  },
  {
    icon: <UserIcon className="w-8 h-8 text-purple" />,
    title: "Focus on Clients, Not Tedious Admin",
    benefits: [
      "Get client follow-up emails drafted in seconds.",
      "Prep with an AI one-pager for every meeting",
    ],
  },
  {
    icon: <CheckBadgeIcon className="w-8 h-8 text-green" />,
    title: "Stay compliant",
    benefits: [
      "Audit-ready notes for every meeting.",
      "Your data is confidential—never used for AI model training.",
    ],
  },
  {
    icon: <SparklesIcon className="w-8 h-8 text-yellow" />,
    title: "AI future-proof your firm",
    benefits: [
      "We release new features daily",
    ],
  },
];
