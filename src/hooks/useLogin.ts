import { accessTokenSatate, refreshTokenState } from "../state/atom";
import axios, { AxiosResponse } from "axios";
import { useSetRecoilState } from "recoil";
import Cookies from "js-cookie";

interface UserData {
    email: string;
    password: string;
}

async function login({ email, password }: UserData): Promise<AxiosResponse> {
    try {
        return await axios.post(`http://localhost:5500/users`, {
            email,
            password,
        });
    } catch (err) {
        window.alert("Erro ao criar usuário");
        throw err;
    }
}

export async function useLogin() {
    const setAccessTokenState = useSetRecoilState(accessTokenSatate);
    const setRefreshTokenState = useSetRecoilState(refreshTokenState);

    return async (userData: UserData) => {
        const response = await login(userData);

        if (response.status === 200) {
            Cookies.set("accessToken", response.data.accessToken);
            setAccessTokenState(response.data.accessToken);
            Cookies.set("refreshToken", response.data.refreshToken);
            setRefreshTokenState(response.data.refreshToken);
            window.alert("Usuario logado com sucesso");
        }
    };
}
