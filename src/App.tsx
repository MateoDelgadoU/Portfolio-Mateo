import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Moon, Sun, ExternalLink, Code, Database, Globe, ChevronDown, Sparkles, Zap, Target, User, CheckSquare, Briefcase } from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference for initial theme
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.style.setProperty('--tw-bg-opacity', '1');
      document.body.style.backgroundColor = darkMode ? '#0f172a' : '#f8fafc';
    } else {
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc';
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
        ? 'from-slate-900 via-slate-800 to-indigo-900 text-slate-100'
        : 'from-slate-50 via-blue-50 to-indigo-100 text-slate-900'
        }`}>

        {/* Navigation */}
        <nav className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-colors duration-500 ${darkMode
          ? 'bg-slate-900/80 border-slate-700'
          : 'bg-white/80 border-slate-200'
          }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="font-bold text-xl">Mateo Delgado</span>
              </div>

              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors font-medium ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'
                      }`}
                  >
                    {item === 'home' ? 'Home' : item === 'about' ? 'About' : item === 'skills' ? 'Skills' : item === 'projects' ? 'Projects' : 'Contact'}
                  </button>
                ))}
              </div>

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${darkMode
                  ? 'bg-slate-700 hover:bg-slate-600'
                  : 'bg-slate-200 hover:bg-slate-300'
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
                <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      MU
                    </span>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Mateo Delgado
                  </span>
                </h1>

                <div className={`text-xl md:text-2xl mb-8 space-y-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                  <div className="flex items-center justify-center space-x-2">
                    <Code className="w-6 h-6 text-blue-500" />
                    <span>Software Developer</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-lg">
                    <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'
                      }`}>
                      Next.js
                    </span>
                    <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700'
                      }`}>
                      Python
                    </span>
                    <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'
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
                    className={`p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${darkMode ? 'bg-slate-800' : 'bg-white'
                      }`}
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mateodelgadougarte/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </a>
                  <a
                    href="mailto:mateo350dk@gmail.com"
                    className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Mail className="w-6 h-6 text-red-500" />
                  </a>
                </div>

                <button
                  onClick={() => scrollToSection('about')}
                  className="animate-bounce"
                >
                  <ChevronDown className="w-8 h-8 text-slate-400" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-800/50' : 'bg-white/50'
          }`}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="gap-12 items-center border rounded-2xl p-4">
              <div className="space-y-6">
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                  I'm a passionate software developer focused on creating innovative and efficient digital solutions.
                  My approach centers on full-stack development, combining modern technologies to build
                  robust and scalable web applications.
                </p>
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                  Specialized in Next.js, React, and Python, I love solving complex problems and
                  transforming ideas into digital products that generate real impact.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Full-Stack Development", "UI/UX Design", "API Development", "Database Design"].map((item) => (
                    <span
                      key={item}
                      className={`px-4 py-2 bg-gradient-to-r rounded-lg text-sm font-medium ${darkMode
                        ? 'from-blue-900/30 to-indigo-900/30 text-blue-300'
                        : 'from-blue-100 to-indigo-100 text-blue-700'
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
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${darkMode ? 'bg-slate-800' : 'bg-white'
                      }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
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
        <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-800/50' : 'bg-white/50'
          }`}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${darkMode ? 'bg-slate-800' : 'bg-white'
                      }`}
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 relative overflow-hidden flex items-center justify-center">
                      <IconComponent className="w-24 h-24 text-white/80" />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3">{project.title}</h3>
                      <p className={`mb-4 text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'
                        }`}>
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'
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
                        className={`inline-flex items-center space-x-2 font-medium transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
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
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Let's Work Together?
              </span>
            </h2>

            <p className={`text-xl mb-12 max-w-2xl mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
              I'm always open to new opportunities and interesting projects.
              Let's connect and bring ideas to life!
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              <a
                href="mailto:mateo350dk@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm sm:text-base">Send Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/mateodelgadougarte/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium border-2 transform hover:scale-105 transition-all duration-300 shadow-lg ${darkMode
                    ? 'bg-slate-800 text-slate-100 border-slate-700 hover:border-blue-400'
                    : 'bg-white text-slate-900 border-slate-200 hover:border-blue-500'
                  }`}
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
                <span className="text-sm sm:text-base">LinkedIn</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-300">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="font-bold text-lg text-white">Mateo Delgado Ugarte</span>
            </div>
            <p className="text-slate-400">
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