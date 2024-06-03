"use client";
import Image from 'next/image';
import MobileNavbar from './MobileNavbar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button, ButtonBase } from "@mui/material";
import ThemeSwitch from '@/components/ThemeSwitch';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const NavActionButtons = () => {
    const router = useRouter();
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const currentTheme = localStorage.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setTheme(currentTheme);
        document.documentElement.classList.add(currentTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        localStorage.theme = newTheme;
    };

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const handleOpen = () => {
        setState({ ...state, right: true });
    };

    return (
        <div>
            <div className='flex flex-row justify-center items-center gap-2 sm:gap-4'>
                <Button
                    variant="contained"
                    color="primary"
                    className="bg-buttons text-white text-xl h-10 normal-case hidden sm:block"
                    onClick={() => router.push("/simulator")}
                >
                    Try for free
                </Button>
                <div className="ml-2 hidden ssm:block">
                    <ThemeSwitch
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                    />
                </div>
                <ButtonBase
                    className="flex flex-row justify-center items-center xlg:hidden"
                    onClick={handleOpen}
                >
                    <MenuOpenIcon className="text-4xl text-black dark:text-white" />
                </ButtonBase>

                <MobileNavbar
                    state={state}
                    setState={setState}
                    theme={theme}
                    toggleTheme={toggleTheme}
                />
            </div>
        </div>
    )
}
export default NavActionButtons;