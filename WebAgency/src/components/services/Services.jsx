import React from 'react'
import automationRobot from '../../assets/robotautomation.png'
import designIcon from '../../assets/designIcon.png'
import developmentIcon from '../../assets/developmentIcon.png'
import seoIcon from '../../assets/seoIcon.png'
import { motion, useScroll } from "framer-motion"


const Services = () => {
  return (
    <div className='services 
    bg-gray-920
    rounded-2xl
    sm:px-2 
    px-2
    sm:py-16 
    py-10 
    max-w-7xl 
    mx-auto 
    relative 
    z-0
    mb:py-0
    mb:bottom-[5rem]
    '>
      <div className='services_Title text-center'>
        <div className='services_Title-Text 
        text-white 
        font-black 
        md:text-[60px] 
        sm:text-[50px] 
        xs:text-[40px] 
        text-[30px] 
        font-Poppins
        text-center
        '>
          Services
          </div>
      </div>
      
      <div className='services_servicesList 
        mt-20 
        flex 
        flex-wrap 
        gap-5
        text-center
        md:left-[4.2rem]
        lg:left-[1.9rem]
        
        relative
        '>
        <motion.div 
        style={{position: "relative"}}
        initial={{ right: "200px" }}
        whileInView={{ left: "0px"}}
        viewport={{ once: false}}
        transition={{ duration: 1, delay: 0.5 }}
        className='services_servicesList1
        bg-indigo-950
        
        rounded-2xl 
        sm:w-[300px]
        w-[400px]
        lg:w-[18rem] 
        w-full"
        '
        >
          
        <img className='services_servicesList1-img' src={designIcon}/>
        
        <div className='services_servicesList1-info'>
            <div className='services_servicesList1-title
              bg-neutral-900
              border-b rounded-b-lg border-t-0 p-0
            
            
            '>
            <p className='text-white text-4xl'>Design</p>
            </div>
            <div className='services_servicesList1-desc'>

            </div>
        </div>
        
        </motion.div>
        
        <motion.div 
        style={{position: "relative"}}
        initial={{ right: "500px" }}
        whileInView={{ left: "0px"}}
        viewport={{ once: false}}
        transition={{ duration: 1, delay: 0.5 }}
        className='services_servicesList2
        bg-indigo-950
        rounded-2xl 
        sm:w-[300px] 
        w-[400px]
        lg:w-[18rem] 
        relative
        '>
          
        <img className='services_servicesList2-img' src={developmentIcon}/>
        <div className='services_servicesList2-info'>
            <div className='services_servicesList2-title
            bg-neutral-900
            border-b rounded-b-lg border-t-0 p-0
            
            '>
            <p className='text-white text-4xl'>Development</p>
            </div>
            <div className='services_servicesList2-desc'>
                
            </div>
        </div>
        </motion.div>

        <motion.div 
        style={{position: "relative"}}
        initial={{ right: "800px" }}
        whileInView={{ left: "0px"}}
        viewport={{ once: false}}
        transition={{ duration: 1, delay: 0.5 }}
        className='services_servicesList3
       bg-indigo-950
       
       rounded-2xl 
       sm:w-[300px] 
       w-[400px]
       lg:w-[18rem] 
        '>
        <img className='services_servicesList3-img' src={seoIcon} alt=""/>
        <div className='services_servicesList3-info'>
            <div className='services_servicesList3-title
                
                bg-neutral-900
                border-b rounded-b-lg border-t-0 p-0
            '>
            <p className='text-white text-4xl'>SEO</p>
            </div>
            <div className='services_servicesList3-desc'>
                
            </div>
        </div>
        </motion.div>
        
        <motion.div 
         style={{position: "relative"}}
         initial={{ right: "1100px" }}
         whileInView={{ left: "0px"}}
         viewport={{ once: false}}
         transition={{ duration: 1, delay: 0.5 }}
        className='services_servicesList4
       bg-indigo-950
        
       rounded-2xl 
       w-[400px]
       sm:w-[300px] 
       w-full"
       lg:w-[18rem] 
        '>
        <img className='services_servicesList4-img' src={automationRobot} alt="automation icon"/>
        <div className='services_servicesList4-info'>
            <div className='services_servicesList4-title
              bg-neutral-900
              border-b rounded-b-lg border-t-0 p-0
              
            
            '>
            <p className='text-white text-4xl'>Automation</p>
            </div>
            <div className='services_servicesList4-desc'>
                
            </div>
        </div>
        </motion.div>
        

      </div>
    </div>
  )
}

export default Services
