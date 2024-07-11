'use client';
import React, { useState, useEffect } from "react"


//component
import Logo from './Logo'
import ThemeToggler from "./ThemeToggler"

const Header = () => {
    return (
        <header>
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-2">
                    <Logo />
                    <div>
                        {/* Navbar */}
                        <ThemeToggler />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header