
import React from 'react'

const Footer = () => {
  return (
    <footer className=" shadow m-4 mx-0 w-full   footer-main-nav bg-[#0b56a6] text-white mb-0">
    <div className="w-[80%] mx-auto max-w-screen-xl p-4  md:flex md:items-center md:justify-between">
      <span className="span-footer"> <a href="https://www.bajajelectricals.com/" className="hover:underline">Copyright © Bajaj Electricals Ltd 2024
      </a>
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium ul-class-main-footer  sm:mt-0 w-[70%] gap-5">
        <li>
            <a target='_blank' href="https://www.bajajelectricals.com/partners/" className="hover:underline me-4 md:me-6">Patner</a>
        </li>
        <li>
            <a target='_blank' href="https://www.bajajelectricals.com/privacy-policy/" className="hover:underline me-4 md:me-6">Privacy policy</a>
        </li>
        <li>
            <a target='_blank' href="https://www.bajajelectricals.com/terms-and-conditions/" className="hover:underline me-4 md:me-6">Terms and Conditions</a>
        </li>
        <li>
            <a target='_blank' href="https://www.bajajelectricals.com/disclaimer/" className="hover:underline">Disclaimer</a>
        </li>
        <li>
            <a target='_blank' href="https://www.bajajelectricals.com/testimonials/" className="hover:underline">Testimonials</a>
            <a target='_blank' href="https://www.bajajelectricals.com/pdf/payment_qr_code.pdf" className="hover:underline">Mode of Payments</a>
        </li>
        
    </ul>
    </div>
</footer>
  )
}

export default Footer




