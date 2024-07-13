'use client';
import React, { useState, useEffect, useMemo } from "react"


//component
import Logo from './Logo'
import ThemeToggler from "./ThemeToggler"
import Nav from "./Nav";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";

const Header = () => {
    const [header, setHeader] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        const scrollYPos = window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });

        //remove event
        return () => window.removeEventListener('scroll', scrollYPos);
    }, []);

    return (
        <header className={`${
            header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'} 
            sticky top-0 z-30n transition-all ${pathName === '/' && 'bg-[#fef9f5]'}`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center gap-x-6">
                        {/* Navbar */}
                        <Nav containerStyles='hidden xl:flex gap-x-8 items-center' 
                            linkStyles='relative hover:text-primary transition-all'
                            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
                        />
                        <ThemeToggler />
                        {/* Mobile Navbar */}
                        <div className="xl:hidden">
                            <MobileNavbar />
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header