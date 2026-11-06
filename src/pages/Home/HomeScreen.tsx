import React, { useState } from 'react';
import { ActionCard } from '../../components/common/ActionCard.tsx';
import {
  COMPANY_INFO,
  HERO_METRICS,
  CONCRETE_DIVISIONS,
  FINISH_SPECIFICATIONS,
  PORTFOLIO_PROJECTS,
} from '../../data/concreteData.ts';
import type { ConcreteDivision, EstimateFormData } from '../../types/concrete.ts';

interface HomeScreenProps {
  onOpenEstimate: (projectType?: string) => void;
  onInspectDivision: (division: ConcreteDivision) => void;
  onOpenFinancing: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onOpenEstimate,
  onInspectDivision,
  onOpenFinancing,
}) => {
  const [inlineEstimateData, setInlineEstimateData] = useState<EstimateFormData>({
    fullName: '',
    phoneNum: '',
    emailAddr: '',
    projectType: 'residential-driveway',
    projectLocation: '',
    projectDetails: '',
    syncFinancing: false,
  });

  const [formAlert, setFormAlert] = useState<string | null>(null);
  const [portfolioCategory, setPortfolioCategory] = useState<'All' | 'Structural' | 'Decorative' | 'Civil'>('All');

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormAlert('Estimate request submitted! A Morning Star specialist will contact you shortly.');
    setTimeout(() => {
      setFormAlert(null);
      setInlineEstimateData({
        fullName: '',
        phoneNum: '',
        emailAddr: '',
        projectType: 'residential-driveway',
        projectLocation: '',
        projectDetails: '',
        syncFinancing: false,
      });
    }, 4000);
  };

  const filteredProjects = portfolioCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === portfolioCategory);

  return (
    <div className="flex flex-col w-full">
      {/* ======================================================== */}
      {/* 1. HERO SECTION (Ultra 4K Bright Architectural Concrete) */}
      {/* ======================================================== */}
      <section id="home" className="relative w-full overflow-hidden bg-[#0c1017] text-white">
        {/* Ultra-4K High-Resolution Modern Architectural Concrete Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-85 scale-100 transition-transform duration-1000"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=3840&auto=format&fit=crop")`,
            backgroundPosition: 'center 40%',
          }}
        />

        {/* Transparent, Light & Breathable Scrim (Keeps Image Bright & Natural) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-[#0c1017]/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-10" />

        <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-32 flex flex-col justify-center pt-[124px]">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center py-6">
            {/* High-Contrast Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-black/75 border border-surveyor-lime/50 mb-8 shadow-lg rounded-full">
              <span className="w-2.5 h-2.5 bg-surveyor-lime rounded-full animate-pulse shadow-[0_0_8px_#6EF712]" />
              <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                25+ Years of Industry Excellence • Lic. #984210
              </span>
            </div>

            {/* Crisp 100% Opaque Hero Title */}
            <h1 className="text-white font-display font-black uppercase tracking-tight text-4xl sm:text-5xl md:text-7xl leading-tight mb-6 max-w-4xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              PRECISION CONCRETE<br />CRAFTSMANSHIP
            </h1>

            {/* High-Contrast, Eye-Comfortable Subtitle */}
            <p className="text-zinc-100 font-sans font-medium text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Delivering structural integrity, architectural stamping, and engineered foundations across Southern California for over a quarter century.
            </p>

            {/* Action Buttons (Synchronized High-Contrast Palette) */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <button
                onClick={() => onOpenEstimate()}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#ea580c] hover:bg-[#c2410c] text-white font-mono text-xs uppercase tracking-wider font-black transition-all shadow-xl cursor-pointer border-2 border-transparent hover:scale-105"
              >
                REQUEST A FREE ESTIMATE
              </button>
              
              <a
                href="#services-matrix"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white hover:text-black border-2 border-white text-white font-mono text-xs tracking-widest uppercase transition-all shadow-lg font-black hover:scale-105"
              >
                EXPLORE PROJECT MATRIX
              </a>
            </div>
          </div>

          {/* Quick Metrics Ribbon (Solid, Crisp & High Contrast) */}
          <div className="mt-16 pt-8 bg-[#0c1017]/90 border border-white/20 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 px-6 sm:px-8 py-7 rounded-xl">
            {HERO_METRICS.map((metric, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-sm">
                  {metric.value}
                </div>
                <div className="font-mono text-xs uppercase text-zinc-200 tracking-wider mt-1.5 font-bold">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. NARRATIVE SECTION: 25 YEARS OF TRUST */}
      {/* ======================================================== */}
      <section className="w-full bg-[#f8f9fa] py-20 lg:py-28 border-b border-stone-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Architectural Imagery & Professional Badge Card */}
            <div className="lg:col-span-6 relative">
              {/* Outer decorative border/frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-stone-200 group">
                <div
                  className="w-full h-[500px] sm:h-[540px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url("/images/heritage-headquarters.jpg")`,
                  }}
                >
                  {/* Subtle vignette gradient for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                </div>

                {/* Integrated Professional Bottom Badge */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 bg-gradient-to-t from-[#0b0f16] via-[#0b0f16]/95 to-transparent text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-[#ea580c] flex items-center justify-center text-white shrink-0 shadow-lg">
                        <span className="material-symbols-outlined text-2xl font-bold">verified</span>
                      </div>
                      <div>
                        <div className="font-mono text-xs uppercase tracking-wider text-surveyor-lime font-black">
                          Inland Empire Operations Hub
                        </div>
                        <div className="font-display text-sm sm:text-base font-bold text-white">
                          Menifee Headquarters • C-8 Lic. #984210
                        </div>
                      </div>
                    </div>
                    <span className="self-start sm:self-center px-3.5 py-1.5 bg-white/10 border border-white/20 rounded-full font-mono text-[11px] uppercase font-bold text-zinc-200">
                      $5M Bonded
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Quality Seal Chip */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-[#0b0f16] border-2 border-[#ea580c] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3">
                <span className="font-display text-2xl sm:text-3xl font-black text-[#ea580c]">25+</span>
                <div className="text-left font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-200 leading-tight">
                  Years Proven<br /><span className="text-white font-bold">Field Reliability</span>
                </div>
              </div>
            </div>

            {/* Right Column: Structured Heritage Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2 h-6 bg-[#ea580c] rounded-sm" />
                <span className="font-mono text-xs uppercase tracking-wider text-stone-700 font-extrabold">
                  Operational Legacy &amp; Standards
                </span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-900 uppercase tracking-tight font-black mb-6 leading-tight">
                25 Years of Proven Field Reliability
              </h2>
              
              <p className="font-sans text-base sm:text-lg text-stone-700 mb-5 leading-relaxed font-normal">
                Concrete company with 25+ years of experience in the industry managing residential and commercial projects. MSCC specializes in custom concrete, decorative stamped concrete, color and seal concrete, broom finish concrete for sidewalks, driveways, patios, foundation slabs, pool decks, patch and repair concrete, approach slabs, retaining walls, curb and gutter (civil concrete, light commercial and heavy commercial).
              </p>
              
              <p className="font-sans text-sm sm:text-base text-stone-600 mb-8 leading-relaxed font-medium">
                Operating from our headquarters in Menifee, CA, we combine architectural craftsmanship with structural engineering standards to build foundations that endure.
              </p>

              {/* Core Specialization Badges - Professional Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 rounded-xl border-2 border-stone-200 shadow-md hover:border-[#ea580c] transition-all flex flex-col items-center text-center group cursor-pointer hover:-translate-y-0.5">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 group-hover:bg-[#ea580c]/10 text-stone-900 group-hover:text-[#ea580c] flex items-center justify-center mb-3 transition-colors">
                    <span className="material-symbols-outlined text-2xl font-bold">domain</span>
                  </div>
                  <span className="font-display text-sm font-black uppercase text-stone-900 tracking-tight">Architecture</span>
                  <span className="font-mono text-[11px] text-stone-500 uppercase mt-1 font-bold">Design-Grade</span>
                </div>
                <div className="bg-white p-5 rounded-xl border-2 border-stone-200 shadow-md hover:border-[#ea580c] transition-all flex flex-col items-center text-center group cursor-pointer hover:-translate-y-0.5">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 group-hover:bg-[#ea580c]/10 text-stone-900 group-hover:text-[#ea580c] flex items-center justify-center mb-3 transition-colors">
                    <span className="material-symbols-outlined text-2xl font-bold">design_services</span>
                  </div>
                  <span className="font-display text-sm font-black uppercase text-stone-900 tracking-tight">Decorative</span>
                  <span className="font-mono text-[11px] text-stone-500 uppercase mt-1 font-bold">Color &amp; Seal</span>
                </div>
                <div className="bg-white p-5 rounded-xl border-2 border-stone-200 shadow-md hover:border-[#ea580c] transition-all flex flex-col items-center text-center group cursor-pointer hover:-translate-y-0.5">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 group-hover:bg-[#ea580c]/10 text-stone-900 group-hover:text-[#ea580c] flex items-center justify-center mb-3 transition-colors">
                    <span className="material-symbols-outlined text-2xl font-bold">engineering</span>
                  </div>
                  <span className="font-display text-sm font-black uppercase text-stone-900 tracking-tight">Construction</span>
                  <span className="font-mono text-[11px] text-stone-500 uppercase mt-1 font-bold">Heavy Civil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. SERVICES MATRIX */}
      {/* ======================================================== */}
      <section className="w-full bg-surface-container-lowest py-20 lg:py-28" id="services-matrix">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Header with Organized Quality Callout */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-8 pb-8 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2 h-6 bg-[#ea580c] rounded-sm" />
                <span className="font-mono text-xs uppercase tracking-wider text-stone-700 font-extrabold">
                  Specialized Concrete Divisions
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-900 uppercase tracking-tight font-black">
                Engineered Capabilities
              </h2>
            </div>

            {/* Organized C-8 Quality Standards Callout */}
            <div className="bg-stone-50 border-2 border-stone-200 border-l-4 border-l-[#ea580c] p-5 sm:p-6 rounded-xl shadow-sm max-w-lg flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#ea580c]/10 border border-[#ea580c]/30 flex items-center justify-center shrink-0 text-[#ea580c]">
                <span className="material-symbols-outlined text-2xl font-bold">verified</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-stone-900 font-black">
                    California C-8 Specification Standards
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                  Every yard poured conforms to stringent California C-8 building codes, laser-leveled tolerances, and custom finish requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Grid of 3 Specialized Divisions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONCRETE_DIVISIONS.map((division) => (
              <ActionCard
                key={division.id}
                division={division}
                onInspect={onInspectDivision}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. FINANCING PARTNER HIGHLIGHT: SYNCHRONY BANK (Crisp & Transparent) */}
      {/* ======================================================== */}
      <section
        id="financing-section"
        className="relative w-full overflow-hidden py-16 lg:py-20 bg-cover bg-center border-y border-white/10"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDS4Y827BdzsmP3Y5l27UF2tfyuoTkmWGgz_rtWrFAL-Mw_gON714hqpwEwhMUSOsW6xDki2cTbTgEOlBaBbv0gaI1BHwtHySdDkZx88AfA7vi8TFwzuz15bQ8yxzpB4tmVfUNIn4VUMP5F2FfK1F4IO4QrRXbVrVW6LK_nq1Xi9YEvMtY2W8l9ZNKsTE8FpABLIdgg1kS6MlBFti82UUSMp_oks_QdmUTkF_oBLBA")`,
        }}
      >
        {/* Crystal clear dark vignette scrim (Zero blur / Zero fog) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85 z-10" />

        <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Solid, Transparent & High-Contrast Card without Fog */}
          <div className="bg-[#0b0f16]/90 border-2 border-white/25 p-8 sm:p-10 lg:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10 rounded-2xl">
            <div className="max-w-2xl space-y-4">
              {/* Top Pill Badge with 100% White Text */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/80 text-white font-mono text-xs uppercase tracking-wider border border-white/40 rounded-full font-extrabold shadow-md">
                <span className="w-2.5 h-2.5 bg-surveyor-lime rounded-full shadow-[0_0_8px_#6EF712]" />
                <span className="text-white font-extrabold tracking-wider">
                  Financing Available Through Synchrony Bank
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase text-white tracking-tight font-black leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                Upgrade Your Concrete Without Delay
              </h2>

              <p className="font-sans text-base sm:text-lg text-white leading-relaxed font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                Morning Star Concrete Construction partners with <strong className="text-white font-extrabold underline underline-offset-4 decoration-white">Synchrony Bank</strong> to provide flexible financing solutions for residential driveways, patios, pool decks, and retaining walls. Fast approvals, competitive rates, and predictable monthly terms.
              </p>

              {/* High-visibility feature chips with white text */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="px-3.5 py-1.5 bg-white/10 border border-white/30 text-white font-mono text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-sm">
                  <span className="text-surveyor-lime font-bold">✓</span> <span className="text-white">0% Intro APR Options</span>
                </span>
                <span className="px-3.5 py-1.5 bg-white/10 border border-white/30 text-white font-mono text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-sm">
                  <span className="text-surveyor-lime font-bold">✓</span> <span className="text-white">Soft Credit Check (No Score Impact)</span>
                </span>
                <span className="px-3.5 py-1.5 bg-white/10 border border-white/30 text-white font-mono text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-sm">
                  <span className="text-surveyor-lime font-bold">✓</span> <span className="text-white">Up to $35,000+ Project Limit</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
              {/* CHECK FINANCING OPTIONS button with 100% White Text & White Border */}
              <button
                onClick={onOpenFinancing}
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white hover:text-black text-white font-mono text-xs uppercase tracking-wider font-black text-center transition-all shadow-xl cursor-pointer border-2 border-white hover:scale-105"
              >
                CHECK FINANCING OPTIONS
              </button>

              <button
                onClick={() => onOpenEstimate()}
                className="w-full sm:w-auto px-8 py-4 bg-[#ea580c] hover:bg-[#c2410c] text-white font-mono text-xs tracking-widest uppercase transition-all shadow-2xl font-black cursor-pointer border-2 border-white/30 hover:scale-105"
              >
                REQUEST A FREE ESTIMATE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. FINISH COMPARISON MATRIX */}
      {/* ======================================================== */}
      <section className="w-full bg-concrete-honed py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
              Surface Engineering Specs
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-stone-charcoal uppercase tracking-tight font-bold mt-2 mb-4">
              Concrete Finishes &amp; Applications
            </h2>
            <p className="font-sans text-sm sm:text-base text-secondary">
              Compare our primary surface methods engineered for durability, friction coefficient, and visual elegance.
            </p>
          </div>

          <div className="overflow-x-auto bg-white shadow-sm border border-stone-200">
            <table className="w-full text-left font-sans text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-charcoal text-concrete-sand font-mono text-xs uppercase tracking-wider">
                  <th className="p-4 lg:p-5">Concrete Finish</th>
                  <th className="p-4 lg:p-5">Primary Applications</th>
                  <th className="p-4 lg:p-5">Texture &amp; Slip Resistance</th>
                  <th className="p-4 lg:p-5">Sealing Requirements</th>
                  <th className="p-4 lg:p-5">Durability Class</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {FINISH_SPECIFICATIONS.map((spec, i) => (
                  <tr key={i} className="hover:bg-concrete-sand/60 transition-colors">
                    <td className="p-4 lg:p-5 font-display text-stone-charcoal font-bold">
                      {spec.finishName}
                    </td>
                    <td className="p-4 lg:p-5 text-secondary">{spec.applications}</td>
                    <td className="p-4 lg:p-5 text-secondary">
                      <span className="px-2 py-0.5 bg-surface-container-high font-mono text-[10px] uppercase rounded">
                        {spec.textureSlipResistance}
                      </span>
                    </td>
                    <td className="p-4 lg:p-5 text-secondary">{spec.sealingRequirements}</td>
                    <td className="p-4 lg:p-5 text-stone-charcoal font-semibold">
                      {spec.durabilityClass}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. PROJECT PORTFOLIO SHOWCASE */}
      {/* ======================================================== */}
      <section id="portfolio-gallery" className="w-full bg-white py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-5 bg-[#ea580c]" />
                <span className="font-mono text-xs uppercase tracking-wider text-stone-700 font-extrabold">
                  Field Gallery
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-stone-900 uppercase tracking-tight font-black">
                Featured Concrete Projects
              </h2>
            </div>
            
            {/* Category tabs: High-contrast architectural filter pills */}
            <div className="flex flex-wrap items-center gap-2.5 p-1.5 bg-stone-100 border-2 border-stone-300 rounded-full shadow-inner">
              {(['All', 'Structural', 'Decorative', 'Civil'] as const).map((cat) => {
                const isActive = portfolioCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setPortfolioCategory(cat)}
                    className={`px-5 py-2 font-mono text-xs uppercase tracking-wider font-black transition-all cursor-pointer rounded-full ${
                      isActive
                        ? 'bg-[#0b0f16] text-white shadow-md border-2 border-[#0b0f16]'
                        : 'bg-white text-stone-800 hover:text-black hover:bg-stone-200 border-2 border-transparent'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-[#0b0f16] overflow-hidden shadow-xl border-2 border-stone-200 hover:border-stone-400 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="h-80 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url("${project.imageUrl}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent p-6 flex flex-col justify-end text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase text-surveyor-lime font-black tracking-wider px-2.5 py-0.5 bg-black/75 rounded-full border border-surveyor-lime/40">
                      {project.category}
                    </span>
                    <span className="font-mono text-[11px] text-zinc-300 font-bold bg-black/60 px-2 py-0.5 rounded">
                      {project.location}
                    </span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-black uppercase tracking-tight mb-2 text-white drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-200 line-clamp-2 font-medium">
                    {project.specs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. CAREERS / EMPLOYMENT SECTION (In Sync with Project Theme) */}
      {/* ======================================================== */}
      <section id="careers-section" className="w-full bg-concrete-sand py-16 lg:py-20 border-t border-stone-300">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Synchronized Solid Dark Architectural Card */}
          <div className="bg-[#0b0f16]/95 border-2 border-white/25 p-8 sm:p-10 lg:p-14 rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10 text-white relative">
            <div className="max-w-2xl space-y-4">
              {/* Badge with White Text */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/80 text-white font-mono text-xs uppercase tracking-wider border border-white/40 rounded-full font-extrabold shadow-md">
                <span className="w-2.5 h-2.5 bg-surveyor-lime rounded-full shadow-[0_0_8px_#6EF712] animate-pulse" />
                <span className="text-white font-extrabold tracking-wider">
                  Join Our Field Crew • Southern California C-8 Certified
                </span>
              </div>

              {/* High-Contrast Crisp White Title */}
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white font-black leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                Career Opportunities in Concrete Construction
              </h2>

              {/* 100% Readable Description */}
              <p className="font-sans text-base sm:text-lg text-white leading-relaxed font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                Looking for experienced concrete finishers, form carpenters, and heavy civil equipment operators. We offer top-tier competitive pay, consistent year-round 40+ hours, and safety-certified job sites across Menifee and the Inland Empire.
              </p>

              {/* High-visibility benefit chips */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="px-3.5 py-1.5 bg-white/10 border border-white/30 text-white font-mono text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-sm">
                  <span className="text-surveyor-lime font-bold">✓</span> <span className="text-white">$22 – $42 / hr Hourly Pay</span>
                </span>
                <span className="px-3.5 py-1.5 bg-white/10 border border-white/30 text-white font-mono text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-sm">
                  <span className="text-surveyor-lime font-bold">✓</span> <span className="text-white">Year-Round 40+ Hours / Wk</span>
                </span>
                <span className="px-3.5 py-1.5 bg-white/10 border border-white/30 text-white font-mono text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-sm">
                  <span className="text-surveyor-lime font-bold">✓</span> <span className="text-white">OSHA Safety Certified</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
              <a
                href={`mailto:${COMPANY_INFO.bidsEmail}?subject=Employment%20Inquiry%20-%20Morning%20Star%20Concrete`}
                className="w-full sm:w-auto px-8 py-4 bg-surveyor-lime hover:bg-[#5cd40f] text-black font-mono text-xs uppercase tracking-wider font-black text-center transition-all shadow-2xl cursor-pointer border-2 border-surveyor-lime hover:scale-105 inline-block"
              >
                APPLY VIA EMAIL
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white hover:text-black text-white font-mono text-xs uppercase tracking-wider font-black text-center transition-all shadow-xl cursor-pointer border-2 border-white hover:scale-105 inline-block"
              >
                CALL HR: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. ESTIMATE REQUEST & CONTACT SECTION */}
      {/* ======================================================== */}
      <section
        id="estimate-form"
        className="w-full bg-stone-charcoal text-white py-20 lg:py-28 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 22, 28, 0.88), rgba(18, 22, 28, 0.94)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmGNnCQqMWoWuoT2Y42jBiVoLsy54SfCzcz1CJc0YeddDcxNWT-4YNFz3E8lUEkp26nFbe2NAn4dvmajwbzAiKRfrtdG5G1OuswlZYuFjGuTZha9zOeEeZGXtNrwhuZ63drNAtqUibbkfAYbVEtbv0AzlbSMl3j6PYITvzCORW_cK3NEAI9ZeW9iN-g-8VqEC9wm621iFx9sQgRWTN1e2hUNpyrVU2d22gnkbtWUo")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Meta Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-surveyor-lime rounded-full" />
                  <span className="font-mono text-xs uppercase tracking-wider text-surveyor-lime font-bold">
                    Direct Dispatch • Menifee Headquarters
                  </span>
                </div>
                
                <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white font-bold mb-6">
                  Request Your Free Project Estimate
                </h2>
                
                <p className="font-sans text-base text-concrete-aggregate mb-8 leading-relaxed">
                  With 25+ years in the Southern California concrete trade, our estimating team reviews site specs, architectural plans, and structural loads within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-rebar-steel flex items-center justify-center text-surveyor-lime shrink-0">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <div className="font-mono text-xs uppercase text-concrete-aggregate">Office Address</div>
                      <div className="font-display text-base text-white">{COMPANY_INFO.address}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-rebar-steel flex items-center justify-center text-surveyor-lime shrink-0">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <div className="font-mono text-xs uppercase text-concrete-aggregate">Direct Telephone</div>
                      <a
                        className="font-display text-base text-white hover:text-surveyor-lime transition-colors block"
                        href={`tel:${COMPANY_INFO.phoneRaw}`}
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-rebar-steel flex items-center justify-center text-surveyor-lime shrink-0">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <div className="font-mono text-xs uppercase text-concrete-aggregate">Estimating Email</div>
                      <a
                        className="font-display text-base text-white hover:text-surveyor-lime transition-colors block"
                        href={`mailto:${COMPANY_INFO.email}`}
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 bg-rebar-steel/30 p-4 border border-white/5">
                <span className="font-mono text-xs text-concrete-aggregate uppercase block">
                  California Contractor State License Board
                </span>
                <span className="font-sans text-sm text-white font-semibold block mt-0.5">
                  Classification C-8: Concrete Specialist #984210
                </span>
              </div>
            </div>

            {/* Interactive Estimate Input Form */}
            <div className="lg:col-span-7 bg-concrete-sand p-8 lg:p-12 text-stone-charcoal shadow-2xl">
              {formAlert && (
                <div className="mb-6 p-4 bg-primary text-white font-sans text-sm font-semibold rounded shadow">
                  ✓ {formAlert}
                </div>
              )}

              <form onSubmit={handleInlineSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-stone-900 font-bold mb-2" htmlFor="fullName">
                      Full Name *
                    </label>
                    <input
                      className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-900 outline-none focus:ring-2 focus:ring-[#ea580c] shadow-sm border border-stone-300 font-medium"
                      id="fullName"
                      placeholder="John Doe"
                      required
                      type="text"
                      value={inlineEstimateData.fullName}
                      onChange={(e) => setInlineEstimateData({ ...inlineEstimateData, fullName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-stone-900 font-bold mb-2" htmlFor="phoneNum">
                      Phone Number *
                    </label>
                    <input
                      className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-900 outline-none focus:ring-2 focus:ring-[#ea580c] shadow-sm border border-stone-300 font-medium"
                      id="phoneNum"
                      placeholder="(951) 000-0000"
                      required
                      type="tel"
                      value={inlineEstimateData.phoneNum}
                      onChange={(e) => setInlineEstimateData({ ...inlineEstimateData, phoneNum: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-stone-900 font-bold mb-2" htmlFor="emailAddr">
                      Email Address *
                    </label>
                    <input
                      className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-900 outline-none focus:ring-2 focus:ring-[#ea580c] shadow-sm border border-stone-300 font-medium"
                      id="emailAddr"
                      placeholder="john@example.com"
                      required
                      type="email"
                      value={inlineEstimateData.emailAddr}
                      onChange={(e) => setInlineEstimateData({ ...inlineEstimateData, emailAddr: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-stone-900 font-bold mb-2" htmlFor="projectType">
                      Project Scope / Classification *
                    </label>
                    <select
                      className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-900 outline-none focus:ring-2 focus:ring-[#ea580c] shadow-sm border border-stone-300 font-medium"
                      id="projectType"
                      value={inlineEstimateData.projectType}
                      onChange={(e) => setInlineEstimateData({ ...inlineEstimateData, projectType: e.target.value })}
                    >
                      <option value="residential-driveway">Residential Driveway / Sidewalk (Broom Finish)</option>
                      <option value="decorative-stamped">Decorative Stamped Concrete (Color &amp; Seal)</option>
                      <option value="patio-pool">Patio Slab or Pool Deck</option>
                      <option value="foundation-structural">Commercial Foundation Slab / Approach Slab</option>
                      <option value="civil-curb">Curb &amp; Gutter / Civil Infrastructure</option>
                      <option value="retaining-wall">Engineered Retaining Wall</option>
                      <option value="patch-repair">Concrete Patch &amp; Repair</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-stone-900 font-bold mb-2" htmlFor="projectLocation">
                    Site Location (City or Zip Code) *
                  </label>
                  <input
                    className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-900 outline-none focus:ring-2 focus:ring-[#ea580c] shadow-sm border border-stone-300 font-medium"
                    id="projectLocation"
                    placeholder="e.g. Menifee, Murrieta, Temecula, Riverside"
                    required
                    type="text"
                    value={inlineEstimateData.projectLocation}
                    onChange={(e) => setInlineEstimateData({ ...inlineEstimateData, projectLocation: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-stone-900 font-bold mb-2" htmlFor="projectDetails">
                    Project Dimensions or Specifications
                  </label>
                  <textarea
                    className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-900 outline-none focus:ring-2 focus:ring-[#ea580c] shadow-sm border border-stone-300 font-medium"
                    id="projectDetails"
                    placeholder="Approximate square footage, desired thickness (4'', 6'', 8''), finish type, and any structural requirements..."
                    rows={4}
                    value={inlineEstimateData.projectDetails}
                    onChange={(e) => setInlineEstimateData({ ...inlineEstimateData, projectDetails: e.target.value })}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    className="w-4 h-4 text-[#ea580c] accent-[#ea580c] cursor-pointer"
                    id="syncFinancing"
                    type="checkbox"
                    checked={inlineEstimateData.syncFinancing}
                    onChange={(e) => setInlineEstimateData({ ...inlineEstimateData, syncFinancing: e.target.checked })}
                  />
                  <label className="font-sans text-xs text-stone-800 font-medium cursor-pointer" htmlFor="syncFinancing">
                    I am interested in exploring flexible financing options with Synchrony Bank.
                  </label>
                </div>

                <button
                  className="w-full py-4 bg-[#ea580c] hover:bg-[#c2410c] text-white font-mono text-xs uppercase tracking-wider font-black transition-all shadow-xl cursor-pointer hover:scale-[1.01]"
                  type="submit"
                >
                  Submit Estimate Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;

