"use client";

import { Button } from "@mui/material";

const HomeBanner = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-10 h-[calc(100vh-95px)]">
                <div className="flex flex-col items-center justify-center gap-14">
                    <h3 className="text-5xl leading-tight text-center px-40 text-gray-600 font-semibold">
                        The Ultimate Mac Shortcuts Simulator
                        <br />
                        <span className="text-orange-700 hover:text-orange-600">
                            Learn the Mac shortcuts you need to know.
                        </span>
                    </h3>
                    <p className="text-3xl text-black">
                        Practice your Mac shortcuts here. Try Command + C,Command +X,Command + V.
                    </p>
                </div>

                <div className="flex flex-row justify-center gap-6">
                    <Button
                        variant="contained"
                        color="primary"
                        className="py-3 px-10 normal-case text-2xl bg-buttons hover:bg-blue-600"
                    >
                        Try Simulator
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        className="py-3 px-10 normal-case text-2xl text-buttons hover:text-blue-600"
                    >
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default HomeBanner;