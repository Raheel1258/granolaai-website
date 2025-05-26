import { BlogIcon, PressIcon } from "@/components/ui/icons";
import { NewsItemType } from "./type";
import Image from "next/image";
export const NewsItem = ({ item }: { item: NewsItemType }) => {
  const isFeature =
    item.title ===
      "Granola raises $20M to build the AI notepad that makes you smarter" ||
    item.title === "Introducing Granola: the AI-powered notepad for meetings";

  return (
    <a
      className="flex gap-2 px-4 pt-3 pb-4 -mx-4 mb-8 rounded-xl hover:bg-neutral-100 group"
      href={item.url}
      target={item.isExternal ? "_blank" : undefined}
    >
      <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-neutral-100 hidden md:grid -mt-1.5">
        {item.type === "blog" ? (
          <div className="text-green-500">
            <BlogIcon />
          </div>
        ) : (
          <div className="text-sky-500">
            <PressIcon />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h2
          className={`font-medium leading-tighter text-primary ${
            isFeature ? "text-3xl" : "text-lg"
          }`}
        >
          {item.title}
        </h2>
        <div className="flex items-center space-x-2 text-sm">
          {item.author ? (
            <div className="flex items-center cursor-pointer">
              <Image
                alt={item.author.name}
                src={item.author.image}
                className="rounded-full size-6"
              />
              <p className="mt-0 mb-0 ml-2 font-medium">{item.author.name}</p>
            </div>
          ) : (
            <span className="font-medium text-black">{item.source}</span>
          )}
          <p className="tabular-nums text-tertiary">{item.date}</p>
        </div>
      </div>
    </a>
  );
};
