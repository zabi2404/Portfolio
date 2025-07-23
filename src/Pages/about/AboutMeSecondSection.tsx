import React, { useEffect,  useState } from 'react';
import { motion } from "framer-motion";


 const AboutMeSecondSection = () => {

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
    <div className='grid border-b border-t border-[#484848]
lg:pt-20 xsm:pt-16 lg:grid-cols-2 lg:text-start
xsm:pb-16 xsm:grid-cols-1 
sm:text-center

'>
<div>
 <motion.h1
         initial={{ fontSize: '60px' }}
            animate={{ fontSize: isMobile ? '43px' : (isLaptop ? '76px' : '60px') }}
           transition={{ duration: 1, ease: 'easeInOut' }}
          className=' font-script leading-tight'>
         My Education
        </motion.h1>
</div>

<div>

 <div className='font-secondary 
 lg:pb-20
 xsm:pb-10 xsm:pt-8
 '>
<div className='flex 
lg:pb-4 lg:flex-row lg:justify-between  lg:items-end  
xsm:pb-3 xsm:flex-col xsm:justify-start
'>

        <div>
            <motion.h1
           initial={{ fontSize: '28px' }}
              animate={{ fontSize: isMobile ? '24px' : (isLaptop ? '32px' : '28px') }}
               transition={{ duration: 1, ease: 'easeInOut' }}
          >
           Bachelor of Computer Science
          </motion.h1>
           <motion.p
          initial={{ fontSize: '17px' }}
              animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
                transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#D3E97A] font-secondary '>
University of Education
         </motion.p>
        </div>

           <motion.p
          initial={{ fontSize: '17px' }}
              animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
                transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] font-secondary '>
2019 – 2023 
         </motion.p>


</div>
          <motion.p
           initial={{ fontSize: '17px' }}
              animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
               transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] '>

          Focused on web development, software engineering, and data structures.</motion.p>

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
              animate={{ fontSize: isMobile ? '24px' : (isLaptop ? '32px' : '28px') }}
               transition={{ duration: 1, ease: 'easeInOut' }}
          >
         Intermediate in ICS
          </motion.h1>
            <motion.p
             initial={{ fontSize: '17px' }}
              animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
             transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#D3E97A] font-secondary '>
Govt College
         </motion.p>
        </div>

           <motion.p
             initial={{ fontSize: '17px' }}
              animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
             transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] font-secondary '>
2017 – 2019
         </motion.p>


</div>
          <motion.p
             initial={{ fontSize: '17px' }}
              animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
              transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] '>

Studied physics, mathematics, and Computer.

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
              animate={{ fontSize: isMobile ? '24px' : (isLaptop ? '32px' : '28px') }}
               transition={{ duration: 1, ease: 'easeInOut' }}
          >
          Matriculation in Science
          </motion.h1>

               <motion.p
             initial={{ fontSize: '17px' }}
             animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
             transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#D3E97A] font-secondary '>
City Public School
         </motion.p>

          </div>

           <motion.p
             initial={{ fontSize: '17px' }}
            animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
             transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] font-secondary '>
2015 – 2017
         </motion.p>


</div>
          <motion.p
             initial={{ fontSize: '17px' }}
           animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
              transition={{ duration: 1, ease: 'easeInOut' }}

            className=' text-[#C7C7C7] '>
Completed with distinction in science subjects.
</motion.p>

        </div>
        
</div>


</div>
    
    </>
  )
}


export default AboutMeSecondSection