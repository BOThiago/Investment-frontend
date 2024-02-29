import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { useSetRecoilState } from "recoil";
import { accessTokenSatate, refreshTokenState } from "../state/atom";

interface UserData {
    email: string;
    name: string;
    password: string;
}

interface SetStateFunction<T> {
    (newValue: T | ((prevValue: T) => T)): void;
}

async function createUser(userData: UserData): Promise<AxiosResponse> {
    try {
        return await axios.post(`http://localhost:5500/users`, {
            userData,
        });
    } catch (err) {
        window.alert("Erro ao criar usuário");
        throw err;
    }
}

function saveTokens(
    response: AxiosResponse,
    setAccessToken: SetStateFunction<string | undefined>,
    setRefreshToken: SetStateFunction<string | undefined>
) {
    const accessToken = response.data.accessToken;
    const refreshToken = response.data.refreshToken;

    if (response.status === 200) {
        window.alert("Usuario criado com sucesso");
        Cookies.set("accessToken", accessToken);
        setAccessToken(accessToken);
        Cookies.set("refreshToken", refreshToken);
        setRefreshToken(refreshToken);
    }
}

export async function useSignUp(method: "email" | "google") {
    const setAccessToken = useSetRecoilState(
        accessTokenSatate
    ) as SetStateFunction<string | undefined>;
    const setRefreshToken = useSetRecoilState(
        refreshTokenState
    ) as SetStateFunction<string | undefined>;

    if (method === "email") {
        return async (userData: UserData) => {
            const response = await createUser(userData);
            saveTokens(response, setAccessToken, setRefreshToken);
        };
    } else if (method === "google") {
        return () => {};
    }
}
