export const getPlansData = (billingPeriod: string) => [
  {
    name: "Free trial",
    price: "Free",
    period: "",
    buttonText: "Get started",
    buttonVariant: "accent",
    androidButton: "Join the Windows waitlist",
    features: [
      "25 free meetings",
      "AI chat with any meeting",
      "Create your own note templates",
    ],
  },
  {
    name: "Individual",
    price: billingPeriod === "monthly" ? "$18" : "$180",
    period: billingPeriod === "monthly" ? "per month" : "per year",
    buttonText: "Subscribe",
    buttonVariant: "outline",
    androidButton: "Sign up in app",
    features: [
      { text: "Unlimited meetings for you", highlight: true },
      "AI chat with any meeting",
      "Create your own note templates",
    ],
  },
  {
    name: "Business",
    price: billingPeriod === "monthly" ? "$14" : "$140",
    period:
      billingPeriod === "monthly" ? "per user per month" : "per user per year",
    buttonText: "Get started",
    buttonVariant: "outline",
    androidButton: "Sign up in app",
    features: [
      { text: "Unlimited meetings for the whole team", highlight: true },
      "Share templates across your team",
      "Consolidated billing & admin",
      { text: "Everything included in Individual", icon: "plus" },
    ],
  },
];
