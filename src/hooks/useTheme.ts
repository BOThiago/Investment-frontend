import { useRecoilValue } from "recoil";
import { themeState } from "../state/atom";

export const useTheme = () => {
    return useRecoilValue(themeState);
};
