import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
// import { Link } from 'react-router-dom';
import './Quote.css'
import ReadMoreButton from '../ReadMore/ReadMoreButton';

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-prev`}
      style={{
        ...style,
        display: 'block',
        background: '#015eab',
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
        background: '#015eab',
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

const Quote = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className='px-4 mt-8'>
      <div className='quote-section pt-2 '>
        <div className='carousel-container w-full  mx-auto'>
          <Slider {...settings}>
            <div className='p-4'>
            <h2 className='text-5xl text-center font-extrabold py-8 text-[#353637] hero'>Chairman’s  Communique</h2>
              <div className='slide'>
                <img src="./Bod/MD1.webp" className='object-contain mx-auto' alt="Quote 1" />
              </div>
              <div className='flex justify-center mt-8 pb-4'>
                <Link to={"/Chairman-message"}><ReadMoreButton /></Link>
              </div>
            </div>
            <div className='p-4'>
            <h2 className='text-5xl text-center font-extrabold py-8 text-[#353637] hero'>Message from the MD <br /> and CEO</h2>
              <div className='slide'>
                <img src="./Bod/MD2.webp" className='object-contain mx-auto' alt="Quote 2" />
              </div>
              <div className='flex justify-center mt-8 pb-4'>
                  <Link to={"/Md-Message"}><ReadMoreButton /></Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Quote;
