import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Moon, Sun, ExternalLink, Code, Database, Globe, ChevronDown, Sparkles, Zap, Target } from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Proyectos placeholder - agrega tus links de repo aquí
  const projects = [
    {
      title: "Proyecto Full-Stack",
      description: "Aplicación completa con React y Node.js, base de datos PostgreSQL e integración de APIs.",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      repoLink: "#", // Reemplaza con tu link
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop"
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interactivo con visualización de datos en tiempo real usando Next.js y Python.",
      tech: ["Next.js", "Python", "Chart.js", "API Rest"],
      repoLink: "#", // Reemplaza con tu link
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop"
    },
    {
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico con sistema de pagos y gestión de inventario.",
      tech: ["React", "Python", "Stripe", "MongoDB"],
      repoLink: "#", // Reemplaza con tu link
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop"
    }
  ];

  const skills = [
    { name: "Next.js", icon: Globe, level: 95 },
    { name: "React", icon: Code, level: 90 },
    { name: "Python", icon: Database, level: 85 },
    { name: "JavaScript", icon: Zap, level: 88 },
    { name: "Tailwind CSS", icon: Sparkles, level: 92 },
    { name: "Node.js", icon: Target, level: 80 }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 text-slate-900 dark:text-slate-100">

        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
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
                    className="capitalize hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    {item === 'home' ? 'Inicio' : item === 'about' ? 'Sobre mí' : item === 'skills' ? 'Habilidades' : item === 'projects' ? 'Proyectos' : 'Contacto'}
                  </button>
                ))}
              </div>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
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

                <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Code className="w-6 h-6 text-blue-500" />
                    <span>Desarrollador de Software</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-lg">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                      React
                    </span>
                  </div>
                </div>

                <div className="flex justify-center space-x-6 mb-12">
                  <a
                    href="https://github.com/MateoDelgadoU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Sobre Mí
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Soy un desarrollador de software apasionado por crear soluciones digitales innovadoras y eficientes.
                  Mi enfoque está en el desarrollo full-stack, combinando tecnologías modernas para construir
                  aplicaciones web robustas y escalables.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Especializado en Next.js, React y Python, me encanta resolver problemas complejos y
                  transformar ideas en productos digitales que generen impacto real.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Desarrollo Full-Stack", "UI/UX Design", "API Development", "Database Design"].map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-2xl p-1">
                  <div className="w-full h-full bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">👨‍💻</div>
                      <div className="text-xl font-semibold">Creando el futuro</div>
                      <div className="text-slate-600 dark:text-slate-300">línea por línea</div>
                    </div>
                  </div>
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
                Habilidades
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{skill.name}</h3>
                        <div className="text-sm text-slate-500 dark:text-slate-400">{skill.level}% competencia</div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Proyectos
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      <span>Ver repositorio</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ¿Trabajamos Juntos?
              </span>
            </h2>

            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
              Estoy siempre abierto a nuevas oportunidades y proyectos interesantes.
              ¡Conectemos y hagamos que las ideas cobren vida!
            </p>

            <div className="flex justify-center space-x-8">
              <a
                href="mailto:mateo350dk@gmail.com"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span>Enviar Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/mateodelgadougarte/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 px-8 py-4 rounded-xl font-medium border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
                <span>LinkedIn</span>
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
              © 2024 Mateo Delgado Ugarte. Construido con React y mucho ☕
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default App;