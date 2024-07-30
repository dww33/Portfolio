// pages/index.js
import React, { useRef } from 'react';
import NavBar from '../components/NavBar';
import HomeSection from './home';
import ProjectSection from './project'; 
import CatsSection from './cat'; 
import ContactSection from './contact';

const HomePage = () => {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const catsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'project':
        projectRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'cats':
        catsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <NavBar scrollToSection={scrollToSection} />
      <HomeSection ref={homeRef} />
      <ProjectSection ref={projectRef} />
      <CatsSection ref={catsRef} />
      <ContactSection ref={contactRef} />
    </div>
  );
}

export default HomePage;
