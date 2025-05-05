"use client";
import { useState } from "react";
import { FilterType } from "./type";
import { FilterTab } from "./filterTab";
import { GridIcon } from "lucide-react";
import { BlogIcon, PressIcon } from "@/components/ui/icons";
import { NewsItem } from "./newsItem";
import { newsData } from "@/constants/news-data";

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredNews =
    activeFilter === "all"
      ? newsData
      : newsData.filter((item) => item.type === activeFilter);

  return (
    <main className="flex-1 w-full lg:mx-auto">
      <section className="px-6 pt-40 mx-auto w-full max-w-2xl min-h-screen">
        <h1 className="mb-8 text-6xl font-bold tracking-tight text-primary">
          News
        </h1>

        {/* Filter Tabs */}
        <div className="flex gap-2 -mx-1">
          <FilterTab
            label="All"
            isActive={activeFilter === "all"}
            icon={<GridIcon />}
            onClick={() => setActiveFilter("all")}
          />
          <FilterTab
            label="Blog"
            isActive={activeFilter === "blog"}
            icon={<BlogIcon />}
            onClick={() => setActiveFilter("blog")}
          />
          <FilterTab
            label="Press"
            isActive={activeFilter === "press"}
            icon={<PressIcon />}
            onClick={() => setActiveFilter("press")}
          />
        </div>

        {/* News Items List */}
        <div className="relative mt-8 mb-24 -ml-1">
          <div className="hidden absolute inset-y-2 left-4 w-px bg-neutral-200 md:block"></div>

          {filteredNews.map((item, index) => (
            <NewsItem key={index} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
