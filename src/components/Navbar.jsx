import React from 'react'
import { useState } from 'react';
import logo from '../assets/logoipsum-282.svg'
import { HiGlobeAlt, HiMenu, HiX} from "react-icons/hi";


function Navbar() {
    const [isOpen, setisopen] = useState(false);

    const toggleMenuBar = () => {
        setisopen(!isOpen);
    }

    const navItem = [
        { link: "Overview", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "About", path: "about" },
        { link: "Pricing", path: "pricing" },
    ];



    return (
        <>
            <nav className='p-6 flex justify-between items-center shadow-md w-full fixed top-0 z-50 bg-[#f0ead2]'>
                <div className='space-x-20 md:flex block'>
                    <a href="/" className='flex items-center gap-2'>
                        <img src={logo} alt="" className='w-10' />
                        <span>MY WEBSITE</span>
                    </a>
                    <div className='p-0 m-0'>
                        <ul className='md:flex md:gap-20 hidden'>
                        {
                            navItem.map(({ link, path }) => (
                                <a key={link} href={path} className='block text-primary hover:text-yellow-500'> {link} </a>
                            ))
                        }   
                        </ul>
                    </div> 
                </div>
                <div className='space-x-10 md:flex hidden'>
                    <a href="/" className='flex items-center gap-1 text-primary hover:text-yellow-500'>{ <HiGlobeAlt/>}Language</a> 
                    <button className='btn text-white hover:bg-blue-700 border-2 px-5 py-2 rounded-lg bg-blue-600'>Signup</button>
                </div> 
                <div className='md:hidden'>
                    <button className='btn hover:scale-125' onClick={toggleMenuBar}>
                        {
                            isOpen ? (<HiX/>) : (<HiMenu />)
                        }
                    
                    </button>
                </div>
            </nav>

            <div className={`mt-20 space-y-4 px-8 w-full py-6 bg-tartiary text-xl text-center   origin-top ${isOpen ? " block fixed top-0 left-0 " : "hidden"}`}>
                {
                    navItem.map(({ link, path }) => (
                    <a key={link} href={path} className='block text-primary hover:text-yellow-500'> {link} </a>
                ))
                }
            </div>
        </>
    )
}

export default Navbar
