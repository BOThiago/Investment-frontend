import { Link } from "react-router-dom";

interface LinkInterface {
    title: string;
    href: string;
}

export const LinkComponent = ({ title, href }: LinkInterface) => {
    return (
        <Link to={href} className="font-medium text-purple-700 hover:underline">
            {title}
        </Link>
    );
};
