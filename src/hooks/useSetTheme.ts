import { useSetRecoilState } from "recoil";
import { themeState } from "../state/atom";

export const useSetTheme = () => {
    return useSetRecoilState(themeState);
};
