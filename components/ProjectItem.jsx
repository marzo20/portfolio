import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectItem({ title, backgroundImg, skills, projectUrl }) {
    return (
        <div className="w-full h-full mt-5">
            <div className="relative flex rounded-xl w-80 h-60 shadow-xl bg-black group hover:bg-gradient-to-r from-[#5451e5] to-[#709dff]">
                <Image src={backgroundImg} alt="one" layout="fill" objectFit="cover" className="p-2 rounded-xl group-hover:opacity-10" />
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
                    <p className="pb-4 pt-2 text-white text-center">{skills}</p>
                    <Link href={projectUrl}>
                        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More info</p>
                    </Link>
                </div>
            </div>

        </div>

    )
}