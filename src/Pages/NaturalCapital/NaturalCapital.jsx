import React from 'react'
import CapsTemplate from '../../Components/CapsTemplate/CapsTemplate';

function NaturalCapital() {
  return (
    <>
     <div>
            <CapsTemplate src={'./Stakeholder/IMG.png'} title={"Natural "}  theme={"#fbb87d"} gradient={"#86be88"} ico={"./Stakeholder/NATURAL.png"} />

    </div>
    <div className='natural-caps p-5 px-8'>
      <h1 className='text-white text-[46px] font-bold'>For a sustainable future for all</h1>
     <h2 className='text-white text-[22px]'>
     Our manufacturing process is dependent
on various natural resources and also has
its own impact on the environment. Therefore, we are continuously balancing sustainable practices and resource efficiency to preserve precious resources and minimise our ecological footprint. We are harnessing cutting-edge technologies and refining resource allocation strategies to streamline waste, water and energy management processes
</h2>
     <div className="flex flex-col md:flex-row text-white gap-8 justify-center my-5">
      <div className='w-[50%] md:w-[20%]'>
      <b>Material topics</b>
      <hr />
      <p>Energy management</p>
      <p>Water management</p>
      <p>Less than 1% waste sent to landfill</p>
      </div>
      <div className='w-[50%] md:w-[20%]'>
      <b>UN SDG linkage</b> 
     
     
        <img className='object-contain ' src="./Stakeholder/SFGDNATURE.png" alt="" />

        
      </div>
     
     </div>
     <div className='w-full mb-5'>
        <img className='rounded-lg w-[80%] m-auto ' src="./Stakeholder/NATUREGRPAH.png" alt="" />
        </div>
    </div>
    <div className='w-[86%] m-auto max-w-[1500px]'>
       <div className='my-8'>
            <div className='flex lg:flex-row flex-col'>
                    <div>
                        <img src="./NC/nc-1.png" alt="" />
                    </div>
                    <div>
                        <img src="./NC/nc-2.png" alt="" />
                    </div>
                    <div>
                        <img src="./NC/nc-3.png" alt="" />
                    </div>
            </div>
            <div>
                    <img src="./NC/nc-4.png" alt="" />
            </div>
       </div>
       <div className='flex lg:flex-row flex-col my-8'>
           <div>
               <img src="./NC/nc-5.png" alt="" />
           </div>
           <div>
               <div className='flex lg:flex-row flex-col'>
                   <div>
                       <img src="./NC/nc-6.png" alt="" />
                   </div>
                   <div>
                        <img src="./NC/nc-7.png" alt="" />
                   </div>
               </div>
               <div>
                   <img src="./NC/nc-8.png" alt="" />
               </div>
               
           </div>
       </div>
       <div className='flex lg:flex-row flex-col my-8'>
            <div>
                <img src="./NC/nc-9.png" alt="" />
            </div>
            <div>
                  
                  <div>
                      <img src="./NC/nc-10.png" alt="" />
                  </div>
                  <div className='flex lg:flex-row flex-col'>
                     <div>
                         <img src="./NC/nc-11.png" alt="" />
                     </div>
                     <div>
                         <img src="./NC/nc-12.png" alt="" />
                     </div>
                  </div>
            </div>
       </div>
    </div>
    </>
  )
}

export default NaturalCapital
