import Image from "next/image";
import { blogs_list_data } from "../data";

interface BlogCardProps {
    data: typeof blogs_list_data[0];
    className?: string;
}

const BlogCard = ({
    data,
    className
}: BlogCardProps) => {
    return (
        <div className={`${className} flex flex-row rounded-2xl w-full h-fit border-2 border-solid border-bannerHeadingText hover:opacity-80 transition-all duration-200 cursor-pointer`}>
            <Image
                src={data.image}
                alt={data.title}
                width={400}
                height={300}
                className="rounded-tl-2xl rounded-bl-2xl h-342px w-4/12 hover:animate-pulse"
            />
            <div className="w-8/12 pl-8 pr-16 pt-12">
                <h2 className="text-black font-inter text-3xl font-normal">{data.title}</h2>
                <p className="text-black font-inter text-xl font-normal mt-8 line-clamp-[8]">
                    {data.description}
                </p>
            </div>
        </div>
    )
}
export default BlogCard;