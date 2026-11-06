export interface ConcreteDivision {
  id: string;
  bayNumber: string;
  title: string;
  category: string;
  specTag: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
}

export interface FinishSpecification {
  finishName: string;
  applications: string;
  textureSlipResistance: string;
  sealingRequirements: string;
  durabilityClass: string;
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface EstimateFormData {
  fullName: string;
  phoneNum: string;
  emailAddr: string;
  projectType: string;
  projectLocation: string;
  projectDetails: string;
  syncFinancing: boolean;
}

export interface ProjectPortfolioItem {
  id: string;
  title: string;
  category: 'Structural' | 'Decorative' | 'Civil';
  location: string;
  imageUrl: string;
  specs: string;
}

