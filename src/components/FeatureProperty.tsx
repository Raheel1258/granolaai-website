import React from "react";

interface FeaturePropertyProps {
  icon: React.ReactNode;
  text: string;
}

const FeatureProperty: React.FC<FeaturePropertyProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-[0.5rem]">
      {icon}
      <p className="text-black text-[1.125rem]">{text}</p>
    </div>
  );
};

export default FeatureProperty;
