"use client";

import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { navItemsList } from '../../NavItems/data';
import CancelIcon from '@mui/icons-material/Cancel';
import { ButtonBase } from '@mui/material';
import ThemeSwitch from '@/components/ThemeSwitch';
import { useRouter } from 'next/navigation';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface SwipeableTemporaryDrawerProps {
    state: { [key in Anchor]: boolean };
    setState: React.Dispatch<React.SetStateAction<{ [key in Anchor]: boolean }>>;
    theme: "light" | "dark";
    toggleTheme: () => void;
}

const MobileNavbar = ({
    state,
    setState,
    theme,
    toggleTheme
}: SwipeableTemporaryDrawerProps) => {
    const router = useRouter();

    const handleClose = () => {
        setState({ ...state, right: false });
    };

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => {
        return (
            <div
                className='h-screen bg-lightHeadingText text-white flex flex-col justify-end items-end pr-12 w-screen sssm:w-[calc(100vw-50px)] sm:w-[calc(100vw-200px)]'
                onClick={handleClose}
            >
                <div className='w-full pl-10'>
                    <div className='w-full flex flex-col justify-end items-end'>
                        <ButtonBase className='rounded-full' onClick={handleClose}>
                            <CancelIcon className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white' />
                        </ButtonBase>
                    </div>
                    <div className='flex flex-col gap-5 ssm:gap-0 ssm:flex-row sm:hidden justify-end ssm:justify-between items-end ssm:items-center border-solid pt-10 w-full'>
                        <Button
                            variant="contained"
                            color="primary"
                            className="bg-buttons text-white text-xl h-10 normal-case"
                            onClick={() => router.push("/simulator")}
                        >
                            Try for free
                        </Button>
                        <div className='-mr-5'>
                            <ThemeSwitch
                                checked={theme === 'dark'}
                                onChange={toggleTheme}
                            />
                        </div>
                    </div>
                    <div className='h-[calc(100vh-250px)] ssm:h-[calc(100vh-200px)] pb-10 ssm:pb-20 mt-9 text-right flex flex-col justify-between overflow-y-hidden'>
                        {navItemsList.map((item, index) => (
                            <div key={index} className='flex flex-col justify-end items-end'>
                                <h4 className='w-fit text-white font-inter text-2xl hover:animate-pulse sm:text-3xl md:text-4xl lg:text-5xl font-normal border border-transparent hover:border-solid border-t-0 hover:border-white border-x-0 border-b-2 transition-all ease-in-out duration-300 cursor-pointer'>
                                    {item.name}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}
export default MobileNavbar;