import React from 'react'
import { Element } from 'react-scroll'
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import Link from 'next/link'
import { HiOutlineChevronDoubleUp } from "react-icons/hi"

export default function Contact() {
    async function handleOnSubmit(e){
        e.preventDefault();
        const formData={}
        Array.from(e.currentTarget.elements).forEach(field => {
            if( !field.name ) return;
            formData[field.name] = field.value; 
        });
        console.log(formData)
        fetch('/api/mail', {
            method:'post',
            body: JSON.stringify(formData)

        })
    }
    return (
        <Element id="contact" name="contact">
            <div className="w-full lg:h-full flex justify-center">
                <div className="max-w-[1240px] md:mx-20 md:pt-32 pt-28 px-2 py-16 w-full">
                <p className="text-sm uppercase text-gray-400 text-center">
                    Get in Touch
                </p>
                <h1 className="text-indigo-900 mb-20 text-6xl font-bold text-center">
                    Contact
                </h1>
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* left */}
                        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                            <div className="lg:p-4 h-full">
                                <div>
                                    <img className="rounded-xl hover:scale-105 ease-in duration-300" src="https://usa.visa.com/dam/VCOM/global/contact-us/woman-using-laptop-on-office-desk-800x450.jpg" />
                                </div>
                                <div>
                                    <h2 className="py-2">Wonjune Jung</h2>
                                    <p>Full-stack Developer</p>
                                    <p className="py-4">I am available for freelance or full-time positions. Contact me and let's talk.</p>
                                </div>
                                <div>
                                    <p classNAme="uppercase pt-8">Connect With me</p>
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
                            </div>
                        </div>
                        {/* right */}
                        <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                            <div className="p-4">
                                <form method="post" onSubmit={handleOnSubmit}>
                                    <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                        <div className="flex flex-col">
                                            <label className="uppercase text-sm py-2">Name</label>
                                            <input
                                                className="border-2 rounded-lg p-3 flex border-gray-300"
                                                type="text" name="name" />

                                        </div>
                                        <div className="flex flex-col">
                                            <label className="uppercase text-sm py-2">Phone Number</label>
                                            <input
                                                className="border-2 rounded-lg p-3 flex border-gray-300"
                                                type="text" name="phonenumber" />
                                        </div>
                                    </div>
                                        <div className="flex flex-col py-2">
                                            <label className="uppercase text-sm py-2">Email</label>
                                            <input
                                                className="border-2 rounded-lg p-3 flex border-gray-300"
                                                type="email" name="email" />
                                        </div>
                                        <div className="flex flex-col py-2">
                                            <label className="uppercase text-sm py-2">Subject</label>
                                            <input
                                                className="border-2 rounded-lg p-3 flex border-gray-300"
                                                type="text" name="subject" />
                                        </div>
                                        <div className="flex flex-col py-2">
                                            <label className="uppercase text-sm py-2">Message</label>
                                            <textarea className="border-2 rounded-lg border-gray-400 p-3" name="message" rows="10"></textarea>
                                        </div>
                                        <button className="w-full p-4 mt-4 font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center py-12">
                        <Link href='/'>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <HiOutlineChevronDoubleUp />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>

        </Element>
    )
}