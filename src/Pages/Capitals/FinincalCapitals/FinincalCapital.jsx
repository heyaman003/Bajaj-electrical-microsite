import React from 'react'
import CapsTemplate from '../../../Components/CapsTemplate/CapsTemplate';

const FinicalCapital = () => {
    const values = [
        { val1: '₹20,969 crores', val2: 'Revenue from Operations' },
        { val1: '₹4,453 crores', val2: 'Employee wages and benefits' },
        { val1: '₹476 crores', val2: 'Dividend' },
        { val1: '₹4,230 crores', val2: 'EBITDA' },
      ];
  return (
    <>
    <div className=''>
            <CapsTemplate src={'./Stakeholder/fcii.png'} title={"Financial"} values={values} theme={"#3d85c6"} gradient={"#3d85c6"} ico={"./Stakeholder/fci.png"} />

    </div>
    <div className='financial-caps p-5 px-8'>
      <h1 className='text-white text-[46px] font-bold'>Demonstrates our efficient capital structure</h1>
     <h2 className='text-white text-[22px]'>Bajaj Electricals is dedicated to achieving sustained financial growth by employing efficient capital allocation, optimising costs and maintaining steady operating cash flow generation.</h2>
     <p className='text-[20px] text-white '>We create long-term value for our stakeholders by leveraging growth opportunities through strategic investments, while bolstering risk mitigation strategies to enhance return on capital and facilitate dividend distribution.</p>
     <div className="flex flex-col md:flex-row text-white gap-8 justify-center my-5">
      <div className='w-[50%] md:w-[20%]'>
      <b>Material topics</b>
      <hr />
      <p>Resilient business model and long-term profitability</p>
      </div>
      <div className='w-[50%] md:w-[20%]'>
      <b>UN SDG linkage</b> 
     
     
        <img className='object-contain' src="./Stakeholder/ico1.png" alt="" />

        
      </div>
     
     </div>
     <div className='w-full mb-5'>
        <img className='rounded-lg w-[80%] m-auto ' src="./Stakeholder/fc.png" alt="" />
        </div>
    </div>
    <div className='w-[86%] m-auto my-5'>
      <p className='n-t-p'>FY 2023-24 was characterised by weakening rural consumer demand. A combination of prudent fiscal practices, operational excellence, and flexible business model enabled us to deliver stable performance. This is further enabled by our solid financial position, which assists in effectively deploying capital in growth opportunities. <br />
      The cash surpluses generated are invested in income generating debt instruments including mutual funds depending on economic conditions
in line with the guidelines set out by the Management. Safety of capital is of prime importance to ensure availability of capital for operations. Further the objective of the Company’s capital 
management is to safeguard its ability to continue as going concern, maintain strong credit rating, preserve cash
and to ensure that it maintains an efficient capital structure and maximize shareholder value.
      </p>
      <p className='bl-h-xl'>Cash flow generation & deployment (INR in crores)</p>
      <img src="./Stakeholder/graph.png" alt="" />
      <br />
      <b className='n-t-p'>Outcomes for the year</b>
      <div className='w-[60%] md:w-[28%]   h-[2px] bg-black'></div>
      <div className='flex flex-col md:flex-row gap-5'>
     <div className='w-full md:w-[32%] n-t-p'>
   
      <p className='bl-h-sm'>Corporate restructuring</p>
      <ul>
        <li className='list-disc ml-5'>Demerger of EPC business into a new listed entity Bajel Projects Ltd w.e.f. 1st September’ 23</li>
        <li className='list-disc ml-5'>Merger of Nirlep Appliances Pvt Ltd into the Company w.e.f. from 31st March’24</li>
      </ul>
     </div>
     <div className='w-full md:w-[32%]'>
      <p className='bl-h-sm'>Generated cashflow in operations of INR 354 crore</p>
      <ul className='n-t-p'>
        <li className='list-disc ml-5'>Facilitated by release of working capital and operating profits</li>
        <li className='list-disc ml-5'>Strong surplus position of INR 305 crore achieved through focused efforts and actions</li>
        <li className='list-disc ml-5'>Continued capital expenditure to the tune of INR 131 crore</li>
        <li className='list-disc ml-5'>Brand investment to the tune of INR 113 crore to support business growth</li>
        <li className='list-disc ml-5'>Proposed dividend payout of INR 35 crore in line with Dividend Distribution Policy</li>
      </ul>
     </div>
     <div className='w-full md:w-[32%] n-t-p'>
      <p className='bl-h-sm'>Enhancing value</p>
      <ul>
        <li className='list-disc ml-5'>Initiatives undertaken to improve working capital cycle across the value chain (Reverse factoring, Channel financing, Cooler financing and Warranty insurance)</li>
        <li className='list-disc ml-5'>Closed legacy income tax assessments of INR 126 crore with interest realisation of INR 41 crore</li>
      </ul>
     </div>
      </div>
      <div className='n-t-p'>
        <b>Way forward</b>
        <ul>
          <li className='list-disc ml-5'>Maintaining flexible capital structure</li>
          <li className='list-disc ml-5'>Making sound investments towards the intellectual capital
          </li>
          <li className='list-disc ml-5'>Continued focus on digitisation</li>
          <li className='list-disc ml-5'>Focusing on shareholders’ wealth maximisation</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default FinicalCapital
