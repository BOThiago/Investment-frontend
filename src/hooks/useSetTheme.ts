import { useSetRecoilState } from "recoil";
import { themeState } from "../state/atom";

export const useSetTheme = () => {
  const setTheme = useSetRecoilState(themeState)

  return setTheme
};
