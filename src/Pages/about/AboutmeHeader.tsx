
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { wrapGrid } from 'animate-css-grid';
import DownloadButton from '@/components/buttons/DownloadButton';
 const AboutmeHeader = () => {

 const gridRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
      const [isLaptop, setIsLaptop] = useState(false);


  // Initialize animate-css-grid
  useEffect(() => {
    if (gridRef.current) {
      wrapGrid(gridRef.current, {
        duration: 600,

        stagger: 0,
      });
    }
  }, []);

  // Update layout on screen resize
useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 480);
          setIsLaptop(window.innerWidth >= 1024);
        };
        handleResize(); // Run on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  return (
  <>
  
   <motion.div


      className={`grid   pb-20  
  ${isLaptop ?  "grid-cols-2":"grid-cols-1"} 
  lg:pt-40 lg:pb-[120px] lg:text-start
  xsm:pt-10 xsm:pb-20
  transition-padding duration-700
sm:text-center
  `
      }   >

      <div>
        <motion.h1
          initial={{ fontSize: '79px' }}
                   animate={{ fontSize: isMobile ? '57px' : (isLaptop ? '101px' : '79px') }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className=' font-script leading-tight'>
          About me
        </motion.h1>
      </div>

      <div>

        <div className='font-secondary'>

          <motion.h1
            initial={{ fontSize: '28px' }}
            animate={{ fontSize: isMobile ? '24px' : isLaptop ? '32px' : '28px' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
             Hello! I&apos;m a passionate Full Stack Developer.
          </motion.h1>
          <motion.p
            initial={{ fontSize: '17px' }}
           animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
            transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] '>

          I enjoys building responsive, scalable, and Industry Standard Web applications
             
              My work reflects a deep love for clean code and thoughtful design.

I specialize in both front-end and back-end technologies including React, Node.js, and MongoDB,Express Js,Postgress,My Sql,Nest Js With a user-first mindset, I strive to create applications that not only function flawlessly but also look great across all devices.

I&rsquo;m always exploring new tech and methodologies, and I love collaborating on exciting projects that push the limits of what’s possible on the web.</motion.p>

        </div>

        <div className="flex gap-4 mt-10
        sm:justify-center 
        lg:justify-start
        ">
          <div><DownloadButton 
          title='Download Resume'
          text="xsm:text-[12px]"
          /></div>
          <div className="flex gap-4">
            <Link href='https://www.linkedin.com/in/bilal-bhatti-462668248/'>  <img src="/Images/linkedin_icon.svg" alt="linkedin" /></Link>
            <Link href='https://github.com/blalasif'> <img src="/Images/github_icon.svg" alt="github" /></Link>
          </div>
        </div>
      </div>

    </motion.div>
  
  </>
  )
}


export default AboutmeHeader;