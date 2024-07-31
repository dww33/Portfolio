import React, { useState } from 'react';
import Link from 'next/link';
import Language from './Language';
import { useTranslation } from 'next-i18next';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-custom2 fixed top-0 left-0 right-0 h-12 px-4 flex">
      <div className="container mx-auto flex items-center px-4 justify-between">
        <div className="navbar-brand">
          <Link href="/" className="font-bold text-custom1 text-xl">
            <p>{t('name')}</p>
          </Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden">
          {/* Here you can add an icon for the menu button */}
          Menu
        </button>

        <div className={`navbar-collapse ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="navbar-nar flex flex-col md:flex-row md:space-x-12">
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
