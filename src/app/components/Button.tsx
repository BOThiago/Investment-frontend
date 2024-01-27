import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

export const Button: React.FC<ButtonProps> = ({ title, ...props }) => {
    return (
        <button
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-gray-600"
            {...props}
        >
            {title}
        </button>
    );
};
