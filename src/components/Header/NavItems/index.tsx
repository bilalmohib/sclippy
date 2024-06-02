"use client";

import Link from "next/link";
import { navItemsList } from "./data";
import { usePathname } from "next/navigation";

interface NavItemsProps {
    className?: string;
}

const NavItems = ({
    className
}: NavItemsProps) => {
    const pathname = usePathname();

    return (
        <div className={className}>
            <ul className="flex flex-row">
                {navItemsList.map((item, index) => (
                    <li key={index} className="mx-2">
                        <Link href={item.path} className={`text-2xl border-b-2 border-transparent hover:border-blue-700 hover:text-blue-700 hover:border-b-2 ${pathname === item.path ? "text-blue-700" : "text-navText dark:text-white"}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default NavItems;