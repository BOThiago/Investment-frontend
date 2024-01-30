// "Middleware" de verificacao de usuario

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useLayoutEffect, useState } from "react";

const AuthPage = () => {
  const auth = useAuth();
  const [isLogged, setIsLogged] = useState<boolean>();

  const verifyUser = async () => {
    await auth().then((response: boolean | undefined) => {
      setIsLogged(response);
    });
  };

  useLayoutEffect(() => {
    verifyUser()
  }, []);

  if(isLogged !== undefined) {
    return <>{isLogged ? <Outlet/> : <Navigate to={"/login"} />}</>;
  }
};

export default AuthPage;
