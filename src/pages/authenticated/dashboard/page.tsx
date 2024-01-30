"use client";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
import { Loading } from "../../../components/Loading";
import Navbar from "../../../components/Navbar";

export default function Dashboard() {
    const session: ISession = {
        user: {
            name: 'TESTE',
            email: 'TESTE'
        }
    }

    // const { data: session, status } = useSession();
    // const router = useRouter();

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
    } else {
        // router.push("/");
    }
}
