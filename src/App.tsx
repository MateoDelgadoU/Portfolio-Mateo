import { useEffect, useState } from 'react';

import ToggleThemeButton from './components/ToggleThemeButton';
import InfoButton from './components/InfoButton';
import MainContent from './components/MainContent';
import AboutView from './components/AboutView';

const Portfolio: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const handleInfoToggle = (isOpen: boolean) => {
    setIsInfoOpen(isOpen);
    localStorage.setItem("aboutOpen", isOpen.toString());
  };


  useEffect(() => {
    const theme = localStorage.getItem("theme")
    const aboutOpen = localStorage.getItem("aboutOpen")
    setIsDark(theme === "dark" ? true : false)
    setIsInfoOpen(aboutOpen === "true" ? true : false)
  }, [])

  return (
    <main 
      className={`h-screen w-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} overflow-hidden relative flex items-center justify-center p-3 sm:p-4 md:p-8 transition-colors duration-500`}
      role="main"
    >

      <ToggleThemeButton isDark={isDark} setIsDark={setIsDark} />
      <InfoButton isInfoOpen={isInfoOpen} setIsInfoOpen={handleInfoToggle} isDark={isDark} />

      {/* Decorative elements */}
      <div className={`absolute top-0 left-0 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-l-2 border-t-2 ${isDark ? 'border-white/20' : 'border-black/40'}`}></div>
      <div className={`absolute top-0 right-0 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-r-2 border-t-2 ${isDark ? 'border-white/20' : 'border-black/40'}`}></div>
      <div className={`absolute bottom-0 left-0 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-l-2 border-b-2 ${isDark ? 'border-white/20' : 'border-black/40'}`}></div>
      <div className={`absolute bottom-0 right-0 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-r-2 border-b-2 ${isDark ? 'border-white/20' : 'border-black/40'}`}></div>
      <div className={`absolute top-1/3 right-4 sm:right-8 md:right-10 w-12 sm:w-16 md:w-20 h-px ${isDark ? 'bg-white/30' : 'bg-black/40'}`}></div>



      {/* Main Content */}
      {isInfoOpen ? (
        <AboutView isDark={isDark} />
      ) : (
        <MainContent isDark={isDark} hoveredProject={hoveredProject} setHoveredProject={setHoveredProject} />
      )}

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
    </main >
  );
};

export default Portfolio;