import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";

 const AboutMeThirdSection = () => {

 const [isLaptop, setIsLaptop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      setIsLaptop(window.innerWidth >= 1024);
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
 <>
 
 <div className='grid border-b border-t border-[#484848]
lg:pt-20 xsm:pt-16 lg:grid-cols-2  lg:text-start
xsm:pb-16 xsm:grid-cols-1 
sm:text-center
'>
<div>
 <motion.h1
         initial={{ fontSize: '60px' }}
            animate={{ fontSize: isMobile ? '43px' : (isLaptop ? '76px' : '60px') }}
           transition={{ duration: 1, ease: 'easeInOut' }}
          className=' font-script leading-tight'>
         My Experience
        </motion.h1>
</div>

<div>

 <div className='font-secondary 
 lg:pb-20
 xsm:pb-10 xsm:pt-8
 '>
<div className='flex 
lg:pb-4 lg:flex-row lg:justify-between  lg:items-center  
xsm:pb-3 xsm:flex-col xsm:justify-start
'>

       <div>
           <motion.h1
           initial={{ fontSize: '28px' }}
               animate={{ fontSize: isMobile ? '24px' : isLaptop ? '32px' : '28px' }}
               transition={{ duration: 1, ease: 'easeInOut' }}
          >
           Mern Stack Developer

          </motion.h1>
            <motion.p
          initial={{ fontSize: '17px' }}
              animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
                transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#D3E97A] font-secondary '>
Meta Melon
         </motion.p>
       </div>

           <motion.p
          initial={{ fontSize: '17px' }}
              animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
                transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] font-secondary '>
Feb 2025 — Present 
         </motion.p>


</div>
          <motion.p
           initial={{ fontSize: '17px' }}
               animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
               transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] '>

           My role is involved as a Mern Stack Developer working on React Js and Next js, Node Js, Express Js with Mongo Db and MySql databases. To build highly scalable and Effiecient Web Applications . And also Mobile Apps Backend. Those are on React Native.
           </motion.p>

        </div>

<div className='font-secondary
 lg:pb-20
 xsm:pb-10 xsm:pt-8
'>
<div className='flex 
lg:pb-4 lg:flex-row lg:justify-between lg:items-center  
xsm:pb-3 xsm:flex-col xsm:justify-start
'>

         <div>
           <motion.h1
            initial={{ fontSize: '28px' }}
              animate={{ fontSize: isMobile ? '24px' : isLaptop ? '32px' : '28px' }}
               transition={{ duration: 1, ease: 'easeInOut' }}
          >
        Mern Stack Developer
          </motion.h1>
           <motion.p
             initial={{ fontSize: '17px' }}
               animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
             transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#D3E97A] font-secondary '>
byteimpulse Technology 
         </motion.p>
         </div>

           <motion.p
             initial={{ fontSize: '17px' }}
               animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
             transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] font-secondary '>
 Sep 2023 - jan 2025
         </motion.p>


</div>
          <motion.p
             initial={{ fontSize: '17px' }}
               animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
              transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] '>

My role is involved as a Mern Stack Developer working on React Js and Next
 js, Node Js, Express Js with Mongo Db and MySql databases. To build highly
 scalable and Effiecient Web Applications . And also Mobile Apps Backend.
 Those are on React Native.
</motion.p>

        </div>
     

     <div className='font-secondary
 lg:pb-20
 xsm:pb-10 xsm:pt-8
'>
<div className='flex 
lg:pb-4 lg:flex-row lg:justify-between lg:items-center  
xsm:pb-3 xsm:flex-col xsm:justify-start
'>

          <div>
            <motion.h1
            initial={{ fontSize: '28px' }}
              animate={{ fontSize: isMobile ? '24px' : isLaptop ? '32px' : '28px' }}
               transition={{ duration: 1, ease: 'easeInOut' }}
          >
         Full Stack Developer
          </motion.h1>
           <motion.p
             initial={{ fontSize: '17px' }}
               animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
             transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#D3E97A] font-secondary '>
SWATI TECHNOLIGIES
         </motion.p>
          </div>

           <motion.p
             initial={{ fontSize: '17px' }}
               animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
             transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] font-secondary '>
  Jun 2022 - Aug 2023
         </motion.p>


</div>
          <motion.p
             initial={{ fontSize: '17px' }}
               animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
              transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] '>

My role is involving with Front applications as well as Backend Technoogi
 Including creating UI And build the User Experience and closely collaboarte
 with Back-End team to make Web Apps And Seamless logics and API
 Integration using React Js and Next js, Node js
</motion.p>

        </div>
</div>


</div>
 </>
  )
}


export default AboutMeThirdSection;