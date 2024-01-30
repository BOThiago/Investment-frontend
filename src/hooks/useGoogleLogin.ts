import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Cookies from "js-cookie";

export const googleLogin = () => {
  return useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      try {
        const response = await axios.post(`http://localhost:5050`, {
          code: codeResponse.code,
        });
        
        if(response.status === 200) {
          window.alert("Usuario logado com sucesso");
          Cookies.set("accesToken", response.data.accessToken);
          Cookies.set("refreshToken", response.data.refreshToken);
        }

        console.log(codeResponse);
      } catch (err) {
        window.alert("Erro ao realizar o login");
        console.log(err);
      }
    },
  });
};
