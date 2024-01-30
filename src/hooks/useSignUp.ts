import axios from "axios";
import Cookies from "js-cookie";
import { useSetRecoilState } from "recoil";
import { accessTokenSatate, refreshTokenState } from "../state/atom";

export const useSignUp = (method: "email" | "google") => {
  if (method === "email") {
    return async (email: string, name: string, password: string) => {
      try {
        const response = await axios.post(`http://localhost:5500/users`, {
          email,
          name,
          password,
        });

        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;

        const setAccessToken = useSetRecoilState(accessTokenSatate);
        const setRefreshToken = useSetRecoilState(refreshTokenState);

        if (response.status === 200) {
          window.alert("Usuario criado com sucesso");
          Cookies.set("accesToken", accessToken);
          setAccessToken(accessToken);
          Cookies.set("refreshToken", refreshToken);
          setRefreshToken(refreshToken);
        }
      } catch (err) {
        window.alert("Erro ao criar usuario");
        console.log(err);
      }
    };
  } else if (method === "google") {
    return () => {};
  }
};
