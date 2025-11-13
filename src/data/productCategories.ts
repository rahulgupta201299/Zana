// Product categories and types
export type ProductCategory = 
  | 'Protection'
  | 'Luggage & Touring'
  | 'Bags'
  | 'Utility Accessories'
  | 'Comfort & Ergonomics'
  | 'Lighting';

export interface Product {
  id: string;
  name: string;
  fullName: string;
  category: ProductCategory;
  price: number;
  description: string;
  shortDescription: string;
  features: string[];
  specifications: {
    material?: string;
    finish?: string;
    fit?: string;
    mounting?: string;
    [key: string]: string | undefined;
  };
  images: string[];
  bikeId?: string; // If bike-specific
  universal?: boolean; // If fits all bikes
  featured?: boolean;
  inStock?: boolean;
}

// Product category definitions
export const categories: Array<{
  id: ProductCategory;
  name: string;
  description: string;
  icon: string;
}> = [
  {
    id: 'Protection',
    name: 'Protection',
    description: 'Guards, plates, and protective accessories',
    icon: '🛡️',
  },
  {
    id: 'Luggage & Touring',
    name: 'Luggage & Touring',
    description: 'Panniers, racks, and touring essentials',
    icon: '🎒',
  },
  {
    id: 'Bags',
    name: 'Bags',
    description: 'Saddle bags, tank bags, and soft luggage',
    icon: '👜',
  },
  {
    id: 'Utility Accessories',
    name: 'Utility Accessories',
    description: 'Mounts, stands, and practical accessories',
    icon: '🔧',
  },
  {
    id: 'Comfort & Ergonomics',
    name: 'Comfort & Ergonomics',
    description: 'Seats, risers, and comfort upgrades',
    icon: '💺',
  },
  {
    id: 'Lighting',
    name: 'Lighting',
    description: 'Fog lights and auxiliary lighting',
    icon: '💡',
  },
];

// Common product types by category
export const productTypes: Record<ProductCategory, string[]> = {
  'Protection': [
    'Bash Plate',
    'Crash Guard',
    'Leg Guard with Slider',
    'Radiator Guard',
    'Headlight Guard',
    'Front Fork Slider',
    'Front Fluid Reservoir Cover',
    'Rear Fluid Reservoir Cover',
    'Master Cylinder Cover',
  ],
  'Luggage & Touring': [
    'Saddle Stay',
    'Panniers',
    'Pannier Frame',
    'Top Box',
    'Top Rack',
    'Top Rack with Backrest',
    'Jerry Can Holder',
  ],
  'Bags': [
    'Roadster Saddle Bag',
    'Maximus Bag',
    'Pluto Bag',
    'Tripper Bag',
    'Vader Bag',
    'Stratos Tank Bag',
    'Brooser Bag',
    'Tail Bag',
  ],
  'Utility Accessories': [
    'Fog Light Mount',
    'Rear Footrest',
    'Mirror Extender',
    'Side Stand Extender',
    'Mobile Holder',
    'GPS Mount',
    'Paddock Stand',
    'Paddock Spools',
    'Number Plate Mount',
    'Tail Tidy',
  ],
  'Comfort & Ergonomics': [
    'Gel Seat Cushion',
    'Handlebar Riser',
    'Pillion Backrest',
    'Hand Guard',
  ],
  'Lighting': [
    'Universal Fog Light DRL R-40',
    'Universal Fog Light ZFL R-25',
    'Universal Fog Light ZFL-60',
    'Universal Fog Light ZFL-70',
    'Universal Fog Light ZFL-50',
  ],
};

// Get products by category
export const getProductsByCategory = (
  products: Product[],
  category: ProductCategory
): Product[] => {
  return products.filter(product => product.category === category);
};

// Get products by bike
export const getProductsByBike = (
  products: Product[],
  bikeId: string
): Product[] => {
  return products.filter(
    product => product.bikeId === bikeId || product.universal
  );
};

// Get featured products
export const getFeaturedProducts = (products: Product[]): Product[] => {
  return products.filter(product => product.featured);
};

// Get universal products
export const getUniversalProducts = (products: Product[]): Product[] => {
  return products.filter(product => product.universal);
};

