interface SkillBadgeProps {
  skill: string;
  isDark: boolean;
}

export default function SkillBadge({ skill, isDark }: SkillBadgeProps) {
  return (
    <span
      className={`px-3 py-1 text-xs md:text-sm border ${isDark ? 'border-white/20 hover:bg-white hover:text-black' : 'border-black/20 hover:bg-black hover:text-white'} transition-all cursor-default`}
      role="listitem"
    >
      {skill}
    </span>
  );
}