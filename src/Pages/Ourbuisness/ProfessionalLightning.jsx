import React from 'react'

const ProfessionalLightning = () => {
  return (
    <div className="w-[86%] m-auto">
      <b className="text-[22px] text-blue-400">Professional lighting</b>
      <p className="n-t-p">
        Embark on a journey into the realm of professional lighting with Bajaj
        Electricals, where a diverse array of high-performance LED luminaires,
        innovative lighting controls, and specialized fixtures await. Crafted to
        meet the exacting demands of professional environments, Bajaj
        Electricals' solutions ensure optimal illumination across commercial
        spaces, industrial facilities, and outdoor areas. With a reputation
        built on trust and reliability, Bajaj Electricals is the preferred
        choice of clients from various sectors. Their products consistently
        deliver on the promise of quality, efficiency, and dependability,
        illuminating spaces with brilliance and precision. Explore the world of
        professional lighting excellence with Bajaj Electricals, where each
        light source illuminates a path of innovation and reliability.{" "}
      </p>
      <div className="flex w-full justify-center gap-10 mt-8 mb-5">
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
            src="./Buisness/bajaj003.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default ProfessionalLightning
