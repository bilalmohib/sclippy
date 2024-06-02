"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import LogoutIcon from "@mui/icons-material/Logout";
import { pricing_card_list } from "../data";

interface PricingCardProps {
    data: typeof pricing_card_list[0]
}

const PricingCard = ({
    data
}: PricingCardProps) => {
    const router = useRouter();

    return (
        <div className={`px-14 rounded-2.5xl border-2 border-solid border-bannerHeadingText ${data.type === "Standard" ? "bg-bannerHeadingText h-fit py-24 -mt-12" : "bg-pricingCardBg dark:bg-courseCardDarkBg h-600px py-8"} shadow-course_card-shadow`}>
            <div>
                <div className="flex flex-col justify-center items-center">
                    <h3 className={`text-center ${data.type === "Standard" ? "text-white" : "text-pricingCardHeading"} dark:text-white text-4xl font-bold font-inter`}>{data.type}</h3>
                    <p className={`text-sm font-light text-center font-inter mt-2 ${data.type === "Standard" ? "text-white" : "text-black"} dark:text-white`}>Starting at</p>
                    <h3 className={`${data.type === "Standard" ? "text-white" : "text-black"} text-black dark:text-white font-inter text-40px`}>
                        <span className={`font-extralight`}>$</span>
                        <span className={`font-bold`}>{data.price}</span>
                    </h3>
                </div>

                <p className={`${(data.type === "Standard") ? "text-white" : "text-black"}  dark:text-white font-inter text-sm font-semibold mt-7 text-center`}></p>

                <ul className="mt-16 list-square line-clamp-[7]">
                    {
                        data.features.map((item, index) => (
                            <li
                                key={index}
                                className={`${data.type === "Standard" ? ("text-white") : ("text-black")} text-black dark:text-white font-inter text-sm font-light my-2 pl-4`}
                            >
                                {item}
                            </li>
                        ))
                    }
                </ul>

                <div className="flex flex-col justify-center items-center mt-14">
                    <Button
                        variant="outlined"
                        color="primary"
                        className={`py-3 px-10 normal-case text-xl font-semibold font-inter dark:text-courseCardDarkButtonText border-2 border-solid ${data.type === "Standard" ? ("border-white text-white") : ("border-black text-black")} dark:border-white rounded-md hover:bg-opacity-50`}
                        onClick={() => {
                            router.push('/pricing');
                        }}
                        endIcon={<LogoutIcon className={`${data.type === "Standard" ? ("text-white") : ("text-black")} dark:text-white`} />}
                    >
                        {data.buttonText}
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default PricingCard;