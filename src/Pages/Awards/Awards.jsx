import React from 'react'
import { motion } from 'framer-motion';
const Awards = () => {
  return (
    <div className="w-[86%] m-auto max-w-[1000px] overflow-x-hidden">
      <h3 className=" text-[26px] font-bold">Awards and Accolades</h3>
      <h3 className="text-[#1f5dad] text-[36px] font-bold">
      Celebrating our wins
      </h3>
      <div>
        <motion.img initial={{x:"-200px",opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.7,ease:"easeInOut"}} src="./Awards01.png" alt="" />
        <motion.img initial={{x:"200px",opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.7,ease:"easeInOut"}} src="./Awards02.png" alt="" />
        <motion.img initial={{x:"-200px",opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.7,ease:"easeInOut"}} src="./Awards03.png" alt="" />
      </div>
    </div>
  )
}

export default Awards
