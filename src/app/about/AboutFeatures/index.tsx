import AboutUsGoalsHeader from "../(goals)/AboutUsGoals/AboutUsGoalsHeader";
import AboutFeaturesList from "./AboutFeaturesList";

interface AboutFeaturesProps {
    className?: string;
}

const AboutFeatures = ({
    className
}: AboutFeaturesProps) => {
    return (
        <div className={`w-full bg-appSecondary pt-20 rounded-3xl ${className}`}>
            <AboutUsGoalsHeader
                title="Features"
                section="features"
            />

            <div className="px-20 pb-20">
                <AboutFeaturesList />
            </div>
        </div>
    )
}
export default AboutFeatures;