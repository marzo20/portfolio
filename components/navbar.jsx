// built in link from next.js
import React, { useState } from 'react'
import { Link, animateScroll as scroll, scroller } from 'react-scroll'
import { Transition } from "@headlessui/react" //for smooth transition b/w elemnts

export default function Navbar() {
    const [isOpen, stateIsOpen] = useState(false)
    return (
        <nav className=" fixed z-20 bg-white w-full">
            <div className="nav w-full">
                <div className=" flex itmes-center h-20 w-full">
                    <div className="flex items-center sm:mx-10 md:mx-20 justify-between w-full">
                        <div className="flex justify-center items-center flex-shrink-0 ml-10">
                            <h1 className="font-bold text-xl cursor-pointer">
                                
                            </h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex itmes-baseline space-x-4">
                                <Link activeClass='home' to="home" smooth={true} offset={50} duration={500} className="cursor-pointer text-blue-600 px-3 py-2 text-md">About</Link>
                                <Link activeClass='skills' to="skills" smooth={true} offset={50} duration={500} className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md">Skills</Link>
                                <Link activeClass='Work' to="work" smooth={true} offset={50} duration={500} className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md">Projects</Link>
                            </div>
                        </div>
                        <div className="flex justify-center items-center flex-shrink-0">
                            <Link 
                            activeClass='Contact' to='contact' smooth={true} offset={50} duration={500}
                            className="font-semibold text-lg cursor-pointer hidden md:block"><span className="text- blue-600">Contact</span>
                            </Link>
                        </div>
                    </div>
                    {/* for mobile screen */}
                    <div className="mr-14 flex md:hidden">
                        <button onClick={()=> stateIsOpen(!isOpen)} type="button" className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-black focus:outline-none focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg 
                                    className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path 
                                        strokeLinecap="round" strokeLinejoin="round" 
                                        strokeWidth="2"
                                        d= "M4 6h16M4 12h16M4 18h16"/></svg>)
                                        : (
                                        <svg 
                                            className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path 
                                                strokeLinecap="round" strokeLinejoin="round" 
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"/></svg>)}
                        </button>
                    </div>
                </div>
            </div>
            {/* mobile divs */}
            <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 sclae-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100" leaveTo="opacity-0 scale-95">
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="bg-white mx-4 mr-20 pt-4 pb-4 space-y-1">
                            <Link href="/home" activeClass="home" to="home" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py02 rounded-md text-base font-medium">Home</Link>
                            <Link href="/about" activeClass="about" to="about" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py02 rounded-md text-base font-medium">About</Link>
                            <Link href="/skills" activeClass="skills" to="skills" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py02 rounded-md text-base font-medium">Skills</Link>
                            <Link href="/work" activeClass="work" to="work" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py02 rounded-md text-base font-medium">Projects</Link>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    )
}