// components/NavBar.js
import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="navbar bg-custom2 fixed top-0 left-0 right-0 h-12 px-4 flex">
      <div className="container mx-auto flex items-center px-4 justify-between">
        <div className="navbar-brand">
          <Link href="/" className="font-bold text-custom1 text-xl">
            Dingjiang Liang
          </Link>
        </div>

        <div className="navbar-collapse">
          <ul className="navbar-nar flex space-x-12">
            <li className="nav-item cursor-pointer">
              <Link href="/about" className="nav-link text-custom1 custom-underline">
                About
              </Link>
            </li>
            <li className="nav-item cursor-pointer">
              <Link href="/projects" className="nav-link text-custom1 custom-underline">
                Projects
              </Link>
            </li>
            <li className="nav-item cursor-pointer">
              <a
                href="https://www.google.com"
                className="nav-link text-custom1 custom-underline"
              >
                Resume
              </a>
            </li>
            <li className="nav-item cursor-pointer">
              <Link href="/contact" className="nav-link text-custom1 custom-underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
