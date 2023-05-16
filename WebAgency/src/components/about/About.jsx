import React from 'react'
import marketingTeam from '../../assets/marketingTeam.png'
import { motion, useScroll } from "framer-motion"



const About = () => {
  
  
    return (
    <div className='mt-12 bg-black-100 rounded-[20px] w-4/5 text-center relative 2xl:w-[65%] sm:left-[4rem] left-[2rem] md:left-[1rem] lg:left-[2rem] xl:left-[-2.4rem] 2xl:left-[5rem] 2xl:pb-[10rem]'>
    <div className='bg-slate-950 rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px] md:left-[4rem] lg:left-[5rem] xl:left-[6.5rem] 2xl:left-[7rem] l-desktop:left-[18rem] relative'>
        <motion.h2 
        initial={{ opacity: 0 }}
    
        whileInView={{ opacity: 1 }}
        viewport={{ once: false}}
        className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Our Team</motion.h2>
    
    <div className='mt-20 pb-14 sm:px-16 px-6  gap-7 lg:flex'> 
    <motion.div 
    style={{position: "relative"}}
    initial={{ bottom: "80px", opacity: 0 }}
    
    whileInView={{ bottom: "0px", opacity: 1 }}
    viewport={{ once: false}}
    transition={{ duration: 1, delay: 0.5, staggerChildren: 0.2, delayChildren: 0.5 }
   }
    
    className='bg-slate-900  rounded-3xl xs:w-[320px] w-full mt-[40px] lg:p-[5] '>
        <div className='mt-1'>
            <img src={marketingTeam} className='rounded-3xl' />
            <p className='text-white tracking-wider text-[18px] font-Poppins'>
                Daniel Smith
            </p>
            <p className='text-white tracking-wider text-[14px] font-Poppins font-semi-bold'>
                Obtaining a bachelors of Science and Marketing and over four years of experience, Daniel has been a valueble asset.
            </p>
        </div>
    </motion.div>

    <motion.div 
    style={{position: "relative"}}
    initial={{ top: "80px", opacity: 0 }}
    
    whileInView={{ top: "0px", opacity: 1 }}
    viewport={{ once: false}}
    transition={{ duration: 1, delay: 0.5, staggerChildren: 0.2, delayChildren: 0.5 }
   }
    className='bg-slate-900  rounded-3xl xs:w-[320px] w-full mt-[40px]'>
        <div className='mt-1'>
            <img src={marketingTeam} className='rounded-3xl'/>
            <p className='text-white tracking-wider text-[18px]'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam necessitatibus iusto voluptas?
            </p>
        </div>
    </motion.div>

    <motion.div 
    style={{position: "relative"}}
    initial={{ bottom: "80px", opacity: 0 }}
    
    whileInView={{ bottom: "0px", opacity: 1 }}
    viewport={{ once: false}}
    transition={{ duration: 1, delay: 0.5, staggerChildren: 0.2, delayChildren: 0.5 }
   }
    className='bg-slate-900  rounded-3xl xs:w-[320px] w-full mt-[40px]'>
        <div className='mt-1'>
            <img src={marketingTeam} className='rounded-3xl' />
            <p className='text-white tracking-wider text-[18px]'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam necessitatibus iusto voluptas?
            </p>
        </div>
    </motion.div>
    </div>
    </div>
    </div>
  )
}

export default About
