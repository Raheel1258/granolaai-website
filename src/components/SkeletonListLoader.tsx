"use client";

import React, { useEffect, useState } from "react";

type SkeletonListLoaderProps = {
  heading: string;
};

const getRandomWidth = () => {
  const width = Math.floor(Math.random() * (85 - 70 + 1)) + 70;
  return `${width}%`;
};

const SkeletonListLoader: React.FC<SkeletonListLoaderProps> = ({ heading }) => {
  const [widths, setWidths] = useState<string[]>([]);

  useEffect(() => {
    const itemCount = Math.random() < 0.5 ? 2 : 3;
    const generated = Array.from({ length: itemCount }, () => getRandomWidth());
    setWidths(generated);
  }, []);

  if (widths.length === 0) return null; // prevent mismatch during SSR

  return (
    <div className="flex flex-col gap-1.5 mt-4">
      <h3 className="text-base font-semibold lg:text-lg">{heading}</h3>

      {widths.map((width, index) => (
        <div key={index} className="flex gap-2 items-center w-full">
          <div className="rounded-full size-2 bg-neutral-200"></div>
          <div
            className="h-3 rounded lg:h-4 bg-neutral-200 skeleton-grow-once"
            style={{ "--skeleton-width": width } as React.CSSProperties}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonListLoader;
