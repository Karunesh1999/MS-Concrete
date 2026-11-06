import React, { useState } from 'react';
import { SectionHeader } from '../../components/common/SectionHeader.tsx';
import { COMPANY_INFO } from '../../data/concreteData.ts';

export const CareersScreen: React.FC = () => {
  const [applicantData, setApplicantData] = useState({
    fullName: '',
    phone: '',
    email: '',
    position: 'finisher',
    experienceYears: '3-5',
    hasDriversLicense: true,
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const jobPositions = [
    {
      id: 'finisher',
      title: 'Lead Concrete Finisher',
      rate: '$32.00 – $42.00 / hr',
      type: 'Full-Time • Menifee & Inland Empire',
      requirements: [
        '5+ years experience in broom finish, stamped patterns, and power troweling',
        'Ability to read grades, set string lines, and execute curb/gutter pours',
        'Strong leadership skills directing pour crews of 4–8 men',
      ],
    },
    {
      id: 'carpenter',
      title: 'Formwork Carpenter & Rebar Specialist',
      rate: '$28.00 – $36.00 / hr',
      type: 'Full-Time • Southern California',
      requirements: [
        '3+ years setting wood/steel forms for foundation slabs and retaining walls',
        'Proficiency tying #4, #5, #6 rebar cages to California seismic code specs',
        'Laser level operation and accurate sub-base grading',
      ],
    },
    {
      id: 'operator',
      title: 'Civil Heavy Equipment / Skid-Steer Operator',
      rate: '$30.00 – $38.00 / hr',
      type: 'Full-Time • Inland Empire Area',
      requirements: [
        'Experience operating Bobcat, mini-excavator, and concrete demolition breakers',
        'Knowledge of sub-grade compaction, haul trucks, and trenching for footing',
        'Clean California commercial or standard driver’s license with medical card',
      ],
    },
    {
      id: 'laborer',
      title: 'Concrete Prep & Demolition Laborer',
      rate: '$22.00 – $28.00 / hr',
      type: 'Full-Time • Field Dispatch',
      requirements: [
        'Physically fit, reliable, and punctual for early morning 6:00 AM dispatch',
        'Willingness to learn stamping, broom texturing, and concrete patching',
        'Valid photo ID and reliable transportation to job sites',
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setApplicantData({
        fullName: '',
        phone: '',
        email: '',
        position: 'finisher',
        experienceYears: '3-5',
        hasDriversLicense: true,
        notes: '',
      });
    }, 4500);
  };

  return (
    <div className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeader
          category="Field Crew Recruitment"
          title="Employment & Career Opportunities"
          subtitle="Join Southern California’s premier C-8 concrete team. We offer stable year-round projects, competitive hourly compensation, and safety-certified jobsites."
          centered
        />

        {/* Benefits Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-surface-container-high p-5 rounded-lg border border-stone-200 text-center">
            <span className="material-symbols-outlined text-primary text-3xl mb-1">payments</span>
            <div className="font-display text-sm font-bold uppercase text-stone-charcoal">Weekly Direct Deposit</div>
            <div className="font-sans text-xs text-secondary mt-0.5">Competitive hourly pay + OT</div>
          </div>
          <div className="bg-surface-container-high p-5 rounded-lg border border-stone-200 text-center">
            <span className="material-symbols-outlined text-primary text-3xl mb-1">calendar_today</span>
            <div className="font-display text-sm font-bold uppercase text-stone-charcoal">Year-Round Work</div>
            <div className="font-sans text-xs text-secondary mt-0.5">Consistent 40+ hours per week</div>
          </div>
          <div className="bg-surface-container-high p-5 rounded-lg border border-stone-200 text-center">
            <span className="material-symbols-outlined text-primary text-3xl mb-1">security</span>
            <div className="font-display text-sm font-bold uppercase text-stone-charcoal">Safety Compliance</div>
            <div className="font-sans text-xs text-secondary mt-0.5">OSHA certified equipment &amp; gear</div>
          </div>
          <div className="bg-surface-container-high p-5 rounded-lg border border-stone-200 text-center">
            <span className="material-symbols-outlined text-primary text-3xl mb-1">trending_up</span>
            <div className="font-display text-sm font-bold uppercase text-stone-charcoal">Career Growth</div>
            <div className="font-sans text-xs text-secondary mt-0.5">Promotion to Foreman &amp; Estimator</div>
          </div>
        </div>

        {/* Open Job Positions */}
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-stone-charcoal mb-8">
          Current Openings in Menifee &amp; Inland Empire
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {jobPositions.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h4 className="font-display text-lg font-bold uppercase tracking-tight text-stone-charcoal">
                    {job.title}
                  </h4>
                  <span className="px-3 py-1 bg-surface-container text-primary font-mono text-xs font-bold rounded">
                    {job.rate}
                  </span>
                </div>
                <div className="font-mono text-xs text-secondary font-semibold mb-4">
                  {job.type}
                </div>
                <div className="space-y-2 mb-6">
                  {job.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2 font-sans text-xs text-stone-600">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#apply-form"
                onClick={() => setApplicantData(prev => ({ ...prev, position: job.id }))}
                className="w-full py-2.5 bg-[#ea580c] hover:bg-[#c2410c] text-white font-mono text-xs uppercase tracking-wider font-extrabold text-center rounded transition-all shadow-md block cursor-pointer"
              >
                Apply for this Role
              </a>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div id="apply-form" className="bg-concrete-sand p-8 lg:p-12 rounded-2xl border border-stone-300 shadow-xl max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-4 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-wider text-secondary font-bold">
              Direct Human Resources Dispatch
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-charcoal mb-4">
            Employment Application Form
          </h3>
          <p className="font-sans text-xs sm:text-sm text-secondary mb-8">
            Complete the form below or email your resume directly to{' '}
            <a href={`mailto:${COMPANY_INFO.bidsEmail}`} className="text-primary font-bold underline">
              {COMPANY_INFO.bidsEmail}
            </a>
          </p>

          {submitted ? (
            <div className="p-8 bg-primary text-white text-center rounded-xl shadow-lg space-y-3">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
              <h4 className="font-display text-xl font-bold uppercase">Application Submitted Successfully!</h4>
              <p className="font-sans text-sm text-primary-fixed-dim">
                Thank you for applying to Morning Star Concrete Construction. Our field superintendent will review your experience and call you for an interview.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-secondary mb-2" htmlFor="applicant-name">
                    Full Name *
                  </label>
                  <input
                    id="applicant-name"
                    required
                    type="text"
                    placeholder="First and Last Name"
                    className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-charcoal border border-stone-300 outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    value={applicantData.fullName}
                    onChange={(e) => setApplicantData({ ...applicantData, fullName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-secondary mb-2" htmlFor="applicant-phone">
                    Phone Number *
                  </label>
                  <input
                    id="applicant-phone"
                    required
                    type="tel"
                    placeholder="(951) 000-0000"
                    className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-charcoal border border-stone-300 outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    value={applicantData.phone}
                    onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-secondary mb-2" htmlFor="applicant-email">
                    Email Address *
                  </label>
                  <input
                    id="applicant-email"
                    required
                    type="email"
                    placeholder="you@email.com"
                    className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-charcoal border border-stone-300 outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    value={applicantData.email}
                    onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-secondary mb-2" htmlFor="applicant-position">
                    Position Desired *
                  </label>
                  <select
                    id="applicant-position"
                    className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-charcoal border border-stone-300 outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    value={applicantData.position}
                    onChange={(e) => setApplicantData({ ...applicantData, position: e.target.value })}
                  >
                    <option value="finisher">Lead Concrete Finisher</option>
                    <option value="carpenter">Formwork Carpenter &amp; Rebar</option>
                    <option value="operator">Skid-Steer / Equipment Operator</option>
                    <option value="laborer">Concrete Prep &amp; Demolition Laborer</option>
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-secondary mb-2" htmlFor="applicant-exp">
                    Years of Concrete Exp. *
                  </label>
                  <select
                    id="applicant-exp"
                    className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-charcoal border border-stone-300 outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    value={applicantData.experienceYears}
                    onChange={(e) => setApplicantData({ ...applicantData, experienceYears: e.target.value })}
                  >
                    <option value="1-2">1 to 2 Years</option>
                    <option value="3-5">3 to 5 Years</option>
                    <option value="5-10">5 to 10 Years</option>
                    <option value="10+">10+ Years (Senior)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-secondary mb-2" htmlFor="applicant-notes">
                  Prior Experience &amp; References
                </label>
                <textarea
                  id="applicant-notes"
                  rows={4}
                  placeholder="Detail previous concrete contractors worked for, stamping/finishing certifications, and relevant heavy equipment skills..."
                  className="w-full bg-white px-4 py-3 font-sans text-sm text-stone-charcoal border border-stone-300 outline-none focus:ring-2 focus:ring-primary shadow-sm"
                  value={applicantData.notes}
                  onChange={(e) => setApplicantData({ ...applicantData, notes: e.target.value })}
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  id="drivers-license"
                  type="checkbox"
                  checked={applicantData.hasDriversLicense}
                  onChange={(e) => setApplicantData({ ...applicantData, hasDriversLicense: e.target.checked })}
                  className="w-4 h-4 text-primary accent-primary"
                />
                <label htmlFor="drivers-license" className="font-sans text-xs text-stone-700">
                  I possess a valid California Driver's License and dependable personal transportation.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#ea580c] hover:bg-[#c2410c] text-white font-mono text-xs uppercase tracking-wider font-black transition-all shadow-xl cursor-pointer hover:scale-[1.01]"
              >
                Submit Application for Review
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareersScreen;

