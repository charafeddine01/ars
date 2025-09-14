export interface Product {
  id: string;
  name: string;
  type: 'roof' | 'wall' | 'cold-room' | 'fire-rated' | 'doors' | 'accessories';
  core: 'PIR' | 'PUR' | 'EPS' | 'Rockwool';
  thickness: number; // in mm
  facing: string;
  rValue?: number;
  uValue?: number;
  fireClass?: string;
  color: string[];
  profile: string;
  image: string;
  description: string;
  features: string[];
  applications: string[];
  specifications: Record<string, string>;
  datasheet?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  application: string;
  product: string;
  quantity: string;
  message: string;
  consent: boolean;
}

export interface FilterState {
  type: string[];
  core: string[];
  thicknessRange: [number, number];
  facing: string[];
  fireClass: string[];
  color: string[];
  profile: string[];
}