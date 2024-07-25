import React from 'react'

const MAterialityAssessment = () => {
  return (
    <div className='w-[86%] m-auto'>
      <h3 className=" text-[26px] font-bold">Materiality Assessment</h3>
      <h3 className="text-[#1f5dad] text-[36px] font-bold">
      Evaluating our priorities
      </h3>
     
      <div className='flex flex-col md:flex-row gap-8 mb-5'>
        <div className='md:w-[50%]'>
        <p className='text-[22px] text-[#3576cc] my-5'>

 We follow a materiality-driven approach, which entails identifying key concerns, engaging with stakeholders, encouraging innovation and fostering the values of transparency and accountability, among others. Integrating materiality into our decision-making processes helps us effectively navigate potential challenges, create shared value and contribute to a more sustainable future for all.
      </p>
<b className='text-[20px] text-[#3576cc]'>Following a four-pronged approach</b>
<p className='n-t-p'>Our strategy for managing crucial aspects of our business comprises four processes, ranging from identification
to disclosure.</p>
<img className='ml-[-10px] object-contain' src="./Buisness/material.png" alt="" />
        </div>
        <div className='md:w-[50%]'>
        <b className='text-[20px] text-[#3576cc]'>Material topics identified</b>
            <img src="./Buisness/risk3.webp" alt="" />
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-8'>
      <div className='md:w-[50%]'>
<img src="./Buisness/risk4.webp" alt="" />
      </div>
      <div className='md:w-[50%]'>
<img src="./Buisness/risk5.webp" alt="" />
      </div>
      </div>

    </div>
  )
}

export default MAterialityAssessment
