import AboutFeatureCard from "../AboutFeatureCard";
import { aboutFeaturesListData } from "./data";

interface AboutFeaturesListProps {
    className?: string;
}

const AboutFeaturesList = ({
    className
}: AboutFeaturesListProps) => {
    return (
        <div className={className}>
            {aboutFeaturesListData.map((feature, index) => {
                return (
                    <div key={index}>
                        <AboutFeatureCard
                            title={feature.title}
                            descriptionList={feature.descriptionList}
                            image={feature.image}
                            className="mt-20"
                        />
                    </div>
                )
            })}
        </div>
    )
}
export default AboutFeaturesList;