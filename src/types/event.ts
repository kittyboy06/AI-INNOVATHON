export interface Coordinator {
  name: string;
  phone: string;
  role?: string;
}

export interface TimelineItem {
  id: string;
  time: string;
  title: string;
  description: string;
  status: 'confirmed' | 'tba';
  iconName?: string;
}

export interface RuleItem {
  id: string;
  category: 'tools' | 'code' | 'resources';
  title: string;
  status: 'allowed' | 'not_allowed';
  description: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  provided: boolean;
}

export interface ClubItem {
  id: string;
  name: string;
  tagline: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'general' | 'rules' | 'logistics' | 'registration';
}

export interface MetricItem {
  value: string;
  label: string;
  detail: string;
}

export type CountdownPhase = 'registration' | 'kickoff' | 'live';

export interface CountdownTimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  phase: CountdownPhase;
  label: string;
}
