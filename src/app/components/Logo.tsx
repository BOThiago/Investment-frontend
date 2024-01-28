import { TbCardsFilled } from "react-icons/tb";

export const Logo = () => {
    return (
        <div className="flex flex-row gap-4">
            <TbCardsFilled className="h-auto w-16 text-white  dark:text-zinc-900" />
            <h1 className="text-6xl font-bold text-center text-purple-700">
                Finances
            </h1>
        </div>
    );
};
