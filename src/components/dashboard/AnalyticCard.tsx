import axios from "axios";
import { useEffect, useState } from "react";

interface AnalyticCardProps {
    title: string;
    pcp: string;
    companyId: number;
    hPrice?: number;
    lPrice?: number;
}

interface ImageDataDto {
    cover: string;
    square: string;
}

export const AnalyticCard = ({ title, pcp, companyId }: AnalyticCardProps) => {
    const [imageData, setImageData] = useState<ImageDataDto>();

    useEffect(() => {
        const url = import.meta.env.VITE_SERVER_URL;
        const fetchImageData = async () => {
            try {
                const imageData = await axios.get(`${url}/images/${companyId}`);
                setImageData(imageData.data);
            } catch (error) {
                console.error("Error fetching crypto data:", error);
            }
        };

        fetchImageData();
    }, [companyId]);

    return (
        <div className="relative flex flex-row rounded-xl bg-zinc-800 text-gray-100 font-semibold items-start shadow-2xl h-[80px] w-[180px]">
            <div
                className={`flex flex-col items-center w-full h-full ${
                    imageData?.cover ? `justify-end` : `justify-center`
                }`}
            >
                {imageData?.cover ? (
                    <>
                        <div
                            className={`absolute inset-0 w-full h-4/6 rounded-lg`}
                            style={{
                                background: `url(data:image/jpeg;base64,${imageData.square}) center/cover`,
                            }}
                        >
                            {""}
                        </div>
                        {parseFloat(pcp.replace(",", ".")) > 0 ? (
                            <p
                                className={`${
                                    parseFloat(pcp.replace(",", ".")) < 0
                                        ? `text-red-900`
                                        : `text-green-400`
                                }`}
                            >
                                {parseFloat(pcp.replace(",", ".")).toFixed(2)}%
                                24hs
                            </p>
                        ) : (
                            <p
                                className={`${
                                    parseFloat(pcp.replace(",", ".")) < 0
                                        ? `text-red-400`
                                        : `text-green-400`
                                }`}
                            >
                                {parseFloat(pcp.replace(",", ".")).toFixed(2)}%
                                24hs
                            </p>
                        )}
                    </>
                ) : (
                    <>
                        <h1
                            className={`font-bold ${
                                title.length > 6 ? `text-lg` : `text-xl`
                            }`}
                        >
                            {title}
                        </h1>
                        {parseFloat(pcp.replace(",", ".")) > 0 ? (
                            <p
                                className={`${
                                    parseFloat(pcp.replace(",", ".")) < 0
                                        ? `text-red-900`
                                        : `text-green-400`
                                }`}
                            >
                                {parseFloat(pcp.replace(",", ".")).toFixed(2)}%
                                24hs
                            </p>
                        ) : (
                            <p
                                className={`${
                                    parseFloat(pcp.replace(",", ".")) < 0
                                        ? `text-red-400`
                                        : `text-green-400`
                                }`}
                            >
                                {parseFloat(pcp.replace(",", ".")).toFixed(2)}%
                                24hs
                            </p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
