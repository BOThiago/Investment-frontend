import React, { InputHTMLAttributes } from "react";

interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    title: string;
    type?: "text" | "password" | "email" | undefined;
}

export const Input: React.FC<InputProps> = ({ title, ...props }) => {
    return (
        <>
            <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
            >
                {title}
            </label>
            <input
                {...props}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-opacity-60 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
        </>
    );
};
