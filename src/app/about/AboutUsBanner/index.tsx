import Image from "next/image";

const AboutUsBanner = () => {
    return (
        <div className="pt-28">
            <div className="flex flex-row justify-center items-center gap-4">
                <div className="absolute left-5 ssm:left-auto -mt-16 ssm:-mt-8 h-[60px] w-[62px] ssm:relative ssm:w-[78px] ssm:h-[69px]">
                    <Image
                        src="/about-us/bannerLeftDome.png"
                        alt="about dome"
                        fill={true}
                    />
                </div>

                <h2 className="text-bannerHeadingText text-center font-inter text-5xl sm:text-6xl font-bold">
                    About Us
                </h2>

                <div className="h-12 w-10 ssm:h-[54px] ssm:w-[54px] mt-16 ssm:mt-4 absolute right-5 ssm:right-auto ssm:relative">
                    <Image
                        src="/about-us/bannerRightRing.png"
                        alt="about ring"
                        fill={true}
                    />
                </div>
            </div>

            <p className="text-bannerHeadingCaption line-clamp-3 ssm:line-clamp-none text-center font-inter text-lg ssm:text-xl sm:text-2xl font-normal px-10 sm:px-20 mlg:px-40 xl:px-72 mt-8">
                This project aims to help users learn and practice Mac keyboard shortcuts in a simulated environment.
            </p>

            <div className="relative w-full h-56 ssm:h-60 sm:h-72 md:h-96 lg:h-554px mt-20">
                <Image
                    src="/about-us/aboutBanner.png"
                    alt="about banner"
                    fill={true}
                />
            </div>
        </div>
    )
}
export default AboutUsBanner;