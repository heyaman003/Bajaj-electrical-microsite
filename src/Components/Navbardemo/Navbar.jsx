import React, { useState, useEffect, useRef } from 'react';
import './Navbar.scss';
import {useNavigate,useLocation} from 'react-router-dom';

const Navbar = () => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlaysRef = useRef(null);
  const bodyRef = useRef(document.body);
  const menuBtnRef = useRef(null);
  const menuItemsRef = useRef(null);
  const expandBtnRefs = useRef([]);

  useEffect(() => {
    const body = bodyRef.current;
    const overlays = overlaysRef.current;
    const menuBtn = menuBtnRef.current;
    const menuItems = menuItemsRef.current;

    const liElems = menuItems.querySelectorAll('.menu-items li');
    liElems.forEach((elem) => {
      const childrenElems = elem.querySelectorAll('.dropdown-menu');
      if (childrenElems.length > 0) {
        elem.firstElementChild.classList.add('expand-btn');
        elem.classList.add('dropdown');
      }
    });

    function toggle() {
      body.classList.toggle('overflow');
      setIsOverlayActive(!isOverlayActive);
      setIsMenuOpen(!isMenuOpen);
    }

    const handleMenuClick = (e) => {
      e.stopPropagation();
      toggle();
    };

    const handleEscapeKey = (event) => {
      const key = event.key;
      if (key === 'Escape' && isMenuOpen) {
        toggle();
      }
    };

    const handleDocumentClick = (e) => {
      let target = e.target,
        its_menu = target === menuItems || menuItems.contains(target),
        its_hamburger = target === menuBtn,
        menu_is_active = isMenuOpen;
      if (!its_menu && !its_hamburger && menu_is_active) {
        toggle();
      }
    };

    const expandBtn = menuItems.querySelectorAll('.expand-btn');
    expandBtnRefs.current = Array.from(expandBtn);

    const handleExpandBtnClick = (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        e.currentTarget.classList.toggle('open');
        const submenu = e.currentTarget.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
    };

    expandBtn.forEach((btn) => {
      btn.addEventListener('click', handleExpandBtnClick);
    });

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        if (isMenuOpen) {
          toggle();
        }
        expandBtnRefs.current.forEach((btn) => {
          btn.classList.remove('open');
          const submenu = btn.nextElementSibling;
          submenu.style.display = ''; // Reset display style
        });
      }
    };

    menuBtn.addEventListener('click', handleMenuClick);
    window.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('resize', handleResize);

    return () => {
      menuBtn.removeEventListener('click', handleMenuClick);
      window.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('resize', handleResize);
      expandBtn.forEach((btn) => {
        btn.removeEventListener('click', handleExpandBtnClick);
      });
    };
  }, [isMenuOpen, isOverlayActive]);

  const navigate = useNavigate();

  const handleClick = async (event, id) => {
      event.preventDefault(); // Prevent default a behavior
      const targetElement = document.querySelector(`#${id}`);
      if (targetElement) {
        // Calculate the offset based on the current scroll position
        const offset = targetElement.getBoundingClientRect().top - 100;
  
        // Scroll to the element with an offset
        window.scrollBy({
          top: offset,
          behavior: "smooth",
        });
  
        // Update URL
        navigate(`${window.location.pathname}#${id}`);
      }
    }
  const location = useLocation();
  useEffect(() => {
    const scrollToTarget = () => {
      if (location.hash) {
       // console.log("here it is ", location.hash);
        const targetElement = document.querySelector(location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    // Call scrollToTarget when the location changes
    scrollToTarget();
  }, [location]);
  return (
    <>
      <header className="navbar fixed top-[0%] w-full bg-[rgb(237 28 37)]">
        <a href="#" className="logo"><img className='h-[60px]' src="./Logo/bajajLogo.png" alt="bajaj logo" /></a>
        <div ref={menuBtnRef} className="menu-btn">
          <div className="menu-btn__lines"></div>
        </div>
        <ul ref={menuItemsRef} className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <li><a onClick={()=>setIsMenuOpen(false)} to={'/'} className="menu-item">Home</a></li>
          <li>
            <a href="#" className="menu-item">Who we are</a>
            <ul className="dropdown-menu">
              <li><a onClick={()=>setIsMenuOpen(false)} target='_blank' to={'./Pdf/About-us.pdf'} className="menu-item">About us</a></li>
              <li><a onClick={()=>setIsMenuOpen(false)} to={'/Board-of-directors'} className="menu-item">Board of Directors</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="menu-item">Corporate Overview</a>
            <ul className="dropdown-menu">
              <li><a onClick={()=>setIsMenuOpen(false)} target='_blank' to={'./Pdf/About-us.pdf'} className="menu-item">Chairman’s Communique</a></li>
              <li><a onClick={()=>setIsMenuOpen(false)} to={'/Board-of-directors'} className="menu-item">Message from the MD and CEO</a></li>
              <li><a onClick={()=>setIsMenuOpen(false)} to={'/Board-of-directors'} className="menu-item">Performance Highlights</a></li>
              <li><a onClick={()=>setIsMenuOpen(false)} to={'/Board-of-directors'} className="menu-item">Awards and Accolades</a></li>
              <li><a onClick={()=>setIsMenuOpen(false)} to={'/Board-of-directors'} className="menu-item">Board of Directors</a></li>
              <li><a onClick={()=>setIsMenuOpen(false)} to={'/Board-of-directors'} className="menu-item">Our Businesses</a></li>
              <li><a onClick={()=>setIsMenuOpen(false)} to={'/Board-of-directors'} className="menu-item">Business Model</a></li>
              <li><a onClick={()=>setIsMenuOpen(false)} to={'/Board-of-directors'} className="menu-item">Risk Management</a></li>
              <li><a onClick={()=>setIsMenuOpen(false)} to={'/Board-of-directors'} className="menu-item">ESG Strategy</a></li>
              <li><a onClick={()=>setIsMenuOpen(false)} to={'/Board-of-directors'} className="menu-item">Stakeholder Engagement</a></li>
              <li><a onClick={()=>setIsMenuOpen(false)} to={'/Board-of-directors'} className="menu-item">Financial Capital</a></li>
              <li><a onClick={()=>setIsMenuOpen(false)} to={'/Board-of-directors'} className="menu-item">Manufactured Capital</a></li>
              <li><a onClick={()=>setIsMenuOpen(false)} to={'/Board-of-directors'} className="menu-item">Intellectual Capital</a></li>
              <li><a onClick={()=>setIsMenuOpen(false)} to={'/Board-of-directors'} className="menu-item">Human Capital</a></li>
              <li><a onClick={()=>setIsMenuOpen(false)} to={'/Board-of-directors'} className="menu-item">Social and Relationship Capital</a></li>
              <li><a onClick={()=>setIsMenuOpen(false)} to={'/Board-of-directors'} className="menu-item">Natural Capital</a></li>
              <li><a onClick={()=>setIsMenuOpen(false)} to={'/Board-of-directors'} className="menu-item">Corporate Information</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="menu-item">Download Section</a>
            <ul className="dropdown-menu">
              <li><a onClick={()=>setIsMenuOpen(false)} target='_blank' to={'./Pdf/About-us.pdf'} className="menu-item">Statutory Reports </a></li>
              <li><a onClick={()=>setIsMenuOpen(false)} to={'/Board-of-directors'} className="menu-item">Financial Statements</a></li>
              </ul>
          </li>
        </ul>
      </header>
      {/* <div ref={overlaysRef} className={`overlay ${isOverlayActive ? 'overlay--active' : ''}`}></div>
      <section className="hero"></section> */}
    </>
  );
};

export default Navbar;
