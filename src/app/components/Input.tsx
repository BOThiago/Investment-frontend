import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    title: string;
}

export const Input: React.FC<InputProps> = ({ title, id, ...props }) => {
    return (
        <>
            <label
                htmlFor={id}
                className="block text-sm font-semibold text-gray-800"
            >
                {title}
            </label>
            <input
                {...props}
                id={id}
                className="block w-full px-4 lg:px-3 py-2 mt-2 lg:mt-1 text-purple-700 bg-opacity-60 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
        </>
    );
};
