import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BoardOfDirectorNew = () => {
  const bodArray = [
    ["Shekhar Bajaj", "Chairman", "./Bod/BODPIC/Artboard 15@4x.webp"],
    ["Anuj Poddar", "Managing Director & CEO", "./Bod/BODPIC/Artboard 16@4x.webp"],
    ["Madhur Bajaj", "Non-Executive Director", "./Bod/BODPIC/Artboard 17@4x.webp"],
    ["Rajiv Bajaj", "Non-Executive Director", "./Bod/BODPIC/Artboard 18@4x.webp"],
    ["Pooja Bajaj", "Executive Director", "./Bod/BODPIC/Artboard 19@4x.webp"],
    ["Shailesh Haribhakti", "Independent Director", "./Bod/BODPIC/Artboard 20@4x.webp"],
    ["Vikram Hosangady", "Independent Director", "./Bod/BODPIC/Artboard 21@4x.webp"],
    ["Saurabh Kumar", "Independent Director", "./Bod/BODPIC/Artboard 22@4x.webp"],
    ["Swati Salgaocar", "Independent Director", "./Bod/BODPIC/Artboard 23@4x.webp"],
    ["Sudarshan Sampathkumar", "Independent Director", "./Bod/BODPIC/Artboard 24@4x.webp"],
  ];

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: window.innerWidth>=900? 0.5:0,
  });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
          duration:0.5,
          ease:"easeInOut"
        },
      }));
    }
  }, [controls, inView]);

  return (
    <div className='bg-[#edeff2] p-5'>
      <motion.b initial={{ x: "-10%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}>Board of Directors</motion.b>
        <motion.h2
        initial={{ y: "10%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
         className="bl-h-xl my-3 mb-1">
        Steering with visionary <br /> foresight
        </motion.h2>
    <div ref={ref} className='flex flex-wrap m-auto w-[100%] gap-5 justify-center'>
      {bodArray.map((data, key) => (
        <motion.div
          key={key}
          custom={key}
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[15%] h-[370px] border border-gray-200 shadow border-blue-300 ml-4 rounded-lg"
        >
          <div className='h-[200px] w-auto m-auto bg-[#1f1b5b] overflow-hidden rounded-md rounded-b-none'>
            <img
              className="rounded-t-lg h-[200px] m-auto object-contain scale-125"
              src={data[2]}
              alt={data[0]}
            />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-xl  font-bold bod-name text-center">{data[0]}</h5>
            <p className="mb-2 bod-Desg text-center">{data[1]}</p>
          </div>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default BoardOfDirectorNew;
