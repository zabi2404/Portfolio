"use client"

import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";

type SkillButtonProps = {
  title: string;
};


  function SkillButton({title}:SkillButtonProps) {
 

 const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
   return (

  <>
  <div className='  font-secondary

  '>
<button className='cursor-pointer'>
    
    <motion.p
            initial={{ fontSize: '16px' }}
            animate={{ fontSize: isMobile ? '14px' : '16px' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            
            className='w-fit border border-[#484848] text-[#C7C7C7] font-secondary px-[24px] py-[16px] rounded-[100px] '>
{title}
         </motion.p>
    
    </button>
  </div>
  </>
  )
}

export default SkillButton