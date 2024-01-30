import { useRecoilValue } from "recoil";
import { accessTokenSatate, refreshTokenState } from "../state/atom";
import axios, { AxiosResponse } from "axios";

// Adicionar aqui a verificacao com o refreshToken
export const useAuth = () => {
  const accessToken = useRecoilValue(accessTokenSatate);
  const refreshToken = useRecoilValue(refreshTokenState);

  return async() => await axios
    .post(`http://localhost:5050/`, {
      accessToken,
      refreshToken,
    })
    .then((response) => {
      if (response.status === 200) {
        return true;
      }
    })
    .catch((err: AxiosResponse<any, any>) => {
      if (err?.status === 401) {
        return false;
      } else {
        console.error(err);
        return true;
      }
    });
};
