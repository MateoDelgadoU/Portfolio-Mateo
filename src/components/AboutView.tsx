interface AboutViewProps {
  isDark: boolean;
}

export default function AboutView({ isDark }: AboutViewProps) {
  const aboutText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`;

  return (
    <div 
      className={`animate-fade-in max-w-4xl mx-auto px-4 py-8 md:py-12`}
      role="region"
      aria-label="About information"
    >
      <div className="text-center space-y-6 md:space-y-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className={`w-12 h-px ${isDark ? 'bg-white/40' : 'bg-black/40'}`}></div>
          <span className={`text-sm uppercase tracking-wider ${isDark ? 'text-white/60' : 'text-black/60'}`}>About Me</span>
          <div className={`w-12 h-px ${isDark ? 'bg-white/40' : 'bg-black/40'}`}></div>
        </div>
        
        <h1 className={`text-4xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
          Mateo Delgado
        </h1>
        
        <div className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-white/80' : 'text-black/80'} max-w-3xl mx-auto`}>
          {aboutText}
        </div>
        
        <div className="pt-6">
          <p className={`text-sm md:text-base ${isDark ? 'text-white/60' : 'text-black/60'} italic`}>
            Full Stack Developer passionate about creating modern and minimalist web experiences.
          </p>
        </div>
      </div>
    </div>
  );
}