"use client"

import React, { useEffect, useRef, useState } from 'react';
import { wrapGrid } from 'animate-css-grid';
import Link from 'next/link';
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/buttons/button";
import AnimatedLineHeading from '@/components/AnimatedLineHeading';

const Header = () => {
  
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      setIsLaptop(window.innerWidth >= 1024);
    };
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    if (gridRef.current) {
      wrapGrid(gridRef.current, {
        duration: 1000,
        easing: 'easeInOut',
      });
    }
  }, []);

  return (
    <>

      <div
 ref={gridRef}

        className={`grid  auto-rows-auto  pb-20 items-center  border-b border-[#484848]

  min-[1250px]:grid-cols-2 sm:grid-cols-1
  lg:px-[108px] lg:pt-8 min-[1250px]:text-start
  sm:text-center
 xsm:px-2 xsm:gap-20 xsm:pt-10
  transition-padding 
   transition-all
  `
        }   >

        {/* Heading section */}
         <div className="flex items-center  ">
        <div className="flex flex-col sm:w-full" >

          {/* heading and description */}
          <div className='sm:flex 
          sm:justify-center sm:items-center 
          min-[1250px]:justify-start min-[1250px]:items-start 
          '>

            <div className='
            sm:max-w-full
            lg:w-[70%]
            '>
              
              <div className="inline-block sm:text-start leading-none lg:h-[210px]
               lg:w-[600px]  
               sm:h-[60px]
               xsm:w-[300px] 
          
              " >

          <AnimatedLineHeading/>

              

              </div>

              <motion.p
                initial={{ fontSize: '17px' }}
                animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
                transition={{ duration: 1, ease: 'easeInOut' }}

                className="text-[#C7C7C7] md:text-[18px] font-secondary
        
        xsm:text-[16px]
        ">
          I am a Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, and Node.js), with strong expertise in Next.js, TypeScript, and modern JavaScript libraries.

              </motion.p>
            </div>

          </div>

          {/* contact me button with logo */}
          <div className="flex gap-4 mt-10  items-center
          sm:justify-center 
          min-[1250px]:justify-start
          ">
            <div><Button 
            title='Contact Me'
           
            /></div>
            <div className="flex gap-4">
              <Link href='https://www.linkedin.com/in/bilal-bhatti-462668248/'> 
               
                <img src="/Images/linkedin_icon.svg" alt="linkedin" /></Link>
              <Link href='https://github.com/blalasif'> <img src="/Images/github_icon.svg" alt="github" /></Link>
            </div>
          </div>

        </div>
</div>

        {/* image  */}
        <div className=" rounded-[16px] 
        lg:max-h-[500px] bg-[#24002E]
        xsm:max-h-[350px]
        xsm:max-w-full 
    flex justify-center items-center
    ">
          <img className="rounded-[16px] overflow-hidden xsm:max-h-[350px]  lg:max-h-[500px]" src="Images/profilepic.jpeg" alt="" />
        </div>

      </div>
    </>
  )
}


export default Header;












 
  


  
 