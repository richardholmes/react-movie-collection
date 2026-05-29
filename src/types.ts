export type Movie = {
  id: string;
  title: string;
  original_title: string;
  director: string;
  producer: string;
  release_date: string;
  rt_score: string;
  image: string;
};

export const Theme = {
  Light: "light",
  Dark: "dark",
} as const;
export type ThemeSetting = (typeof Theme)[keyof typeof Theme];
