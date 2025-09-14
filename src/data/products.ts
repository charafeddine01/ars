import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'pir-roof-001',
    name: 'PIR Roof Panel Standard',
    type: 'roof',
    core: 'PIR',
    thickness: 100,
    facing: 'Steel 0.5mm',
    rValue: 4.5,
    uValue: 0.22,
    fireClass: 'B-s1,d0',
    color: ['White', 'Grey', 'Blue'],
    profile: 'Trapezoidal',
    image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'High-performance PIR roof panels with excellent thermal insulation and weather resistance.',
    features: [
      'Superior thermal performance',
      'Weather resistant coating',
      'Easy installation system',
      'Long service life',
      'Fire retardant core'
    ],
    applications: ['Industrial buildings', 'Commercial warehouses', 'Agricultural structures'],
    specifications: {
      'Core Density': '35 kg/m³',
      'Thermal Conductivity': '0.022 W/mK',
      'Facing Material': 'Prepainted galvanized steel',
      'Joint System': 'Tongue and groove',
      'Load Capacity': '2.5 kN/m²'
    },
    datasheet: '/datasheets/pir-roof-standard.pdf'
  },
  {
    id: 'wall-pir-002',
    name: 'PIR Wall Panel Micro-Profile',
    type: 'wall',
    core: 'PIR',
    thickness: 120,
    facing: 'Steel 0.6mm',
    rValue: 5.4,
    uValue: 0.18,
    fireClass: 'B-s1,d0',
    color: ['White', 'Cream', 'Light Grey'],
    profile: 'Micro-ribbed',
    image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sleek micro-profile wall panels offering superior insulation and modern aesthetics.',
    features: [
      'Micro-profile design',
      'High thermal efficiency',
      'Smooth surface finish',
      'Durable coating system',
      'Quick installation'
    ],
    applications: ['Office buildings', 'Retail spaces', 'Clean room facilities'],
    specifications: {
      'Core Density': '35 kg/m³',
      'Thermal Conductivity': '0.022 W/mK',
      'Facing Material': 'Prepainted galvanized steel',
      'Profile Height': '15mm',
      'Panel Width': '1000mm'
    }
  },
  {
    id: 'rockwool-fire-003',
    name: 'Rockwool Fire-Rated Panel',
    type: 'fire-rated',
    core: 'Rockwool',
    thickness: 150,
    facing: 'Steel 0.7mm',
    fireClass: 'A2-s1,d0',
    color: ['White', 'Grey'],
    profile: 'Flat',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Non-combustible rockwool panels providing maximum fire protection and acoustic performance.',
    features: [
      'Non-combustible core',
      'Excellent fire resistance',
      'Superior acoustic properties',
      'Moisture resistant',
      'Environmentally friendly'
    ],
    applications: ['Hospitals', 'Schools', 'High-rise buildings', 'Industrial facilities'],
    specifications: {
      'Fire Resistance': 'EI 120',
      'Core Density': '110 kg/m³',
      'Acoustic Rating': 'Rw 42 dB',
      'Melting Point': '>1000°C',
      'Water Absorption': '<1%'
    }
  },
  {
    id: 'cold-room-004',
    name: 'Cold Room Panel PIR',
    type: 'cold-room',
    core: 'PIR',
    thickness: 200,
    facing: 'Stainless Steel',
    rValue: 9.0,
    uValue: 0.11,
    color: ['Stainless', 'White'],
    profile: 'Tongue & Groove',
    image: 'https://images.pexels.com/photos/3992204/pexels-photo-3992204.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Specialized panels for cold storage applications with superior insulation and hygienic surfaces.',
    features: [
      'Food-grade surfaces',
      'Exceptional thermal performance',
      'Moisture barrier system',
      'Easy to clean',
      'Hermetic seal system'
    ],
    applications: ['Food processing', 'Cold storage', 'Pharmaceutical facilities'],
    specifications: {
      'Temperature Range': '-40°C to +65°C',
      'Surface Finish': 'Stainless steel 304',
      'Joint System': 'Cam-lock system',
      'Hygiene Rating': 'HACCP compliant',
      'Vapor Barrier': 'Integrated'
    }
  },
  {
    id: 'insulated-door-005',
    name: 'Insulated Sectional Door',
    type: 'doors',
    core: 'PUR',
    thickness: 80,
    facing: 'Steel 0.5mm',
    rValue: 3.6,
    uValue: 0.28,
    color: ['White', 'Grey', 'Brown'],
    profile: 'Sectional',
    image: 'https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Heavy-duty insulated sectional doors for industrial and commercial applications.',
    features: [
      'High-cycle operation',
      'Excellent insulation',
      'Weather sealing system',
      'Security features',
      'Optional automation'
    ],
    applications: ['Warehouses', 'Loading docks', 'Cold storage', 'Aircraft hangars'],
    specifications: {
      'Max Width': '6000mm',
      'Max Height': '6000mm',
      'Wind Load': 'Class 2',
      'Cycle Rating': '25,000 cycles',
      'Security': 'Class RC2'
    }
  },
  {
    id: 'accessories-006',
    name: 'Flashing & Trim System',
    type: 'accessories',
    core: 'N/A' as any,
    thickness: 0,
    facing: 'Steel 0.6mm',
    color: ['White', 'Grey', 'Custom RAL'],
    profile: 'Various',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete range of flashing and trim components for professional panel installation.',
    features: [
      'Weather-tight seal',
      'Color-matched finish',
      'Easy installation',
      'Corrosion resistant',
      'Custom profiles available'
    ],
    applications: ['Panel transitions', 'Weather sealing', 'Aesthetic finishing'],
    specifications: {
      'Material': 'Galvanized steel',
      'Coating': 'Polyester paint',
      'Thickness': '0.6mm',
      'Length': 'Up to 3000mm',
      'Custom Profiles': 'Available on request'
    }
  }
];