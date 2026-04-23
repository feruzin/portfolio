interface SkillBadgeProps {
  name: string;
  category?: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <div className="px-4 py-2 bg-surface hover:bg-brand-blue/10 border border-border hover:border-brand-blue/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300 text-sm font-medium cursor-default shadow-sm hover:shadow-[0_0_10px_rgba(59,130,246,0.2)]">
      {name}
    </div>
  );
}
