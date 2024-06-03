import Image from "next/image";

const BlogBanner = () => {
    return (
        <div className="pt-28">
            <div className="flex flex-row justify-center items-center gap-4">
                <Image
                    src="/about-us/bannerLeftDome.png"
                    alt="about dome"
                    width={78}
                    height={69}
                    className="-mt-8"
                />

                <h2 className="text-bannerHeadingText text-center font-inter text-6xl font-bold">
                    Mac Shortcut Blog
                </h2>

                <Image
                    src="/about-us/bannerRightRing.png"
                    alt="about ring"
                    width={48}
                    height={54}
                    className="mt-4"
                />
            </div>
        </div>
    )
}
export default BlogBanner;