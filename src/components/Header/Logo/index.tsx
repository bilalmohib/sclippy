"use client";
import { useRouter } from "next/navigation";

interface LogoProps {
    className?: string;
}

const Logo = ({
    className
}: LogoProps) => {
    const router = useRouter();

    return (
        <div
            className={`${className} w-fit cursor-pointer`}
            onClick={() => {
                router.push('/');
            }}
        >
            <h3 className="text-primary text-shadow-sm text-4xl font-inika font-semibold hover:animate-pulse">Sclippy</h3>
        </div>
    )
}
export default Logo;