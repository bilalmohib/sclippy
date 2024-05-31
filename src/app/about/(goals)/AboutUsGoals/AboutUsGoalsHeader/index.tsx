interface AboutUsGoalsHeaderProps {
    title: string;
    className?: string;
    section?: "goals" | "features";
}

const AboutUsGoalsHeader = ({
    title,
    className,
    section = "goals"
}: AboutUsGoalsHeaderProps) => {
    return (
        <section>
            <div className={`${section === "goals" && "px-56 rounded-tr-md rounded-tl-none rounded-br-md rounded-bl-none w-fit py-4"} ${(section === "features") && ("w-full py-6")} bg-bannerHeadingText ${className}`}>
                <h3 className="text-center font-inter text-4xl font-semibold text-aboutGoalsHeader">{title}</h3>
            </div>
            <div className={`${section === "goals" ? "w-600px" : "w-full"} bg-aboutGoalsBottomBar mt-4 h-2`} />
        </section>
    )
}
export default AboutUsGoalsHeader;