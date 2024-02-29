import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const navigate = useNavigate();
    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken") || "";

    if (!accessToken || !refreshToken) {
        navigate("/");
        return;
    }

    return async () => {
        const requestBody = JSON.stringify({
            accessToken,
            refreshToken,
        });

        try {
            const response = await fetch(
                `${import.meta.env.VITE_SERVER_URL}/authentication`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: requestBody,
                }
            );

            if (response.status === 201) {
                return { sucess: true, message: "Usuário Autenticado!" };
            } else {
                navigate("/");
                return {
                    sucess: false,
                    message: "Token inválido ou expirado!",
                };
            }
        } catch (error) {
            navigate("/");
            return {
                sucess: false,
                message: "Internal Server Error!",
            };
        }
    };
};
