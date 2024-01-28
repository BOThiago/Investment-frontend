import "../../globals.css";

export const metadata = {
    title: "Cadastre-se",
    description:
        "Faça o login na plataforma para obter informações sobre investimentos",
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