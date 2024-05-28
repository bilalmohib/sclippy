"use client";

import { useState, useEffect } from "react";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { Button, TextField } from "@mui/material";
import { macOSCommands } from "./data";

const Simulator = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
            const currentTheme = localStorage.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            setTheme(currentTheme);
        }
    }, []);

    const handleThemeChange = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
            localStorage.theme = newTheme;
        }
    };

    return (
        <div className="mt-10">
            <h3 className="text-5xl leading-tight text-center underline mb-6 text-primary font-semibold">
                Simulator Playground
            </h3>

            {/* <TextField
                id="simulatorTextField"
                label=""
                multiline
                rows={10}
                variant="outlined"
                color="primary"
                fullWidth
                className="rounded-2xl text-4xl text-black dark:text-white"
                placeholder="Please enter a text to try it the commands"
                InputProps={{
                    sx: {
                        borderRadius: 3,
                        fontSize: 22,
                        padding: 3,
                        color: (theme === "dark") ? "white" : "black",
                        border: (theme === "dark") ? "2px solid white" : "none"
                    }
                }}
            /> */}

            <textarea
                id="simulatorTextField"
                className="w-full h-72 rounded-2xl text-xl text-black dark:text-white
                outline-none bg-transparent placeholder-gray-400 dark:placeholder-gray-300
                focus:ring border-2 border-solid border-blue-600 dark:border dark:border-solid dark:border-white focus:border-0 focus:outline-none p-3
                "
                placeholder="Please enter a text to try it the commands"
                rows={5}
            />

            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" className="mt-6">
                The entered command will be displayed with green color.
            </Alert>

            <div className="mt-10 grid grid-cols-6 gap-5">
                {macOSCommands.map((command, index) => {
                    return (
                        <Button
                            key={index}
                            variant="contained"
                            color="primary"
                            className={`py-3 px-4 normal-case text-xl ${index === 0 ? "bg-green-600 hover:bg-green-800" : "bg-buttons hover:bg-blue-600"}`}
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