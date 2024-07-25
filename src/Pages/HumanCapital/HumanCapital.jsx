import React from 'react'
import CapsTemplate from '../../Components/CapsTemplate/CapsTemplate';

function HumanCapital() {
    const values = [
        { val1: '₹20,969 crores', val2: 'Revenue from Operations' },
        { val1: '₹4,453 crores', val2: 'Employee wages and benefits' },
        { val1: '₹476 crores', val2: 'Dividend' },
        { val1: '₹4,230 crores', val2: 'EBITDA' },
      ];
  return (
    <>
    <div>
            <CapsTemplate src={'./Stakeholder/human-caps.png'} title={"Human"} values={values} theme={"#fbb87d"} gradient={"#f1b073"} ico={"./Stakeholder/HCAPSI.png"} />

    </div>
    <div className='human-caps p-5 px-8'>
      <h1 className='text-white text-[46px] font-bold'>Putting our strategy into action</h1>
     <h2 className='text-white text-[22px]'>At Bajaj Electricals, we believe our people
are the key drivers of organisation’s philosophy and growth. We consistently endeavour
to create an inspiring workplace that empowers our people to catapult our transformation journey. We strive to create a skilled and engaged workforce by providing them with meaningful opportunities and implementing progressive initiatives and policies which cater to the expectations of our diverse talent pool.</h2>
     <div className="flex flex-col md:flex-row text-white gap-8 justify-center my-5">
      <div className='w-[50%] md:w-[20%]'>
      <b>Material topics</b>
      <hr />
      <p>Employee health and safety</p>
      <p>Business ethics and anti- corruption</p>
      </div>
      <div className='w-[50%] md:w-[20%]'>
      <b>UN SDG linkage</b> 
     
     
        <img className='object-contain' src="./Stakeholder/SD5.png" alt="" />

        
      </div>
     
     </div>
     <div className='w-full mb-5'>
        <img className='rounded-lg w-[80%] m-auto ' src="./Stakeholder/HCAPS.png" alt="" />
        </div>
    </div>
    <div className='w-[84%] m-auto max-w-[1500px]'>
        <div className='my-4'>
            <div className='flex lg:flex-row flex-col'>
                <div>
                    <img src="./HC/hc-1.png" alt="" />
                </div>
                <div>
                    <img src="./HC/hc-2.png" alt="" />
                </div>
            </div>
            <div>
                <img src="./HC/hc-3.png" alt="" />
            </div>
        </div>
        <div className='flex lg:flex-row flex-col my-4'>
             <div>
                <img src="./HC/hc-4.png" alt="" />
             </div>
             <div>
                <div className='flex lg:flex-row flex-col'>
                    <div>
                        <img src="./HC/hc-5.png" alt="" />
                    </div>
                    <div>
                        <img src="./HC/hc-6.png" alt="" />
                    </div>
                </div>
                <div>
                    <img src="./HC/hc-7.png" alt="" />
                </div>
             </div>
        </div>
        <div className='flex lg:flex-row flex-col my-4'>
             <div className=''>
                  <img src="./HC/hc-9.png" alt="" />
             </div>
             <div>
                 <div>
                       <img src="./HC/hc-10.png" alt="" />
                 </div>
                 <div className='flex lg:flex-row flex-col'>
                    <div>
                        <img src="./HC/hc-11.png" alt="" />
                    </div>
                    <div>
                         <img src="./HC/hc-12.png" alt="" />
                    </div>
                 </div>
             </div>
        </div>
        <div className='flex lg:flex-row flex-col my-4'>
             <div className=''>
                  <img src="./HC/hc-13.png" alt="" />
             </div>
             <div> 
                 <div className='flex lg:flex-row flex-col'>
                    <div>
                        <img src="./HC/hc-14.png" alt="" />
                    </div>
                    <div>
                         <img src="./HC/hc-15.png" alt="" />
                    </div>
                 </div>
                 <div>
                       <img src="./HC/hc-16.png" alt="" />
                 </div>
             </div> 
        </div>
        <div className='flex lg:flex-row flex-col my-4'>
             <div>
                  <img src="./HC/hc-17.png" alt="" />
             </div>
             <div >
                  <img src="./HC/hc-18.png" alt="" />
             </div>
             <div>
                  <img src="./HC/hc-19.png" alt="" />
             </div>
             
        </div>
    </div>
    </>
  )
}

export default HumanCapital
