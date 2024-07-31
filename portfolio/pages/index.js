// pages/index.js
import React, { useRef } from 'react';
import NavBar from '../components/NavBar';
import HomeSection from './home';
import ProjectSection from './project'; 
import CatsSection from './about'; 
import ContactSection from './contact';

const HomePage = () => {




  return (
    <div>
      <HomeSection/>
    </div>
  );
}

export default HomePage;
