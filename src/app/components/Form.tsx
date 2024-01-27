interface FormProps extends React.ButtonHTMLAttributes<HTMLFormElement> {}

export const Form: React.FC<FormProps> = ({ children }) => {
    return <form className="flex mt-6 flex-col gap-3 m-4">{children}</form>;
};
