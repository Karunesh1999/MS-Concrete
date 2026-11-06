import React, { useState } from 'react';
import { SectionHeader } from '../../components/common/SectionHeader.tsx';
import { COMPANY_INFO } from '../../data/concreteData.ts';

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectScope: 'residential-driveway',
    sector: 'residential',
    sqFt: 800,
    thickness: 4,
    location: '',
    details: '',
    needFinancing: false,
  });

  const [submitted, setSubmitted] = useState(false);

  // Approximate concrete cubic yards calculation: (sqFt * (thickness/12)) / 27
  const cubicYards = Math.ceil((formData.sqFt * (formData.thickness / 12)) / 27 * 1.1); // +10% waste

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        projectScope: 'residential-driveway',
        sector: 'residential',
        sqFt: 800,
        thickness: 4,
        location: '',
        details: '',
        needFinancing: false,
      });
    }, 4000);
  };

  const serviceAreas = [
    'Menifee',
    'Murrieta',
    'Temecula',
    'Winchester',
    'Hemet',
    'Lake Elsinore',
    'Perris',
    'Wildomar',
    'Corona',
    'Riverside',
    'Moreno Valley',
    'San Jacinto',
  ];

  return (
    <div className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeader
          category="Direct Dispatch & Estimating"
          title="Let’s Discuss Your Concrete Project"
          subtitle="Our estimating team reviews residential blueprints, commercial specs, and site conditions across the Inland Empire with guaranteed 24-hour turnaround."
          centered
        />

        {/* Contact Quick Meta Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-stone-charcoal text-white p-6 sm:p-8 rounded-xl shadow-lg border border-stone-800 flex items-start gap-4">
            <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0 rounded-lg">
              <span className="material-symbols-outlined text-2xl text-white">location_on</span>
            </div>
            <div>
              <span className="font-mono text-xs uppercase text-surveyor-lime font-bold tracking-wider block mb-1">
                Office &amp; Headquarters
              </span>
              <div className="font-display text-base font-bold text-white leading-snug">
                {COMPANY_INFO.address}
              </div>
              <p className="font-sans text-xs text-concrete-aggregate mt-1">
                Field dispatch hub: {COMPANY_INFO.hqAddress}
              </p>
            </div>
          </div>

          <div className="bg-stone-charcoal text-white p-6 sm:p-8 rounded-xl shadow-lg border border-stone-800 flex items-start gap-4">
            <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0 rounded-lg">
              <span className="material-symbols-outlined text-2xl text-white">call</span>
            </div>
            <div>
              <span className="font-mono text-xs uppercase text-surveyor-lime font-bold tracking-wider block mb-1">
                Telephone Dispatch
              </span>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="font-display text-xl font-bold text-white hover:text-surveyor-lime transition-colors block"
              >
                {COMPANY_INFO.phone}
              </a>
              <p className="font-sans text-xs text-concrete-aggregate mt-1">
                Field Hours: {COMPANY_INFO.hours}
              </p>
            </div>
          </div>

          <div className="bg-stone-charcoal text-white p-6 sm:p-8 rounded-xl shadow-lg border border-stone-800 flex items-start gap-4">
            <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0 rounded-lg">
              <span className="material-symbols-outlined text-2xl text-white">mail</span>
            </div>
            <div>
              <span className="font-mono text-xs uppercase text-surveyor-lime font-bold tracking-wider block mb-1">
                Estimating &amp; Bids
              </span>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="font-display text-base font-bold text-white hover:text-surveyor-lime transition-colors block"
              >
                {COMPANY_INFO.email}
              </a>
              <p className="font-sans text-xs text-concrete-aggregate mt-1">
                Plans / RFPs: {COMPANY_INFO.bidsEmail}
              </p>
            </div>
          </div>
        </div>

        {/* Form & Estimator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Detailed Request Form */}
          <div className="lg:col-span-7 bg-concrete-sand p-8 lg:p-12 rounded-2xl border border-stone-300 shadow-xl">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-stone-charcoal mb-2">
              Send Project Specifications
            </h3>
            <p className="font-sans text-xs text-secondary mb-6">
              Southern California C-8 Concrete Specialist • Lic. #984210 • $5M Bonded
            </p>

            {submitted ? (
              <div className="p-8 bg-primary text-white text-center rounded-xl shadow-lg space-y-3">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
                <h4 className="font-display text-xl font-bold uppercase">Proposal Request Dispatched!</h4>
                <p className="font-sans text-sm text-primary-fixed-dim">
                  Thank you, <strong>{formData.fullName}</strong>. An estimator will calculate material takeoff and call you at {formData.phone} within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-secondary mb-1.5" htmlFor="contact-name">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-charcoal border border-stone-300 outline-none focus:ring-2 focus:ring-primary shadow-sm"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-secondary mb-1.5" htmlFor="contact-phone">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      required
                      type="tel"
                      placeholder="(951) 000-0000"
                      className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-charcoal border border-stone-300 outline-none focus:ring-2 focus:ring-primary shadow-sm"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-secondary mb-1.5" htmlFor="contact-email">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-charcoal border border-stone-300 outline-none focus:ring-2 focus:ring-primary shadow-sm"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-secondary mb-1.5" htmlFor="contact-sector">
                      Project Classification *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, sector: 'residential' })}
                        className={`py-3 font-mono text-xs uppercase font-bold border transition-colors cursor-pointer ${
                          formData.sector === 'residential'
                            ? 'bg-stone-charcoal text-white border-stone-charcoal'
                            : 'bg-white text-stone-700 border-stone-300'
                        }`}
                      >
                        Residential
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, sector: 'commercial' })}
                        className={`py-3 font-mono text-xs uppercase font-bold border transition-colors cursor-pointer ${
                          formData.sector === 'commercial'
                            ? 'bg-stone-charcoal text-white border-stone-charcoal'
                            : 'bg-white text-stone-700 border-stone-300'
                        }`}
                      >
                        Commercial
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-secondary mb-1.5" htmlFor="contact-scope">
                      Concrete Scope *
                    </label>
                    <select
                      id="contact-scope"
                      className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-charcoal border border-stone-300 outline-none focus:ring-2 focus:ring-primary shadow-sm"
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    >
                      <option value="residential-driveway">Driveway / Sidewalk (Broom Finish)</option>
                      <option value="decorative-stamped">Decorative Stamped Patio / Pool Deck</option>
                      <option value="foundation-structural">Structural Foundation Slab</option>
                      <option value="civil-curb">Curb &amp; Gutter / Approach Slab</option>
                      <option value="retaining-wall">Engineered Retaining Wall</option>
                      <option value="patch-repair">Concrete Patch &amp; Spall Repair</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-secondary mb-1.5" htmlFor="contact-loc">
                      Jobsite City / Zip *
                    </label>
                    <input
                      id="contact-loc"
                      required
                      type="text"
                      placeholder="e.g. Menifee, Murrieta, Temecula"
                      className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-charcoal border border-stone-300 outline-none focus:ring-2 focus:ring-primary shadow-sm"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-secondary mb-1.5" htmlFor="contact-details">
                    Project Description &amp; Requirements
                  </label>
                  <textarea
                    id="contact-details"
                    rows={4}
                    placeholder="Describe jobsite access, whether demo of old concrete is required, desired color dyes, and timeline..."
                    className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-charcoal border border-stone-300 outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    id="contact-sync"
                    type="checkbox"
                    checked={formData.needFinancing}
                    onChange={(e) => setFormData({ ...formData, needFinancing: e.target.checked })}
                    className="w-4 h-4 text-primary accent-primary"
                  />
                  <label htmlFor="contact-sync" className="font-sans text-xs text-stone-700 cursor-pointer">
                    I would like to explore 0% or low APR financing through Synchrony Bank.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-stone-charcoal transition-colors shadow-lg cursor-pointer"
                >
                  Request Official Project Estimate
                </button>
              </form>
            )}
          </div>

          {/* Quick Yardage Calculator & Service Area */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Takeoff Calculator */}
            <div className="bg-stone-charcoal text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-stone-800">
              <span className="font-mono text-xs uppercase text-surveyor-lime font-bold tracking-wider block mb-1">
                Concrete Volume Estimator
              </span>
              <h4 className="font-display text-xl font-bold uppercase text-white mb-4">
                Estimated Ready-Mix Volume
              </h4>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between font-mono text-xs text-concrete-aggregate mb-1">
                    <span>Approximate Area:</span>
                    <span className="text-white font-bold">{formData.sqFt} Sq. Ft.</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={formData.sqFt}
                    onChange={(e) => setFormData({ ...formData, sqFt: Number(e.target.value) })}
                    className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-surveyor-lime"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-mono text-xs text-concrete-aggregate mb-1">
                    <span>Slab Thickness:</span>
                    <span className="text-white font-bold">{formData.thickness} Inches</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[4, 6, 8].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setFormData({ ...formData, thickness: t })}
                        className={`py-1.5 font-mono text-xs font-bold rounded border ${
                          formData.thickness === t
                            ? 'bg-surveyor-lime text-stone-900 border-surveyor-lime'
                            : 'bg-stone-800 text-stone-300 border-stone-700'
                        }`}
                      >
                        {t}" {t === 4 ? '(Patio/Walk)' : t === 6 ? '(Driveway)' : '(Heavy Load)'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-rebar-steel/40 p-4 rounded-lg flex items-center justify-between border border-white/10">
                <span className="font-mono text-xs uppercase text-concrete-sand">
                  Estimated Ready-Mix Yards:
                </span>
                <span className="font-display text-2xl font-black text-surveyor-lime">
                  ~{cubicYards} Cu. Yds
                </span>
              </div>
              <p className="font-sans text-[11px] text-concrete-aggregate mt-2">
                Includes 10% standard overage buffer for compaction, subgrade variation, and form expansion.
              </p>
            </div>

            {/* Regional Service Areas */}
            <div className="bg-surface-container-high p-6 sm:p-8 rounded-2xl border border-stone-200">
              <span className="font-mono text-xs uppercase text-primary font-bold tracking-wider block mb-1">
                Regional Coverage
              </span>
              <h4 className="font-display text-xl font-bold uppercase text-stone-charcoal mb-4">
                Inland Empire &amp; SoCal Service Cities
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {serviceAreas.map((city) => (
                  <div key={city} className="flex items-center gap-1.5 font-sans text-xs text-stone-700">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;

