import React from 'react';
import { cn } from '@utils/cn';

export interface SkillCardProps {
  icon: string | React.ReactNode;
  category: string;
  skills: string[];
  description?: string;
  proficiency?: number;
  className?: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ 
  icon, 
  category, 
  skills, 
  description, 
  className 
}) => {
  return (
    <div
      className={cn(
        "h-full flex flex-col justify-between p-6 rounded-3xl transition-all duration-300 ease-out",
        "bg-[#0b0c0e]/90 backdrop-blur-xl border border-neutral-800/80 shadow-xl",
        "hover:border-neutral-700 hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1",
        className
      )}

    >
      {/* Card Header */}
      <div className="flex items-center gap-3.5 mb-5">
        <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 text-lg shrink-0">
          {icon}
        </div>
        
        <div>
          <h3 className="text-base font-bold text-white tracking-tight">{category}</h3>
          {description && (
            <p className="text-xs text-neutral-400 mt-0.5">{description}</p>
          )}
        </div>
      </div>

      {/* Skills Mini-Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full mt-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center justify-center px-3 py-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-neutral-300 hover:border-neutral-700 hover:bg-neutral-800/50 transition-all text-center truncate cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

SkillCard.displayName = 'SkillCard';
export default SkillCard;