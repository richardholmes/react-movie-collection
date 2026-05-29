import { atomWithStorage } from "jotai/utils";
import { Theme, type ThemeSetting } from "./types";

export const themeAtom = atomWithStorage<ThemeSetting>("theme", Theme.Light);
