import LearnPageBanner from "@/app/learn/LearnPageBanner";
import CoursesList from "./CoursesList";

const LearnPage = () => {
    return (
        <div>
            <LearnPageBanner />

            <CoursesList className="mt-10" />
        </div>
    )
}
export default LearnPage;