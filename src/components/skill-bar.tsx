interface SkillBarProps {
  name: string;
  percentage: number;
}

export function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-white/80 font-medium">{name}</span>
        <span className="text-white/60">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-rose-600 to-rose-400 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
