import React from 'react';
import { SectionHeader } from '../../components/common/SectionHeader.tsx';
import { COMPANY_INFO, HERO_METRICS } from '../../data/concreteData.ts';

interface AboutScreenProps {
  onOpenEstimate: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onOpenEstimate }) => {
  return (
    <div className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeader
          category="Company Heritage"
          title="About Morning Star Concrete Construction"
          subtitle="Operating from Menifee, California, MSCC has stood for uncompromising structural integrity and architectural craftsmanship for more than 25 years."
          centered
        />

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-charcoal">
              Founded on Precision, Built for Generations
            </h3>
            <p className="font-sans text-base text-stone-700 leading-relaxed">
              Morning Star Concrete Construction (MSCC) began with a straightforward mission: deliver heavy-duty structural concrete and master-crafted architectural surfaces that withstand Southern California's seismic demands, heavy traffic loads, and extreme weather cycles.
            </p>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              Over 25+ years, we have poured over 1,500 projects spanning custom estate driveways, architectural stamped courtyards, commercial foundations, and civil infrastructure across Menifee, Murrieta, Temecula, and the greater Inland Empire.
            </p>
            <div className="p-5 bg-stone-charcoal text-white rounded-xl border border-stone-800">
              <span className="font-mono text-xs text-surveyor-lime font-bold uppercase tracking-wider block mb-1">
                Owner-Supervised Standards
              </span>
              <p className="font-sans text-xs text-concrete-aggregate leading-relaxed">
                Every yard of concrete poured by MSCC is supervised on-site to ensure mix slump specifications, rebar elevations, sub-base compaction, and laser-screed tolerances are executed to perfection.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div
              className="w-full h-[440px] bg-cover bg-center rounded-xl shadow-xl relative"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCepbAk4YDiu-W7dS2GmMLicPMQYzlpVHW-9BvEN1t3-kY70r3iiL9dfIJ-hORl-BU_5xZd3bwJp6pQsEFH3ndPWBYYmIfND49KaqhZM3B7JBGtlJarIgJozzsPVHBcSup17hlB0qEj5QYSVR-2ZWKXKx2KZTiGHaP4xJ2Dkb_2s0HTY5iVBH2R7wJ7wGidHiiAAHnJB7ClPLcZ7QjKAmjky6HLCVXhq1uWj7dd5a0")`,
              }}
            >
              <div className="absolute inset-0 bg-stone-charcoal/20 rounded-xl" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-xl max-w-xs">
              <div className="font-display text-3xl font-bold">25+ Years</div>
              <div className="font-mono text-xs uppercase tracking-wider text-primary-fixed-dim mt-1">
                Licensed California C-8 Specialist #984210
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {HERO_METRICS.map((metric, i) => (
            <div key={i} className="bg-surface-container-high p-6 rounded-xl border border-stone-200 text-center">
              <div className="font-display text-3xl font-bold text-primary mb-1">{metric.value}</div>
              <div className="font-mono text-xs uppercase text-stone-700 tracking-wider font-semibold">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="bg-concrete-sand p-8 lg:p-12 rounded-2xl border border-stone-200">
          <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-stone-charcoal mb-8 text-center">
            Our Guiding Standards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">verified</span>
              </div>
              <h4 className="font-display text-lg font-bold uppercase text-stone-charcoal">Structural Integrity</h4>
              <p className="font-sans text-xs text-secondary leading-relaxed">
                We never cut corners on sub-base preparation, vapor barriers, or rebar spacing. Strength begins beneath the surface.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">architecture</span>
              </div>
              <h4 className="font-display text-lg font-bold uppercase text-stone-charcoal">Artisan Finishing</h4>
              <p className="font-sans text-xs text-secondary leading-relaxed">
                From precision broom texturing to bespoke stamp embossing and chemical dyes, our finish quality speaks for itself.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">handshake</span>
              </div>
              <h4 className="font-display text-lg font-bold uppercase text-stone-charcoal">Transparent Bidding</h4>
              <p className="font-sans text-xs text-secondary leading-relaxed">
                Detailed itemized proposals with zero surprise charges. Full compliance with California state licensing and $5M bonding.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-stone-300 text-center">
            <button
              onClick={onOpenEstimate}
              className="px-8 py-4 bg-[#ea580c] hover:bg-[#c2410c] text-white font-mono text-xs uppercase font-black tracking-wider transition-all shadow-xl cursor-pointer hover:scale-105"
            >
              Discuss Your Project With {COMPANY_INFO.shortName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;

