import React,{useEffect} from "react";

const Ourbuisness = () => {
  useEffect(() => {
    // Dynamically add the Instagram script
    const script = document.createElement('script');
    script.async = true;
    script.src = '//www.instagram.com/embed.js';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="w-[86%] m-auto mt-[20px]">
      <h3 className="text-[#3269d6] text-[26px] font-bold">Our Businesses</h3>
      <h3 className="text-[#2e83b4] text-[36px] font-bold">
        Differentiating with customer-centric offerings
      </h3>
      <b className="text-[26px] my-5 mb-2 ">Consumer products</b>
      <p className="n-t-p mb-5">
        Bajaj Electricals’ differentiating multi- brand strategy - a first in
        the industry - is rooted in Consumer Centricity, Product Innovation, and
        Brand Reinvention. This unique approach underscores their commitment to
        meeting diverse consumer needs. By curating a diverse portfolio of
        brands under one roof, Bajaj Electricals is building its competitive
        edge and addressing varied consumer preferences effectively. This
        approach not only ensures relevance but also fosters a culture of
        continuous innovation, driving sustainable growth. As Bajaj Electricals
        continues its transformative journey, this strategic framework will be
        instrumental in solidifying its position as a leader in the fast-moving
        electrical goods industry.
      </p>
      <div>
        <img src="/Buisness/homei.jpg" alt="" />
      </div>
      <div className="my-5">
        <p className="text-[14px] font-[600] text-blue-900">
          Inspired by the consumer’s spirit to be unstoppable
        </p>
        <p className="text-[24px] my-4 mb-1">
          <span className="text-[26px] font-[700]">BAJAJ</span> is now Built for
          Life{" "}
        </p>
        <p className="n-t-p mb-4">
          BAJAJ, a distinguished name in the consumer appliances industry, has
          undergone a significant repositioning with its "Built For Life" ethos.
          With a storied legacy spanning decades, BAJAJ has garnered trust and
          admiration worldwide for its unwavering focus on quality and
          innovation. The "Built For Life" mantra encapsulates BAJAJ's
          dedication to engineering appliances that not only excel in
          performance but also withstand the rigours of everyday use, ensuring
          longevity and peace of mind for consumers. This redefined brand
          philosophy underscores BAJAJ's commitment to crafting products that
          endure the test of time, resonating deeply with consumers seeking
          durability and reliability in their appliances. <br />
          BAJAJ's extensive range of consumer appliances, from kitchen
          essentials like mixer grinders and microwave ovens to home comfort
          solutions such as fans and air coolers, embodies the "Built For Life"
          philosophy. Each product is meticulously designed and rigorously
          tested to meet the highest standards of durability, functionality, and
          energy efficiency, aligning seamlessly with the evolving needs and
          aspirations of modern households. <br />
          Beyond product excellence, BAJAJ's repositioning emphasises a holistic
          approach to customer satisfaction, encompassing a robust after-sales
          service network and a steadfast commitment to sustainability. By
          prioritising durability, reliability, and longevity, BAJAJ strives to
          foster enduring relationships with consumers, positioning itself as a
          trusted companion in their journey through life's everyday moments.
          <br />
          In essence, BAJAJ's "Built For Life" ethos represents a renewed
          promise to consumers—a promise of resilience, quality, and longevity
          that transcends mere functionality, embodying the brand's enduring
          legacy and vision for the future of consumer appliances. Scan the QR
          code to know more
        </p>
        <div className="flex w-full justify-center gap-10">
          <div className="flex flex-col gap-8 md:w-[45%]">
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube.com/embed/cDhNdmoUrZA?si=qQ8jTCabnfC3Az14"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube.com/embed/Lz-wVwgcUXg?si=rXZSomMqHdPc95GK"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube.com/embed/tlYNVMmj59w?si=LWUI5iniqTYyLe8a"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube.com/embed/rTVMiAnfW_E?si=S5Md9TwoS2PUA9S8"
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
              src="/Buisness/33.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="my-5">
        <p className="text-[14px] font-[600] text-blue-900">
          Revolutionising Home Appliances in India
        </p>
        <p className="text-[24px] my-4 mb-1">
          <span className="text-[26px] font-[700]">Nex -</span> The
          performance-backed premium brand{" "}
        </p>
        <p className="n-t-p mb-4">
          Nex, the latest brand from the house of Bajaj Electricals, has stormed
          into the Indian consumer market with a promise to redefine the way
          consumers interact with home appliances. Launched with a vision to
          blend cutting-edge technology and design to yield unmatched
          performance, Nex aims to elevate everyday living experiences for
          households across the nation. What sets Nex apart is its relentless
          pursuit of excellence in both form and function. From sleek,
          contemporary designs that seamlessly integrate into any living space
          to intuitive features that simplify daily tasks, Nex fans are crafted
          to enhance efficiency and elevate lifestyles. The precision of angles
          and design of the blades, lead to a higher air thrust enabling the
          brand to deliver a superior experience at every touchpoint. <br />
          Moreover, Nex doesn't just stop at providing exceptional products—it
          strives to build lasting relationships with its customers. Through a
          robust customer support network and a commitment to constant
          innovation, Nex ensures that consumers not only enjoy the benefits of
          their fans today but also stay ahead of the curve in the ever-evolving
          landscape of home technology.
          <br />
          In a rapidly advancing digital era, Nex emerges as a beacon of
          performance on the back of technology, poised to become the go-to
          choice for discerning consumers seeking the best in home appliances.
          With Nex, the future of home living in India has never looked
          brighter.
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
              src="/Buisness/4.webp"
              alt=""
            />
          </div>
        </div>
      </div>
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
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/CwX2R0hK4bP/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: 0,
                width: '99.375%',
                WebkitCalc: '100% - 2px',
                calc: '100% - 2px',
              }}
            >
              <div style={{ padding: '16px' }}>
                <a
                  href="https://www.instagram.com/reel/CwX2R0hK4bP/?utm_source=ig_embed&amp;utm_campaign=loading"
                  style={{
                    background: '#FFFFFF',
                    lineHeight: 0,
                    padding: '0 0',
                    textAlign: 'center',
                    textDecoration: 'none',
                    width: '100%',
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '50%',
                        flexGrow: 0,
                        height: '40px',
                        marginRight: '14px',
                        width: '40px',
                      }}
                    ></div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        justifyContent: 'center',
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          flexGrow: 0,
                          height: '14px',
                          marginBottom: '6px',
                          width: '100px',
                        }}
                      ></div>
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          flexGrow: 0,
                          height: '14px',
                          width: '60px',
                        }}
                      ></div>
                    </div>
                  </div>
                  <div style={{ padding: '19% 0' }}></div>
                  <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                    <svg
                      width="50px"
                      height="50px"
                      viewBox="0 0 60 60"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                          <g>
                            <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.197 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.056,25.479 533.003,25.448 541,25.448 C548.997,25.448 549.944,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.197 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.703 566.106,25.176 C564.579,23.649 562.905,22.623 560.933,21.857 C559.025,21.115 556.845,20.608 553.652,20.462 C550.435,20.313 549.148,20.257 541,20.257 C532.853,20.257 531.565,20.313 528.348,20.462 C525.155,20.608 522.975,21.115 521.067,21.857 C519.095,22.623 517.421,23.649 515.894,25.176 C514.367,26.703 513.34,28.377 512.575,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.847 510.979,42.134 510.979,50.001 C510.979,57.867 511.035,59.153 511.181,62.369 C511.326,65.562 511.834,67.742 512.575,69.651 C513.34,71.624 514.367,73.296 515.894,74.824 C517.421,76.351 519.095,77.377 521.067,78.143 C522.975,78.885 525.155,79.392 528.348,79.538 C531.565,79.687 532.853,79.743 541,79.743 C549.148,79.743 550.435,79.687 553.652,79.538 C556.845,79.392 559.025,78.885 560.933,78.143 C562.905,77.377 564.579,76.351 566.106,74.824 C567.633,73.296 568.659,71.624 569.425,69.651 C570.167,67.742 570.674,65.562 570.82,62.369 C570.966,59.153 571.022,57.867 571.022,50.001 C571.022,42.134 570.966,40.847 570.82,37.631">
                            </path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div style={{ paddingTop: '8px' }}>
                    <div
                      style={{
                        color: '#3897f0',
                        fontFamily: 'Arial,sans-serif',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: '550',
                        lineHeight: '18px',
                      }}
                    >
                      View this post on Instagram
                    </div>
                  </div>
                  <div style={{ padding: '12.5% 0' }}></div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginBottom: '14px',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '50%',
                          height: '12.5px',
                          width: '12.5px',
                          transform: 'translateX(0px) translateY(0px)',
                        }}
                      ></div>
                    </div>
                    <div style={{ marginLeft: '8px' }}>
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '50%',
                          height: '12.5px',
                          width: '12.5px',
                          transform: 'translateX(0px) translateY(0px)',
                        }}
                      ></div>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '50%',
                          height: '12.5px',
                          width: '12.5px',
                          transform: 'translateX(0px) translateY(0px)',
                        }}
                      ></div>
                    </div>
                  </div>
                  <div style={{ height: '14px' }}>
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '50%',
                        height: '14px',
                        width: '100%',
                        transform: 'translateX(0px) translateY(0px)',
                      }}
                    ></div>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '50%',
                        height: '14px',
                        width: '100%',
                        transform: 'translateX(0px) translateY(0px)',
                      }}
                    ></div>
                  </div>
                </a>
              </div>
            </blockquote>
          </div>
          <div className="w-[55%]">
            <img
              className="w-full object-contain"
              src="/Buisness/5.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="my-5">
        <p className="text-[14px] font-[600] text-blue-400">
          Redefining healthy cooking
        </p>
        <p className="text-[24px] my-2 mb-1">
          <span className="text-[26px] font-[700]"> Nirlep </span> understands
          everyday health needs{" "}
        </p>
        <p className="n-t-p mb-4">
          A pioneering name in kitchenware and cookware, Nirlep is now
          redefining cooking with its soon-to-be-launched, renewed proposition
          of "Every Day Health." Since its inception, Nirlep has been synonymous
          with longevity and culinary excellence. With a fresh focus on
          promoting healthier cooking practices, Nirlep aims to empower
          individuals to prioritise their well-being with the support of the
          right cookware. Nirlep's commitment to Every Day Health is reflected
          in its range of products designed to facilitate nutritious cooking
          habits. From non-stick cookware engineered to require minimal oil for
          cooking to pressure cookers that retain the nutritional value of
          ingredients, every item is crafted with the health-conscious consumer
          in mind. <br />
          The brand's dedication to promoting health extends beyond its products
          to encompass educational initiatives, cooking tips, and recipes aimed
          at inspiring individuals to make informed choices for their dietary
          well-being.
          <br />
          With Nirlep, embracing a healthier lifestyle is not a compromise; it's
          a delicious journey filled with flavour, variety, and vitality. Join
          Nirlep in its mission to make Every Day Health a flavourful and
          fulfilling reality for every kitchen.
        </p>
        <div className="flex w-full justify-center gap-10">
          <div className="flex flex-col gap-8 md:w-[45%]">
          <iframe width="560" height="400" src="https://www.youtube.com/embed/3KPgsgh0exY?si=BG4omqJgWNaZTnM6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="w-[55%]">
            <img
              className="w-full object-contain"
              src="/Buisness/nirlep.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#1b539f] rounded-lg p-5 text-white mb-5">
        <p>
          {" "}
          <b className="text-[22px]">Lighting solutions</b>
        </p>{" "}
        <br />
        <p className="n-t-p text-white">
          The Lighting Solutions business of Bajaj Electricals Limited is a
          shining example of innovation and dependability in the illumination
          industry. The Company has unified its efforts to deliver cutting-edge
          lighting solutions for both consumers and professional customer
          segments alike. The division embodies a steadfast commitment to
          quality, sustainability, and technological advancement. Underpinning
          the success is a dual focus on meeting consumer needs with stylish and
          energy-efficient lighting options, while also catering to the demands
          of professional sectors with bespoke lighting solutions for diverse
          applications.
          <br />
          The extensive range of lighting solutions boasts sophisticated
          designs, unparalleled quality, optimal performance, and remarkable
          durability. Whether for residential, commercial, or industrial
          applications, the lighting portfolio is meticulously crafted to
          elevate the ambience in various settings. <br />
          Experience the brilliance of Bajaj Electricals Lighting Solutions,
          where illumination meets ingenuity.
        </p>
      </div>
    
      <div className="flex w-full justify-center gap-10 mt-8 mb-5">
        <div className="flex flex-col gap-8 md:w-[45%]">
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
      <img className="object-contain w-[80%]" src="./Buisness/youtube.png" alt="" />
        </div>
        <div className="w-[55%]  bg-blue-50 py-10">
          <img
            className="w-[90%] m-auto object-contain"
            src="/Buisness/bajaj003.png"
            alt=""
          />
        </div>
      </div>
      

      <div className="flex w-full justify-center gap-10 mt-8">
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
    </div>
  );
};

export default Ourbuisness;
