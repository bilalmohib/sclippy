import Link from "next/link";
import { NavItemsList } from "./data";

const NavItems = () => {
    return (
        <div>
            <ul>
                {NavItemsList.map((item, index) => (
                    <li key={index} className="inline-block mx-2">
                        <Link href={item.path} className="text-navText dark:text-white hover:underline hover:text-blue-700">{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default NavItems;