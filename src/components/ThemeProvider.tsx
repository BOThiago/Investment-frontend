import { RoutesProps } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const ThemeProvider = ({ children }: RoutesProps) => {
  const theme = useTheme();
  return (
    <div
      className={
        theme === "dark" ? `bg-zinc-900 text-white` : `bg-gray-50 text-black`
      }
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
