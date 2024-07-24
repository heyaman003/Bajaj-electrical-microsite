import React from 'react'
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className=" m-auto mt-[4%] n-t-p">
        <motion.b  initial={{ x: "-10%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
        >About Bajaj Electricals</motion.b>
        <motion.h2
        initial={{ y: "-10%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
         className="bl-h-xl my-3 mb-1">
        Making this a <br /> #DecadeOfBajajElectricals
        </motion.h2>
        <motion.p initial={{ x: "-6%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }} className="text-[#1f5dac] text-[18px] md:text-[22px]">
        Bajaj Electricals, a pioneer in the Indian Fast Moving Electrical Goods and Lighting Solutions industries, continues its transformation journey, focusing
        on consumer-centricity, product innovation, and brand reinvention. We have emphasised our commitment to enhancing consumer experiences through a deep understanding of their needs and preferences. This approach drives the development of innovative products tailored to meet evolving market demands.
        </motion.p>
       <div className='flex relative mt-8'>
        <motion.img
        initial={{ x: "-20%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut",delay:0.5 }}
        viewport={{ once: true }}
         className='img-z' src="./Bod/111111.png" alt="" />
        <motion.img
        initial={{ x: "20%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut",delay:0.7 }}
        viewport={{ once: true }}
         className='absolute left-[0%] w-full' src="./Bod/1111w11.png" alt="" />
       </div>
    </div>
  )
}

export default AboutUs
