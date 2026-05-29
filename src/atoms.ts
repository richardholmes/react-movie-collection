import { atomWithStorage } from "jotai/utils";
import { Theme } from "./types";

export const themeAtom = atomWithStorage<Theme>("theme", Theme.Light);
