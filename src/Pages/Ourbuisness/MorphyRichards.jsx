import React, { useEffect } from 'react';

const MorphyRichards = () => {
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
    </div>
  );
};

export default MorphyRichards;
