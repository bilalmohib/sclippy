import AboutUsGoalsBody from "./AboutUsGoalsBody";
import AboutUsGoalsHeader from "./AboutUsGoalsHeader";

interface AboutUsGoalsProps {
    title: string;
    description: string;
    className?: string;
}

const AboutUsGoals = ({
    title,
    description,
    className
}: AboutUsGoalsProps) => {
    return (
        <div className={`${className}`}>
            <AboutUsGoalsHeader title={title} />
            <AboutUsGoalsBody className="mt-6" description={description} />
        </div>
    )
}
export default AboutUsGoals;