import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { projects } from "../../utils/projectsList"
import type { Dispatch, SetStateAction } from 'react';

interface MainContentProps {
    isDark: boolean
    hoveredProject: number | null
    setHoveredProject: Dispatch<SetStateAction<number | null>>
}

export default function MainContent({ isDark, hoveredProject, setHoveredProject }: MainContentProps) {
    const skills = ['TypeScript', 'React', 'NextJS', 'MongoDB', 'Tailwind', 'Python'];
    return (
        <>
            {/* Background Animation */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute h-px ${isDark ? 'bg-white/10' : 'bg-black/30'} transform -rotate-45`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 200 + 100}px`,
                            animation: `moveLines ${Math.random() * 3 + 4}s linear infinite ${Math.random() * 2}s`,
                            transform: `scale(${Math.random() * 0.5 + 0.75})` // Added 3D effect
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <main className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-12 z-10">
                {/* Left Column */}
                <section className="flex flex-col justify-center space-y-6 md:space-y-8 animate-fade-in">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className={`w-12 h-px ${isDark ? 'bg-white/40' : 'bg-black/40'}`}></div>
                            <span className={`text-sm uppercase tracking-wider ${isDark ? 'text-white/60' : 'text-black/60'}`}>Full Stack Developer</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl max-sm:text-2xl lg:text-7xl font-bold mb-3">
                            Mateo Delgado
                        </h1>
                        <p className={`text-base md:text-lg ${isDark ? 'text-white/60' : 'text-black/60'} max-w-md`}>
                            Building modern and minimalist web experiences
                        </p>
                    </div>

                    <div>
                        <h2 className={`text-sm uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-black/40'} mb-3`}>Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className={`px-3 py-1 text-xs md:text-sm border ${isDark ? 'border-white/20 hover:bg-white hover:text-black' : 'border-black/20 hover:bg-black hover:text-white'} transition-all cursor-default`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className={`text-sm uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-black/40'} mb-3`}>Contact</h2>
                        <div className="flex gap-3">
                            <a
                                href="mailto:mateo350dk@gmail.com"
                                className={`p-2.5 border ${isDark ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'} transition-all group`}
                                aria-label="Email"
                                target='_blank'
                            >
                                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                            <a
                                href="https://github.com/MateoDelgadoU"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2.5 border ${isDark ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'} transition-all group`}
                                aria-label="GitHub"
                            >
                                <Github className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mateodelgadougarte/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2.5 border ${isDark ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'} transition-all group`}
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Right Column - Projects */}
                <section className="flex flex-col justify-center animate-fade-in-delay">
                    <div className="flex items-center gap-2 mb-4 md:mb-6">
                        <span className={`text-sm uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-black/40'}`}>Featured Projects</span>
                        <div className={`flex-1 h-px ${isDark ? 'bg-white/20' : 'bg-black/20'}`}></div>
                    </div>

                    <div className="space-y-3 md:space-y-4">
                        {projects.map((project, i) => (
                            <a
                                key={i}
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHoveredProject(i)}
                                onMouseLeave={() => setHoveredProject(null)}
                                className={`block p-4 md:p-6 border ${isDark ? 'border-white/20 hover:border-white' : 'border-black/20 hover:border-black'} hover:-translate-y-1 transition-all group relative`}
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-lg md:text-xl font-bold group-hover:translate-x-1 transition-transform">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2">
                                        <Github className="w-4 h-4 md:w-5 md:h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                                <p className={`text-xs md:text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>{project.tech}</p>
                                {/* Decorative line */}
                                <div className={`absolute bottom-0 left-0 h-0.5 ${isDark ? 'bg-white' : 'bg-black'} transition-all duration-300 ${hoveredProject === i ? 'w-full' : 'w-0'}`}></div>
                            </a>
                        ))}
                    </div>

                    <div className="mt-6 md:mt-8 flex items-center gap-2">
                        <div className={`flex-1 h-px ${isDark ? 'bg-white/20' : 'bg-black/20'}`}></div>
                        <a
                            href="https://github.com/MateoDelgadoU"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-xs md:text-sm ${isDark ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'} transition-colors flex items-center gap-2`}
                        >
                            View more on GitHub
                            <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                        </a>
                    </div>
                </section>
            </main>

            <style>{`
            @keyframes moveLines {
            0% {
            transform: translate(-100%, -100%) rotate(-45deg);
            opacity: 0;
            }
            20% {
            opacity: 1;
            }
            80% {
            opacity: 1;
            }
            100% {
            transform: translate(200%, 200%) rotate(-45deg);
            opacity: 0;
            }
            }
            `}</style>
        </>
    )
}