import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Language from './Language';
import { useTranslation } from 'next-i18next';
import { MdOutlineMenu } from "react-icons/md";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const navRef = useRef(null);  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);  
    }
  };


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className="navbar bg-custom2 fixed top-0 left-0 right-0 h-12 px-4 flex">
      <div className="container mx-auto flex items-center px-4 justify-between">
        <div className="navbar-brand">
          <Link href="/" className="font-bold text-custom1 text-xl">
            <p>{t('name')}</p>
          </Link>
        </div>

        <button onClick={toggleMenu} className="absolute top-4 right-4 cursor-pointer lg:hidden text-custom1">
          <MdOutlineMenu />
        </button>
        <div className={`nav-options text-pink-950 
        flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-y-7 lg:py-0 pt-10 pb-6 lg:pl-0 pl-8
        absolute lg:static bg-custom2 lg:z-auto z-[-1] left-0 lg:w-auto w-full 
        transition-all duration-500 ${isOpen ? 'top-6 opacity-100':'top-[-400px]'} lg:opacity-100`}>
          <ul className="navbar-nar flex flex-col md:flex-row md:space-x-12 gap-2">
            <li className="nav-item cursor-pointer">
              <Link href="/about" className="nav-link text-custom1 custom-underline">
              <p>{t('about')}</p>
              </Link>
            </li>
            <li className="nav-item cursor-pointer">
              <Link href="/project" className="nav-link text-custom1 custom-underline">
              <p>{t('project')}</p>
              </Link>
            </li>
            <li className="nav-item cursor-pointer">
              <a
                href="https://www.google.com"
                className="nav-link text-custom1 custom-underline"
              >
                <p>{t('resume')}</p>
              </a>
            </li>
            <li className="nav-item cursor-pointer">
              <Link href="/contact" className="nav-link text-custom1 custom-underline">
              <p>{t('contact')}</p>
              </Link>
            </li>
            <Language />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
