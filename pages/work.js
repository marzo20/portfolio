import {Element} from 'react-scroll'
import Image from "next/image"
import tictactoe from "../public/tictactoe.png"
import p1 from "../public/p1.png"
import p2 from "../public/p2.png"
import p4 from "../public/p4.png"
export default function work(){
    return(
        <Element id="work" name="work">
            <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
                <p className="text-sm uppercase text-gray-400">
                    Portfolio
                </p>
                <h2 className="text-indigo-900 text-6xl font-bold text-center">
                    All Creative Works
                </h2>
                <div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
                    <div className="relative flex rounded w-80 h-60 shadow-xl bg-black group hover:bg-gradient-to-r from-[#5451e5] to-[#709dff]">
                        <Image src={tictactoe} alt="one" layout="fill" objectFit="cover" className="p-2 rounded group-hover:opacity-30" />
                        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <h3 className="text-2xl text-white tracking-wider text-center">Tic Tac Toe</h3>
                            <p className="text-white">HTML & CSS & JS</p>
                        </div>
                    </div>
                    <div className="relative flex rounded w-80 h-60 shadow-xl bg-black group hover:bg-gradient-to-r from-[#5451e5] to-[#709dff]">
                        <Image src={p1} alt="one" layout="fill" objectFit="cover" className="p-2 rounded group-hover:opacity-30" />
                        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <h3 className="text-2xl text-white tracking-wider text-center">Mario Jump</h3>
                            <p className="text-white">HTML & CSS & JS</p>
                        </div>
                    </div>
                    <div className="relative flex rounded w-80 h-60 shadow-xl bg-black group hover:bg-gradient-to-r from-[#5451e5] to-[#709dff]">
                        <Image src={p2} alt="one" layout="fill" objectFit="cover" className="p-2 rounded group-hover:opacity-30" />
                        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <h3 className="text-2xl text-white tracking-wider text-center">Free Games</h3>
                            <p className="text-white">Node.js & Express</p>
                        </div>
                    </div>
                    <div className="relative flex rounded w-80 h-60 shadow-xl bg-black group hover:bg-gradient-to-r from-[#5451e5] to-[#709dff]">
                        <Image src={p2} alt="one" layout="fill" objectFit="cover" className="p-2 rounded group-hover:opacity-30" />
                        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <h3 className="text-2xl text-white tracking-wider text-center">Free Games</h3>
                            <p className="text-white">Node.js & Express</p>
                        </div>
                    </div>
                    <div className="rounded w-80 h-60 shadow-xl relative">
                        <Image src={p4} alt="one" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                    </div>

                </div>
            </div>
        </Element>
    )
}