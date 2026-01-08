interface AboutViewProps {
  isDark: boolean;
}

export default function AboutView({ isDark }: AboutViewProps) {
  const aboutText = `Programming Technician at UTN-FRSN. All coursework completed.
I have a solid background in web development and advanced proficiency in Python. I am passionate about creating dynamic and interactive applications, constantly developing projects to refine my skills.
On the frontend, I work with JavaScript, React, and TypeScript, while on the backend I use Node.js, Express, and Next.js to build robust and scalable APIs. I also manage relational (PostgreSQL) and non-relational (MongoDB) databases to ensure efficient data persistence and organization.
I enjoy every stage of software development and I am motivated to keep learning new technologies to continue growing professionally.`;

  return (
    <section 
      className={`animate-fade-in max-w-4xl mx-auto px-4 py-8 md:py-12`}
      role="region"
      aria-label="About information"
    >
      <header className="text-center space-y-6 md:space-y-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className={`w-12 h-px ${isDark ? 'bg-white/40' : 'bg-black/40'}`}></div>
          <span className={`text-sm uppercase tracking-wider ${isDark ? 'text-white/60' : 'text-black/60'}`}>About Me</span>
          <div className={`w-12 h-px ${isDark ? 'bg-white/40' : 'bg-black/40'}`}></div>
        </div>
        
        <h1 className={`text-4xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
          Mateo Delgado
        </h1>
      </header>
      
      <article className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-white/80' : 'text-black/80'} max-w-3xl mx-auto mt-8`}>
        {aboutText}
      </article>
      
      <footer className="pt-6 text-center">
        <p className={`text-sm md:text-base ${isDark ? 'text-white/60' : 'text-black/60'} italic`}>
          Full Stack Developer passionate about creating modern and minimalist web experiences.
        </p>
      </footer>
    </section>
  );
}