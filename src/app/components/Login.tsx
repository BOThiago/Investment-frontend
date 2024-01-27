import GoogleSigninButton from "./GoogleSigninButton";
import { Button } from "./Button";
import { LinkComponent } from "./Link";
import { Input } from "./Input";
import { Form } from "./Form";
import ThemeSwitch from "./ThemeSwitch";

export const Login = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 bg-gradient-to-tr from-gray-300 via-gray-400 to-gray-200 rounded-md shadow-md lg:max-w-xl">
                <Form>
                    <div className="relative flex items-center justify-center flex-col gap-6 w-full mt-6">
                        <h1 className="text-6xl font-bold text-center text-purple-700">
                            Finances
                        </h1>
                        <h1 className="text-3xl font-bold text-center text-black">
                            Login
                        </h1>
                    </div>

                    <Input title="Email" type="email" />

                    <Input title="Senha" type="password" />

                    <LinkComponent title="Esqueceu sua senha?" href="/forget" />

                    <Button title="Logar" />

                    <div className="relative flex items-center justify-center w-full mt-10 border border-t">
                        <div className="absolute font-normal px-2 text-black bg-gray-300 border-2 border-t rounded-md focus:ring-2 focus:ring-offset-1">
                            Cadastre-se via Google
                        </div>
                    </div>

                    <GoogleSigninButton />

                    <p className="mt-4 text-sm text-center text-black">
                        Não possui uma conta?{" "}
                        <LinkComponent title="Cadastre-se" href="/signup" />
                    </p>
                </Form>
                <div className="flex justify-center items-center">
                    <ThemeSwitch />
                </div>
            </div>
        </div>
    );
};
