import React from "react";
import Video from "../../Components/Video";
import vid from "/COVER.webm";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from '../../Components/Capitals/NewCardComponent';
import Stakeholder from "../Stakeholders/Stakeholder";
import Stakeholders from "../../Components/Stakeholders/Stakeholders";
import AboutUs from "./Compo/Aboutus";
import Quote from "../../Components/Quote/Quote";
import BoardOfDirectorNew from "../../Components/Boardofdirector/BoardOfDirectorNew";
import BusinessModel from "../BuisnessModel/BuisnessModel";
import BrandsBusiness from "../../Components/Brands-and-Businesses/BrandsBusiness";
import Capslider from "../../Components/CapSlider/CapSlider";
import Financial from "../../Components/Financial/Financial";
import TextAnimation from "../../Components/AnimateText/AnimatedText";
import TextAnimation01 from '../../Components/AnimateText/AnimatedText01';
const Landingpage = () => {
   
  return (
    <div className="landing-page-wrapper">
      <div className="overflow-hidden w-full">
        <Video src={vid} />
      </div>
      
      <div className="w-[86%] m-auto n-t-p">
        <motion.b 
        initial={{ y: "-10%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
        >The Bajaj Group</motion.b>
        <motion.h2
        initial={{ y: "10%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
         className="bl-h-xl my-3 mb-1">
          An enduring legacy of value creation
        </motion.h2>
        <motion.p
        initial={{ x: "-1%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
         className="text-[#1f5dac] text-[18px] md:text-[22px]">
          Over ninety years ago, in 1926, Shri Jamnalal Bajaj founded the Group
          on the core principle of prioritising the common good above individual
          profit. Throughout its history, the Bajaj Group has consistently met
          the expectations of its customers, supporters, employees, communities,
          and all stakeholders, while remaining faithful to the vision and
          principles of its founder.
        </motion.p>

        <div className="w-[86%] m-auto mt-10">
          <div className="w-auto">
            <motion.div 
             initial={{ height: 0, opacity: 0 }}
             whileInView={{ height: "80vh", opacity: 1 }}
             transition={{ duration: 1, ease: "easeInOut" }}
             viewport={{ once: true }}
             className="bg-[#1f5dad] rounded-xl w-[70%]  m-auto flex justify-center align-middle items-center relative">
              <b className="absolute top-[1.5%] text-white text-[22px]">
               <TextAnimation01 text={'Tribute to Our Founding Fathers'}/>  
              </b>

              <div className=" bg-[#edeff2] absolute top-[10%] h-[80%] w-[85vw]  rounded-lg overflow-auto justify-center flex flex-col">
                <motion.p
                initial={{ x: "-1%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true }}
                 className="text-[30px] py-3 px-3 text-center">
                  Their legacy continues to inspire and guide us forward
                </motion.p>
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" ,delay:1}}
                  viewport={{ once: true }}
                  className="card-container flex flex-col mt-10 md:flex-row gap-5"
                >
                  <div className="card md:w-[24%]">
                    <img className="h-[98%]" src="./Bod/001.png" alt="Vision Icon" />
                   
                    <div className="card-content">
                      <p>
                      A visionary philanthropist who took an unprecedented step to use business to serve the society
                      </p>
                    </div>
                  </div>
                  <div className="card md:w-[24%]">
                    <img className="h-[98%]" src="./Bod/002.png" alt="Mission Icon" />
                   
                    <div className="card-content">
                      <p>
                      The captain who steered the Company ship through the tumultuous partition era, and in the post- independence period, where he deftly navigated changing industrial laws and legalities
                      </p>
                    </div>
                  </div>
                  <div className="card md:w-[24%]">
                    <img
                    className="h-[98%]"
                      src="./Bod/003.png"
                      alt="Shared Ambition Icon"
                    />
                   
                    <div className="card-content">
                      <p>
                      The youngest son in the Bajaj family took over as the Head of the Bajaj group and complemented his brother’s business acumen
                      </p>
                    </div>
                  </div>
                  <div className="card md:w-[24%]">
                    <img
className="h-[98%]"
                      src="./Bod/004.png"
                      alt="DRIVE AHEAD BEHAVIOUR Icon"
                    />
                    <div className="card-content">
                      <p>
                      A former member of the Rajya Sabha and
                      a Padma Bhushan Awardee, he ably led the Bajaj Group as the Chairman for over four decades
                      </p>
                    </div>
                  </div>
                </motion.div>
                <div></div>
              </div>
            </motion.div>
          </div>
        </div>

        <div>
            <Stakeholders/>
            <AboutUs/>
            <Quote/>
            <BoardOfDirectorNew/>
            <Financial/>
            <BrandsBusiness/>
            <Capslider/>
        </div>

      </div>
    </div>
  );
};

export default Landingpage;
