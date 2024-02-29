import { CardInfo } from "../../pages/authenticated/dashboard/dto/cardInfo.dto";
import { Loading } from "../Loading";
import { AnalyticCard } from "./AnalyticCard";

interface TierListCardsProps {
    title: string;
    tg: CardInfo[];
    tl: CardInfo[];
}

export const TierListCards = ({ title, tg, tl }: TierListCardsProps) => {
    return (
        <>
            <header className="flex flex-col items-center">
                <div className="flex flex-col">
                    <h2 className="dark:text-white text-2xl font-bold">
                        {title}
                    </h2>
                    <button className="font-normal text-xs">ver mais...</button>
                </div>
                <div className="flex flex-col my-2">
                    <div className="flex flex-row gap-x-4">
                        {tg ? (
                            tg.map((item, index) => {
                                return (
                                    <AnalyticCard
                                        key={index}
                                        title={item.code}
                                        pcp={item.resultPercentageValue}
                                        companyId={
                                            item.companyId ? item.companyId : 0
                                        }
                                    />
                                );
                            })
                        ) : (
                            <Loading />
                        )}
                    </div>
                </div>
                <div className="flex flex-col my-2">
                    <div className="flex flex-row gap-x-4">
                        {tl ? (
                            tl.map((item, index) => {
                                return (
                                    <AnalyticCard
                                        key={index}
                                        title={item.code}
                                        pcp={item.resultPercentageValue}
                                        companyId={
                                            item.companyId ? item.companyId : 0
                                        }
                                    />
                                );
                            })
                        ) : (
                            <Loading />
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};
