import React from 'react';
import { motion } from 'framer-motion';
import './CapsTemplate.css';

const CapsTemplate = ({ src, title, values, theme, gradient, ico }) => {
    return (
        <motion.div 
            className='caps-template h-screen'
            // ref={ref}
            // initial="hidden"
            // animate={controls}
            // variants={containerVariants}
        >
            <motion.div
            initial={{scale:0.9,opacity:0 ,borderRadius:"10%"}} whileInView={{scale:1,opacity:1,borderRadius:0}}
            transition={{duration:0.5,ease:"easeInOut",delay:0.3}}
            viewport={{once:true}}
                className='caps-template-bg'
                style={{
                    backgroundImage: `url(${src})`,
                }}
            />
            <div className='caps-marginal'>
                <motion.div 
                    className='caps-main-title'
                    // variants={itemVariants}
                >
                    <motion.h1 className='flex'  initial={{x:"-100px",opacity:0}} whileInView={{x:0,opacity:1}}
            transition={{duration:0.5,ease:"easeInOut",delay:0.4}}
            viewport={{once:true}}>{title} <span className='pl-4'> Capital</span>  <img className='ml-5' style={{width:"90px"}} src={ico} alt="" /></motion.h1>
                    {/* <motion.h2  initial={{x:"-100px",opacity:0}} whileInView={{x:0,opacity:1}}
            transition={{duration:0.5,ease:"easeInOut",delay:0.5}}
            viewport={{once:true}} className='capitalh2 mt-5 md:w-[50%] '>Demonstrates our efficient capital structure</motion.h2> */}
                 
                </motion.div>
            </div>
            <div className='cap-values-overlay' style={{
                backgroundImage: `linear-gradient(to right, transparent, ${gradient})`
            }}>
            </div>
        </motion.div>
    );
};

export default CapsTemplate;
