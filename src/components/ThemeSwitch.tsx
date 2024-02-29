import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import { useSetTheme } from "../hooks/useSetTheme";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);

    const setTheme = useSetTheme();
    const theme = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted)
        return (
            <div className="flex justify-center items-center">
                <img
                    src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                    alt="Loading Light/Dark Toggle"
                    title="Loading Light/Dark Toggle"
                    // priority={false}
                    height={24}
                    width={24}
                />
            </div>
        );

    if (theme === "dark") {
        return (
            <div className="flex justify-center items-center">
                <FaSun
                    className="cursor-pointer text-white m-2"
                    onClick={() => setTheme("light")}
                    width={24}
                    height={24}
                />
            </div>
        );
    }

    if (theme === "light") {
        return (
            <div className="flex justify-center items-center">
                <FaMoon
                    className="cursor-pointer text-white m-2"
                    onClick={() => setTheme("dark")}
                    width={24}
                    height={24}
                />
            </div>
        );
    }
}
