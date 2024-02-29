import Cookies from "js-cookie";
import Navbar from "../../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { TierListCards } from "../../../components/dashboard/TierListCards";
import { ISession } from "../../../interface/ISession";
import { CardInfo } from "./dto/cardInfo.dto";

export default function Dashboard() {
    const [tGCrypto, setTGCrypto] = useState<CardInfo[]>([]);
    const [tLCrypto, setTLCrypto] = useState<CardInfo[]>([]);
    const [tGFiis, setTGFiis] = useState<CardInfo[]>([]);
    const [tLFiis, setTLFiis] = useState<CardInfo[]>([]);
    const [tGStoks, setTGStoks] = useState<CardInfo[]>([]);
    const [tLStoks, setTLStoks] = useState<CardInfo[]>([]);

    useEffect(() => {
        const url = import.meta.env.VITE_SERVER_URL;

        const fetchCryptoData = async () => {
            try {
                const cryptoDailyData = await axios.get(`${url}/crypto/today`);
                const { topGainers, topLosers } = cryptoDailyData.data;
                setTGCrypto(topGainers);
                setTLCrypto(topLosers);
            } catch (error) {
                console.error("Error fetching crypto data:", error);
            }
        };

        const fetchFiisData = async () => {
            try {
                const fiisDailyData = await axios.get(`${url}/fiis/today`);
                const { data } = fiisDailyData;
                setTGFiis(data.slice(0, 5));
                setTLFiis(data.slice(-5));
            } catch (error) {
                console.error("Error fetching crypto data:", error);
            }
        };

        const fetchStocksData = async () => {
            try {
                const stocksDailyData = await axios.get(`${url}/stocks/today`);
                const { data } = stocksDailyData;
                setTGStoks(data.slice(0, 5));
                setTLStoks(data.slice(-5));
            } catch (error) {
                console.error("Error fetching crypto data:", error);
            }
        };

        fetchStocksData();
        fetchCryptoData();
        fetchFiisData();
    }, []);

    const session: ISession = {
        user: {
            name: Cookies.get("name") || "",
            email: Cookies.get("email") || "",
            picture: Cookies.get("picture") || "",
        },
    };

    if (session && session.user) {
        return (
            <div className="overflow-hidden">
                <section className="h-screen w-screen">
                    <Navbar session={session} />
                    <article className="flex px-16 items-center flex-col gap-6">
                        <TierListCards
                            title="Ações"
                            tg={tGStoks}
                            tl={tLStoks}
                        />
                        <TierListCards
                            title="Fundos Imobiliários"
                            tg={tGFiis}
                            tl={tLFiis}
                        />
                        <TierListCards
                            title="Criptomoedas"
                            tg={tGCrypto}
                            tl={tLCrypto}
                        />
                    </article>
                </section>
            </div>
        );
    }
}
