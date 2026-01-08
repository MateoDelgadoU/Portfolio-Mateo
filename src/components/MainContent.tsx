import { ExternalLink } from 'lucide-react';
import { projects } from "../../utils/projectsList"
import ProjectCard from './ProjectCard';
import SkillBadge from './SkillBadge';
import ContactSection from './ContactSection';
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
            <main className="max-w-6xl w-full grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 z-10 px-2 sm:px-4" role="region" aria-label="Portfolio content">
                {/* Left Column */}
                <section className="flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 animate-fade-in">
                    <header>
                        <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                            <div className={`w-6 sm:w-8 md:w-12 h-px ${isDark ? 'bg-white/40' : 'bg-black/40'}`}></div>
                            <span className={`text-[10px] sm:text-xs md:text-sm uppercase tracking-wider ${isDark ? 'text-white/60' : 'text-black/60'}`}>Full Stack Developer</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-3">
                            Mateo Delgado
                        </h1>
                        <p className={`text-xs sm:text-sm md:text-base lg:text-lg ${isDark ? 'text-white/60' : 'text-black/60'} max-w-md`}>
                            Building modern and minimalist web experiences
                        </p>
                    </header>

                    <section>
                        <h2 className={`text-[10px] sm:text-xs md:text-sm uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-black/40'} mb-2 sm:mb-3`}>Skills</h2>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2" role="list">
                            {skills.map((skill, i) => (
                                <SkillBadge key={i} skill={skill} isDark={isDark} />
                            ))}
                        </div>
                    </section>

                    <ContactSection isDark={isDark} />
                </section>

                {/* Right Column - Projects */}
                <section className="flex flex-col justify-center animate-fade-in-delay">
                    <header className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                        <span className={`text-[10px] sm:text-xs md:text-sm uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-black/40'}`}>Featured Projects</span>
                        <div className={`flex-1 h-px ${isDark ? 'bg-white/20' : 'bg-black/20'}`}></div>
                    </header>

                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                        {projects.map((project, i) => (
                            <ProjectCard
                                key={i}
                                project={project}
                                index={i}
                                isDark={isDark}
                                hoveredProject={hoveredProject}
                                setHoveredProject={setHoveredProject}
                            />
                        ))}
                    </div>

                    <div className="mt-4 sm:mt-6 md:mt-8 flex items-center gap-1 sm:gap-2">
                        <div className={`flex-1 h-px ${isDark ? 'bg-white/20' : 'bg-black/20'}`}></div>
                        <a
                            href="https://github.com/MateoDelgadoU"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-[10px] sm:text-xs md:text-sm ${isDark ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'} transition-colors flex items-center gap-1 sm:gap-2`}
                        >
                            View more on GitHub
                            <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
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