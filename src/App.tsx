// App.tsx

//Hooks
import { useState, useEffect } from 'react';

// Componentes
import Footer from './components/Footer';
import ProjectsButton from './components/ProjectsButton';
import Header from './components/Header';


export const Icons = {
  Sun: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="M4.93 4.93l1.41 1.41"></path>
      <path d="M17.66 17.66l1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="M4.93 19.07l1.41-1.41"></path>
      <path d="M17.66 6.34l1.41-1.41"></path>
    </svg>
  ),
  Moon: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>
  ),
  Linkedin: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  Github: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.744.082-.729.082-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.806 1.304 3.49.995.108-.775.418-1.304.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.52.128-3.18 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.399 3-.404 1.01.005 2.03.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.668 1.66.264 2.877.128 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.624-5.475 5.92-.42.36-.795 1.12-.795 2.26 0 1.63.015 2.94.015 3.34 0 .318.21.694.825.575C20.565 22.18 24 17.683 24 12.297c0-6.627-5.373-12-12-12z"></path>
    </svg>
  ),
  Mail: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  ),
};

type Theme = "light" | "dark";

export default function App() {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Leer tema guardado en localStorage al montar
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    setTheme(storedTheme ?? "dark");
  }, []);

  // Aplicar clase y guardar en localStorage cuando cambie
  useEffect(() => {
    if (!theme) return;
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (!theme) return;
    setTheme(theme === "dark" ? "light" : "dark");
  };


  if (!theme) return null; // espera a que se cargue el tema

  return (
    <div
      className={`min-h-screen text-lg font-mono flex flex-col justify-between transition-colors duration-500 animate-fadeIn
      ${theme === "dark"
          ? "bg-[#0a0a0a] text-[#e0e0e0] bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] bg-[size:10px_10px]"
          : "bg-[#ffffff] text-[#222222] bg-[radial-gradient(#0000000d_1px,transparent_1px)] bg-[size:10px_10px]"
        }`}
    >
      <Header toggleTheme={toggleTheme} theme={theme} />

      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center">
        <ProjectsButton />
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mb-6 mt-6">
          <div className="w-20 h-20 bg-black rounded-full flex-shrink-0 flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-full"></div>
          </div>
          <div className="mt-4 sm:mt-0">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">
              Mateo Miguel Delgado Ugarte
            </h1>
            <p className="text-base sm:text-xl">Software Developer</p>
          </div>

        </div>

        <p className="mb-4 leading-relaxed max-w-xl">
          Hello, I’m Mateo, a software developer from Argentina with experience building modern web applications using React and TypeScript, and strong proficiency in Python.
        </p>
        <p className="mb-4 leading-relaxed max-w-xl">
          Currently working on{" "}
          <a
            href="https://devter.dev"
            target="_blank"
            className="underline text-blue-500 dark:text-[#61dafb]"
          >
            Devter
          </a>
          , an application built with Next.js App Router as a personal project,
          designed to organize and model projects — a tool created for
          developers.
        </p>
        <p className="leading-relaxed max-w-xl">
          Feel free to connect with me through my social networks, or check out my projects on GitHub.
        </p>
      </main>

      <Footer />
    </div>
  );
}

