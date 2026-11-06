import React, { useState } from 'react';
import { SectionHeader } from '../../components/common/SectionHeader.tsx';
import { PORTFOLIO_PROJECTS } from '../../data/concreteData.ts';
import type { ProjectPortfolioItem } from '../../types/concrete.ts';

interface PortfolioScreenProps {
  onOpenEstimate: (projectType?: string) => void;
}

export const PortfolioScreen: React.FC<PortfolioScreenProps> = ({ onOpenEstimate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Structural' | 'Decorative' | 'Civil'>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectPortfolioItem | null>(null);

  const additionalProjects: ProjectPortfolioItem[] = [
    ...PORTFOLIO_PROJECTS,
    {
      id: 'proj-4',
      title: 'Residential Multi-Tier Stamped Backyard Patio',
      category: 'Decorative',
      location: 'Temecula Wine Country, CA',
      specs: 'Ashlar Slate stamping with Charcoal antique wash and protective matte urethane coat',
      imageUrl: '/images/portfolio-decorative.jpg',
    },
    {
      id: 'proj-5',
      title: 'Industrial Heavy Load Distribution Apron',
      category: 'Structural',
      location: 'Riverside Industrial Corridor',
      specs: '8-inch 5,000 PSI slab with double rebar grid and hard-troweled densified finish',
      imageUrl: '/images/portfolio-structural.jpg',
    },
    {
      id: 'proj-6',
      title: 'Municipal Curb & Flow Gutter Replacement',
      category: 'Civil',
      location: 'City of Menifee Infrastructure',
      specs: 'Class A Caltrans mix design, expansion joints at 10-foot intervals, broom finish',
      imageUrl: '/images/portfolio-civil.jpg',
    },
  ];

  const displayedProjects = selectedCategory === 'All'
    ? additionalProjects
    : additionalProjects.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full bg-surface-container-low py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeader
          category="Proven Field Work"
          title="Featured Projects Portfolio"
          subtitle="Explore completed residential, commercial, and municipal pours executed across Southern California."
          centered
        />

        {/* Filter buttons: High-contrast architectural filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 p-1.5 bg-stone-100 border-2 border-stone-300 rounded-full shadow-inner max-w-fit mx-auto mb-12">
          {(['All', 'Structural', 'Decorative', 'Civil'] as const).map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 font-mono text-xs uppercase tracking-wider font-black transition-all rounded-full cursor-pointer ${
                  isActive
                    ? 'bg-[#0b0f16] text-white shadow-md border-2 border-[#0b0f16]'
                    : 'bg-white text-stone-800 hover:text-black hover:bg-stone-200 border-2 border-transparent'
                }`}
              >
                {cat} Projects
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group bg-white rounded-xl overflow-hidden shadow-md border border-stone-200 hover:shadow-xl transition-all cursor-pointer flex flex-col"
            >
              <div
                className="h-64 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105 relative"
                style={{ backgroundImage: `url("${project.imageUrl}")` }}
              >
                <div className="absolute top-3 left-3 px-3 py-1 bg-stone-charcoal/90 text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded">
                  {project.category}
                </div>
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-charcoal font-mono text-[10px] font-semibold tracking-wider rounded">
                  {project.location}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-display text-lg font-black uppercase tracking-tight text-stone-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                    {project.specs}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-[#ea580c] font-mono text-xs font-black uppercase">
                  <span>View Details</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform font-bold">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-[#0b0f16] border-2 border-white/20 text-white p-8 sm:p-12 rounded-2xl shadow-2xl">
          <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3 text-white">
            Have a Specific Project in Mind?
          </h3>
          <p className="font-sans text-sm text-zinc-300 max-w-xl mx-auto mb-6 font-medium">
            We review site blueprints, municipal civil drawings, and residential concepts within 24 hours.
          </p>
          <button
            onClick={() => onOpenEstimate()}
            className="px-8 py-4 bg-[#ea580c] hover:bg-[#c2410c] text-white font-mono text-xs uppercase font-black tracking-wider transition-all shadow-xl cursor-pointer hover:scale-105"
          >
            Submit Blueprints for Review
          </button>
        </div>

        {/* Project detail lightbox modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setActiveModalProject(null)} />
            <div className="relative w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-2xl z-10 border border-stone-300">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 bg-black/60 text-white rounded-full flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
              <div
                className="h-80 w-full bg-cover bg-center"
                style={{ backgroundImage: `url("${activeModalProject.imageUrl}")` }}
              />
              <div className="p-8">
                <span className="font-mono text-xs text-[#ea580c] font-black uppercase tracking-wider">
                  {activeModalProject.category} • {activeModalProject.location}
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-stone-charcoal mt-1 mb-3">
                  {activeModalProject.title}
                </h3>
                <p className="font-sans text-sm text-stone-700 leading-relaxed mb-6">
                  {activeModalProject.specs}
                </p>
                <div className="flex justify-end gap-3 pt-4 border-t border-stone-200">
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-2.5 border border-stone-300 font-mono text-xs uppercase font-bold"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const type = activeModalProject.category === 'Structural' ? 'foundation-structural' : activeModalProject.category === 'Decorative' ? 'decorative-stamped' : 'civil-curb';
                      setActiveModalProject(null);
                      onOpenEstimate(type);
                    }}
                    className="px-6 py-2.5 bg-[#ea580c] hover:bg-[#c2410c] text-white font-mono text-xs uppercase font-extrabold transition-colors cursor-pointer"
                  >
                    Request Similar Build
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioScreen;

