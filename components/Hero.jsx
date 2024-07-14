'use client';

import Link from "next/link";
import {Button} from './ui/button';
import {Download, Send} from 'lucide-react';

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from 'react-icons/ri';

// Components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import { useEffect, useState } from "react";

const Hero = () => {
    const [icons, setIcons] = useState();

    useEffect(() => {
        const scrollYPos = window.addEventListener('scroll', () => {
            window.scrollY > 100 ? setIcons(true) : setIcons(false);
        });

        //remove event
        return () => window.removeEventListener('scroll', scrollYPos);
    }, [])

    return (
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    {/* Text */}
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
                        <h1 className="h1 mb-4">Hello everyone, my name is Achmad Ismail</h1>
                        <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ex tempora deleniti eveniet voluptate eum consequatur laborum vitae quo natus facere repellendus, 
                            ducimus consequuntur, quidem architecto? Commodi praesentium dolore accusamus deleniti.
                        </p>
                        {/* Button */}
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href="/contact">
                                <Button className='gap-x-2'>Contact me <Send size={18}/></Button>
                            </Link>
                            <Button variant='secondary' className='gap-x-2'>Download CV <Download size={18}/></Button>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="hidden xl:flex relative">Image</div>
                </div>
                {/* Icons */}
                <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-20 animate-bounce">
                    <RiArrowDownSLine className={`${icons ? "hidden" : "text-3xl text-primary"} `}/>
                </div>
            </div>
        </section>
    )
}

export default Hero
