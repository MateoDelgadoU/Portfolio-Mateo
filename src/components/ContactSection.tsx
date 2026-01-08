import { Github, Linkedin, Mail } from 'lucide-react';

interface ContactSectionProps {
  isDark: boolean;
}

export default function ContactSection({ isDark }: ContactSectionProps) {
  return (
    <div>
      <h2 className={`text-[10px] sm:text-xs md:text-sm uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-black/40'} mb-2 sm:mb-3`}>Contact</h2>
      <div className="flex gap-2 sm:gap-3" role="list">
        <a
          href="mailto:mateo350dk@gmail.com"
          className={`p-1.5 sm:p-2 md:p-2.5 lg:p-3 border ${isDark ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'} transition-all group`}
          aria-label="Send email to mateo350dk@gmail.com"
          role="listitem"
        >
          <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
        </a>
        <a
          href="https://github.com/MateoDelgadoU"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-1.5 sm:p-2 md:p-2.5 lg:p-3 border ${isDark ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'} transition-all group`}
          aria-label="Visit GitHub profile"
          role="listitem"
        >
          <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/mateodelgadougarte/"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-1.5 sm:p-2 md:p-2.5 lg:p-3 border ${isDark ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'} transition-all group`}
          aria-label="Visit LinkedIn profile"
          role="listitem"
        >
          <Linkedin className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
        </a>
      </div>
    </div>
  );
}