import React from "react";

const Stakeholder = () => {
  return (
    <div className="w-[86%] m-auto">
      <h3 className=" text-[26px] font-bold">Stakeholder Engagement</h3>
      <h3 className="text-[#1f5dad] text-[36px] font-bold">
        Building collaborative partnerships
      </h3>
      <p className="text-[22px] text-[#3576cc] my-5">
        We consider our stakeholders, essential partners in our mission to
        create enduring value. This conviction drives us to ensure consistent
        and effective communication across various platforms and understand the
        evolving stakeholder requirements. We also solicit their feedback on our
        performance and offerings to enhance our operational efficiency. Our
        business and ESG strategies are tailored to address the most pressing
        concerns of our stakeholders, which can have significant implications
        for both them and our business.
      </p>
      <div className="flex flex-col md:flex-row gap-8 ">
  <div className="md:w-[30%]">

      <img className="object-contain w-[80%]" src="./Buisness/i1.webp" alt="" />
      <img className="object-contain" src="./Buisness/i4.webp" alt="" />
  </div>
  <div className="md:w-[70%]">
    <img src="./Buisness/i2.webp" alt="" />
    <img src="./Buisness/i3.webp" alt="" />
  </div>
      </div>
      
    </div>
  );
};

export default Stakeholder;
