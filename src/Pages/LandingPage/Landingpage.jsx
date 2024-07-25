import React from "react";
import Video from "../../Components/Video";
import vid from "/COVER.webm";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../../Components/Capitals/NewCardComponent";
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
import TextAnimation01 from "../../Components/AnimateText/AnimatedText01";
import { StickyScroll } from '../../Components/NewAccertinitycompo/SliderNew';
const Landingpage = () => {


  const arr=[
    {title: "BAJAJ is now Built for Life", description: "BAJAJ, a distinguished name in the consumer appliances industry, has undergone a significant repositioning with its 'Built For Life' ethos. With a storied legacy spanning decades, BAJAJ has garnered trust and admiration worldwide for its unwavering focus on quality and innovation. The 'Built For Life' mantra encapsulates BAJAJ's dedication to engineering appliances that not only excel in performance but also withstand the rigours of everyday use, ensuring longevity and peace of mind for consumers. This redefined brand philosophy underscores BAJAJ's commitment to crafting products that endure the test of time, resonating deeply with consumers seeking durability and reliability in their appliances.", content: './Buisness/33.webp',urlToGo:"/Ourbusiness/BAJAJ"}
    ,{title: "Nex - The performance-backed premium brand", description: "Nex, the latest brand from the house of Bajaj Electricals, has stormed into the Indian consumer market with a promise to redefine the way consumers interact with home appliances. Launched with a vision to blend cutting-edge technology and design to yield unmatched performance, Nex aims to elevate everyday living experiences for households across the nation.", content: './Buisness/4.webp',urlToGo:"/Ourbusiness/Nex"},
    {title: "Morphy Richards - The Iconic British lifestyle brand", description: "Morphy Richards India, an iconic British brand, has long been synonymous with elevating lifestyles and enhancing everyday experiences. With its tagline 'Happiness Engineered,' Morphy Richards embodies a commitment to not just meeting but exceeding consumer expectations, ensuring that every interaction with its products brings joy and satisfaction.", content: './Buisness/5.webp',urlToGo:"/Ourbusiness/Morphy-Richards"},
    {title: "Nirlep understands everyday health needs", description: "A pioneering name in kitchenware and cookware, Nirlep is now redefining cooking with its soon-to-be-launched, renewed proposition of 'Every Day Health.' Since its inception, Nirlep has been synonymous with longevity and culinary excellence. With a fresh focus on promoting healthier cooking practices, Nirlep aims to empower individuals to prioritise their well-being with the support of the right cookware.", content: './Buisness/nirlep.webp',urlToGo:"/Ourbusiness/Nirlep"},
    {title: "Professional lighting", description: "Embark on a journey into the realm of professional lighting with Bajaj Electricals, where a diverse array of high-performance LED luminaires, innovative lighting controls, and specialized fixtures await. Crafted to meet the exacting demands of professional environments, Bajaj Electricals' solutions ensure optimal illumination across commercial spaces, industrial facilities, and outdoor areas.", content: './Buisness/bajaj003.png',urlToGo:"/Ourbusiness/Professional-lighting"},
    {title: "Consumer lighting", description: "BAJAJ's Consumer Lighting business is dedicated to meeting the demands of residential and personal spaces, where the product portfolio effortlessly combines aesthetics with reliability. The consumers enjoy the luxury of choice, selecting from a diverse range of options to illuminate their homes with high-performance and durable lighting solutions. Whether it's energy-efficient LED bulbs, elegant decorative fixtures, or cutting-edge smart lighting systems, BAJAJ empowers consumers to curate spaces that truly embody their unique preferences and lifestyles. Scan the QR code to know more more", content: './Buisness/Illuminate.webp',urlToGo:"/Ourbusiness/Consumer-lighting"},
  ]
  
  
  
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
        >
          The Bajaj Group
        </motion.b>
        <motion.h2
          initial={{ y: "10%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="bl-h-xl my-3 mb-1"
        >
          An enduring legacy of value creation
        </motion.h2>
        <motion.p
          initial={{ x: "-1%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-[#1f5dac] text-[18px] md:text-[22px]"
        >
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
              className="bg-[#1f5dad] rounded-xl w-[70%]  m-auto flex justify-center align-middle items-center relative"
            >
              <b className="absolute top-[1.5%] text-white text-[22px]">
                <TextAnimation01 text={"Tribute to Our Founding Fathers"} />
              </b>

              <div className=" bg-[#edeff2] absolute top-[10%] h-[80%] w-[85vw]  rounded-lg overflow-auto justify-center flex flex-col">
                <motion.p
                  initial={{ x: "-1%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="text-[30px] py-3 px-3 text-center"
                >
                  Their legacy continues to inspire and guide us forward
                </motion.p>
                <div
                  
                  className="card-container flex flex-col mt-10 md:flex-row gap-5 w-[90%] m-auto"
                >
                  <motion.div
                  initial={{ scale:0.8, opacity: 0 }}
                  whileInView={{ scale:1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 1 }}
                  viewport={{ once: true }}
                   className="card md:w-[24%]">
                    <img
                      className="h-[98%]"
                      src="./Bod/001.png"
                      alt="Vision Icon"
                    />

                    <div className="card-content">
                      <p>
                        A visionary philanthropist who took an unprecedented
                        step to use business to serve the society
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                   initial={{ scale:0.8, opacity: 0 }}
                   whileInView={{ scale:1, opacity: 1 }}
                   transition={{ duration: 0.3, ease: "easeInOut", delay: 1.1 }}
                   viewport={{ once: true }}
                   className="card md:w-[24%]">
                    <img
                      className="h-[98%]"
                      src="./Bod/002.png"
                      alt="Mission Icon"
                    />

                    <div className="card-content">
                      <p>
                        The captain who steered the Company ship through the
                        tumultuous partition era, and in the post- independence
                        period, where he deftly navigated changing industrial
                        laws and legalities
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                   initial={{ scale:0.8, opacity: 0 }}
                   whileInView={{ scale:1, opacity: 1 }}
                   transition={{ duration: 0.3, ease: "easeInOut", delay: 1.3 }}
                   viewport={{ once: true }}
                 className="card md:w-[24%]">
                    <img
                      className="h-[98%]"
                      src="./Bod/003.png"
                      alt="Shared Ambition Icon"
                    />

                    <div className="card-content">
                      <p>
                        The youngest son in the Bajaj family took over as the
                        Head of the Bajaj group and complemented his brother’s
                        business acumen
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                   initial={{ scale:0.8, opacity: 0 }}
                   whileInView={{ scale:1, opacity: 1 }}
                   transition={{ duration: 0.3, ease: "easeInOut", delay: 1.4 }}
                   viewport={{ once: true }}
                   className="card md:w-[24%]">
                    <img
                      className="h-[98%]"
                      src="./Bod/004.png"
                      alt="DRIVE AHEAD BEHAVIOUR Icon"
                    />
                    <div className="card-content">
                      <p>
                        A former member of the Rajya Sabha and a Padma Bhushan
                        Awardee, he ably led the Bajaj Group as the Chairman for
                        over four decades
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div></div>
              </div>
            </motion.div>
          </div>
        </div>

        <div>
          {/* <Stakeholders /> */}
          <AboutUs />
          <Quote />
          <BoardOfDirectorNew />
          <Financial />
          {/* <BrandsBusiness /> */}
          <b>Our Businesses</b>
      <h2 className="bl-h-xl my-3 mb-1">
        Differentiating with <br /> customer-centric offerings
      </h2>
          <StickyScroll content={arr}/>
          <Capslider />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
