import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";

function AuthPage() {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);
    const auth = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (auth) {
                    const response = await auth();
                    if (response.sucess) setIsLogged(response.sucess);
                }
            } catch (error) {
                console.error("Error during authentication:", error);
                setIsLogged(false);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [auth]);

    if (loading) {
        return null;
    }

    return (
        <>
            {isLogged ? (
                <Outlet />
            ) : (
                <div>
                    <Navigate to="/login" />{" "}
                </div>
            )}
        </>
    );
}

export default AuthPage;
