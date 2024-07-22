import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './CapsTemplate.css';

const CapsTemplate = ({ src, title, values, theme, gradient, ico }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Split values into groups of 4
    const valueChunks = [];
    for (let i = 0; i < values.length; i += 4) {
        valueChunks.push(values.slice(i, i + 4));
    }

    if (inView) {
        controls.start('visible');
    }

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y:" 50px" },
        visible: { opacity: 1, y: 0 },
        transition:{ease:"easeInOut",duration:0.5}
    };

    return (
        <motion.div 
            className='caps-template'
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <motion.div
            initial={{scale:0.8,opacity:0}} whileInView={{scale:1,opacity:1}}
            transition={{duration:0.5,ease:"easeInOut"}}
            viewport={{once:true}}
                className='caps-template-bg'
                style={{
                    backgroundImage: `url(${src})`,
                }}
            />
            <div className='caps-marginal'>
                <motion.div 
                    className='caps-main-title'
                    variants={itemVariants}
                >
                    <motion.h1  initial={{x:"-100px",opacity:0}} whileInView={{x:0,opacity:1}}
            transition={{duration:0.5,ease:"easeInOut",delay:0.4}}
            viewport={{once:true}}>{title}</motion.h1>
                    <motion.h2 initial={{x:"-100px",opacity:0}} whileInView={{x:0,opacity:1}}
            transition={{duration:0.5,ease:"easeInOut",delay:0.5}}
            viewport={{once:true}} className='capitalh2'>Capital</motion.h2>
                    <motion.div initial={{x:"-100px",opacity:0}} whileInView={{x:0,opacity:1}}
            transition={{duration:0.5,ease:"easeInOut",delay:0.6}}
            viewport={{once:true}} className='cap-icon'>
                        <img src={ico} alt="" />
                    </motion.div>
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
