import { ResourceCard } from "./ResourceCard";

export const ResourcesSection = ({
  resources,
}: {
  resources: ResourceItem[];
}) => {
  return (
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-center mb-12">Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <ResourceCard key={index} resource={resource} />
        ))}
      </div>
    </div>
  );
};
