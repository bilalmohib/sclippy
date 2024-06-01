"use client";
import Image from "next/image";
import { Button } from "@mui/material";
import { contact_form_data } from "./data";

interface ContactFormProps {
    className?: string;
}

const ContactForm = ({
    className
}: ContactFormProps) => {
    return (
        <div className={`${className}`}>
            <div className="shadow-contactFormShadow flex flex-row w-9/12">
                <div className="bg-bannerHeadingText w-5/12 pl-12 pt-28">
                    <h3 className="text-white font-inter font-semibold text-5xl">Contact Us</h3>
                    <div className="flex flex-col justify-center items-start gap-16 mt-20">
                        {contact_form_data.map((data, index) => (
                            <div key={index} className="flex flex-row items-center mt-4 pr-6">
                                <data.icon className="text-white mt-1" fontSize="large" sx={{ fontSize: "50px" }} />
                                <p className="text-white ml-4 font-inter font-normal text-2xl mt-0">{data.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-7/12 bg-white dark:bg-courseCardDarkBg">
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/learn/upper-dome.png"
                            alt="upper dome"
                            width={109}
                            height={97}
                            className="relative -mt-12"
                        />
                    </div>

                    <form className="pl-10 pr-20 py-28">
                        <div className="w-full">
                            <h3 className="text-contactFormHeading dark:text-white font-inter text-5xl font-semibold">Let’s Talk with us</h3>
                            <p className="text-contactFormSubHeading dark:text-white font-inter text-xl font-normal mt-2">Feel free to contact us</p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col mt-10">
                                <label htmlFor="name" className="font-inter text-black dark:text-white font-semibold text-xl capitalize">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    className="mt-2 px-2 w-full rounded-md dark:bg-transparent border-2 border-gray-400 border-solid focus:border-2 focus:border-solid focus:outline-none focus:border-blue-700 hover:border-gray-900 shadow-sm text-gray-500 font-inter font-normal text-xl py-2"
                                />
                            </div>
                            <div className="flex flex-col mt-4">
                                <label htmlFor="email" className="font-inter text-black dark:text-white font-semibold text-xl capitalize">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="mt-2 px-2 w-full rounded-md dark:bg-transparent border-2 border-gray-400 border-solid focus:border-2 focus:border-solid focus:outline-none focus:border-blue-700 hover:border-gray-900 shadow-sm text-gray-500 font-inter font-normal text-xl py-2"
                                />
                            </div>
                            <div className="flex flex-col mt-4">
                                <label htmlFor="message" className="font-inter text-black dark:text-white font-semibold text-xl capitalize">Email:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Your Message"
                                    className="mt-2 px-2 w-full rounded-md dark:bg-transparent border-2 border-gray-400 border-solid focus:border-2 focus:border-solid focus:outline-none focus:border-blue-700 hover:border-gray-900 shadow-sm text-gray-500 font-inter font-normal text-xl py-2"
                                />
                            </div>
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            className="mt-12 py-2 capitalize text-2xl bg-buttons hover:bg-blue-600 w-full"
                            onClick={() => {
                                console.log("Submit button clicked");
                            }}
                            type="submit"
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>

            <Image
                src="/learn/bottom-ring.png"
                alt="bottom ring"
                width={112}
                height={128}
                className="-mt-16"
            />
        </div>
    )
}
export default ContactForm;