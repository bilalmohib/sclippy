import { course_slider_data } from "../data";

interface CourseCardProps {
    data: typeof course_slider_data[0];
    className?: string;
}

const CourseCard = ({
    data,
    className
}: CourseCardProps) => {
    return (
        <div className="rounded-3xl shadow-md px-6 py-6 sm:py-9 flex flex-col gap-3 justify-start items-center w-60 sm:w-96 h-36 sm:h-44"
            style={{
                background: data.color
            }}
        >
            <h2 className="text-lg ssm:text-xl sm:text-2xl text-center font-semibold text-white font-inter truncate w-44 select-none" title={data.title}>{data.title}</h2>
            <p className="font-light text-base ssm:text-lg sm:text-xl leading-tight sm:leading-normal text-center text-white line-clamp-2">{data.description}</p>
        </div>
    )
}
export default CourseCard;