import { ResourceItem } from "@/app/pricing/types";

export const ResourceCard = ({ resource }: { resource: ResourceItem }) => {
  return (
    <a
      className="flex flex-col p-4 mb-4 rounded-lg border-2 border-neutral-200 shadow-md transition-all hover:shadow-lg hover:border-neutral-300 bg-white/60 hover:bg-white hover:-translate-y-1"
      href={resource.href}
    >
      {resource.icon}
      <h3 className="mt-4 text-xl font-semibold leading-tight">
        {resource.title}
      </h3>
      <p className="font-medium text-gray-600">{resource.description}</p>
    </a>
  );
};
