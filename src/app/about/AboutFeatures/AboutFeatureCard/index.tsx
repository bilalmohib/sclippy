import Image from "next/image";
import { AboutFeatureCardDataList } from "@/app/about/AboutFeatures/AboutFeaturesList/type";

interface AboutFeatureCardProps extends AboutFeatureCardDataList {
    className?: string;
}

const AboutFeatureCard = ({
    title,
    descriptionList,
    image,
    className
}: AboutFeatureCardProps) => {
    return (
        <div className={`${className}`}>
            <div className="flex flex-row gap-4">
                <div className="w-7/12">
                    <h3 className="text-gray-800 dark:text-gray-200 text-left font-inter text-4xl font-semibold">{title}</h3>
                    <ul className="mt-9 list-square">
                        {descriptionList.map((description, index) => (
                            <li className="text-black dark:text-white text-2xl font-normal my-4" key={index}>{description}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-5/12">
                    <div className="relative w-428px h-416px">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutFeatureCard;