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
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_ogrxj7bkk0opth9HP4RyuYXE8WwCGvg_Oo0zNJeIcZngzYaNWOLm7G2RYROhHmmtVzZAI0SDQwkyLOEQcNx6-o9ZgM6rfF4W0lW5QIqevmH4mMzNZg3GiDxlRsO_CzVKxkYD2Ghn3rwHMqRfB06989tL7E4msO66-Bl2EkFrfH4JyHd2_9Lw9QBnlCjY7VajoUKOz0uS-OE5fviOfkGybNAv7PlefryFxhwNoEQ',
    },
    {
      id: 'proj-5',
      title: 'Industrial Heavy Load Distribution Apron',
      category: 'Structural',
      location: 'Riverside Industrial Corridor',
      specs: '8-inch 5,000 PSI slab with double rebar grid and hard-troweled densified finish',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCepbAk4YDiu-W7dS2GmMLicPMQYzlpVHW-9BvEN1t3-kY70r3iiL9dfIJ-hORl-BU_5xZd3bwJp6pQsEFH3ndPWBYYmIfND49KaqhZM3B7JBGtlJarIgJozzsPVHBcSup17hlB0qEj5QYSVR-2ZWKXKx2KZTiGHaP4xJ2Dkb_2s0HTY5iVBH2R7wJ7wGidHiiAAHnJB7ClPLcZ7QjKAmjky6HLCVXhq1uWj7dd5a0',
    },
    {
      id: 'proj-6',
      title: 'Municipal Curb & Flow Gutter Replacement',
      category: 'Civil',
      location: 'City of Menifee Infrastructure',
      specs: 'Class A Caltrans mix design, expansion joints at 10-foot intervals, broom finish',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv-2cIoCY7c_jBotAjA1K4RVjFrGNz2g4MVx56v9sccjzKAamZZI-rhni7En2T4uvC2pPUESqyYZSIfVbDptYZ0H4HXULI5uRClfQm-NlvVKW2UlTAdo8SX6FSxlvgzpBoMX81D8eGKMbniplTuW-UCJT94h-wzFDlCtOAWE2xerNVb3wC2YHXzWDnu1P5CvEvRkctDkNjVuNstNPCJJsSP8NAWJ1xLm-Hjxt8j5w',
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

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(['All', 'Structural', 'Decorative', 'Civil'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 font-mono text-xs uppercase tracking-wider font-bold transition-all rounded-full cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-stone-charcoal text-white shadow-lg'
                  : 'bg-white text-secondary hover:bg-stone-200 border border-stone-300'
              }`}
            >
              {cat} Projects
            </button>
          ))}
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
                  <h4 className="font-display text-base font-bold uppercase tracking-tight text-stone-charcoal mb-2">
                    {project.title}
                  </h4>
                  <p className="font-sans text-xs text-secondary leading-relaxed">
                    {project.specs}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-primary font-mono text-xs font-bold uppercase">
                  <span>View Details</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-stone-charcoal text-white p-8 sm:p-12 rounded-xl shadow-xl">
          <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-3">
            Have a Specific Project in Mind?
          </h3>
          <p className="font-sans text-sm text-concrete-aggregate max-w-xl mx-auto mb-6">
            We review site blueprints, municipal civil drawings, and residential concepts within 24 hours.
          </p>
          <button
            onClick={() => onOpenEstimate()}
            className="px-8 py-3.5 bg-primary-container text-white font-mono text-xs uppercase font-bold tracking-wider hover:bg-white hover:text-stone-charcoal transition-colors shadow-lg cursor-pointer"
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
                <span className="font-mono text-xs text-primary uppercase font-bold tracking-wider">
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
                    className="px-6 py-2.5 bg-primary text-white font-mono text-xs uppercase font-bold hover:bg-stone-charcoal transition-colors"
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

