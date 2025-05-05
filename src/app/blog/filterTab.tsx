export const FilterTab = ({
  label,
  isActive,
  icon,
  onClick,
}: {
  label: string;
  isActive: boolean;
  icon: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-2 py-1 text-sm font-medium rounded-full border transition-colors ${
        isActive
          ? "bg-neutral-100 text-neutral-900 border-transparent"
          : "text-neutral-500 border-neutral-300 hover:bg-neutral-50 hover:text-neutral-700"
      }`}
    >
      <div className={isActive ? "text-green-500" : "text-current"}>{icon}</div>
      <span>{label}</span>
    </button>
  );
};
