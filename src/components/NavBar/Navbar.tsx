import { FC } from "react";

type NavBarProps = {
    title: string;
    links: { label: string; href: string; disabled?: boolean }[];
};

const NavBar: FC<NavBarProps> = ({ title, links }) => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-lg mr-10">{title}</div>
                <ul className="flex">
                    {links.map((link, index) => (
                        <li key={index} className="mr-6">
                            <a
                                href={link.href}
                                className={`text-blue-500 hover:text-blue-800 ${link.disabled ? "text-gray-400 cursor-not-allowed" : ""
                                    }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
