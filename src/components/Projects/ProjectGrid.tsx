import React, { useRef, useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '@data/projects';
import type { Project } from '@/types/project';

interface ProjectGridProps {
  onProjectClick: (project: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onProjectClick }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Sync horizontal scroll position with active project index
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const newIndex = Math.round(scrollLeft / containerWidth);

      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < projects.length) {
        setActiveIndex(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  // Smooth scroll handler for buttons & list items
  const scrollToProject = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    container.scrollTo({
      left: index * containerWidth,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    const nextIdx = activeIndex > 0 ? activeIndex - 1 : projects.length - 1;
    scrollToProject(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex < projects.length - 1 ? activeIndex + 1 : 0;
    scrollToProject(nextIdx);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT FIXED COLUMN: Project Deck Navigator */}
        <div className="lg:col-span-4 flex flex-col justify-between self-stretch space-y-8 lg:space-y-12 lg:sticky lg:top-32">
          
          {/* Header */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#2dd4bf] font-mono text-xs tracking-widest uppercase font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2dd4bf] inline-block animate-pulse" />
              <span>SYSTEM LOGS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-black tracking-tight text-white leading-none">
              PROJECT <br />
              DECK
            </h2>
          </div>

          {/* Dynamic Numbered Project Tabs */}
          <div className="space-y-2 py-4 border-l border-neutral-800/80 pl-4">
            {projects.map((project, idx) => {
              const isActive = idx === activeIndex;
              const formattedNumber = String(idx + 1).padStart(2, '0');

              return (
                <button
                  key={project.id}
                  onClick={() => scrollToProject(idx)}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-mono text-xs tracking-wider transition-all duration-300 text-left ${
                    isActive
                      ? 'bg-[#12161f] text-white font-bold border border-neutral-700/60 shadow-[0_0_20px_rgba(45,212,191,0.08)]'
                      : 'text-neutral-500 hover:text-neutral-200 hover:bg-[#0c0e14]/60'
                  }`}
                >
                  <span className={isActive ? 'text-[#2dd4bf] font-bold' : 'text-neutral-600'}>
                    {formattedNumber}
                  </span>
                  <span className="truncate uppercase">{project.title}</span>
                </button>
              );
            })}
          </div>

          {/* Controls: Up/Down Navigation + View Archives */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="w-10 h-10 rounded-xl bg-[#0e1015] border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              aria-label="Next project"
              className="w-10 h-10 rounded-xl bg-[#0e1015] border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <a
              href="https://github.com/vishalsukhwal33"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0e1015] border border-neutral-800 text-xs font-semibold text-neutral-300 hover:text-white hover:border-neutral-600 transition-all hover:scale-105"
            >
              <span>View Archives</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: Horizontal Scrollable Viewport Deck */}
        <div
          ref={scrollContainerRef}
          className="lg:col-span-8 w-full overflow-x-auto overflow-y-hidden flex flex-row snap-x snap-mandatory scrollbar-hide scroll-smooth"
          style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="w-full shrink-0 snap-center snap-always px-1 sm:px-2 first:pl-0 last:pr-0"
            >
              <ProjectCard
                project={project}
                index={index}
                onClick={() => onProjectClick(project)}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

ProjectGrid.displayName = 'ProjectGrid';
export default ProjectGrid;