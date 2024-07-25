import React, { useRef, useState, useEffect } from "react";
import "./BrandsBusiness.css";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const BrandsBusiness = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [spanPosition, setSpanPosition] = useState({ top: 0, left: 0 });
  const [bgColor, setBgColor] = useState("");

  const colors = [
    "#208ee9",
    "#1d1d1d",
    "#dbdbdb",
    "#dbdbdb",
    "#208ee9",
    "#dbdbdb",
  ]; // Colors for each details card

  useEffect(() => {
    let ctx = gsap.context(() => {
        gsap.set(".photo:not(:first-child)", { opacity: 0, y: 50, scale: 1 });
        const animation = gsap.to(".photo:not(:first-child)", {
            opacity: 1, y: 0, duration: 0.5, stagger: 1
        });

        ScrollTrigger.create({
            trigger: ".gallery",
            start: "top top",
            end: "bottom top",
            pin: ".rightblock",
            animation: animation,
            scrub: true,
        });

        const details = gsap.utils.toArray('.details');
        details.forEach((detail, i) => {
            ScrollTrigger.create({
                trigger: detail,
                start: "top center",
                end: "bottom center",

                onEnter: () => gsap.to('.gallery', { backgroundColor: colors[i], duration: 1 }),
                onEnterBack: () => gsap.to('.gallery', { backgroundColor: colors[i], duration: 1 })

            });
        });
    });
    return () => ctx.revert();
}, []);
  

   
  

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getRandomPosition = () => {
    return `${Math.floor(Math.random() * 0)}%`;
  };

  const handleMouseEnter = (e) => {
    const parentOffset = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - parentOffset.left;
    const relY = e.clientY - parentOffset.top;
    setSpanPosition({ top: relY, left: relX });
  };

  const handleMouseOut = (e) => {
    const parentOffset = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - parentOffset.left;
    const relY = e.clientY - parentOffset.top;
    setSpanPosition({ top: relY, left: relX });
  };

  const handleAnchorClick = (e) => {
    e.preventDefault();
  };

  const container2 = useRef(null);
  // const { scrollY } = useScroll({
  //   target: container2,
  //   offset: ["start start", "end end"],
  // });
  // const scaleIts = useTransform(scrollY, [0, 400], [1, 1.1]);
  // const scaleIts2 = useTransform(scrollY, [0, 300], [1, 1]);

  return (
    <div className="relative mt-5">
      <div>
        <b>Our Businesses</b>
        <h2 className="bl-h-xl my-3 mb-1">
          Differentiating with <br /> customer-centric offerings
        </h2>
        <p>
          Bajaj Electricals’ differentiating multi- brand strategy - a first in
          the industry - is rooted in Consumer Centricity, Product Innovation,
          and Brand Reinvention. This unique approach underscores their
          commitment to meeting diverse consumer needs. By curating a diverse
          portfolio of brands under one roof, Bajaj Electricals is building its
          competitive edge and addressing varied consumer preferences
          effectively. This approach not only ensures relevance but also fosters
          a culture of continuous innovation, driving sustainable growth. As
          Bajaj Electricals continues its transformative journey, this strategic
          framework will be instrumental in solidifying its position as a leader
          in the fast-moving electrical goods industry.
        </p>
      </div>
      <div className="gallery" style={{ backgroundColor: bgColor }}>
        <div className="color-bg"></div>
        <div ref={container2} className="flex flex-col md:flex-row w-full relative">
        <div className="left">
          <div className="details">
            <div className="details-card dt1">
              <img src="/brands-n-business/bab-bri1.png" alt="" />
              <h1 className="text-[30px] font-bold">
                BAJAJ{" "}
                <span className="text-[24px] font-bold">
                  is now Built for Life
                </span>{" "}
              </h1>
              <p>
                BAJAJ, a distinguished name in the consumer appliances industry,
                has undergone a significant repositioning with its "Built For
                Life" ethos. With a storied legacy spanning decades, BAJAJ has
                garnered trust and admiration worldwide for its unwavering focus
                on quality and innovation. The "Built For Life" mantra
                encapsulates BAJAJ's dedication to engineering appliances that
                not only excel in performance but also withstand the rigours of
                everyday use, ensuring longevity and peace of mind for
                consumers. This redefined brand philosophy underscores BAJAJ's
                commitment to crafting products that endure the test of time,
                resonating deeply with consumers seeking durability and
                reliability in their appliances.
              </p>
              {/* <a className='linka' href="https://www.bajajelectricals.com/consumer-products/"><div class="btna"> Know More</div> </a> */}
              <Link
                className="btn-posnawr-bab bpb1"
                to={'/Ourbusiness/BAJAJ'}
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseOut}
              >
                Know more
                <span
                  style={{ top: spanPosition.top, left: spanPosition.left }}
                ></span>
              </Link>
            </div>
          </div>
          <div className="details">
            <div className="details-card dt2">
              <img src="/brands-n-business/bab-bri2.png" alt="" />
              <h1 className="text-[30px] font-bold">
                Nex -{" "}
                <span className="text-[24px] font-bold">
                  The performance-backed premium brand
                </span>{" "}
              </h1>

              <p>
                Nex, the latest brand from the house of Bajaj Electricals, has
                stormed into the Indian consumer market with a promise to
                redefine the way consumers interact with home appliances.
                Launched with a vision to blend cutting-edge technology and
                design to yield unmatched performance, Nex aims to elevate
                everyday living experiences for households across the nation.
              </p>
              {/* <a className='linka' href="https://nexlife.in/"><div class="btna"> Know More</div> </a> */}
              <Link
                className="btn-posnawr-bab bpb2"
                to={"/Ourbusiness/Nex"}
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseOut}
              >
                Know more
                <span
                  style={{ top: spanPosition.top, left: spanPosition.left }}
                ></span>
              </Link>
            </div>
          </div>
          <div className="details">
            <div className="details-card dt3">
              <img src="/brands-n-business/bab-bri3.png" alt="" />
              <h1 className="text-[30px] font-bold">
                Morphy Richards -
                <span className="text-[24px] font-bold">
                  The Iconic British lifestyle brand
                </span>{" "}
              </h1>
              <p>
                Morphy Richards India, an iconic British brand, has long been
                synonymous with elevating lifestyles and enhancing everyday
                experiences. With its tagline "Happiness Engineered," Morphy
                Richards embodies a commitment to not just meeting but exceeding
                consumer expectations, ensuring that every interaction with its
                products brings joy and satisfaction.
              </p>
              {/* <a className='linka lb' href="https://www.morphyrichardsindia.com/"><div class="btna bb"> Know More</div> </a> */}
              <Link
                className="btn-posnawr-bab bpb3"
                to={'/Ourbusiness/Morphy-Richards'}
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseOut}
              >
                Know more
                <span
                  style={{ top: spanPosition.top, left: spanPosition.left }}
                ></span>
              </Link>
            </div>
          </div>
          <div className="details">
            <div className="details-card dt4">
              <img src="/brands-n-business/bab-bri4.png" alt="" />
              <h1 className="text-[30px] font-bold">
                Nirlep
                <span className="text-[24px] font-bold">
                  {" "}
                  understands everyday health needs
                </span>{" "}
              </h1>
              <p>
                A pioneering name in kitchenware and cookware, Nirlep is now
                redefining cooking with its soon-to-be-launched, renewed
                proposition of "Every Day Health." Since its inception, Nirlep
                has been synonymous with longevity and culinary excellence. With
                a fresh focus on promoting healthier cooking practices, Nirlep
                aims to empower individuals to prioritise their well-being with
                the support of the right cookware.
              </p>
              {/* <a className='linka lb' href="https://www.nirlep.com/"><div class="btna bb"> Know More</div> </a> */}
              <Link
                className="btn-posnawr-bab bpb3"
                to={'/Ourbusiness/Nirlep'}
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseOut}
              >
                Know more
                <span
                  style={{ top: spanPosition.top, left: spanPosition.left }}
                ></span>
              </Link>
            </div>
          </div>
          <div className="details">
            <div className="details-card dt5">
              {/* <img src="/brands-n-business/bab-bri3.png" alt="" /> */}
              <h1 className="text-[30px] font-bold">Consumer Lighting</h1>
              <p>
                We have a diverse range of consumer lighting products which
                offers smart lighting solutions for the evolving needs consumers
                and complements modern home décors. Dive in to checkout our
                latest range of efficient, reliable and bright lighting
                solutions.
              </p>
              {/* <a className='linka' href="https://www.bajajelectricals.com/home-essentials-appliances/lighting/"><div class="btna"> Know More</div> </a> */}
              <Link
                className="btn-posnawr-bab bpb1"
                to={'/Ourbusiness/Consumer-lighting'}
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseOut}
              >
                Know more
                <span
                  style={{ top: spanPosition.top, left: spanPosition.left }}
                ></span>
              </Link>
            </div>
          </div>
          <div className="details">
            <div className="details-card dt6">
              {/* <img src="/brands-n-business/bab-bri3.png" alt="" /> */}
              <h1 className="text-[30px] font-bold">Professional Lighting</h1>
              <p>
                Our end to end offerings are designed to provide unparalleled
                quality, durability, and reliability. Whether it is for
                commercial spaces, industrial facilities, or outdoor spaces, our
                advanced lighting solutions ensure optimal illumination and
                create a sense of security. With a focus on delivering superior
                performance and energy efficiency, our professional lighting
                solutions are trusted by businesses and industries across
                diverse sectors.
              </p>
              {/* <a className='linka lb' href="https://illumination.bajajelectricals.com/"><div class="btna bb"> Know More</div> </a> */}
              <Link
                className="btn-posnawr-bab bpb3"
                to={'/Ourbusiness/Professional-lighting'}
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseOut}
              >
                Know more
                <span
                  style={{ top: spanPosition.top, left: spanPosition.left }}
                ></span>
              </Link>
            </div>
          </div>
        </div>
        <div className="rightblock w-full md:w-[50%]">
          <div className="photo">
            <div className="dynamic-color dc1">
              <img className="p-2" src="./Buisness/33.webp" alt="img-1" />
            </div>
          </div>
          <div className="photo">
            <div className="dynamic-color dc2">
              <img src="./Buisness/4.webp" alt="img-2" />
            </div>
          </div>
          <div className="photo">
            <div className="dynamic-color dc3">
              <img src="./Buisness/5.webp" alt="img-3" />
            </div>
          </div>
          <div className="photo">
            <div className="dynamic-color dc4">
              <img src="./Buisness/nirlep.webp" alt="img-3" />
            </div>
          </div>
          <div className="photo">
            <div className="dynamic-color dc5">
              <img src="./Buisness/bajaj003.png" alt="img-3" />
            </div>
          </div>
          <div className="photo">
            <div className="dynamic-color dc6">
              <img src="./Buisness/Illuminate.webp" alt="img-3" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsBusiness;
