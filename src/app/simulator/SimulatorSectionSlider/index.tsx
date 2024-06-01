"use client";
import { course_slider_data } from "./data";
import { useEffect, useRef, useState } from "react";
import CommandSliderCard from "@/app/simulator/SimulatorSectionSlider/CommandSliderCard";
import CommandSliderActionButtons from "@/app/simulator/SimulatorSectionSlider/CommandSliderActionButtons";

interface SimulatorSectionSliderProps {
    className?: string;
}

const SimulatorSectionSlider = ({
    className
}: SimulatorSectionSliderProps) => {

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [scrollDirection, setScrollDirection] = useState(1);
    const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(null);

    const stopScrolling = () => {
        if (scrollInterval) {
            clearInterval(scrollInterval);
            setScrollInterval(null);
        }
    };

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current!;
            container.scrollBy({ left: 40, behavior: "smooth" });
        }
    }

    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current!;
            container.scrollBy({ left: -40, behavior: "smooth" });
        }
    }

    useEffect(() => {
        return () => {
            stopScrolling();
        };
    }, [scrollInterval]);

    return (
        <section>
            <div className={`overflow-hidden max-w-[90vw] ${className}`}>
                <div ref={scrollContainerRef} className="relative overflow-x-scroll flex flex-row flex-nowrap gap-8 max-w-80% pb-5 cursor-grab">
                    {
                        course_slider_data.map((data, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex-grow-0 basis-auto"
                                onDragStart={(e) => {
                                    const startX = e.clientX;
                                    const scrollLeft = scrollContainerRef.current!.scrollLeft;
                                    const handleDrag = (e: MouseEvent) => {
                                        const diff = e.clientX - startX;
                                        scrollContainerRef.current!.scrollLeft = scrollLeft - diff;
                                    };
                                    const handleMouseUp = () => {
                                        window.removeEventListener("mousemove", handleDrag);
                                        window.removeEventListener("mouseup", handleMouseUp);
                                        stopScrolling();
                                    };
                                    window.addEventListener("mousemove", handleDrag);
                                    window.addEventListener("mouseup", handleMouseUp);
                                }}
                                onMouseLeave={() => stopScrolling()}
                                onDragEnd={() => stopScrolling()}
                                draggable={true}
                            >
                                <CommandSliderCard
                                    data={data}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>

            <CommandSliderActionButtons
                handleScrollRight={handleScrollRight}
                handleScrollLeft={handleScrollLeft}
                className="mt-6"
            />
        </section>
    )
}
export default SimulatorSectionSlider;