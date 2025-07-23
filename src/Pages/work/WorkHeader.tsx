import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";


 const WorkHeader = () => {
  
   const [isLaptop, setIsLaptop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
  
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
   
   
      <div className='  border-b border[#484848]
    lg:px-[108px]
xsm:px-4 xsm:gap-4
   '>
        <motion.div


          className={`grid   pb-20  
  ${isLaptop ?   "grid-cols-2":"grid-cols-1"} 
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
              My Work
            </motion.h1>
          </div>

          <div>

            <div className='font-secondary'>

              <motion.h1
                initial={{ fontSize: '28px' }}
                            animate={{ fontSize: isMobile ? '24px' : (isLaptop ? '32px' : '28px') }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              >
                I am a Full stack  developer
              </motion.h1>
              <motion.p
                initial={{ fontSize: '17px' }}
                 animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
                transition={{ duration: 1, ease: 'easeInOut' }}

                className=' text-[#C7C7C7] '>

                I have  3 years of experience as a Full Stack Developer, working extensively with the MERN stack. I’ve built scalable and performance-driven web applications using React.js, Next.js, Node.js, and Express.js, along with MongoDB and MySQL. I’ve also developed mobile app backends for React Native, focusing on efficient API design and seamless integration. My work involved close collaboration with cross-functional teams to deliver high-quality, user-focused solutions.</motion.p>

            </div>


          </div>

        </motion.div>

      </div>
   
   </>
  )
}


export default WorkHeader;