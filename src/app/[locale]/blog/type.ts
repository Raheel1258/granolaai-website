export type NewsItemType = {
  title: string;
  source?: string;
  date: string;
  url: string;
  isExternal: boolean;
  type: "blog" | "press";
  author?: {
    name: string;
    image: string;
  };
};

export type FilterType = "all" | "blog" | "press";
