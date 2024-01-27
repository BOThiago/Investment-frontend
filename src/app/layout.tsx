import Providers from "./components/Providers";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Finances",
    description: "Consulte seus investimentos e filtre-os da melhor maneira !",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`bg-gray-50 text-black dark:bg-zinc-900  dark:text-white ${inter.className}`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
