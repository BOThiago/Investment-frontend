import { useRecoilValue } from "recoil";
import { themeState } from "../state/atom";

export const useTheme = () => {
  const theme = useRecoilValue(themeState);

  return theme;
};
