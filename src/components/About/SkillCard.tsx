import React, { useRef } from 'react';
import { Badge } from '@components/common/Badge';
import { cn } from '@utils/cn';

export interface SkillCardProps {
  icon: string;
  category: string;
  skills: string[];
  description: string;
  proficiency: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ icon, category, skills, description, proficiency }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.matchMedia('(hover: none)').matches) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <div className="perspective-1000 h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "h-full flex flex-col p-6 rounded-xl transition-all duration-300 ease-out",
          "bg-neutral-900/50 light:bg-white border border-neutral-800",
          "hover:border-accent hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]"
        )}
      >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{category}</h3>
        <p className="text-sm text-neutral-400 mb-6 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill) => (
            <Badge key={skill} variant="default">{skill}</Badge>
          ))}
        </div>
        
        <div className="flex items-center gap-1 mt-auto">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={cn("w-4 h-4", i < proficiency ? "text-accent fill-accent" : "text-neutral-700 fill-none")}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};
SkillCard.displayName = 'SkillCard';
