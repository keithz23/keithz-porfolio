interface SkillCardProps {
  name: string;
}

export function SkillCard({ name }: SkillCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-[#0989ff]/30 hover:shadow-md transition-all">
      <div className="flex items-center justify-center">
        <span className="font-medium">{name}</span>
      </div>
    </div>
  );
}
