import LearnPageBanner from "@/app/learn/LearnPageBanner";
import CoursesList from "./CoursesList";

const LearnPage = () => {
    return (
        <div>
            <LearnPageBanner />

            <CoursesList className="mt-10 mb-24" />
        </div>
    )
}
export default LearnPage;