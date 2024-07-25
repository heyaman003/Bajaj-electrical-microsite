import React from 'react'

const RiskManagement = () => {
  return (
    <div className='w-[86%] m-auto'>
      <h3 className=" text-[26px] font-bold">Business Model</h3>
      
      <div className='flex flex-col lg:flex-row gap-8'>
        <div className='lg:w-[50%]'>
        <h3 className="text-[#1f5dad] text-[36px] font-bold">
        Blueprint for our long-term success
      </h3>
      <p className='text-[20px] text-[#3576cc]'>
      At Bajaj Electricals, we remain proactive in identifying and mitigating potential risks. Our dedicated risk management team consistently tracks market trends, regulatory changes and internal processes to ensure that we are well-prepared for any unforeseen circumstances. Moreover, we ensure the proper implementation of our robust risk assessment frameworks and contingency plans, which enable us to overcome challenges and safeguard the interests of our stakeholders.
      </p>
        <img src="./RiskManagment/RISKMANAGMENT.png" alt="" />
        <h3 className='text-[24px] text-[#3576cc] font-[700]'>How we approach risk mitigation</h3>

        <img src="./RiskManagment/Risk003.png" alt="" />
        </div>
       
        <div className='lg:w-[50%]'>
      <div>
        <img src="./RiskManagment/risk.webp" alt="" />
      </div>
        </div>
      </div>
      
    </div>
  )
}

export default RiskManagement
