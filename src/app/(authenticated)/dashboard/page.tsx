"use client";
import { useSession } from "next-auth/react";
import { Login } from "../../components/Login";
import Navbar from "../../components/Navbar";
import { Loading } from "../../components/Loading";
import ResponsiveAppBar from "../../components/navbar2";

export default function Home() {
    const { data: session, status } = useSession();

    if (status === "loading") return <Loading />;

    if (session && session.user) {
        return (
            <div className="overflow-hidden">
                <Navbar session={session} />
                <div className="flex items-center justify-center h-screen">
                    <h1>Investment Monitoring - Dashboard</h1>
                </div>
            </div>
        );
    }

    return <Login />;
}
