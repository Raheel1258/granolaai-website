import {
  ThumbsUpIcon,
  UserIcon,
  CheckBadgeIcon,
  SparklesIcon,
} from "../components/ui/icons";

export const benefitsData = [
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
