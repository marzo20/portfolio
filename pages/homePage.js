import { Element } from "react-scroll"
import Image from "next/image"
import heroImage from "../public/hi.png"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
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
                        <a href="#" className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black">
                            See my Portfolio!
                        </a>
                    </div>
                </div>
                <div className="flex itmes-center justify-between max-w-[330px] m-auto py-4">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedin />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail />
                    </div>
                </div>
            </div>

        </Element>
    )
}