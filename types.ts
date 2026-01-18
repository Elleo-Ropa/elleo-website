export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  subtext?: string;
}

export interface Brand {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
  features: string[];
  color: string;
  logo: string;
}

export interface LocationItem {
  name: string;
  state: string;
  description: string;
  image: string;
}