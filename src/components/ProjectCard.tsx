import { Github, ExternalLink } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';

interface Project {
  title: string;
  tech: string;
  github: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isDark: boolean;
  hoveredProject: number | null;
  setHoveredProject: Dispatch<SetStateAction<number | null>>;
}

export default function ProjectCard({ project, index, isDark, hoveredProject, setHoveredProject }: ProjectCardProps) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHoveredProject(index)}
      onMouseLeave={() => setHoveredProject(null)}
      className={`block p-4 md:p-6 border ${isDark ? 'border-white/20 hover:border-white' : 'border-black/20 hover:border-black'} hover:-translate-y-1 transition-all group relative`}
      role="article"
      aria-label={`View ${project.title} project on GitHub`}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg md:text-xl font-bold group-hover:translate-x-1 transition-transform">
          {project.title}
        </h3>
        <div className="flex gap-2">
          <Github className="w-4 h-4 md:w-5 md:h-5 opacity-40 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
          <ExternalLink className="w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
        </div>
      </div>
      <p className={`text-xs md:text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>{project.tech}</p>
      <div className={`absolute bottom-0 left-0 h-0.5 ${isDark ? 'bg-white' : 'bg-black'} transition-all duration-300 ${hoveredProject === index ? 'w-full' : 'w-0'}`}></div>
    </a>
  );
}