"use client";

import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomeBanner = () => {
    const router = useRouter();

    return (
        <div className="flex flex-row gap-2">
            <div className="w-full md:w-9/12 slg:w-8/12 mlg:w-7/12 xl:w-6/12">
                <div className="flex flex-col justify-center md:justify-start pt-0 sssm:pt-4 md:pt-24 items-center md:items-start gap-16 h-[calc(100vh-95px)]">
                    <div className="flex flex-col items-center md:items-start justify-center md:justify-start gap-12 pr-0 md:pr-10">
                        <h3 className="text-3xl ssm:text-4xl md:text-5xl leading-tight text-center md:text-left text-lightHeadingText dark:text-darkHeadingText font-semibold">
                            WELCOME TO THE MAC SHORT CUT SIMULATOR
                            <div className="flex flex-col justify-end items-end w-full md:pr-28 mt-4">
                                <div className="relative w-48 h-5">
                                    <Image
                                        src="/Home/curved_line.png"
                                        alt="curved line"
                                        fill={true}
                                    />
                                </div>
                            </div>
                        </h3>
                        <p className="text-xl ssm:text-2xl md:text-3xl text-black dark:text-white text-center md:text-left">
                            Practice your Mac shortcuts here. Try Command + C,Command +X,Command + V.
                        </p>
                    </div>

                    <div className="flex flex-col ssm:flex-row justify-center gap-4 sm:gap-8 w-full sm:w-fit">
                        <Button
                            variant="contained"
                            color="primary"
                            className="w-full sm:w-fit py-3 px-auto ssm:px-5 sm:px-7 md:px-10 normal-case text-lg sssm:text-xl md:text-2xl bg-buttons hover:bg-blue-600"
                            onClick={() => {
                                router.push('/simulator');
                            }}
                        >
                            Try Simulator
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            className="w-full sm:w-fit py-3 px-auto ssm:px-5 sm:px-7 md:px-10 normal-case text-lg sssm:text-xl md:text-2xl text-buttons hover:text-blue-600"
                            onClick={() => {
                                router.push('/about');
                            }}
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
            <div className="hidden md:block md:w-3/12 slg:w-4/12 mlg:w-5/12 xl:w-6/12">
                <div className="relative w-full h-[calc(100vh-200px)] bg-cover pl-40 bg-left xl:bg-center bg-no-repeat bg-banner-keyboard" />
            </div>
        </div>
    )
}
export default HomeBanner;