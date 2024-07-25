import React from 'react'
import CapsTemplate from '../../Components/CapsTemplate/CapsTemplate';

function SRcapital() {
  return (
    <>
    <div>
            <CapsTemplate src={'./Stakeholder/SRIM.png'} title={"Social and Relationship"}  theme={"#fbb87d"} gradient={"#c97b75"} ico={"./Stakeholder/HCAPSI.png"} />

    </div>
    <div className='srs-caps p-5 px-8'>
      <h1 className='text-white text-[46px] font-bold'>Strengthens the foundation of our stakeholder trust</h1>
     <h2 className='text-white text-[22px]'>At Bajaj Electricals, we
are evolving in step with changing times and to better attune ourselves with the evolving aspirations and concerns of our customers, suppliers and communities. With consistent support and mutual trust from various stakeholders, we are creating a culture centred around focused business objectives. Through this approach, we aim to optimise value creation
for all our internal and external stakeholders, thus continuing our journey as a responsible corporate entity.</h2>
     <div className="flex flex-col md:flex-row text-white gap-8 justify-center my-5">
      <div className='w-[50%] md:w-[20%]'>
      <b>Material topics</b>
      <hr />
      <p>Supply chain management</p>
      <p>Quality service and delivery</p>
      </div>
      <div className='w-[50%] md:w-[20%]'>
      <b>UN SDG linkage</b> 
     
     
        <img className='object-contain ' src="./Stakeholder/sdg6.png" alt="" />

        
      </div>
     
     </div>
     <div className='w-full mb-5'>
        <img className='rounded-lg w-[80%] m-auto ' src="./Stakeholder/DRG.png" alt="" />
        </div>
    </div>
    <div className='w-[86%] m-auto max-w-[1500px]'>
       <div className='flex lg:flex-row flex-col'>
          <div>
              <img src="./Src/src-1.png" alt="" />
          </div>
          <div className='gap-4'>
              <div className='w-[95%]'>
                   <img src="./Src/src-2.png" alt="" />
              </div>
              <div>
                   <img src="./Src/src-3.png" alt="" />
              </div>
          </div>
       </div>
       <div className='flex lg:flex-row flex-col '>
            <div>
                 <div className='flex lg:flex-row flex-col'>
                    <div>
                        <img src="./Src/src-4.png" alt="" />
                    </div>
                    <div>
                        <img src="./Src/src-5.png" alt="" />
                    </div>
                 </div>
                 <div>
                    <img src="./Src/src-6.png" alt="" />
                 </div>
            </div>
            <div>
                <img src="./Src/src-7.png" alt="" />
            </div>
       </div>
       <div className='flex lg:flex-row flex-col'>
           <div>
                <img src="./Src/src-8.png" alt="" />
           </div>
           <div>
               <div >
                   <img src="./Src/src-9.png" alt="" />
               </div>
               <div >
                    <img src="./Src/src-10.png" alt="" />
               </div>
           </div>
       </div>
       <div>
            <div className='flex lg:flex-row flex-col'>
                <div>
                    <img src="./Src/src-11.png" alt="" />
                </div>
                <div>
                    <img src="./Src/src-12.png" alt="" />
                </div>
            </div>
            <div>
                 <img src="./Src/src-13.png" alt="" />
            </div>
       </div>
       <div>
             <div>
                <img src="./Src/src-14.png" alt="" />
             </div>
             <div className='flex lg:flex-row flex-col'>
                <div>
                    <img src="./Src/src-15.png" alt="" />
                </div>
                <div>
                    <img src="./Src/src-16.png" alt="" />
                </div>
             </div>
       </div>
    </div>

    </>
  )
}

export default SRcapital
