// import Link from "next/link";
import { Link } from "react-router-dom";

export const LinkComponent = ({ title, href }: any) => {
  return (
    <Link to={href} className="font-medium text-purple-700 hover:underline">
      {title}
    </Link>
  );
};
