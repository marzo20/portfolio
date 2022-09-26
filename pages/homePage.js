import { Element } from "react-scroll"
import Image from "next/image"
import heroImage from "../public/hi.png"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { Link, animateScroll as scroll, scroller } from 'react-scroll'
import { Transition } from "@headlessui/react" //for smooth transition b/w elemnts


export default function homePage() {
    return (
        <Element id="home" name="home">
            <div>
                <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28">
                    <div className="w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
                        <Image src={heroImage} alt="heroImage" layout="fill" objectFit="cover" className="rounded-full cursor-pointer hidden md:block" />
                    </div>
                    <div className="flex flex-col md:ml-20 mx-10 mt-10">
                        <h1 className="font-bold text-7xl text-left mb-5">
                            Hello, I am <span className='text-indigo-900'>Wonjune</span>
                        </h1>
                        <h1 className="font-bold text-5xl text-left mb-5">
                            Full-Stack Software Developer
                        </h1>

                        <p className="text-left font-normal mb-5 flex-wrap">
                            I am an adaptable Korean Software Engineer, who learned teamwork, customer service skills from previous work experience in restaurant industry. By living in different countries, I have broadened my knowledge and perspectives by understanding different cultures. I am a goal achiever who finds enjoyment from problem solving.
                        </p>
                        <a href="/resume.pdf" className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black">
                            See my Resume!
                        </a>
                    </div>
                </div>
                <div className="flex itmes-center justify-between max-w-[330px] m-auto py-4">
                    <a href="https://www.linkedin.com/in/wonjune-jung">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedin />
                    </div>
                    </a>
                    <a href="https://github.com/marzo20">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub />
                    </div>
                    </a>
                    <Link 
                            activeClass='Contact' to='contact' smooth={true} offset={50} duration={500}
                            className="font-semibold text-lg cursor-pointer hidden md:block">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail />
                    </div>
                            </Link>
                </div>
            </div>

        </Element>
    )
}