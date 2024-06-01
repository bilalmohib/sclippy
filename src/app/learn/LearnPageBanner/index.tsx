import Image from "next/image";

interface LearnPageBannerProps {
    className?: string;
}

const LearnPageBanner = ({
    className
}: LearnPageBannerProps) => {
    return (
        <div className={`pt-14 pb-24 ${className}`}>
            <div className="flex flex-row justify-center items-center gap-4">
                <Image
                    src="/learn/round-cube.png"
                    alt="learn cube"
                    width={186}
                    height={170}
                    className="absolute left-0"
                />

                <div className="flex flex-col">
                    <div className="flex justify-end items-end">
                        <Image
                            src="/learn/upper-dome.png"
                            alt="upper dome"
                            width={109}
                            height={97}
                            className="relative -mr-12"
                        />
                    </div>
                    <h2 className="text-bannerHeadingText text-center font-inter text-6xl font-bold">
                        Mac Keyboard Shortcuts
                    </h2>
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/learn/bottom-ring.png"
                            alt="bottom ring"
                            width={72}
                            height={81}
                            className="mt-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LearnPageBanner;