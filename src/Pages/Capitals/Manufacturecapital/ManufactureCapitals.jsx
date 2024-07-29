import React from 'react'
import CapsTemplate from '../../../Components/CapsTemplate/CapsTemplate';

const ManufactureCapitals = () => {
    const values = [
        { val1: '₹20,969 crores', val2: 'Revenue from Operations' },
        { val1: '₹4,453 crores', val2: 'Employee wages and benefits' },
        { val1: '₹476 crores', val2: 'Dividend' },
        { val1: '₹4,230 crores', val2: 'EBITDA' },
      ];
  return (
    <>
    <div className=''>
            <CapsTemplate src={'./Stakeholder/mci.png'} title={"Manufactured"} values={values} theme={"#b0a1ce"} gradient={"#b0a1ce"} ico={"./Stakeholder/ico2.png"} />

    </div>
    <div className='materiality-caps p-5 px-8'>
      <h1 className='text-white text-[46px] font-bold'>Delivering futuristic, sustainable products</h1>
     <h2 className='text-white text-[22px]'>With consistent focus
on delivering cutting- edge products that
fulfil the promise of aesthetics, functionality and durability, we continue to enhance our manufacturing capabilities. Moreover, our emphasis on manufactured capital enables us to expand capacity, ensure optimum production of premium products and uphold sustainable manufacturing practices.</h2>
     <div className="flex flex-col md:flex-row text-white gap-8 justify-center my-5">
      <div className='w-[50%] md:w-[20%]'>
      <b>Material topics</b>
      <hr />
      <p>Quality and service delivery</p>
      </div>
      <div className='w-[50%] md:w-[20%]'>
      <b>UN SDG linkage</b> 
     
     
        <img className='object-contain' src="./Stakeholder/SD5.png" alt="" />

        
      </div>
     
     </div>
     <div className='w-full mb-5'>
        <img className='rounded-lg w-[80%] m-auto ' src="./Stakeholder/mc.png" alt="" />
        </div>
    </div>
    <div className='w-[90%] m-auto'>
        <div className='w-[86%] m-auto my-5 n-t-p'>
            <b className='text-[#1f5dad]'>Our manufacturing facilities</b>
            <p className='n-t-p'>We have advanced manufacturing facilities in Chakan, Nashik and Aurangabad. Reiterating our commitment to quality and excellence, we have developed state-of-the-art manufacturing infrastructure to produce innovative and premium products.
    With a consistent focus on improving operational efficiency, we continue
    to upgrade the existing machinery
    and adopt technologically advanced processes. It not only helps us to adhere to rigorous quality parameters but also ensures optimum resource utilisation.
    </p>
        <div className='flex justify-between mt-8'>
      <div className='md:w-[30%]'>
        <img className='md:w-[80%] ' src="./Stakeholder/map.png" alt="" />
        <img src="./Stakeholder/bajaj005.png" alt="" />
      </div>
      <div className='md:w-[70%]'>
        <img className=' w-full md:w-[90%]  object-contain' src="./Stakeholder/bajaj0012.png" alt="" />
      </div>
        </div>
        
        </div>
        <div className='flex lg:flex-row flex-col w-[90%] m-auto pt-16'>
              <div className=''>
                  <img src="./MC/manc-1.png" alt="" />
              </div>
              <div>
                  <div>
                      <img src="./MC/manc-2.png" alt="" />
                  </div>
                  <div>
                      <img src="./MC/manc-3.png" alt="" />
                  </div>
              </div>
        </div>
        <div className='flex lg:flex-row flex-col w-[90%] m-auto pt-16'>
             <div>
                 <img src="./MC/manc-4.png" alt="" />
             </div>
             <div >
                  <div className='flex lg:flex-row flex-col'>
                      <div>
                           <img src="./MC/manc-6.png" alt="" />
                      </div>
                      <div>
                           <img src="./MC/manc-7.png" alt="" />
                      </div>
                  </div>
                  <div className=''>
                       <img src="./MC/manc-8.png" alt="" />
                  </div>
             </div>
        </div>
        <div className='w-[90%] m-auto my-8'>
            <div>
                <img src="./MC/manc-9.png" alt="" />
            </div>
            <div className='flex lg:flex-row flex-col'>
                <div>
                     <img src="./MC/manc-10.png" alt="" />
                </div>
                <div>
                     <img src="./MC/manc-11.png" alt="" />
                </div>
                <div>
                      <img src="./MC/manc-12.png" alt="" />
                </div>
            </div>
        </div>
        <div className='w-[90%] m-auto flex lg:flex-row flex-col my-8'>
             <div>
                  <img src="./MC/manc-13.png" alt="" />
             </div>
             <div>
                 <div className='flex lg:flex-row flex-col'>
                     <div>
                         <img src="./MC/manc-14.png" alt="" />
                     </div>
                     <div>
                          <img src="./MC/manc-15.png" alt="" />
                     </div>
                 </div>
                 <div>
                       <img src="./MC/manc-16.png" alt="" />
                 </div>
             </div>
        </div>
        <div className='w-[90%] m-auto flex lg:flex-row flex-col my-8'>
            <div>
                <img src="./MC/manc-17.png" alt="" />
            </div>
            <div>
              <img src="./MC/manc-18.png" alt="" />
            </div>
            <div>
                <img src="./MC/manc-19.png" alt="" />
            </div>
        </div>
        <div className='w-[90%] m-auto flex lg:flex-row flex-col my-8'>
            <div>
                <img src="./MC/manc-20.png" alt="" />
            </div>
            <div>
              <img src="./MC/manc-21.png" alt="" />
            </div>
            <div>
                <img src="./MC/manc-22.png" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default ManufactureCapitals
