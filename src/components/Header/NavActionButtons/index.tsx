import { useEffect, useState } from 'react';
import { Button } from "@mui/material";
import ThemeSwitch from '@/components/ThemeSwitch';

const NavActionButtons = () => {
    const [theme, setTheme] = useState('light');

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

    return (
        <div>
            <div className='flex flex-row justify-center items-center gap-4'>
                <Button
                    variant="contained"
                    color="primary"
                    className="bg-buttons text-white text-xl h-10 normal-case"
                >
                    Try for free
                </Button>
                <ThemeSwitch
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                />
            </div>
        </div>
    )
}
export default NavActionButtons;