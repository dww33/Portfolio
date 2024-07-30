// components/NavBar.js
import React from 'react';
import Language from './Language';

const NavBar = ({ scrollToSection }) => {
  return (
    <nav class="navbar bg-custom2 fixed top-0 left-0 right-0 h-12 px-4 flex  ">

      <div class="container mx-auto flex items-center px-4 justify-between">
        <div class="navbar-brand">
          <a class="font-bold text-custom1 text-xl">
            <span>Dingjiang Liang</span>
          </a>
        </div>

        <div class="navbar-collapse">
          <ul class="navbar-nar flex space-x-16">
            <li class="nav-item cursor-pointer" onClick={() => scrollToSection('home')}>
              <a class="nav-link text-custom1 custom-underline">
                <span>Home</span>
              </a>
            </li>
            <li class="nav-item cursor-pointer" onClick={() => scrollToSection('project')}>
              <a class="nav-link text-custom1 custom-underline">
                <span>Project</span>
              </a>
            </li>
            <li class="nav-item cursor-pointer" onClick={() => scrollToSection('cats')}>
              <a class="nav-link text-custom1 custom-underline">
                <span>Cats</span>
              </a>
            </li>
            <li class="nav-item cursor-pointer" onClick={() => scrollToSection('contact')}>
              <a class="nav-link text-custom1 custom-underline">
                <span>Contact</span>
              </a>
            </li>
            <li class="nav-item cursor-pointer">
              <a
                href="https://www.google.com"
                className="nav-link text-custom1 custom-underline"
              >
                <span>Resume</span>
              </a>
            </li>
          </ul>
        </div>

        < Language />
      </div>
    </nav>
  );
}

export default NavBar;
