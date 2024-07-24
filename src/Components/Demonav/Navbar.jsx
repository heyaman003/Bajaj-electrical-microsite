import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';

export const Navbar = () => {
  const [showDp, setShowDp] = useState(false);

const toggleDropdown = () => {
    setShowDp(!showDp);
};

// const toggleNav = () => {
//     // Implement your navigation toggle logic here
// };
  const imageHolderRef = useRef(null);

  const handleMouseOver = (event) => {
    const value = event.target.getAttribute("data-src");
    imageHolderRef.current.src = value;
  };

  const handleMouseOut = () => {
    imageHolderRef.current.src = "/nestle-logo.png";
  };

  useEffect(() => {
    function resizeNav() {
      const navFullscreen = document.getElementById("nav-fullscreen");
      const navOverlay = document.getElementById("nav-overlay");

      // Set the nav height to fill the window
      navFullscreen.style.height = window.innerHeight + "px";

      // Set the circle radius to the length of the window diagonal
      const radius = Math.sqrt(
        Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2)
      );
      const diameter = radius * 2;
      navOverlay.style.width = diameter + "px";
      navOverlay.style.height = diameter + "px";
      navOverlay.style.marginTop = -radius + "px";
      navOverlay.style.marginLeft = -radius + "px";
    }

    // Call resizeNav initially and on window resize
    resizeNav();
    window.addEventListener("resize", resizeNav);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("resize", resizeNav);
    };
  }, []);

  // Toggle nav function
  const toggleNav = () => {
    const navToggle = document.getElementById("nav-toggle");
    const navOverlay = document.getElementById("nav-overlay");
    const navFullscreen = document.getElementById("nav-fullscreen");

    navToggle.classList.toggle("open");
    navOverlay.classList.toggle("open");
    navFullscreen.classList.toggle("open");
  };

  return (
    <>
      <div className="navbar flex">
        
                 <img className="h-full py-2"  src="/Logo/bajajLogo.png" alt="" />

       
        <div id="nav-container">
          <div id="nav-overlay"></div>
          <nav id="nav-fullscreen">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="nav-menu-wrap-1 flex gap-8"
            >
              <ul>
                <li className="heading-wrapper-navbar">Corporate Overview</li>
                <li>
                  <Link to={"/"} onClick={toggleNav}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link to={"/Chairman-message"} onClick={toggleNav}>
                  Chairman’s Communique
                  </Link>
                </li>
                
             

                <li>
                  <Link onClick={toggleNav} to={"/Md-Message"}>
                  Message from the MD and CEO
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/Awards"}>
                  Awards and Accolades
                  </Link>
                </li>
                
                
                <li>
                  <Link onClick={toggleNav} to={"/Our-business"}>
                  Our Businesses
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/Business-Model"}>
                  Business Model
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/Risk-Management"}>
                  Risk Management
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/Materiality-assessment"}>
                  Materiality Assessment
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/Esg-strategy"}>
                  ESG Strategy
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/Stakeholder"}>
                  Stakeholder Engagement
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/Finical-capital"}>
                  Financial Capital
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/Manufacture-capitals"}>
                  Manufacture capitals
                  </Link>
                  
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/Intellectual-Capital"}>
                  Intellectual Capital
                  </Link>
                  
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/Human-Capital"}>
                  Human Capital
                  </Link>
                  
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/Social-and-Relationship-Capital"}>
                  Social and Relationship Capital
                  </Link>
                  
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/Natural-Capital"}>
                  Natural Capital
                  </Link>
                  
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/Manufacture-capitals"}>
                  Corporate Information
                  </Link>
                  
                </li>
                
              </ul>
              <ul>
             
                <li className="heading-wrapper-navbar">Download Sections</li>
                <li>
                  <a
                  target="_blank"
                    href="./Pdf/Nestle PDF for Microsite_20.06.2024.pdf"
                    onClick={toggleNav}
                  >
                    Download Full Report
                  </a>
                </li>

                <li>
                  <a
                    href="./Pdf/Board’s Report.pdf"
                   
                    onClick={toggleNav}
                  >
                    Board’s Report
                  </a>
                </li>

                <li>
                  <a
                  target="_blank"
                    href="./Pdf/AUDITOR’S REPORT.pdf"
                    onClick={toggleNav}
                  >
                    Auditor’s Report
                  </a>
                </li>

                <li>
                  <a target="_blank"  onClick={toggleNav} href="./Pdf/Annual Accounts.pdf">Annual Accounts</a>
                </li>
                <li>
                  <a  target="_blank"  onClick={toggleNav} href="./Pdf/BRSR.pdf">BRSR </a> <br />
                  <a  target="_blank"  onClick={toggleNav} href="./Pdf/Nestle India Annexure.pdf">Annexure </a>
                  <li><Link target="_blank" onClick={toggleNav} to={"./Pdf/Nestle PDF Corporate Information.pdf"}>
                  Corporate Information
                  </Link></li>
                </li>
              </ul>
             
            </motion.div>
          </nav>
          <a id="nav-toggle" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
      <div className="gradient-line"></div>
    </>
  );
};
