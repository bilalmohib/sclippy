"use client";

import { useState, useEffect, useRef, ChangeEvent } from "react";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { Button, ButtonBase, Skeleton, TextField } from "@mui/material";
import { macOSCommands } from "./data";
import KeyboardWrapper from "@/components/KeyboardWrapper";
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { course_result_statistics } from "./data";

const Simulator = () => {
    const keyboard = useRef(null);
    const [input, setInput] = useState("");
    const [theme, setTheme] = useState('');
    const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
    const [isMac, setIsMac] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
            const currentTheme = localStorage.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            setTheme(currentTheme);

            // Check the platform
            const platform = window.navigator.platform;
            if (platform.indexOf("Mac") !== -1) {
                setIsMac(true);
                console.log("The user is running Mac OS");
            } else if (platform.indexOf("Win") !== -1) {
                console.log("The user is running Windows");
            } else if (platform.indexOf("Linux") !== -1) {
                console.log("The user is running Linux");
            } else {
                console.log("The user's operating system could not be determined");
            }
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            const isCommandKey = isMac ? e.metaKey : e.ctrlKey;

            if (isCommandKey) {
                // if (e.key === 'c' || e.key === 'v') {
                //     e.preventDefault(); // prevent copying and pasting
                // }

                console.log("Current key: ", e.key, "Current ctrlKey: ", e.ctrlKey, "Current metaKey: ", e.metaKey);

                // const commandIndex = macOSCommands.findIndex(command => command.key === e.key && command.ctrlKey);
                // if (commandIndex !== -1) {
                //     setHighlightedIndex(commandIndex);
                // }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMac]);

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
        if (keyboard.current) {
            // @ts-ignore
            // Remember to keep the previous input
            keyboard.current.setInput(event.target.value);
        }
    };

    const handleKeyPress = (key: string) => {
        if (key === "Backspace") {
            // Split the input into words
            const words = input.split(' ');
            // Get the last word
            const lastWord = words[words.length - 1];

            // Check if the last word is a command
            const isCommand = macOSCommands.some(command => command.key === lastWord);

            if (isCommand) {
                // Remove the whole command (last word)
                // words.pop();
                // setInput(words.join(' '));
            } else {
                // Remove the last character
                setInput(input.slice(0, -1));
            }
        } else {
            if (key === "Shift") {
                return;
            }

            if (key === "Control") {
                // Check if "Ctrl" is already in the input
                if (!input.includes("Ctrl")) {
                    setInput(input + "Ctrl");
                }
            } else {
                setInput(input + key);
            }
        }
    };

    return (
        <div className="mt-10 px-20">
            <div>
                {(theme === "") ? (
                    <Skeleton variant="rectangular" className="w-full rounded-md h-16" />
                ) : (
                    <div className="flex flex-col">
                        <div className="w-full block dark:hidden">
                            <TextField
                                id="simulatorLightTextField"
                                placeholder="Please enter a text to try it the commands"
                                value={input}
                                onChange={(e: any) => onChangeInput(e)}
                                onKeyDown={(e: any) => handleKeyPress(e.key)}
                                fullWidth
                                className="text-2xl text-center rounded-lg"
                                InputProps={{
                                    style: {
                                        fontSize: 18
                                    },
                                    inputProps: {
                                        style: {
                                            textAlign: "center"
                                        },
                                    },
                                    startAdornment: (
                                        <ButtonBase
                                            className="-ml-4.5 h-14 text-2xl font-light bg-gray-600 text-white px-4 rounded-tl-md rounded-bl-md py-2 w-428px flex flex-row"
                                        >
                                            <p className="w-full">Key Combination Input</p> <KeyboardIcon className="text-2xl" />
                                        </ButtonBase>
                                    ),
                                }}
                            />
                        </div>

                        <div className="w-full hidden dark:block">
                            <TextField
                                id="simulatorDarkTextField"
                                placeholder="Please enter a text to try it the commands"
                                value={input}
                                onChange={(e: any) => onChangeInput(e)}
                                onKeyDown={(e: any) => handleKeyPress(e.key)}
                                fullWidth
                                className="text-2xl text-center border-white border-solid border focus:border focus:border-solid focus:border-blue-500 focus:outline-none text-white rounded-lg"
                                InputProps={{
                                    style: {
                                        fontSize: 18
                                    },
                                    inputProps: {
                                        style: {
                                            textAlign: "center",
                                            color: "white",
                                        },
                                    },
                                    sx: {
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                border: '1px solid white',
                                            },
                                            '&:hover fieldset': {
                                                border: '1px solid white',
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: '1px solid white',
                                            },
                                        },
                                    },
                                    startAdornment: (
                                        <ButtonBase
                                            className="-ml-4.5 h-14 text-2xl font-light bg-gray-600 text-white px-4 rounded-tl-md rounded-bl-md py-2 w-428px flex flex-row"
                                        >
                                            <p className="w-full">Key Combination Input</p> <KeyboardIcon className="text-2xl" />
                                        </ButtonBase>
                                    ),
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-6">
                <div className="flex flex-row gap-12">
                    <div className="w-56">
                        <div className="border border-gray-300 border-solid rounded-tl-md rounded-tr-md w-full">
                            <h3 className="w-full bg-gray-200 dark:bg-courseCardDarkBg text-gary-300 dark:text-white py-3 pl-4 text-xl rounded-tl-md rounded-tr-md border-b border-b-transparent border-solid dark:border-b-white">Statitics</h3>
                            <div className="px-4 py-2">
                                {course_result_statistics.map((item, index) => {
                                    return (
                                        <div key={index} className="flex flex-row items-center justify-between my-4">
                                            <p className="dark:text-white">{item.label} :</p>
                                            <p
                                                className={`px-4 py-1 rounded-md text-gray-900 dark:text-gray-700`}
                                                style={{
                                                    backgroundColor: item.color
                                                }}
                                            >
                                                {item.value}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center">
                        {theme === "" ? (
                            <Skeleton variant="rectangular" className="w-full rounded-md h-64" />
                        ) : (
                            <KeyboardWrapper keyboardRef={keyboard} onChange={setInput} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Simulator;
