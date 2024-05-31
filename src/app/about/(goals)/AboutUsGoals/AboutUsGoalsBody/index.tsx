interface AboutUsGoalsBodyProps {
    description: string;
    className?: string;
}

const AboutUsGoalsBody = ({
    description,
    className
}: AboutUsGoalsBodyProps) => {
    return (
        <div className={`px-20 ${className}`}>
            <p className="text-black dark:text-white font-inter text-xl font-light leading-8">
                {description}
            </p>
        </div>
    )
}
export default AboutUsGoalsBody;