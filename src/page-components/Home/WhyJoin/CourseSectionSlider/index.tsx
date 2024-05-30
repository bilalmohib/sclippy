"use client";
import { useRef } from "react";
import CourseCard from "./CourseCard";
import { course_slider_data } from "./data";
import CourseSliderActionButtons from "./CourseSliderActionButtons";

interface CourseSectionSliderProps {
    className?: string;
}

const CourseSectionSlider = ({
    className
}: CourseSectionSliderProps) => {

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    let scrollInterval: NodeJS.Timeout | null = null;

    const startScrolling = () => {
        if (scrollContainerRef.current) {
            scrollInterval = setInterval(() => {
                scrollContainerRef.current!.scrollBy({ left: 1, behavior: "smooth" });
            }, 300);
        }
    };

    const stopScrolling = () => {
        if (scrollInterval) {
            clearInterval(scrollInterval);
        }
    };

    return (
        <section>
            <div
                className={`overflow-hidden max-w-[90vw] ${className}`}
                onMouseEnter={startScrolling}
                onMouseLeave={stopScrolling}
            >
                <div ref={scrollContainerRef} className="relative overflow-x-scroll flex flex-row flex-nowrap gap-3 max-w-80% pb-5">
                    {
                        course_slider_data.map((data, index) => (
                            <div key={index} className="flex-shrink-0 flex-grow-0 basis-auto">
                                <CourseCard
                                    data={data}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>

            <CourseSliderActionButtons className="mt-6" />
        </section>
    )
}
export default CourseSectionSlider;