import { Element } from 'react-scroll'
import { FaReact } from "react-icons/fa"
import { FaJsSquare } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa"
import { FaPython } from "react-icons/fa"
import { FaMdb } from "react-icons/fa"
import { SiMysql } from "react-icons/si"
import { DiDjango } from "react-icons/di"
import { SiCsswizardry } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"



export default function Skills() {
    return (
        <Element id="skills" name="skills">
            <div className="md:pt-5 pt-5">
                <div className="w-full my-40 h-auto flex flex-col justify-center items-center">
                    <p className="text-sm uppercase text-gray-400">
                        My skills
                    </p>
                    <h1 className="text-indigo-900 text-6xl font-bold text-center">
                        My Expertise
                    </h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 justify-items-start items-center mx-40 gap-10 mt-20">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center cursor-pointer">
                                <FaHtml5 className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                                <h2 className="text-xl text-indigo-600 font-semibold">
                                    HTML
                                </h2>
                            </div>
                            {/* <p className="md:text-base text-gray-400 md-text-center sm:text-left sm:text-sm">
                            I am good at this
                        </p> */}
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center cursor-pointer">
                                <SiCsswizardry className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                                <h2 className="text-xl text-indigo-600 font-semibold">
                                    CSS
                                </h2>
                            </div>
                            {/* <p className="md:text-base text-gray-400 md-text-center sm:text-left sm:text-sm">
                            I am good at this
                        </p> */}
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center cursor-pointer">
                                <FaJsSquare className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                                <h2 className="text-xl text-indigo-600 font-semibold">
                                    Java Script
                                </h2>
                            </div>
                            {/* <p className="md:text-base text-gray-400 md-text-center sm:text-left sm:text-sm">
                            I am good at this
                        </p> */}
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center cursor-pointer">
                                <FaReact className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                                <h2 className="text-xl text-indigo-600 font-semibold">
                                    React
                                </h2>
                            </div>
                            {/* <p className="md:text-base text-gray-400 md-text-center sm:text-left sm:text-sm">
                            I am good at this
                        </p> */}
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center cursor-pointer">
                                <FaPython className="w-10 h-10  border-2 border-black m-3 p-1 shadow-xl rounded-md" />
                                <h2 className="text-xl text-indigo-600 font-semibold">
                                    Python
                                </h2>
                            </div>
                            {/* <p className="md:text-base text-gray-400 md-text-center sm:text-left sm:text-sm">
                            I am good at this
                        </p> */}
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center cursor-pointer">
                                <FaMdb className="w-10 h-10 bg-green-700 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                                <h2 className="text-xl text-indigo-600 font-semibold">
                                    Mongo DB
                                </h2>
                            </div>
                            {/* <p className="md:text-base text-gray-400 md-text-center sm:text-left sm:text-sm">
                            I am good at this
                        </p> */}
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center cursor-pointer">
                                <SiMysql className="w-10 h-10 bg-blue-700 text-orange-400 m-3 p-1 shadow-xl rounded-md" />
                                <h2 className="text-xl text-indigo-600 font-semibold">
                                    MySQL
                                </h2>
                            </div>
                            {/* <p className="md:text-base text-gray-400 md-text-center sm:text-left sm:text-sm">
                            I am good at this
                        </p> */}
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center cursor-pointer">
                                <SiTailwindcss className="w-10 h-10 bg-indigo-700 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                                <h2 className="text-xl text-indigo-600 font-semibold">
                                    Tailwindcss
                                </h2>
                            </div>
                            {/* <p className="md:text-base text-gray-400 md-text-center sm:text-left sm:text-sm">
                            I am good at this
                        </p> */}
                        </div>


                        <div className="flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center cursor-pointer">
                                <DiDjango className="w-10 h-10 bg-green-700 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                                <h2 className="text-xl text-indigo-600 font-semibold">
                                    Django
                                </h2>
                            </div>
                            {/* <p className="md:text-base text-gray-400 md-text-center sm:text-left sm:text-sm">
                            I am good at this
                        </p> */}
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center cursor-pointer">
                                <TbBrandNextjs className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                                <h2 className="text-xl text-indigo-600 font-semibold">
                                    Next.js
                                </h2>
                            </div>
                            {/* <p className="md:text-base text-gray-400 md-text-center sm:text-left sm:text-sm">
                            I am good at this
                        </p> */}
                        </div>

                    </div>
                </div>
            </div>
        </Element>
    )
}