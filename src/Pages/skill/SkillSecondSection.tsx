import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import SkillButton from '@/components/SkillButton';
 const SkillSecondSection = () => {

    const [isClicked , setIsClicked] = useState(false);
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
   
   <div className='   grid border-b border-[#484848]
  lg:grid-cols-2 lg:px-[108px] lg:py-20 lg:text-start
  sm:text-center
xsm:grid-col-1
xsm:px-2 xsm:gap-4 '>
 




<div>

 <motion.h1
           initial={{ fontSize: '60px' }}
            animate={{ fontSize: isMobile ? '43px' : (isLaptop ? '76px' : '60px') }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className=' font-script leading-tight whitespace-nowrap'>
        My Capabilities
        </motion.h1>
</div>

<div className=''>

  <div  >
    <motion.p
             initial={{ fontSize: '17px' }}
              animate={{ fontSize: isMobile ? '16px' : (isLaptop ? '18px' : '17px') }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            
            className=' text-[#C7C7C7] font-secondary '>
I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. 
         </motion.p>
  </div>

{/* skill button */}
<div onClick={()=>{setIsClicked(true)}} className='flex flex-wrap 
lg:gap-[16px] lg:py-8 lg:justify-start lg:items-start
sm:justify-center sm:items-center
xsm:gap-[12px] xsm:py-6
'>
<SkillButton
title="NODE JS"
/>
<SkillButton
title="NEST JS"
/>
<SkillButton
title="EXPRESS"
/>
<SkillButton
title="NEXT JS"
/>
<SkillButton
title="REACT JS"
/>
<SkillButton
title="TYPESCRIPT"
/>
<SkillButton
title="MONGO DB"
/>
<SkillButton
title="MY SQL"
/>
<SkillButton
title="POSTGRESS"
/>
<SkillButton
title="SUPABASE"
/>
<SkillButton
  title="MATERIAL UI"
  />
  <SkillButton
  title="JAVASCRIPT"
  />
<SkillButton
title="SAAS"
/>
<SkillButton
title="TAILWIND CSS"
/>
<SkillButton
title="CSS"
/>
<SkillButton
title="HTML 5"
/>

</div>

</div>
          



 </div>

   </>
  )
}


export default SkillSecondSection;