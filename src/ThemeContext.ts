// ThemeContext.js
import { createContext, useContext } from "react";
export type Theme = "light" | "dark";

type ThemeContext = {
  setTheme: (value: Theme) => void;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContext | undefined>(undefined);

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("useThemeContext must be wrapped within a ThemeProvider");
  }
  return {
    setTheme: themeContext.setTheme,
    theme: themeContext.theme,
  };
};
