import type { ConcreteDivision, FinishSpecification, MetricItem, ProjectPortfolioItem } from '../types/concrete.ts';

export const COMPANY_INFO = {
  name: 'Morning Star Concrete Construction',
  shortName: 'MSCC',
  license: 'C-8 #984210',
  bondedAmount: '$5M Aggregate Bonded & Insured',
  yearsExperience: '25+',
  projectsCompleted: '1,500+',
  address: '30141 Antelope Rd D #794, Menifee, CA 92584',
  hqAddress: '29800 Haun Rd, Suite 204, Menifee, CA 92586',
  phone: '(951) 807-9787',
  phoneRaw: '9518079787',
  email: 'johnflowers@msccconcrete.com',
  bidsEmail: 'bids@morningstarconcrete.com',
  hours: '06:00 - 18:00 PST M-F',
  serviceArea: 'Menifee, CA & Inland Empire / Southern California',
};

export const HERO_METRICS: MetricItem[] = [
  { value: '25+', label: 'Years Field Experience' },
  { value: '1,500+', label: 'Projects Delivered' },
  { value: '100%', label: 'Bonded & Insured ($5M)' },
  { value: 'C-8', label: 'Menifee & SoCal Civil Spec' },
];

export const CONCRETE_DIVISIONS: ConcreteDivision[] = [
  {
    id: 'structural',
    bayNumber: 'BAY 01 // STRUCTURAL',
    title: 'Architectural & Structural',
    category: 'Commercial & Civil',
    specTag: 'C-8 Spec',
    subtitle: 'Commercial Pours',
    description: 'Broom finish concrete, foundation slabs, light & heavy commercial installations, curb and gutter.',
    tags: ['Broom Finish', 'Foundation Slabs', 'Curb & Gutter'],
    imageUrl: '/images/bay-structural.jpg',
    imageAlt: 'Commercial poured foundation slab with precision rebar reinforcement and smooth broom finish',
  },
  {
    id: 'decorative',
    bayNumber: 'BAY 02 // ARCHITECTURAL',
    title: 'Decorative & Stamped',
    category: 'Patio & Estate Pours',
    specTag: 'C-8 Spec',
    subtitle: 'Custom Pours',
    description: 'Custom textures, slate embossing, integral dyes, pool decks, patios, and weather-sealed finishes.',
    tags: ['Ashlar Slate', 'Color & Seal', 'Pool Decks'],
    imageUrl: '/images/bay-decorative.jpg',
    imageAlt: 'High quality custom decorative stamped concrete patio floor featuring slate and flagstone patterns with rich warm earth tone color sealant',
  },
  {
    id: 'civil',
    bayNumber: 'BAY 03 // INFRASTRUCTURE',
    title: 'Civil & Restoration',
    category: 'Civil Repair & Seismic',
    specTag: 'C-8 Spec',
    subtitle: 'Heavy Civil',
    description: 'Patch & repair concrete, approach slabs, engineered retaining walls, seismic grading, and structural remediation.',
    tags: ['Patch & Repair', 'Approach Slabs', 'Retaining Walls'],
    imageUrl: '/images/bay-civil.jpg',
    imageAlt: 'Reinforced concrete retaining wall and civil approach slab under engineered laser grade alignment',
  },
];

export const FINISH_SPECIFICATIONS: FinishSpecification[] = [
  {
    finishName: 'Broom Finish',
    applications: 'Sidewalks, Driveways, Heavy Approaches',
    textureSlipResistance: 'High Friction / Anti-Slip',
    sealingRequirements: 'Standard Curing / Optional Siloxane',
    durabilityClass: 'High Load Civil',
  },
  {
    finishName: 'Decorative Stamped',
    applications: 'Patios, Pool Decks, Estate Courtyards',
    textureSlipResistance: 'Embossed Natural Slate/Stone',
    sealingRequirements: 'Topical Gloss / Matte Protective Coat',
    durabilityClass: 'Architectural Grade',
  },
  {
    finishName: 'Color & Seal Concrete',
    applications: 'Designer Walkways, Commercial Entries',
    textureSlipResistance: 'Medium Textured / Honed',
    sealingRequirements: 'UV-Resistant Penetrating Dye Seal',
    durabilityClass: 'Long-Life Esthetics',
  },
  {
    finishName: 'Structural Foundation Slab',
    applications: 'Additions, Workshops, Heavy Storage',
    textureSlipResistance: 'Smooth Troweled / Level 0',
    sealingRequirements: 'Vapor Barrier & Cure Compound',
    durabilityClass: 'Engineered Bearing',
  },
];

export const PORTFOLIO_PROJECTS: ProjectPortfolioItem[] = [
  {
    id: 'proj-1',
    title: 'Commercial Logistics Foundation & Apron',
    category: 'Structural',
    location: 'Inland Empire, CA',
    specs: '6,000 PSI High-Early Strength, Laser Screed Trowel',
    imageUrl: '/images/portfolio-structural.jpg',
  },
  {
    id: 'proj-2',
    title: 'Ashlar Stamped Courtyard & Swimming Pool Deck',
    category: 'Decorative',
    location: 'Menifee, CA',
    specs: 'Integral Warm Sand Dune pigment with Deep Charcoal Antique release',
    imageUrl: '/images/portfolio-decorative.jpg',
  },
  {
    id: 'proj-3',
    title: 'Engineered Hillside Retaining Wall & Approach Slab',
    category: 'Civil',
    location: 'Murrieta, CA',
    specs: 'Seismic #6 Rebar Caging with integrated geogrid drainage',
    imageUrl: '/images/portfolio-civil.jpg',
  },
];

