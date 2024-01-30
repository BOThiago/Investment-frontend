import Cookies from "js-cookie";
import { useSetRecoilState } from "recoil";
import { accessTokenSatate, refreshTokenState } from "../state/atom";

export const useSignOut = () => {
  const setAccessTokenState = useSetRecoilState(accessTokenSatate);
  const setRefreshTokenState = useSetRecoilState(refreshTokenState);
  return () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    setAccessTokenState(undefined);
    setRefreshTokenState(undefined);
  };
};
