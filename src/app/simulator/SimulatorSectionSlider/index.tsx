"use client";
import CourseCard from "./CourseCard";
import { course_slider_data } from "./data";
import { useEffect, useRef, useState } from "react";
import CourseSliderActionButtons from "./CourseSliderActionButtons";

interface CourseSectionSliderProps {
    className?: string;
}

const CourseSectionSlider = ({
    className
}: CourseSectionSliderProps) => {

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [scrollDirection, setScrollDirection] = useState(1); 
    const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(null);

    const startScrolling = () => {
        if (scrollContainerRef.current) {
            const interval = setInterval(() => {
                const container = scrollContainerRef.current!;
                const maxScrollLeft = container.scrollWidth - container.clientWidth;

                if (scrollDirection === 1 && container.scrollLeft >= maxScrollLeft) {
                    setScrollDirection(-1);
                } else if (scrollDirection === -1 && container.scrollLeft <= 0) {
                    setScrollDirection(1); 
                }

                container.scrollBy({ left: 30 * scrollDirection, behavior: "smooth" });
            }, 50);
            setScrollInterval(interval);
        }
    };

    const stopScrolling = () => {
        if (scrollInterval) {
            clearInterval(scrollInterval);
            setScrollInterval(null);
        }
    };

    useEffect(() => {
        return () => {
            stopScrolling(); 
        };
    }, [scrollInterval]);

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