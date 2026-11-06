import React, { useState } from 'react';
import { SectionHeader } from '../../components/common/SectionHeader.tsx';
import { COMPANY_INFO } from '../../data/concreteData.ts';

interface FinancingScreenProps {
  onOpenEstimate: () => void;
}

export const FinancingScreen: React.FC<FinancingScreenProps> = ({ onOpenEstimate }) => {
  const [projectAmount, setProjectAmount] = useState(8500);
  const [termMonths, setTermMonths] = useState(36);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Simplified monthly payment calculation (approx 9.99% APR benchmark)
  const calculateMonthly = (amount: number, months: number) => {
    const monthlyRate = 0.0999 / 12;
    const payment = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(payment);
  };

  const estimatedMonthly = calculateMonthly(projectAmount, termMonths);

  const faqs = [
    {
      q: 'Will checking my financing rate impact my credit score?',
      a: 'Pre-qualifying through Synchrony Bank uses a soft credit check that does not impact your credit score. A hard credit inquiry is only initiated when you formally accept the terms.',
    },
    {
      q: 'Can I finance the entire concrete project including demo and materials?',
      a: 'Yes, Synchrony Bank financing covers 100% of approved project costs, including demolition, grading, aggregate base, concrete pours, rebar reinforcement, and decorative sealing.',
    },
    {
      q: 'Are there any prepayment penalties if I pay off early?',
      a: 'No. Synchrony financing offers complete flexibility with zero prepayment penalties or early payoff fees.',
    },
    {
      q: 'How fast can our concrete work start after financing approval?',
      a: 'Once approved, Morning Star Concrete schedules job site preparation and municipal permits immediately. Typical residential projects break ground within 5–7 business days.',
    },
  ];

  return (
    <div className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeader
          category="Synchrony Financial Partner"
          title="Flexible Financing for Concrete Projects"
          subtitle="Don't compromise on durability or aesthetics. Morning Star Concrete Construction partners with Synchrony Bank to offer transparent monthly payment solutions."
          centered
        />

        {/* Value Proposition Hero Banner */}
        <div className="relative bg-stone-charcoal text-white rounded-2xl overflow-hidden p-8 sm:p-14 mb-20 shadow-2xl border border-stone-800">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-surveyor-lime/10 border border-surveyor-lime/40 text-surveyor-lime font-mono text-xs uppercase tracking-wider font-bold rounded-full">
              <span className="w-2 h-2 bg-surveyor-lime rounded-full" />
              Verified Contractor Portal
            </div>
            <h3 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
              Upgrade Your Driveway or Patio Today. Pay Over Time.
            </h3>
            <p className="font-sans text-sm sm:text-base text-concrete-sand leading-relaxed max-w-2xl">
              From decorative stamped pool decks to high-load foundation slabs, access competitive interest rates, low monthly payments, and rapid pre-qualification.
            </p>
          </div>
        </div>

        {/* Interactive Payment Estimator */}
        <div className="bg-concrete-sand p-8 sm:p-12 rounded-2xl border border-stone-300 shadow-xl mb-20">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-4 bg-primary" />
              <span className="font-mono text-xs uppercase tracking-wider text-secondary font-bold">
                Interactive Estimate Tool
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-charcoal">
              Monthly Payment Estimator
            </h3>
            <p className="font-sans text-xs sm:text-sm text-secondary mt-1">
              Adjust project cost and financing duration to view approximate monthly terms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-secondary font-bold">
                    Estimated Project Investment:
                  </label>
                  <span className="font-display text-2xl font-black text-primary">
                    ${projectAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="35000"
                  step="500"
                  value={projectAmount}
                  onChange={(e) => setProjectAmount(Number(e.target.value))}
                  className="w-full h-3 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between font-mono text-[10px] text-secondary mt-1">
                  <span>$3,000 (Small Patio/Repair)</span>
                  <span>$15,000 (Driveway)</span>
                  <span>$35,000+ (Estate Build)</span>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-secondary font-bold mb-3">
                  Loan Duration (Months):
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {[12, 24, 36, 60].map((m) => (
                    <button
                      key={m}
                      onClick={() => setTermMonths(m)}
                      className={`py-3 font-mono text-xs uppercase font-bold rounded-lg border transition-all cursor-pointer ${
                        termMonths === m
                          ? 'bg-primary text-white border-primary shadow-md'
                          : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                      }`}
                    >
                      {m} Mos
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-charcoal text-white p-8 rounded-xl shadow-2xl border border-stone-800 text-center">
              <span className="font-mono text-xs text-surveyor-lime uppercase font-bold tracking-wider block mb-1">
                Estimated Monthly Payment
              </span>
              <div className="font-display text-4xl sm:text-5xl font-black text-white mb-2">
                ${estimatedMonthly} <span className="text-sm font-sans font-normal text-concrete-aggregate">/mo</span>
              </div>
              <p className="font-sans text-xs text-concrete-aggregate mb-6">
                Based on standard qualifying terms for {termMonths} months at estimated 9.99% APR. Actual APR may vary.
              </p>
              <div className="space-y-3">
                <button
                  onClick={onOpenEstimate}
                  className="w-full py-3.5 bg-surveyor-lime text-stone-charcoal font-mono text-xs uppercase font-bold tracking-wider hover:opacity-90 transition-opacity shadow-lg cursor-pointer"
                >
                  Apply via Project Estimate
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="block w-full py-3 border border-white/20 hover:bg-white/10 text-white font-mono text-xs uppercase font-bold tracking-wider transition-colors"
                >
                  Call Financing Desk: {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Steps to Financing */}
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-stone-charcoal mb-8 text-center">
          How Synchrony Financing Works
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm text-center">
            <div className="w-12 h-12 bg-primary text-white font-display text-lg font-bold rounded-full flex items-center justify-center mx-auto mb-3">
              1
            </div>
            <h4 className="font-display text-base font-bold uppercase text-stone-charcoal mb-1">Request Quote</h4>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              Our estimators provide an itemized proposal with clear material and labor specifications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm text-center">
            <div className="w-12 h-12 bg-primary text-white font-display text-lg font-bold rounded-full flex items-center justify-center mx-auto mb-3">
              2
            </div>
            <h4 className="font-display text-base font-bold uppercase text-stone-charcoal mb-1">Pre-Qualify</h4>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              Complete the quick online pre-qualification without impacting your credit score.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm text-center">
            <div className="w-12 h-12 bg-primary text-white font-display text-lg font-bold rounded-full flex items-center justify-center mx-auto mb-3">
              3
            </div>
            <h4 className="font-display text-base font-bold uppercase text-stone-charcoal mb-1">Schedule Pour</h4>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              Select your finish, colors, and schedule delivery. Morning Star executes the build.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm text-center">
            <div className="w-12 h-12 bg-primary text-white font-display text-lg font-bold rounded-full flex items-center justify-center mx-auto mb-3">
              4
            </div>
            <h4 className="font-display text-base font-bold uppercase text-stone-charcoal mb-1">Pay Monthly</h4>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              Enjoy your new concrete with convenient online monthly account management.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-stone-charcoal mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-stone-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 text-left font-display text-sm font-bold uppercase text-stone-charcoal flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50"
                >
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined text-lg transition-transform">
                    {openFaq === index ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="p-5 pt-0 font-sans text-xs text-secondary leading-relaxed border-t border-stone-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancingScreen;

