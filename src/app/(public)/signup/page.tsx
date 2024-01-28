"use client";
import { LinkComponent } from "../../components/Link";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Form } from "../../components/Form";
import { Logo } from "../../components/Logo";
import GoogleSigninButton from "../../components/GoogleSigninButton";
import ThemeSwitch from "../../components/ThemeSwitch";

export default function Signup() {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 lg:px-6 lg:py-2 bg-gradient-to-tr from-gray-300 via-gray-400 to-gray-200 rounded-md shadow-md lg:max-w-xl">
                <Form>
                    <div className="relative flex items-center justify-center flex-col gap-6 lg:gap-4 w-full mt-6 lg:mt-2">
                        <Logo />

                        <h1 className="text-3xl font-bold text-center text-black">
                            Cadastre-se
                        </h1>
                    </div>

                    <Input title="Email" type="email" />

                    <Input title="Nome" type="name" />

                    <Input title="Senha" type="password" />

                    <LinkComponent title="Esqueceu sua senha?" href="/forget" />

                    <Button title="Cadastrar-se" />

                    <div className="relative flex items-center justify-center w-full mt-10 lg:mt-6 border border-t">
                        <div className="absolute font-normal px-2 text-black bg-gray-300 border-2 border-t rounded-md focus:ring-2 focus:ring-offset-1">
                            Cadastre-se via Google
                        </div>
                    </div>

                    <GoogleSigninButton />

                    <p className="mt-4 lg:mt-2 text-sm text-center text-black">
                        Já possui uma conta?{" "}
                        <LinkComponent title="Entre" href="/" />
                    </p>
                </Form>
                <div className="flex justify-center items-center">
                    <ThemeSwitch />
                </div>
            </div>
        </div>
    );
}
