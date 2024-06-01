import CourseCard from "./CourseCard";
import { coursesList } from "./data";

interface CoursesListProps {
    className?: string;
}

const CoursesList = ({
    className
}: CoursesListProps) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className={`w-fit grid grid-cols-2 gap-20 ${className}`}>
                {coursesList.map((course, index) => (
                    <CourseCard
                        key={index}
                        data={course}
                    />
                ))}
            </div>
        </div>
    )
}
export default CoursesList;