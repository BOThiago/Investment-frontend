import axios from "axios";
import Cookies from "js-cookie";
import { useSetRecoilState } from "recoil";
import { accessTokenSatate, refreshTokenState } from "../state/atom";

export const useLogin = () => {
  return async (email: string, password: string) => {
    try {
      const response = await axios.post(`http://localhost:5500/users`, {
        email,
        password,
      });

      const setAccessTokenState = useSetRecoilState(accessTokenSatate)
      const setRefreshTokenState = useSetRecoilState(refreshTokenState)

      if (response.status === 200) {
        window.alert("Usuario logado com sucesso");
        Cookies.set("accesToken", response.data.accessToken);
        setAccessTokenState(response.data.accessToken)
        Cookies.set("refreshToken", response.data.refreshToken);
        setRefreshTokenState(response.data.refreshToken)

      }
    } catch (err) {
      window.alert("Erro ao realizar o login");
      console.log(err);
    }
  };
};
