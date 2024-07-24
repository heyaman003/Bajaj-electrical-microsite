import React from 'react'

const MorphyRichards = () => {
  return (
    <div className="w-[86%] m-auto">
      <div className="my-5">
        <p className="text-[14px] font-[600] text-blue-400">
          Where happiness is engineered
        </p>
        <p className="text-[24px] my-2 mb-1">
          <span className="text-[26px] font-[700]">Morphy Richards -</span> The
          Iconic British lifestyle brand{" "}
        </p>
        <p className="n-t-p mb-4">
          Morphy Richards India, an iconic British brand, has long been
          synonymous with elevating lifestyles and enhancing everyday
          experiences. With its tagline "Happiness Engineered," Morphy Richards
          embodies a commitment to not just meeting but exceeding consumer
          expectations, ensuring that every interaction with its products brings
          joy and satisfaction. <br />
          At the heart of Morphy Richards' philosophy lies a dedication to
          crafting appliances that go beyond mere functionality. Each product is
          meticulously designed to add a touch of elegance and convenience to
          the lives of consumers, transforming ordinary moments into
          extraordinary ones. Whether it's savoring the perfect cup of coffee
          brewed by one of their sleek coffee makers or effortlessly preparing
          delicious meals with their innovative kitchen appliances, Morphy
          Richards ensures that every experience is infused with happiness and
          delight. <br />
          What sets Morphy Richards apart is its deep understanding of the
          Indian consumer psyche. The brand recognises the diverse needs and
          vibrant lifestyles of Indian households and tailors its products
          accordingly. Moreover, Morphy Richards' commitment to quality,
          innovation, and style strikes a chord with the discerning Indian
          consumer. With Morphy Richards, happiness isn't just a byproduct –
          it's engineered into every product, making it a brand that truly
          resonates with the Indian consumer.
        </p>
        <div className="flex w-full justify-center gap-10">
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
          <div className="w-[55%]">
            <img
              className="w-full object-contain"
              src="./Buisness/5.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MorphyRichards
