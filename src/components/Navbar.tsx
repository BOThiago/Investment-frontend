"use client";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { TbCardsFilled } from "react-icons/tb";
import { FaChartArea } from "react-icons/fa6";
import { IoNewspaper } from "react-icons/io5";
import { FaEthereum } from "react-icons/fa";
import { useSignOut } from "../hooks/useSignOut";
import { ISession } from "../interface/ISession";
import { IoHome } from "react-icons/io5";
import { Button } from "./Button";
import UserDropdown from "./UserDropdown";
import ThemeSwitch from "./ThemeSwitch";

interface Props {
    session: ISession;
}

const Navbar = ({ session }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const signOut = useSignOut();

    const sideList = [
        {
            icon: <IoHome className="text-2xl" />,
            title: "FIIs",
        },
        {
            icon: <FaChartArea className="text-2xl" />,
            title: "Ações",
        },
        {
            icon: <IoNewspaper className="text-2xl" />,
            title: "Renda Fixa",
        },
        {
            icon: <FaEthereum className="text-2xl" />,
            title: "Criptomoedas",
        },
    ];

    const navList = [
        {
            icon: <IoHome className="text-2xl" />,
            title: "FIIs",
        },
        {
            icon: <FaChartArea className="text-2xl" />,
            title: "Ações",
        },
        {
            icon: <IoNewspaper className="text-2xl" />,
            title: "Renda Fixa",
        },
        {
            icon: <FaEthereum className="text-2xl" />,
            title: "Criptomoedas",
        },
    ];

    const handleDrawer = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleEscKeyPress = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.body.style.setProperty("overflow", "hidden");
        } else {
            document.body.style.removeProperty("overflow");
        }

        document.addEventListener("keydown", handleEscKeyPress);

        return () => {
            document.removeEventListener("keydown", handleEscKeyPress);
        };
    }, [isOpen]);

    return (
        <>
            <nav className="flex w-full mb-10 items-center justify-between px-6 h-20 bg-gradient-to-tr border-b-[1px] dark:border-white bg-zinc-900 text-zinc-700 dark:bg-gray-200 dark:text-black z-10">
                <div className="flex items-center gap-2">
                    <button
                        className="mr-1"
                        aria-label="Open Menu"
                        onClick={handleDrawer}
                    >
                        <GiHamburgerMenu className="text-3xl text-purple-900 dark:text-purple-900" />
                    </button>

                    <TbCardsFilled
                        width={5}
                        height={5}
                        className="h-auto w-10 text-white  dark:text-zinc-900"
                    />

                    <h3 className="text-3xl text-white dark:text-zinc-800 font-extrabold ">
                        Finances
                    </h3>
                </div>

                <div className="flex items-center w-full h-full px-8 justify-end gap-2">
                    <div className="hidden md:flex md:justify-end md:bg-transparent items-center">
                        {navList.map(({ icon, title }, index) => {
                            return (
                                <button
                                    key={index}
                                    title="Wishlist"
                                    className="flex items-center justify-center w-fit hover:bg-zinc-800 hover:shadow-lg text-white p-3 font-medium text-center rounded focus:outline-none gap-2 mx-2"
                                >
                                    <span>{icon}</span>
                                    <span>{title}</span>
                                </button>
                            );
                        })}
                    </div>
                    <ThemeSwitch />
                    <UserDropdown />
                </div>

                {isOpen && (
                    <div className="z-10 fixed inset-0 transition-opacity">
                        <div
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black opacity-50"
                            tabIndex={0}
                        ></div>
                    </div>
                )}

                <aside
                    className={`transform top-0 left-0 w-64 bg-gray-100 dark:bg-zinc-800 fixed h-full overflow-auto ease-in-out transition-all duration-200 z-30 ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <span className="flex w-full items-center p-3 border-b border-black dark:border-white">
                        <TbCardsFilled
                            width={5}
                            height={5}
                            className="h-auto w-10 m-2 text-zinc-900 dark:text-white"
                        />

                        <h3 className="text-3xl text-zinc-900 dark:text-white font-extrabold">
                            Finances
                        </h3>
                    </span>

                    {sideList.map(({ icon, title }, index) => {
                        return (
                            <span
                                key={index}
                                className="flex items-center p-8 hover:bg-purple-700 text-black hover:text-white dark:text-white"
                            >
                                <span className="mr-2">{icon}</span>{" "}
                                <span className="text-md font-bold">
                                    {title}
                                </span>
                            </span>
                        );
                    })}

                    <div className="fixed bottom-0 w-full border-t border-black dark:border-white bg-gray-100 dark:bg-zinc-800">
                        <div className="flex items-center p-4 text-white bg-gray-20 w-full">
                            <div className="flex gap-4 ml-auto justify-around w-full">
                                <Button
                                    title={`Olá, ${session.user.name}`}
                                    className="text-black font-semibold p-2 w-max dark:text-white"
                                />
                                <Button
                                    title="Sair"
                                    onClick={() => signOut()}
                                    className="text-white bg-red-900 hover:bg-red-950 w-24 rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </aside>
            </nav>
        </>
    );
};

export default Navbar;
