import CourseSectionSlider from "./CourseSectionSlider";
import CourseSliderActionButtons from "./CourseSectionSlider/CourseSliderActionButtons";

const WhyJoin = () => {
    return (
        <div className="pt-16 px-10 sm:px-20">
            <h2 className="font-semibold text-3xl sm:text-4xl leading-10 text-[#000007] dark:text-white">Master the Mac Keyboard</h2>
            <p className="text-xl sm:text-2xl mt-4 font-light text-black dark:text-white">Enhance Your Mac Keyboard Skills with Interactive Practice</p>

            <CourseSectionSlider className="mt-10" />
        </div>
    )
}
export default WhyJoin;