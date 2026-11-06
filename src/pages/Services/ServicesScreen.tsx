import React from 'react';
import { SectionHeader } from '../../components/common/SectionHeader.tsx';
import { CONCRETE_DIVISIONS } from '../../data/concreteData.ts';

interface ServicesScreenProps {
  onOpenEstimate: (projectType?: string) => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({ onOpenEstimate }) => {
  const allServices = [
    {
      title: 'Broom Finish Concrete',
      category: 'Residential & Civil',
      description: 'The industry standard for traction and durability on driveways, sidewalks, and approach slabs. Custom texturing resists California heat and vehicular wear.',
      features: ['High-traction slip resistance', 'Cost-effective long lifespan', 'Standard C-8 municipal spec'],
      type: 'residential-driveway',
    },
    {
      title: 'Decorative Stamped Concrete',
      category: 'Architectural Hardscapes',
      description: 'Replicate natural Italian slate, English cobblestone, or random flagstone with monolithic concrete strength and integral dye colors.',
      features: ['Ashlar slate & wood plank patterns', 'UV-resistant color sealants', 'Seamless courtyard integration'],
      type: 'decorative-stamped',
    },
    {
      title: 'Structural Foundation Slabs',
      category: 'Commercial & Residential',
      description: 'Precision engineered slabs-on-grade with laser-screed tolerances, vapor barriers, and heavy seismic rebar cages for residential additions and commercial warehouses.',
      features: ['Laser level accuracy to 1/8"', 'Seismic grade rebar engineering', 'High-early PSI mix designs'],
      type: 'foundation-structural',
    },
    {
      title: 'Custom Pool Decks & Patios',
      category: 'Luxury Outdoor Living',
      description: 'Heat-reflective cool deck coatings, stamped textures, and cantilever coping that frame pools safely while elevating estate backyard luxury.',
      features: ['Anti-slip wet zone textures', 'Integrated drainage slopes', 'Salt-water resistant sealers'],
      type: 'patio-pool',
    },
    {
      title: 'Color & Seal Concrete',
      category: 'Decorative Enhancement',
      description: 'Integral color batching and topical chemical stains paired with industrial siloxane sealers to lock in rich earth tones and resist oil penetration.',
      features: ['Fade-resistant color pigments', 'Deep penetration sealing', 'Gloss or matte sheen options'],
      type: 'decorative-stamped',
    },
    {
      title: 'Curb, Gutter & Approach Slabs',
      category: 'Civil & Infrastructure',
      description: 'Municipal grade extruded curbs, valley gutters, and heavy vehicle commercial approaches built to city specifications throughout the Inland Empire.',
      features: ['ADA compliant transitions', 'Heavy vehicular bearing capacity', 'Municipal code inspection ready'],
      type: 'civil-curb',
    },
    {
      title: 'Engineered Retaining Walls',
      category: 'Structural Earthwork',
      description: 'Reinforced concrete cantilever and gravity retaining walls engineered for slope stabilization, hillside grading, and soil retention.',
      features: ['Seismic rebar cage reinforcement', 'Integrated weep hole drainage', 'Engineered architectural facings'],
      type: 'retaining-wall',
    },
    {
      title: 'Concrete Patch & Repair',
      category: 'Remediation & Restoration',
      description: 'Full-depth spall repairs, trip-hazard grinding, expansion joint resealing, and epoxy crack injection to restore structural integrity.',
      features: ['Rapid-set polymer mortars', 'Seismic crack arrestment', 'Color matching blending'],
      type: 'patch-repair',
    },
  ];

  return (
    <div className="w-full bg-surface-container-lowest py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeader
          category="Complete Capabilities"
          title="Engineered Concrete Services"
          subtitle="From high-load industrial foundations to bespoke architectural stamped patios, our C-8 certified crews execute every pour with exacting standards."
          centered
        />

        {/* Division Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {CONCRETE_DIVISIONS.map((div) => (
            <div key={div.id} className="bg-stone-charcoal text-white rounded-xl overflow-hidden shadow-xl flex flex-col justify-between">
              <div className="h-56 w-full bg-cover bg-center relative" style={{ backgroundImage: `url("${div.imageUrl}")` }}>
                <div className="absolute inset-0 bg-stone-charcoal/60" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#ea580c] text-white font-mono text-[10px] font-black uppercase tracking-wider rounded-full shadow">
                    {div.specTag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">
                    {div.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <p className="font-sans text-xs text-concrete-aggregate mb-4 leading-relaxed">
                  {div.description}
                </p>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#ea580c] font-black">{div.category}</span>
                  <button
                    onClick={() => onOpenEstimate(div.id === 'structural' ? 'foundation-structural' : div.id === 'decorative' ? 'decorative-stamped' : 'civil-curb')}
                    className="font-mono text-xs text-white uppercase tracking-wider font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Get Bid</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Complete Detailed Services Grid */}
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-stone-charcoal mb-8 text-center">
          Full Catalog of Concrete Solutions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] uppercase text-[#ea580c] font-black tracking-wider block mb-1">
                  {service.category}
                </span>
                <h4 className="font-display text-base font-bold uppercase tracking-tight text-stone-charcoal mb-2">
                  {service.title}
                </h4>
                <p className="font-sans text-xs text-secondary leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5 mb-6">
                  {service.features.map((feat, i) => (
                    <li key={i} className="font-sans text-[11px] text-stone-600 flex items-start gap-1.5">
                      <span className="text-[#ea580c] font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenEstimate(service.type)}
                className="w-full py-2.5 bg-stone-100 hover:bg-[#ea580c] hover:text-white text-stone-900 border border-stone-300 font-mono text-[11px] uppercase tracking-wider font-extrabold transition-all rounded cursor-pointer shadow-sm hover:border-[#ea580c]"
              >
                Request Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesScreen;

