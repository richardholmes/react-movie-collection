export interface Movie {
  id: string;
  title: string;
  original_title: string;
  director: string;
  producer: string;
  release_date: string;
  rt_score: string;
  image: string;
}

export type Theme = "light" | "dark";

export const Theme = {
  Light: "light" as const,
  Dark: "dark" as const,
};
