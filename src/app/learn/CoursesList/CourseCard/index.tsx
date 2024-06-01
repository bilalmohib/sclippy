"use client";

import Image from "next/image";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import LogoutIcon from '@mui/icons-material/Logout';
import { coursesList } from "@/app/learn/CoursesList/data";

interface CourseCardProps {
    data: typeof coursesList[0];
    className?: string;
}

const CourseCard = ({
    data,
    className
}: CourseCardProps) => {
    const router = useRouter();

    return (
        <div className={`w-508px rounded-xl bg-courseCardBg border hover:border-transparent hover:border-gray-500 border-dotted hover:shadow-md hover:animate-pulse cursor-default ${className}`}>
            <Image
                src={data.image.src}
                alt={data.image.alt}
                width={508}
                height={284}
                className="rounded-t-xl"
            />

            <div className="pb-11 pt-8">
                <h3 className="text-courseCardText text-center font-inter text-4xl font-semibold px-10">{data.title}</h3>

                <div className="flex flex-col justify-center items-center mt-8">
                    <Button
                        variant="outlined"
                        color="primary"
                        className="py-3 px-10 normal-case text-xl font-semibold font-inter text-black border-2 border-solid border-black rounded-md"
                        onClick={() => {
                            router.push('/learn');
                        }}
                        endIcon={<LogoutIcon />}
                    >
                        View More
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default CourseCard;