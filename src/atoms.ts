import { atomWithStorage } from "jotai/utils";
import { ThemeSetting, type Theme } from "./types";

export const themeAtom = atomWithStorage<Theme>("theme", ThemeSetting.Light);
