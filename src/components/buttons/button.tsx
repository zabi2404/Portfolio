'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa6";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type ButtonProps = {
  title: string;
  text?: string;
};

const Button = ({ title, text }: ButtonProps) => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    <motion.div
      initial={{ scale: 1 }}
      animate={{
        scale: 1,
        width: isMobile ? 163 : 187,
        height: isMobile ? 48 : 54,
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      className={`bg-[#D3E97A] flex justify-center items-center rounded-[100px]   
                 xsm:w-[163px] min-h-[48px] xsm:px-4 xsm:py-[5px]`}
    >
      <motion.button
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`cursor-pointer text-black font-secondary font-bold flex items-center xsm:gap-2 md:gap-4 text-nowrap lg:text-[16px] ${text && text}`}
      >
        <Link href='/contact'>{title}</Link>

        <motion.div
          animate={{
            width: isHovered ? 35 : (!isLaptop ? 35 : 10),
            height: isHovered ? 35 : (!isLaptop ? 35 : 10),
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          className="bg-black rounded-full flex justify-center items-center"
        >
          <motion.div
           animate={{ scale: isHovered ? 1 : (!isLaptop ? 1 : 0) }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <FaArrowRight className='text-white rotate-320' />
          </motion.div>
        </motion.div>

      </motion.button>
    </motion.div>
  );
};

export default Button;
