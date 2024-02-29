export const useGetSystemTheme = (): "dark" | "light" => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    } else {
        return "light";
    }
};
