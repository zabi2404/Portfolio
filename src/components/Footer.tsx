'use client'
import { HiClipboardDocument } from "react-icons/hi2";
import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Link from 'next/link';
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion'
import Button from './buttons/button';
const Footer = () => {

    const pathname = usePathname();

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error('Copy failed', err);
        }
    };

    const date = new Date().getFullYear();

    return (
        <>

            <div className="grid lg:grid-cols-3 lg:px-[108px] gap-10 pt-20  lg:text-start
            xsm:grid-cols-1 xsm:px-4 xsm:text-center
            "
            >
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="flex flex-col gap-10">
                            <h1 className="leading-15 font-script xsm:text-[40px] lg:text-[60px]">Bilal</h1>
                            <h1 className='font-secondary xsm:text-[17px] lg:text-[18px]'>Don't hesitate to drop me an email or contact me via my social profiles</h1>
                        </div>
                        <div>
                            <div className="flex xsm:mt-5 lg:mt-10 gap-10  text-[#D3E97A]
                            xsm:justify-center lg:justify-start
           

            ">
                                <div className='flex gap-4 items-center '>
                                    <Link href="https://www.linkedin.com/in/bilal-bhatti-462668248/">
                                        <FaLinkedinIn className="w-[30px] h-[30px] cursor-pointer" />

                                    </Link>

                                </div>

                                <div className='flex gap-4 items-center'>
                                    <Link href='https://github.com/blalasif'>
                                        <FaGithub className="w-[30px] h-[30px] cursor-pointer" />
                                    </Link >

                                </div>
                                <div className='flex gap-4 items-center'>


                                    <Link href=''>
                                        <FaXTwitter className="w-[30px] h-[30px] cursor-pointer" />
                                    </Link>

                                </div>
                                <div className='flex gap-4 items-center'>
                                    <Link href=''>
                                        <FaInstagram className="w-[30px] h-[30px] cursor-pointer" />
                                    </Link>

                                </div>



                            </div>
                        </div>


                    </div>


                </div>

                <div className="flex flex-col items-center gap-5 justify-center ">
                    <p className="font-script xsm:text-[20px] lg:text-[30px]">Quick Links</p>
                    <div className=" flex flex-col gap-8 font-third text-[16px] xsm:mt-0 ">
                        <Link href="/" className={`transition-all duration-300 ${pathname === '/' ? 'text-white' : 'text-[#C7C7C7]'}`}>Home</Link>
                        <Link href="/work" className={`transition-all duration-300 ${pathname === '/work' ? 'text-white' : 'text-[#C7C7C7]'}`}>Work</Link>
                        <Link href="/about" className={`transition-all duration-300 ${pathname === '/about' ? 'text-white ' : 'text-[#C7C7C7]'}`}>About</Link>
                        <Link href="/skills" className={`transition-all duration-300 ${pathname === '/skills' ? 'text-white ' : 'text-[#C7C7C7]'}`}>Skills</Link>
                        <Link href="/contact" className={`transition-all duration-300 ${pathname === '/contact' ? 'text-white' : 'text-[#C7C7C7]'}`}> Contacts</Link>

                    </div>
                </div>
                <div>
                    <div className='flex flex-col gap-4  
                      
                        xsm:items-center 
                        '>
                        <p className="font-script text-[30px]">Contact</p>
                        <div className='flex xsm:mt-5 lg:mt-2 items-center gap-4  '>

                            <p>bilaljee684@gmail.com</p>

                        </div>
                        <div className='flex items-center gap-4 '>

                            <p className="text-nowrap"> +92 309 5071914</p></div>

                    </div>
                </div>

            </div>



            <div className="flex px-[108px] xsm:mt-10 lg:mt-0 pb-10
            xsm:justify-center lg:justify-start
            " >
                <p className="text-[#C7C7C7] font-secondary">© {date} Bilal Asif</p>
            </div>


        </>
    )

}


export default Footer;