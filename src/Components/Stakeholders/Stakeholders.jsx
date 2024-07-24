import React from 'react';
import FastMarquee from 'react-fast-marquee';
import './Stakeholders.css'; // Import your CSS for styling
import { motion } from 'framer-motion';

const Stakeholders = () => {
  const items = [
    { imageUrl: './ICons-01/Artboard 2.svg', title: 'Home Appliances' },
    { imageUrl: './ICons-01/Artboard 3.svg', title: 'Fans' },
    { imageUrl: './ICons-01/Artboard 4.svg', title: 'Lighting Solutions' },
    { imageUrl: './ICons-01/Artboard 5.svg', title: 'SEPC – Power Transmission & Distribution' },
    { imageUrl: './ICons-01/Artboard 6.svg', title: 'Automobile(2 wheelers & 3 wheelers)' },
    { imageUrl: './ICons-01/Artboard 7.svg', title: 'Insurance' },
    { imageUrl: './ICons-01/Artboard 8.svg', title: 'NBFC / Financial Services' },
    { imageUrl: './ICons-01/Artboard 9.svg', title: 'Iron and Steel' },
    { imageUrl: './ICons-01/Artboard 10.svg', title: 'Travel' },
  ];

  return (
    <motion.div
         initial={{ width: 0, opacity: 0 }}
             whileInView={{ width: "100%", opacity: 1 }}
             transition={{ duration: 1, ease: "easeInOut" ,delay:1}}
             viewport={{ once: true ,}}
     className=' m-auto my-10 bg-[#1f5dad] p-4 px-8 rounded-xl'>
    <h3 className='text-xl font-bold text-white'>Industries we serve</h3>
    <motion.div
     initial={{ x: "-10%", opacity: 0 }}
     whileInView={{ x: 0, opacity: 1 }}
     transition={{ duration: 0.6, ease: "easeInOut",delay:2 }}
     viewport={{ once: true }}
     className='flex justify-center w-[85%] m-auto'>
    <FastMarquee  className="marquee my-10" speed={40} gradient={true} loop={0}>
      {items.map((item, index) => (
        <div className="marquee-item" key={index}>
          <img src={item.imageUrl} alt={item.title} className="marquee-item__image" />
          <div className="marquee-item__title">{item.title}</div>
        </div>
      ))}

    </FastMarquee>
    </motion.div>
    </motion.div>
  );
};

export default Stakeholders;
