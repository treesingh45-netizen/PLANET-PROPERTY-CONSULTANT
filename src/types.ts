export type PageId = 'home' | 'about' | 'services' | 'properties' | 'why-us' | 'faq' | 'contact';

export interface PropertyItem {
  id: string;
  title: string;
  location: string;
  category: 'residential' | 'commercial' | 'investment' | 'plots';
  categoryLabel: string;
  type: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  iconName: 'building' | 'key' | 'chart' | 'house' | 'office' | 'conversation';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TrustStat {
  value: string;
  label: string;
  sublabel: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: 'map-pin' | 'message-square' | 'shield-check' | 'users' | 'compass' | 'clock';
}
