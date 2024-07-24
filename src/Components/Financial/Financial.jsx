import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Link } from 'react-router-dom';
import './Financial.css';
import ReadMoreButton from '../ReadMore/ReadMoreButton';
import { motion } from 'framer-motion';

// Register necessary components and plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const dataSets = [
  { label: 'Total Income(INR in crore)', data: [5030, 4646, 4861, 4934, 4728], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'Networth/Total Equity(INR in crore)', data: [1379, 1605, 1745, 1908, 1441], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'EBITDA(INR in crore)', data: [260, 374, 324, 420, 346], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'Total Comprehensive Income(INR in crore)', data: [9, 192, 143, 218, 132], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'Basic EPS(INR in crore)', data: [0.0, 16.08, 12, 19, 11], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
];

const Financial = () => {
  const renderCharts = () => {
    return dataSets.map((dataset, index) => {
      const data = {
        labels: dataset.years,
        datasets: [
          {
            label: dataset.label,
            backgroundColor: dataset.data.map((_, i) => i >= 3 ? (i === 3 ? 'rgb(58 162 74)' : 'rgb(31 93 173)') : '#e7f0e5'),
            hoverBackgroundColor: dataset.data.map(() => 'rgb(31 93 173)'),
            hoverBorderColor: 'rgb(31 93 173)',
            borderRadius: 0, // Add rounded corners to bars
            data: dataset.data,
            barThickness: 21, // Adjust bar thickness for spacing
          },
        ],
      };

      const options = {
        indexAxis: 'y', // Make the chart horizontal
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.raw;
              },
            },
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value) => value,
            color: 'black',
            font: {
              weight: 'bold',
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              display: false, // Hide the x-axis labels
            },
            grid: {
              display: false, // Remove x-axis grid lines
            },
          },
          y: {
            grid: {
              display: false, // Remove y-axis grid lines
            },
          },
        },
        layout: {
          padding: {
            top: 70,
            bottom: 70,
            right: 40,
          },
        },
        maintainAspectRatio: false,
        barPercentage: 0.8, // Increase this value to increase the gap between bars
        categoryPercentage: 0.8, // Increase this value to increase the gap between bars
      };

      return (
        <div key={index} style={{ padding: '8px', height: '380px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h4 className='text-2xl font-bold pt-4' style={{ textAlign: 'left' }}>{dataset.label.split('(INR')[0]}</h4>
          <div className='bg-gray-800 h-[1px] w-[50%]'></div>
          <p className='text-left text-sm mb-5'>(INR{dataset.label.split('(INR')[1]}</p>
          <div style={{ flexGrow: 1, width: '80%' }}>
            <Bar data={data} options={options} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className='container-margin graph mt-10'>
      <motion.h3  initial={{ x: "-10%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}className=" text-[26px] font-bold mb-4">Performance Highlights</motion.h3>
      <motion.h3
      initial={{ x: "-8%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
       className="text-[#1f5dad] text-[36px] font-bold">
        Building on Steady Progress
      </motion.h3>
      <p className="text-[#1f5dad] text-[20px] font-bold mt-1">Key Financial Metrics</p>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        style={{ width: '70%' }} // Adjust the width as needed
      >
        {renderCharts()}
      </Carousel>
      {/* <div className='mb-4'>
        <Link to={"/financial-highlights"}><ReadMoreButton /></Link>
      </div> */}
     
    </div>
  );
};

export default Financial;
