interface FormProps extends React.ButtonHTMLAttributes<HTMLFormElement> {}

export const Form: React.FC<FormProps> = ({ children, ...props }) => {
    return (
        <form {...props} className="flex flex-col gap-3 lg:gap-2 m-4">
            {children}
        </form>
    );
};
