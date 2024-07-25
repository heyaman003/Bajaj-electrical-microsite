import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CapSlider.css';
import { Link } from 'react-router-dom';
// import { a } from 'react-router-dom';

import { motion } from 'framer-motion';

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-prev`}
      style={{
        ...style,
        display: 'block',
        background: '#58595b',
        position:"absolute",
        left:"-5%",
        borderRadius: '50%',
        width: '40px', // Adjust width as needed
        height: '40px', // Adjust height as needed
      }}
      onClick={onClick}
    >
      Prev
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-next`}
      style={{
        ...style,
        display: 'block',
        background: '#58595b',
        borderRadius: '50%',
        width: '40px', // Adjust width as needed
        height: '40px', // Adjust height as needed
      }}
      onClick={onClick}
    >
      Next
    </button>
  );
};

const Capslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 992, // Medium devices (tablets, 768px and up)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576, // Small devices (landscape phones, 576px and up)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <motion.div initial={{ x:"30%", opacity: 0 }}
    whileInView={{x:0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    viewport={{ once: true }}  className=" my-10 w-[93%] m-auto" >
        <h2 className="bl-h-xl my-3 mb-1">
        Our Capitals
        </h2>
      <div className="row">
        <Slider {...settings}>
          <div className="col-lg-4">
            <Link to={'/Finical-capital'} className="url-box ">
              <figure className='newsCard news-Slide-up fin-up'>
                <img className='object-contain' src="./CAp-images/FCAPS.png"  alt="Financial Capital"/>
                <div className='newsCaption px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title smh text-white m-0'>Financial Capital</h4>
                    {/* <i className="fas fa-arrow-alt-circle-right"></i> */}
                    <div className='i-wrap'>
                        <img className='i' src="./cta.svg" alt="" />
                    </div>
                  </div>
                  {/* <div className='newsCaption-content d-flex'>
                    <p className="col-10 py-3 px-0">Funds available to 
                    Tata Communications which are...</p>
                  </div> */}
                </div>
                <span className="overlay"></span>
              </figure>
           </Link>
          </div>
          <div className="col-lg-4">
            <Link to={'/Human-Capital'} className="url-box">
              <figure className='newsCard news-Slide-up mfd-up special-card'>
                <img src="./CAp-images/HCAPS.png" alt="Manufactured Capital"/>
                <div className='newsCaption px-4 '>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title text-white  smh m-0'>Human Capital</h4>
                    {/* <i className="fas fa-arrow-alt-circle-right"></i> */}
                    <div className='i-wrap'>
                        <img className='i' src="./cta.svg" alt="" />
                    </div>
                  </div>
                </div>
                <span className="overlay"></span>
              </figure>
           </Link>
          </div>
          <div className="col-lg-4">
            <Link to={'/Manufacture-capitals'} className="url-box">
              <figure className='newsCard news-Slide-up nat-up'>
                <img src="./CAp-images/MCAPS.png"  alt="Intellectual Capital"/>
                <div className='newsCaption px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title text-white smh m-0'>Manufactured Capital</h4>
                    {/* <i className="fas fa-arrow-alt-circle-right"></i> */}
                    <div className='i-wrap'>
                        <img className='i' src="./cta.svg" alt="" />
                    </div>
                  </div>
                  {/* <div className='newsCaption-content d-flex'>
                    <p className="col-10 py-3 px-0">Earth’s resources...</p>
                  </div> */}
                </div>
                <span className="overlay"></span>
              </figure>
           </Link>
          </div>
          <div className="col-lg-4">
            <Link to={'/Social-and-Relationship-Capital'} className="url-box">
              <figure className='newsCard news-Slide-up sr-up special-card'>
                <img src="./CAp-images/SRCAPS.png" alt="Social and Relationship Capital"/>
                <div className='newsCaption  px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title text-white smh m-0'>Social and Relationship<br />Capital</h4>
                    {/* <i className="fas fa-arrow-alt-circle-right special-icon"></i> */}
                    <div className='i-wrap'>
                        <img className='i' src="./cta.svg" alt="" />
                    </div>
                  </div>
                </div>
                <span className="overlay"></span>
              </figure>
           </Link>
          </div>
          <div className="col-lg-4">
            <Link to={'/Intellectual-Capital'} className="url-box">
              <figure className='newsCard news-Slide-up hum-up'>
                <img src="./CAp-images/ICAPS.png" alt="Human Capital"/>
                <div className='newsCaption px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title smh text-white m-0'>Intellectual Capital</h4>
                    {/* <i className="fas fa-arrow-alt-circle-right"></i> */}
                    <div className='i-wrap'>
                        <img className='i' src="./cta.svg" alt="" />
                    </div>
                  </div>
                </div>
                <span className="overlay"></span>
              </figure>
           </Link>
          </div>
          <div className="col-lg-4">
            <Link to={'/Natural-Capital'} className="url-box">
              <figure className='newsCard news-Slide-up hum1-up special-card'>
                <img src="./CAp-images/NCAPS.png" alt="Social and Relationship Capital"/>
                <div className='newsCaption  px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title text-white smh m-0'>Natural Capital</h4>
                    {/* <i className="fas fa-arrow-alt-circle-right special-icon"></i> */}
                    <div className='i-wrap'>
                        <img className='i' src="./cta.svg" alt="" />
                    </div>
                  </div>
                 
                </div>
                <span className="overlay"></span>
              </figure>
           </Link>
          </div>
         
          {/* Add more cards as needed */}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Capslider;
