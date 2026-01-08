import { Github, Linkedin, Mail } from 'lucide-react';

interface ContactSectionProps {
  isDark: boolean;
}

export default function ContactSection({ isDark }: ContactSectionProps) {
  return (
    <div>
      <h2 className={`text-sm uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-black/40'} mb-3`}>Contact</h2>
      <div className="flex gap-3" role="list">
        <a
          href="mailto:mateo350dk@gmail.com"
          className={`p-2.5 border ${isDark ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'} transition-all group`}
          aria-label="Send email to mateo350dk@gmail.com"
          role="listitem"
        >
          <Mail className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="https://github.com/MateoDelgadoU"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2.5 border ${isDark ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'} transition-all group`}
          aria-label="Visit GitHub profile"
          role="listitem"
        >
          <Github className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/mateodelgadougarte/"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2.5 border ${isDark ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'} transition-all group`}
          aria-label="Visit LinkedIn profile"
          role="listitem"
        >
          <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
        </a>
      </div>
    </div>
  );
}