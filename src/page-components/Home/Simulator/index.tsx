"use client";

import { useState, useEffect, useRef, ChangeEvent } from "react";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { Button, TextField } from "@mui/material";
import { macOSCommands } from "./data";
import KeyboardWrapper from "@/components/KeyboardWrapper";

const Simulator = () => {
    const keyboard = useRef(null);
    const [input, setInput] = useState("");
    const [theme, setTheme] = useState('light');
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
        const input = event.target.value;
        setInput(input);

        if (keyboard.current) {
            // @ts-ignore
            keyboard.current.setInput(input);
        }
    };

    return (
        <div className="mt-10">
            <h3 className="text-5xl leading-tight text-center underline mb-6 text-primary font-semibold">
                Simulator Playground
            </h3>

            <textarea
                id="simulatorTextField"
                className="w-full h-72 rounded-2xl text-xl text-black dark:text-white
                outline-none bg-transparent placeholder-gray-400 dark:placeholder-gray-300
                focus:ring border-2 border-solid border-blue-600 dark:border dark:border-solid dark:border-white focus:border-0 focus:outline-none p-3
                "
                placeholder="Please enter a text to try it the commands"
                rows={5}
                value={input}
                onChange={(e: any) => onChangeInput(e)}
            />

            <div className="mt-6">
                <KeyboardWrapper keyboardRef={keyboard} onChange={setInput} />
            </div>

            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" className="mt-6">
                The entered command will be displayed with green color.
            </Alert>

            <div className="mt-10 grid grid-cols-6 gap-5">
                {macOSCommands.map((command, index) => {
                    const isHighlighted = highlightedIndex === index;
                    return (
                        <Button
                            key={index}
                            variant="contained"
                            color={isHighlighted ? "success" : "primary"}
                            className={`py-3 px-4 normal-case text-xl ${isHighlighted ? "bg-green-600 hover:bg-green-800" : "bg-buttons hover:bg-blue-600"}`}
                            title={command.description}
                        >
                            {command.name}
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}

export default Simulator;
