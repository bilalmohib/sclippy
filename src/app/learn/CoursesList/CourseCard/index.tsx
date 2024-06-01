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
        <div className={`w-508px rounded-xl bg-courseCardLightBg dark:bg-courseCardDarkBg hover:shadow-course_card-shadow transition-all duration-300 cursor-default ${className}`}>
            <Image
                src={data.image.src}
                alt={data.image.alt}
                width={508}
                height={284}
                className="rounded-t-xl hover:animate-pulse"
            />

            <div className="pb-11 pt-8">
                <h3 className="text-courseCardText dark:text-white text-center font-inter text-4xl font-semibold px-10">{data.title}</h3>

                <div className="flex flex-col justify-center items-center mt-8">
                    <Button
                        variant="outlined"
                        color="primary"
                        className="py-3 px-10 normal-case text-xl font-semibold font-inter text-black dark:text-courseCardDarkButtonText border-2 border-solid border-black dark:border-white rounded-md hover:bg-opacity-50"
                        onClick={() => {
                            router.push('/learn');
                        }}
                        endIcon={<LogoutIcon className="text-black dark:text-white" />}
                    >
                        View More
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default CourseCard;