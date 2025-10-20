import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Moon, Sun, ExternalLink, Code, Database, Globe, ChevronDown, Sparkles, Zap, Target, User, CheckSquare, Briefcase } from 'lucide-react';

const App = () => {
  // Inicializar desde localStorage o usar preferencia del sistema
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return saved === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Guardar en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());

    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      document.body.style.backgroundColor = '#050505';
    } else {
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#f5f5f5';
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  const projects = [
    {
      title: "My Portfolio",
      description: "A personal portfolio website built with React and TailwindCSS to showcase my projects, skills, and experience with a clean and responsive design.",
      tech: ["React", "TailwindCSS", "Typescript"],
      repoLink: "https://github.com/MateoDelgadoU/Portfolio-Mateo",
      icon: User
    },
    {
      title: "Devter",
      description: "A productivity app for developers to organize and manage their personal projects. Built with Next.js, MongoDB, and TailwindCSS, it offers a modern UI and smooth user experience. https://devter.dev",
      tech: ["Next.js", "MongoDB", "TailwindCSS"],
      repoLink: "https://github.com/MateoDelgadoU/Devter",
      icon: Briefcase
    },
    {
      title: "Tasker",
      description: "A task management application designed to help users create, organize, and track their tasks. Built with React, Express, and PostgreSQL for a fast and reliable experience.",
      tech: ["React", "Express", "PostgreSQL"],
      repoLink: "https://github.com/MateoDelgadoU/Tasker",
      icon: CheckSquare
    }
  ];

  const skills = [
    { name: "Next.js", icon: Globe },
    { name: "React", icon: Code },
    { name: "Python", icon: Database },
    { name: "JavaScript", icon: Zap },
    { name: "Tailwind CSS", icon: Sparkles },
    { name: "Node.js", icon: Target }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark' : ''}`}>
      <div className={`bg-gradient-to-br transition-colors duration-500 ${darkMode
        ? 'from-gray-950 via-gray-900 to-black text-gray-100'
        : 'from-white via-gray-100 to-gray-200 text-gray-900'
        }`}>

        {/* Navigation */}
        <nav className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-colors duration-500 ${darkMode
          ? 'bg-black/80 border-gray-800'
          : 'bg-white/80 border-gray-200'
          }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-400 rounded-xl flex items-center justify-center">
                  <span className="text-black font-bold text-lg">M</span>
                </div>
                <span className="font-bold text-xl">Mateo Delgado</span>
              </div>

              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors font-medium ${darkMode ? 'hover:text-gray-200' : 'hover:text-black'
                      }`}
                  >
                    {item === 'home' ? 'Home' : item === 'about' ? 'About' : item === 'skills' ? 'Skills' : item === 'projects' ? 'Projects' : 'Contact'}
                  </button>
                ))}
              </div>

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${darkMode
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-200 hover:bg-gray-300'
                  }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="animate-fade-in-up">
                <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-1">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent">
                      MU
                    </span>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent">
                    Mateo Delgado
                  </span>
                </h1>

                <div className={`text-xl md:text-2xl mb-8 space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  <div className="flex items-center justify-center space-x-2">
                    <Code className="w-6 h-6 text-gray-600 dark:text-gray-200" />
                    <span>Software Developer</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-lg">
                    <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-gray-800/60 text-gray-200' : 'bg-gray-200 text-gray-800'
                      }`}>
                      Next.js
                    </span>
                    <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-gray-800/60 text-gray-200' : 'bg-gray-200 text-gray-800'
                      }`}>
                      Python
                    </span>
                    <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-gray-800/60 text-gray-200' : 'bg-gray-200 text-gray-800'
                      }`}>
                      React
                    </span>
                  </div>
                </div>

                <div className="flex justify-center space-x-6 mb-12">
                  <a
                    href="https://github.com/MateoDelgadoU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'
                      }`}
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mateodelgadougarte/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                  </a>
                  <a
                    href="mailto:mateo350dk@gmail.com"
                    className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Mail className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                  </a>
                </div>

                <button
                  onClick={() => scrollToSection('about')}
                  className="animate-bounce"
                >
                  <ChevronDown className="w-8 h-8 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-black/50' : 'bg-white/60'
          }`}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="border rounded-2xl p-4 gap-12 items-center">
              <div className="space-y-6">
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  I'm a passionate software developer focused on creating innovative and efficient digital solutions.
                  My approach centers on full-stack development, combining modern technologies to build
                  robust and scalable web applications.
                </p>
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  Specialized in Next.js, React, and Python, I love solving complex problems and
                  transforming ideas into digital products that generate real impact.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Full-Stack Development", "UI/UX Design", "API Development", "Database Design"].map((item) => (
                    <span
                      key={item}
                      className={`px-4 py-2 bg-gradient-to-r rounded-lg text-sm font-medium ${darkMode
                        ? 'from-gray-800/50 to-gray-700/50 text-gray-200'
                        : 'from-gray-200 to-gray-100 text-gray-800'
                        }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'
                      }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg mr-4">
                        <IconComponent className="w-6 h-6 text-gray-900" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{skill.name}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-black/50' : 'bg-white/60'
          }`}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'
                      }`}
                  >
                    <div className="h-48 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 relative overflow-hidden flex items-center justify-center">
                      <IconComponent className="w-24 h-24 text-gray-900/80" />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3">{project.title}</h3>
                      <p className={`mb-4 text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-800'
                              }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center space-x-2 font-medium transition-colors ${darkMode ? 'text-gray-200 hover:text-white' : 'text-gray-900 hover:text-black'
                          }`}
                      >
                        <span>View Repository</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                Let's Work Together?
              </span>
            </h2>

            <p className={`text-xl mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              I'm always open to new opportunities and interesting projects.
              Let's connect and bring ideas to life!
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              <a
                href="mailto:mateo350dk@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-black to-gray-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:from-gray-900 hover:to-black transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm sm:text-base">Send Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/mateodelgadougarte/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium border-2 transform hover:scale-105 transition-all duration-300 shadow-lg ${darkMode
                  ? 'bg-gray-900 text-gray-100 border-gray-700 hover:border-white'
                  : 'bg-white text-gray-900 border-gray-200 hover:border-black'
                  }`}
              >
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                <span className="text-sm sm:text-base">LinkedIn</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-gray-300">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold">M</span>
              </div>
              <span className="font-bold text-lg text-white">Mateo Delgado Ugarte</span>
            </div>
            <p className="text-gray-400">
              © 2025 Mateo Delgado Ugarte. Built with React and lots of tea
            </p>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Force Tailwind to recognize dark mode */
        .dark {
          color-scheme: dark;
        }
      `}</style>
    </div>
  );
};

export default App;