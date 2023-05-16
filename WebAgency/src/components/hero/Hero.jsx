import React from 'react'
import alienImage from '../../assets/alienimage.png'
import { motion, useScroll } from "framer-motion";

function Hero() {
  
  
    return (
   
      <motion.div 
      
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false}}
      transition={{ duration: 1, delay: 0.5 }}
      className=' relative bottom-10 2xl:right-[10rem] l-desktop:left-[1rem] lg:h-[55rem] xl:mb-[15rem]'>
      <motion.img 
       style={{position: "relative"}}
       initial={{ left: "" }}
       whileInView={{ left: "-0px" }}
       viewport={{ once: false}}
       transition={{ duration: 1, delay: 0.5 }}
      className='relative left-[-240px] pt-[6rem] mb:top-20 mb:left-0 md:left-[5rem] lg:left-[0rem] xl:w-[47rem] 2xl:w-[52rem] 2xl:left-[15rem]' src={alienImage} alt="heroImage"
      /> 
      <motion.h1 
      style={{position: "relative"}}
      initial={{ left: "" }}
      whileInView={{ left: "" }}
      viewport={{ once: false}}
      transition={{ duration: 1, delay: 0.5 }}
      className='font-black 
      text-white 
      mb:text-[30px]
      mb:bottom-[7rem]
      mb:left-[3.8rem]
      mb:w-[13rem]
      mb:max-w-full
      mb:bottom-[12rem]
      sm:w-[34rem]
      sm:text-[42px]
      sm:bottom-[12rem]
      md:left-[7rem]
      lg:text-[70px] 
      
      lg:bottom-[39rem]
      lg:w-[32rem]
      lg:left-[29rem]
      
      xs:text-[50px] 
      text-[40px] 
      lg:leading-[98px] 
      mt-[9rem]  text-white relative  
       bottom-[10rem]
       text-center
      h-17 
      xl:left-[40rem]
      xl:text-[81px]
      2xl:text-[81px]
      2xl:left-[60rem]
      2xl:bottom-[45rem]
      xl:w-[30rem]
      
      relative
      '>
        Bridge Your Technological Gap Today!
        </motion.h1>
        <motion.button 
        style={{position: "relative"}}
        initial={{ bottom: "" }}
        whileInView={{ bottom: "" }}
        viewport={{ once: false}}
        transition={{ duration: 1, delay: 0.5 }}
        className='
        lg:text-[40px] 
         bg-indigo-950
         font-Poppins
         p-5 
         top-[-7rem]
         left-[2rem]
         mt-[1rem]
         rounded-2xl 
         sm:w-[450px] 
         text-white
         relative
        mb:bottom-[7rem] 
        sm:bottom-[2rem]
        mb:left-[2rem]  
        sm:left-[6.5rem]
        md:left-[10rem]
        md:bottom-[10rem] 
        l-tablet:left-[2rem]
        l-tablet:w-[400px]
        lg:left-[7rem]
        lg:bottom-[32rem]
        xl:left-[10.5rem]
        xl:w-[483px]
        2xl:left-[25rem]
        2xl:w-[510px]
        '>
          Get Started!</motion.button>
          <motion.button 
          style={{position: "relative"}}
          initial={{ bottom: "460px" }}
          whileInView={{ bottom: "513px" }}
          viewport={{ once: false}}
          transition={{ duration: 1, delay: 0.5 }}
          className='
          lg:text-[40px] 
         bg-indigo-950
         font-Poppins
         p-5
         top-[-7rem]
         left-[2.5rem]
         rounded-2xl 
         sm:w-[450px] 
         text-white
         relative
          
         md: left-[2rem]
         bottom-[8rem] 
        mt-1
        mb:bottom-[7rem] 
        mb:left-[2.2rem]  
        sm:left-[6.5rem]
        md:left-[10rem]
        md:bottom-[10rem]
        l-tablet:left-[3rem]
        l-tablet:w-[400px]
        lg:left-[8.5rem]
        lg:bottom-[32rem]
        xl:left-[11rem]
        xl:w-[483px]
        2xl:left-[28rem]
        2xl:w-[510px]
        '>
           Our Work</motion.button>
           </motion.div>
     
    
  )
}

export default Hero
