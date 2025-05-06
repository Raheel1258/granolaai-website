export const FeatureItem = ({
  children,
  active = true,
}: {
  children: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <li className="flex gap-2 w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`p-1 mt-0.5 rounded-full size-5 ${
          active ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"
        } flex-shrink-0`}
      >
        {active ? (
          <path
            fillRule="evenodd"
            d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
            clipRule="evenodd"
          />
        ) : (
          <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
        )}
      </svg>
      <p>
        <span>{children}</span>
      </p>
    </li>
  );
};
