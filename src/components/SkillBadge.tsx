interface SkillBadgeProps {
  skill: string;
  isDark: boolean;
}

export default function SkillBadge({ skill, isDark }: SkillBadgeProps) {
  return (
    <span
      className={`px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs md:text-sm border ${isDark ? 'border-white/20 hover:bg-white hover:text-black' : 'border-black/20 hover:bg-black hover:text-white'} transition-all cursor-default`}
      role="listitem"
    >
      {skill}
    </span>
  );
}