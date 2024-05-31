"use client";

import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomeBanner = () => {
    const router = useRouter();

    return (
        <div className="flex flex-row gap-2">
            <div className="w-6/12">
                <div className="flex flex-col justify-start pt-24 items-start gap-16 h-[calc(100vh-95px)]">
                    <div className="flex flex-col items-start justify-start gap-12 pr-10">
                        {/* <h3 className="text-5xl leading-tight text-left text-gray-600 dark:text-gray-300 font-semibold">
                            The Ultimate Mac Shortcuts Simulator
                            <span className="text-orange-700 hover:text-orange-600">
                                Learn the Mac shortcuts at ease
                            </span>
                        </h3>
                     */}
                        <h3 className="text-5xl leading-tight text-left text-lightHeadingText dark:text-darkHeadingText font-semibold">
                            WELCOME TO THE MAC SHORT CUT SIMULATOR
                        </h3>
                        <p className="text-3xl text-black dark:text-white">
                            Practice your Mac shortcuts here. Try Command + C,Command +X,Command + V.
                        </p>
                    </div>

                    <div className="flex flex-row justify-center gap-8">
                        <Button
                            variant="contained"
                            color="primary"
                            className="py-3 px-10 normal-case text-2xl bg-buttons hover:bg-blue-600"
                            onClick={() => {
                                router.push('/simulator');
                            }}
                        >
                            Try Simulator
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            className="py-3 px-10 normal-case text-2xl text-buttons hover:text-blue-600"
                            onClick={() => {
                                router.push('/about');
                            }}
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-6/12">
                <div
                    className="relative w-full h-[calc(100vh-200px)] bg-cover bg-center bg-no-repeat bg-banner-keyboard"
                />
            </div>
        </div>
    )
}
export default HomeBanner;