"use client";
import Logo from './Logo';
import NavItems from './NavItems';
import { useTheme } from 'next-themes';
import { Button } from "@mui/material";
import { useEffect, useState } from 'react';

const Header = () => {
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
        <header>
            <Logo className="border border-red-500 border-solid" />
            <NavItems />
            <Button
                variant="contained"
                color="primary"
                onClick={toggleTheme}
            >
                Change Theme - {theme === 'dark' ? 'Light' : 'Dark'}
            </Button>
        </header>
    )
}
export default Header;