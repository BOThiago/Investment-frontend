import React, { ReactNode } from "react";

interface LoginContainerProps {
    children: ReactNode;
}

export const LoginContainer: React.FC<LoginContainerProps> = ({ children }) => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 lg:px-6 lg:py-2 bg-gradient-to-tr from-gray-300 via-gray-400 to-gray-200 rounded-md shadow-md lg:max-w-xl">
                {children}
            </div>
        </div>
    );
};
