"use client";
import Logo from './Logo';
import NavItems from './NavItems';
import NavActionButtons from './NavActionButtons';

interface HeaderProps {
    className?: string;
}

const Header = ({
    className
}: HeaderProps) => {
    return (
        <header className={`flex flex-row justify-between items-center w-full py-5 ${className}`}>
            <Logo />
            <NavItems className='hidden xlg:block' />
            <NavActionButtons />
        </header>
    )
}
export default Header;