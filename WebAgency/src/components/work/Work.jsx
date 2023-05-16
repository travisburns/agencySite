import React from 'react'
import agencyBackground from '../../assets/herocover.png';
import { motion, useScroll } from "framer-motion"


const Work = () => {
   
    const workTitleContainer = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delay: 0.5,
            when: "beforeChildren",
           staggerChildren: 0.5
          }
        }
      }

      const item = {
        hidden: {
            x: -10,
            opacity: 0
        },

        visible: {
            x: 0,
            opacity: 1,
        }
      }
      
      
   

    return (
        <section className='sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 2xl:pb-[10rem]' >
            <p className='services_Title-Text 
        text-white 
        font-black 
        md:text-[60px] 
        sm:text-[50px] 
        xs:text-[40px] 
        text-[30px] 
        font-Poppins
        text-center
        '>Past Work</p>
        <div 
        
        className='mt-20 flex flex-wrap gap-7 relative md:left-[10rem] l-tablet:left-[2rem] lg:left-[4rem] xl:left-[0rem]'>
    
        <motion.div 
         style={{position: "relative"}}
         initial={{ bottom: "80px", opacity: 0 }}
         
         whileInView={{ bottom: "0px", opacity: 1 }}
         viewport={{ once: false}}
         transition={{ duration: 1, delay: 0.5, staggerChildren: 0.2, delayChildren: 0.5 }
        }
         className='bg-slate-950 p-5 rounded-2xl sm:w-[360px] w-full mb-5'>
            <div className='relative w-full h-[230px]'>
            <motion.img 
            style={{position: 'relative'}}
             initial={{ left: "80px", opacity: 0 }}
             whileInView={{ left: "0px", opacity: 1 }}
             viewport={{ once: false}}
             transition={{ duration: 1, delay: 1.3}}
            src={agencyBackground} className='w-full h-full object-cover rounded-2xl'
            
            />
            </div>
            <motion.div
            variants={workTitleContainer} 
            initial="hidden"
            animate="show"
            className='mt-5'>
                <motion.h3
                variants={item}
                 className='text-white font-bold text-[24px]'>Title</motion.h3>
                <p className='mt-2 text-white text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quia, minima velit repudiandae minus debitis voluptatibus suscipit excepturi quisquam rerum numquam.</p>
            </motion.div>
            <div className='mt-4 flex flex-wrap gap-2'>
                <p className='text-[14px] text-blue-500'>React</p>
                <p className='text-[14px] text-green-500'>MongoDb</p>
                <p className='text-[14px] text-pink-500'>Tailwind</p>
            </div>
        </motion.div>

        <motion.div 
         style={{position: "relative"}}
         initial={{ bottom: "80px", opacity: "0" }}
         
         whileInView={{ bottom: "0px", opacity: 1 }}
         viewport={{ once: false}}
         transition={{ duration: 1, delay: 1, staggerChildren: 0.5 }}
         
        className='bg-slate-950 p-5 rounded-2xl sm:w-[360px] w-full mb-5'>
            <div className='relative w-full h-[230px]'>
            <motion.img 
            style={{position: 'relative'}}
             initial={{ left: "80px", opacity: 0 }}
             whileInView={{ left: "0px", opacity: 1 }}
             viewport={{ once: false}}
             transition={{ duration: 1, delay: 1.3}}
            src={agencyBackground} className='w-full h-full object-cover rounded-2xl'/>
            </div>
            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>Title</h3>
                <p className='mt-2 text-white text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quia, minima velit repudiandae minus debitis voluptatibus suscipit excepturi quisquam rerum numquam.</p>
            </div>
            <div className='mt-4 flex flex-wrap gap-2'>
                <p className='text-[14px] text-blue-500'>React</p>
                <p className='text-[14px] text-green-500'>MongoDb</p>
                <p className='text-[14px] text-pink-500'>Tailwind</p>
            </div>
        </motion.div>

        <motion.div
        style={{position: "relative"}}
        initial={{ bottom: "80px", opacity: "0" }}
        
        whileInView={{ bottom: "0px", opacity: 1 }}
        viewport={{ once: false}}
        transition={{ duration: 1, delay: 1.5 }}
        
        className='bg-slate-950 p-5 rounded-2xl sm:w-[360px] w-full mb-5'>
            <div className='relative w-full h-[230px]'>
            <motion.img 
            style={{position: 'relative'}}
            initial={{ left: "80px", opacity: 0 }}
            whileInView={{ left: "0px", opacity: 1 }}
            viewport={{ once: false}}
            transition={{ duration: 1, delay: 1.3}}
            src={agencyBackground} className='w-full h-full object-cover rounded-2xl'/>
            </div>
            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>Title</h3>
                <p className='mt-2 text-white text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quia, minima velit repudiandae minus debitis voluptatibus suscipit excepturi quisquam rerum numquam.</p>
            </div>
            <div className='mt-4 flex flex-wrap gap-2'>
                <p className='text-[14px] text-blue-500'>React</p>
                <p className='text-[14px] text-green-500'>MongoDb</p>
                <p className='text-[14px] text-pink-500'>Tailwind</p>
            </div>
        </motion.div>
        </div>
        </section>
  )
}

export default Work
