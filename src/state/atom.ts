import { atom } from "recoil";
import Cookies from "js-cookie";
import { useGetSystemTheme } from "../hooks/useGetSystemTheme";

export const accessTokenSatate = atom<string | undefined>({
  key: "accessTokenState",
  default: Cookies.get("access_token"),
});

export const refreshTokenState = atom<string | undefined>({
  key: "refreshTokenState",
  default: Cookies.get("access_token"),
});

export const themeState = atom<"dark" | "light">({
  key: "themeState",
  default: useGetSystemTheme(),
});
