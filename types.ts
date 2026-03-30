
export interface ServiceItem {
  title: string;
  description: string;
  items: string[];
}

export interface CaseStudy {
  client: string;
  title: string;
  description: string;
  features: string[];
}

export interface PricingPlan {
  name: string;
  target: string;
  features: string[];
  note?: string;
}
