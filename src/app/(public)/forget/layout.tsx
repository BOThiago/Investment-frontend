import "../../globals.css";

export const metadata = {
    title: "Esqueceu sua Senha?",
    description: "Insira seu e-mail de cadastro para recuperar a senha !",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="">{children}</body>
        </html>
    );
}
