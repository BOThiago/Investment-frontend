"use client";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted)
        return (
            <Image
                src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                alt="Loading Light/Dark Toggle"
                title="Loading Light/Dark Toggle"
                priority={false}
                height={24}
                width={24}
            />
        );

    if (resolvedTheme === "dark") {
        return (
            <FaSun
                className="cursor-pointer text-black m-2"
                onClick={() => setTheme("light")}
                width={24}
                height={24}
            />
        );
    }

    if (resolvedTheme === "light") {
        return (
            <FaMoon
                className="cursor-pointer text-white m-2"
                onClick={() => setTheme("dark")}
                width={24}
                height={24}
            />
        );
    }
}
