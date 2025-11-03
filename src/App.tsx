import React, { useEffect, useState } from 'react';

import ToggleThemeButton from './components/ToggleThemeButton';
import MainContent from './components/MainContent';

const Portfolio: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(false);


  useEffect(() => {
    const theme = localStorage.getItem("theme")
    setIsDark(theme === "dark" ? true : false)
  }, [])

  return (
    <div className={`h-screen w-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} overflow-hidden relative flex items-center justify-center p-4 md:p-8 transition-colors duration-500`}>

      <ToggleThemeButton isDark={isDark} setIsDark={setIsDark} />

      {/* Decorative elements */}
      <div className={`absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 ${isDark ? 'border-white/20' : 'border-black/20'}`}></div>
      <div className={`absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 ${isDark ? 'border-white/20' : 'border-black/20'}`}></div>
      <div className={`absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 ${isDark ? 'border-white/20' : 'border-black/20'}`}></div>
      <div className={`absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 ${isDark ? 'border-white/20' : 'border-black/20'}`}></div>
      <div className={`absolute top-1/3 right-10 w-20 h-px ${isDark ? 'bg-white/30' : 'bg-black/30'}`}></div>
      <div className={`absolute bottom-1/3 left-10 w-24 h-px ${isDark ? 'bg-white/30' : 'bg-black/30'}`}></div>
      <div className={`absolute top-2/3 left-1/4 w-16 h-px ${isDark ? 'bg-white/30' : 'bg-black/30'} rotate-45`}></div>

      {/* Main Content */}
      <MainContent isDark={isDark} hoveredProject={hoveredProject} setHoveredProject={setHoveredProject} />

      {/* Footer indicator */}
      <footer
        className={`absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs whitespace-nowrap text-center ${isDark ? 'text-white/40' : 'text-black/60'
          } px-2`}
      >
        © 2025 – Mateo Miguel Delgado Ugarte
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div >
  );
};

export default Portfolio;