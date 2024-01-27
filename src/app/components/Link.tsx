import Link from "next/link";

export const LinkComponent = ({ title, href }: any) => {
    return (
        <Link
            href={href}
            className="font-medium text-purple-700 hover:underline"
        >
            {title}
        </Link>
    );
};
