import { course_slider_data } from "../data";

interface CommandCardSliderProps {
    data: typeof course_slider_data[0];
    className?: string;
}

const CommandSliderCard = ({
    data,
    className
}: CommandCardSliderProps) => {
    return (
        <div className="rounded-full shadow-md px-6 pt-16 flex flex-col gap-3 justify-start items-center w-64 h-64"
            style={{
                background: data.color
            }}
        >
            <h2 className="text-2xl text-center font-semibold text-white font-inter truncate w-44" title={data.title}>{data.title}</h2>
            <p className="font-light text-xl text-center text-white line-clamp-2">{data.description}</p>
        </div>
    )
}
export default CommandSliderCard;