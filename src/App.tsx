import React, { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import CompetitiveSection from './components/sections/CompetitiveSection';
import AchievementsSection from './components/sections/AchievementsSection';
import EducationSection from './components/sections/EducationSection';
import HackathonsSection from './components/sections/HackathonsSection';
import ExtracurricularSection from './components/sections/ExtracurricularSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    document.body.classList.add('bg-black', 'text-white');
    
    const updateMousePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      
      setMousePosition({
        x: clientX + scrollX,
        y: clientY + scrollY
      });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', () => {
      const { x, y } = mousePosition;
      setMousePosition({ x, y });
    });
    
    return () => {
      document.body.classList.remove('bg-black', 'text-white');
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', () => {});
    };
  }, [mousePosition]);

  const cursorStyle = {
    background: `
      radial-gradient(
        600px circle at ${mousePosition.x}px ${mousePosition.y}px,
        rgba(99, 102, 241, 0.15),
        rgba(99, 102, 241, 0.05) 40%,
        transparent 80%
      )
    `,
    zIndex: 0
  };

  return (
    <div className="min-h-screen bg-black relative">
      <div
        className="fixed inset-0 pointer-events-none"
        style={cursorStyle}
      />
      
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <HeroSection />
          <ProjectsSection />
          <CompetitiveSection />
          <AchievementsSection />
          <EducationSection />
          <HackathonsSection />
          <ExtracurricularSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;