import React from 'react'

const ConsumerLightining = () => {
  return (
    <div className="w-[86%] m-auto">
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
      <div className="flex w-full justify-center gap-10 mt-8">
        <div className="flex flex-col gap-8 md:w-[45%]">
          <iframe
            className="w-full"
            height="315"
            src="https://www.youtube.com/embed/Eo8l51FQU7w?si=3pgiljMBiTylla8w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            className="w-full"
            height="315"
            src="https://www.youtube.com/embed/N-ZWeXJ063w?si=fgIjxrrXgQS8v0s4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            className="w-full"
            height="315"
            src="https://www.youtube.com/embed/Ubht9WFv1eM?si=bd5r-C0Gu29kHRdW"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-[55%]  bg-blue-50 py-10">
          <img
            className="w-[90%] m-auto object-contain"
            src="/Buisness/Illuminate.webp"
            alt=""
          />
        </div>
      </div> 
    </div>
  )
}

export default ConsumerLightining
