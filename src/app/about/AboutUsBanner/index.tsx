import Image from "next/image";

const AboutUsBanner = () => {
    return (
        <div className="pt-28">
            <div className="flex flex-row justify-center items-center gap-4">
                <Image
                    src="/AboutUs/bannerLeftDome.png"
                    alt="about dome"
                    width={78}
                    height={69}
                    className="-mt-8"
                />

                <h2 className="text-bannerHeadingText text-center font-inter text-6xl font-bold">
                    About Us
                </h2>

                <Image
                    src="/AboutUs/bannerRightRing.png"
                    alt="about ring"
                    width={48}
                    height={54}
                    className="mt-4"
                />
            </div>

            <p className="text-bannerHeadingCaption text-center font-inter text-2xl font-normal px-72 mt-8">
                This project aims to help users learn and practice Mac keyboard shortcuts in a simulated environment.
            </p>

            <div className="relative w-full h-554px mt-20">
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