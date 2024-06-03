"use client";
import Image from "next/image";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

interface HomeSimulatorProps {
    className?: string;
}

const HomeSimulator = ({
    className
}: HomeSimulatorProps) => {
    const router = useRouter();

    return (
        <div className={className}>
            <div className="flex flex-col justify-center items-center px-5 ssm:px-10 sm:px-20 xlg:px-auto">
                <div className="hidden sm:block relative w-full xlg:w-[1000px] h-44 ssm:h-48 sm:h-60 slg:h-72 lg:h-96">
                    <Image
                        src={"/Home/keyboard.png"}
                        alt="Keyboard"
                        fill
                    />
                </div>

                <div
                    className="bg-cover bg-no-repeat bg-simulator-keyboard w-full h-44 ssm:h-48 border border-red-500 border-solid block sm:hidden"
                />
            </div>

            <div className="flex flex-col justify-center items-center mt-20">
                <Button
                    variant="outlined"
                    color="primary"
                    className="py-3 px-10 normal-case text-2xl text-buttons hover:text-blue-600"
                    onClick={() => {
                        router.push('/about');
                    }}
                >
                    Start Practising
                </Button>
            </div>
        </div>
    )
}
export default HomeSimulator;