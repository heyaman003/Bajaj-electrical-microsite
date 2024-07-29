import React from 'react'

const ConsumerLightining = () => {
  return (
    <div className="flex justify-center gap-10  w-[86%] m-auto mt-8">
     <div className="flex flex-col gap-8 md:w-[45%]">
     <b className="text-[22px] text-blue-400">Consumer lighting</b>
     <p className="n-t-p">
    BAJAJ's Consumer Lighting business is dedicated to meeting the demands
    of residential and personal spaces, where the product portfolio
    effortlessly combines aesthetics with reliability. The consumers enjoy
    the luxury of choice, selecting from a diverse range of options to
    illuminate their homes with high-performance and durable lighting
    solutions. Whether it's energy-efficient LED bulbs, elegant decorative
    fixtures, or cutting-edge smart lighting systems, BAJAJ empowers
    consumers to curate spaces that truly embody their unique preferences
    and lifestyles.
     </p>
      <img className="w-[80%] object-contain" src="./Buisness/bulb.png" alt="" />
     </div>
     <div className="w-[55%]  bg-blue-50 py-10">
      <img
        className="w-[90%] m-auto object-contain"
        src="/Buisness/Illuminate.webp"
        alt=""
      />
     </div>
  </div>
  )
}

export default ConsumerLightining
