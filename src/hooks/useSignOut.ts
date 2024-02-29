import Cookies from "js-cookie";
import { useSetRecoilState } from "recoil";
import { accessTokenSatate, refreshTokenState } from "../state/atom";
import { useNavigate } from "react-router-dom";

export const useSignOut = () => {
    const setAccessTokenState = useSetRecoilState(accessTokenSatate);
    const setRefreshTokenState = useSetRecoilState(refreshTokenState);
    const navigate = useNavigate();

    return () => {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        Cookies.remove("name");
        Cookies.remove("email");
        Cookies.remove("picture");
        setAccessTokenState(undefined);
        setRefreshTokenState(undefined);
        navigate("/");
    };
};
