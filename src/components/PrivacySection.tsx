export const PrivacySection = () => {
  const privacyItems = [
    {
      title: "Privacy Policy",
      description: "How we protect your privacy and data",
      url: "https://go.granola.so/privacy",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      ),
    },
    {
      title: "Data Processing Agreement",
      description: "How we handle customer data",
      url: "https://go.granola.so/dpa",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid gap-4 pt-8 mt-6 border-t border-teal-700/10 md:grid-cols-4">
      <h2 className="text-4xl font-semibold text-colored">Privacy</h2>
      <div className="grid col-span-3 md:gap-4 md:grid-cols-2">
        {privacyItems.map((item, index) => (
          <PolicyCard
            key={`privacy-${index}`}
            title={item.title}
            description={item.description}
            url={item.url}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

interface PolicyCardProps {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

export const PolicyCard: React.FC<PolicyCardProps> = ({
  title,
  description,
  url,
  icon,
}) => {
  return (
    <a
      className="flex flex-col p-4 mb-4 rounded-lg border shadow transition-all hover:shadow bg-white/60 hover:bg-white"
      href={url}
    >
      {icon}
      <h3 className="mt-4 text-xl font-semibold leading-tight text-colored">
        {title}
      </h3>
      <p className="font-medium text-colored-secondary">{description}</p>
    </a>
  );
};
