import { Product } from './productCategories';

// Sample products - This will be expanded with full catalog
export const products: Product[] = [
  // ==================== ROYAL ENFIELD GUERRILLA 450 ====================
  {
    id: 'guerrilla-450-bash-plate',
    name: 'Bash Plate',
    fullName: 'ZANA Bash Plate for Royal Enfield Guerrilla 450',
    category: 'Protection',
    price: 5000,
    description: 'The ZANA Bash Plate provides strong underbody protection for your motorcycle\'s engine and exhaust. Crafted from high-grade aluminium alloy, it shields against rocks, gravel, and off-road impacts. With a powder-coated finish for long-term durability, it\'s an essential accessory for touring and adventure riders.',
    shortDescription: 'Heavy-duty aluminium bash plate for engine protection',
    features: [
      'Aluminium alloy construction',
      'Protects sump, exhaust & engine casing',
      'Powder-coated corrosion resistance',
      'Lightweight yet impact-resistant',
      'Direct-fit design for Guerrilla 450',
    ],
    specifications: {
      material: 'Aluminium Alloy',
      finish: 'Black Powder-Coated',
      fit: 'Royal Enfield Guerrilla 450',
      mounting: 'Bolt-On',
    },
    images: [
      '/uploads/Guerrilla 450/Bash plate/01.png',
      '/uploads/Guerrilla 450/Bash plate/02.png',
    ],
    bikeId: 're-guerrilla-450',
    featured: true,
    inStock: true,
  },
  {
    id: 'guerrilla-450-engine-guard',
    name: 'Engine Guard with Puck',
    fullName: 'ZANA Engine Guard with Puck for Royal Enfield Guerrilla 450',
    category: 'Protection',
    price: 6500,
    description: 'Engineered for maximum safety. Made from heavy-duty steel tubing with precision welding, it shields the engine and offers rider leg protection in case of falls. Includes integrated slider pucks to absorb impact.',
    shortDescription: 'Heavy-duty steel engine guard with crash protection',
    features: [
      'Heavy-duty steel tubing',
      'Integrated slider pucks',
      'Engine & leg protection during falls',
      'Powder-coated finish for weather resistance',
      'Precision welds for strength',
    ],
    specifications: {
      material: 'Mild Steel + Nylon Sliders',
      finish: 'Black Powder-Coated',
      fit: 'Royal Enfield Guerrilla 450',
      mounting: 'Bolt-On',
    },
    images: [
      '/uploads/Guerrilla 450/Enginer guard with Puck/01.png',
      '/uploads/Guerrilla 450/Enginer guard with Puck/02.png',
    ],
    bikeId: 're-guerrilla-450',
    featured: true,
    inStock: true,
  },
  {
    id: 'guerrilla-450-radiator-grill',
    name: 'Radiator Grill Honeycomb',
    fullName: 'ZANA Radiator Grill for Royal Enfield Guerrilla 450',
    category: 'Protection',
    price: 2500,
    description: 'Safeguards your radiator from stones and mud. Made from aluminum mesh, it maintains airflow while offering robust protection. Black powder-coated finish ensures durability.',
    shortDescription: 'Honeycomb mesh radiator protector',
    features: [
      'Honeycomb aluminum mesh design',
      'Protects radiator fins from impact',
      'Maintains optimal airflow',
      'Powder-coated finish for durability',
      'OEM-fit design',
    ],
    specifications: {
      material: 'Aluminium Mesh',
      finish: 'Black Powder-Coated',
      fit: 'Royal Enfield Guerrilla 450',
      mounting: 'Bolt-On',
    },
    images: [
      '/uploads/Guerrilla 450/Radiator grill honeycomb/01.png',
      '/uploads/Guerrilla 450/Radiator grill honeycomb/02.png',
    ],
    bikeId: 're-guerrilla-450',
    inStock: true,
  },
  {
    id: 'guerrilla-450-saddle-stay',
    name: 'Saddle Stay with Jerry Can',
    fullName: 'ZANA Saddle Stay with Jerry Can Holder for Royal Enfield Guerrilla 450',
    category: 'Luggage & Touring',
    price: 8500,
    description: 'Strong support for saddlebags during long tours with integrated jerry can holder. Crafted from powder-coated steel tubing, it prevents saddle bags from touching the exhaust or rear wheel.',
    shortDescription: 'Luggage support frame with jerry can mount',
    features: [
      'Heavy-duty steel tubing',
      'Integrated jerry can holder',
      'Protects luggage from wheel & exhaust',
      'Powder-coated corrosion resistance',
      'Universal saddle bag fit',
    ],
    specifications: {
      material: 'Mild Steel',
      finish: 'Black Powder-Coated',
      fit: 'Royal Enfield Guerrilla 450',
      mounting: 'Bolt-On',
    },
    images: [
      '/uploads/Guerrilla 450/Saddle stay with jerry can/01.png',
      '/uploads/Guerrilla 450/Saddle stay with jerry can/02.png',
    ],
    bikeId: 're-guerrilla-450',
    inStock: true,
  },
  {
    id: 'guerrilla-450-top-rack',
    name: 'Top Rack with Black Plate',
    fullName: 'ZANA Top Rack with Black Plate for Royal Enfield Guerrilla 450',
    category: 'Luggage & Touring',
    price: 5500,
    description: 'Versatile luggage carrier with integrated black plate for top box mounting or cargo strapping. Heavy-duty construction ensures reliable load support.',
    shortDescription: 'Heavy-duty top rack for luggage mounting',
    features: [
      'Heavy-duty steel construction',
      'Integrated black mounting plate',
      'Top box compatible',
      'High load capacity',
      'Powder-coated finish',
    ],
    specifications: {
      material: 'Mild Steel',
      finish: 'Black Powder-Coated',
      fit: 'Royal Enfield Guerrilla 450',
      mounting: 'Bolt-On',
    },
    images: [
      '/uploads/Guerrilla 450/Top rack with black plate/01.png',
      '/uploads/Guerrilla 450/Top rack with black plate/02.png',
    ],
    bikeId: 're-guerrilla-450',
    inStock: true,
  },
  {
    id: 'guerrilla-450-gel-seat',
    name: 'Gel Seat Cushion',
    fullName: 'ZANA Gel Seat Cushion for Royal Enfield Guerrilla 450',
    category: 'Comfort & Ergonomics',
    price: 3500,
    description: 'Premium gel cushion that reduces fatigue on long rides. Easy installation with non-slip base. Perfect for touring and daily commuting.',
    shortDescription: 'Comfort gel seat cushion for long rides',
    features: [
      'Medical-grade gel padding',
      'Reduces rider fatigue',
      'Non-slip bottom surface',
      'Weather-resistant cover',
      'Universal fit',
    ],
    specifications: {
      material: 'Gel + Polyester Cover',
      fit: 'Royal Enfield Guerrilla 450',
      mounting: 'Non-slip Base',
    },
    images: [
      '/uploads/Guerrilla 450/Gel Seat/01.png',
      '/uploads/Guerrilla 450/Gel Seat/02.png',
    ],
    bikeId: 're-guerrilla-450',
    inStock: true,
  },
  {
    id: 'guerrilla-450-handle-riser',
    name: 'Handlebar Riser',
    fullName: 'ZANA Handlebar Riser for Royal Enfield Guerrilla 450',
    category: 'Comfort & Ergonomics',
    price: 2500,
    description: 'Raises handlebars for improved riding ergonomics and reduced back strain. CNC-machined aluminum construction with anodized finish.',
    shortDescription: 'Ergonomic handlebar height adjuster',
    features: [
      'CNC-machined aluminum',
      'Raises handlebar height',
      'Improves riding posture',
      'Anodized finish',
      'Easy installation',
    ],
    specifications: {
      material: 'Aluminium Alloy',
      finish: 'Anodized Black',
      fit: 'Royal Enfield Guerrilla 450',
      mounting: 'Bolt-On',
    },
    images: [
      '/uploads/Guerrilla 450/Handle Riser/01.png',
      '/uploads/Guerrilla 450/Handle Riser/02.png',
    ],
    bikeId: 're-guerrilla-450',
    inStock: true,
  },

  // ==================== ROYAL ENFIELD HIMALAYAN 450 ====================
  {
    id: 'himalayan-450-bash-plate',
    name: 'Bash Plate',
    fullName: 'ZANA Bash Plate for Royal Enfield Himalayan 450',
    category: 'Protection',
    price: 5500,
    description: 'Safeguard your Royal Enfield Himalayan 450 with the ZANA Bash Plate, designed for riders who conquer rugged terrain and harsh conditions. Crafted from high-grade aluminum alloy, this engine protector shields the underbelly, exhaust bends, and oil sump from rocks, debris, and trail impacts.',
    shortDescription: 'Heavy-duty engine protection for adventure riding',
    features: [
      'Precision-fit design for Himalayan 450',
      'Built with heavy-duty aluminum',
      'Shields engine casing, sump, and exhaust pipes',
      'Adventure-ready skid plate for off-road trails',
      'Corrosion-resistant finish for long-lasting durability',
      'Easy bolt-on installation',
    ],
    specifications: {
      material: 'Aluminum Alloy',
      finish: 'Black Powder Coat',
      fit: 'Royal Enfield Himalayan 450',
      mounting: 'Bolt-On',
    },
    images: [
      '/uploads/Himalayan 452/Bash Plate/01.png',
      '/uploads/Himalayan 452/Bash Plate/02.png',
    ],
    bikeId: 're-himalayan-450',
    featured: true,
    inStock: true,
  },
  {
    id: 'himalayan-450-crash-guard',
    name: 'Crash Guard',
    fullName: 'ZANA Crash Guard for Royal Enfield Himalayan 450',
    category: 'Protection',
    price: 7000,
    description: 'Ultimate protection for your Himalayan 450. Heavy-duty steel construction with integrated sliders protects engine, fairings, and rider in case of falls or impacts.',
    shortDescription: 'Heavy-duty crash protection with sliders',
    features: [
      'Heavy-duty steel tubing',
      'Integrated replaceable sliders',
      'Protects engine, fairing, and rider legs',
      'Powder-coated corrosion resistance',
      'Adventure-ready rugged design',
    ],
    specifications: {
      material: 'Mild Steel + Nylon Sliders',
      finish: 'Black Powder-Coated',
      fit: 'Royal Enfield Himalayan 450',
      mounting: 'Bolt-On Kit',
    },
    images: [
      '/uploads/Himalayan 452/Crash guard/01.png',
      '/uploads/Himalayan 452/Crash guard/02.png',
    ],
    bikeId: 're-himalayan-450',
    featured: true,
    inStock: true,
  },
  {
    id: 'himalayan-450-panniers',
    name: 'Panniers',
    fullName: 'ZANA Panniers for Royal Enfield Himalayan 450',
    category: 'Luggage & Touring',
    price: 18000,
    description: 'Professional-grade hard panniers for serious touring. Waterproof, dustproof, and impact-resistant with secure locking system. Perfect for long-distance adventure.',
    shortDescription: 'Waterproof hard panniers for touring',
    features: [
      'Waterproof and dustproof design',
      'Impact-resistant ABS construction',
      'Quick-release mounting system',
      'Integrated lock system',
      'Large 35L capacity (pair)',
    ],
    specifications: {
      material: 'ABS Plastic',
      finish: 'Matte Black',
      capacity: '35 Liters (pair)',
      fit: 'Royal Enfield Himalayan 450',
      mounting: 'Quick Release',
    },
    images: [
      '/uploads/Himalayan 452/Panniers/01.png',
      '/uploads/Himalayan 452/Panniers/02.png',
    ],
    bikeId: 're-himalayan-450',
    featured: true,
    inStock: true,
  },

  // ==================== UNIVERSAL PRODUCTS ====================
  {
    id: 'universal-foglight-drl-r40',
    name: 'Universal Fog Light DRL R-40',
    fullName: 'ZANA DRL R-40 Universal LED Fog Light',
    category: 'Lighting',
    price: 12000,
    description: 'The ZANA DRL R-40 delivers 9,000 lumens (dual-color white + yellow) and 8,000 lumens (white-only) from an OSRAM chipset. With a 320 m beam throw and an 11° far beam angle, it\'s ideal for long-distance touring. Built-in wireless handlebar switch, flasher mode, and a DRL strip add day/night versatility.',
    shortDescription: 'Premium 9,000 lumen OSRAM fog lights with wireless control',
    features: [
      '9,000 lumens dual-color; 8,000 lumens white-only',
      'OSRAM chipset',
      'Beam throw: 320 m | Beam angle: 11°',
      'Wireless control & flasher mode',
      'DRL strip for daytime safety',
      '50,000-hour lifespan | CNC aluminium body',
    ],
    specifications: {
      lumens: '9,000 (dual-color), 8,000 (white)',
      chipset: 'OSRAM',
      beamDistance: '320 m',
      weight: '2.36 kg / set',
      dimensions: '165 × 59 mm',
    },
    images: [
      '/uploads/Fog light/DRL R-40/01.png',
      '/uploads/Fog light/DRL R-40/02.png',
    ],
    universal: true,
    featured: true,
    inStock: true,
  },
  {
    id: 'universal-foglight-zfl-r25',
    name: 'Universal Fog Light ZFL R-25',
    fullName: 'ZANA ZFL-R25 Universal Fog Light',
    category: 'Lighting',
    price: 8000,
    description: 'Compact and powerful, the ZANA ZFL-R25 outputs 6,500 raw lumens per pair using a CREE chipset. At just 130 g per light, it\'s lightweight and versatile. Beam distance exceeds 300 m, with dual-color modes.',
    shortDescription: 'Compact 6,500 lumen CREE fog lights',
    features: [
      '6,500 lumens (per pair)',
      'CREE chipset',
      'Power: 50W (pair) | 12V–15V',
      'Beam distance: 300+ m',
      'IP68 CNC-machined body',
      'Compact design: 63 × 98 mm',
    ],
    specifications: {
      lumens: '6,500 (pair)',
      chipset: 'CREE',
      power: '50W (pair)',
      weight: '130 g / piece',
      dimensions: '63 × 98 mm',
      ipRating: 'IP68',
    },
    images: [
      '/uploads/Fog light/ZFL R-25/01.png',
      '/uploads/Fog light/ZFL R-25/02.png',
    ],
    universal: true,
    inStock: true,
  },
  {
    id: 'universal-roadster-bag',
    name: 'Roadster Saddle Bag',
    fullName: 'ZANA Roadster Universal Saddle Bag',
    category: 'Bags',
    price: 4500,
    description: 'Versatile saddle bag perfect for weekend rides and daily commuting. Water-resistant material with easy strap mounting system. Fits most motorcycles.',
    shortDescription: 'Universal water-resistant saddle bag',
    features: [
      'Water-resistant 600D polyester',
      'Universal strap mounting',
      'Quick-release buckles',
      'Reflective strips for safety',
      '20L capacity',
    ],
    specifications: {
      material: '600D Polyester',
      capacity: '20 Liters',
      mounting: 'Universal Straps',
    },
    images: [
      '/uploads/Bag/Roadster/01.png',
      '/uploads/Bag/Roadster/02.png',
    ],
    universal: true,
    featured: true,
    inStock: true,
  },
  {
    id: 'universal-maximus-bag',
    name: 'Maximus Bag',
    fullName: 'ZANA Maximus Large Capacity Bag',
    category: 'Bags',
    price: 6500,
    description: 'Large capacity touring bag with expandable design. Heavy-duty construction for long-distance adventures. Waterproof with reinforced mounting points.',
    shortDescription: 'Large capacity expandable touring bag',
    features: [
      'Heavy-duty waterproof material',
      'Expandable design (30L to 40L)',
      'Reinforced mounting straps',
      'Multiple compartments',
      'Rain cover included',
    ],
    specifications: {
      material: 'Waterproof Tarpaulin',
      capacity: '30-40 Liters (expandable)',
      mounting: 'Universal Straps',
    },
    images: [
      '/uploads/Bag/Maximus/01.png',
      '/uploads/Bag/Maximus/02.png',
    ],
    universal: true,
    inStock: true,
  },
  {
    id: 'universal-mobile-holder',
    name: 'Mobile Holder',
    fullName: 'ZANA Universal Mobile Holder',
    category: 'Utility Accessories',
    price: 1500,
    description: 'Secure smartphone mounting solution with 360° rotation. Anti-vibration design protects your phone. USB charging compatible.',
    shortDescription: 'Anti-vibration mobile phone mount',
    features: [
      '360° rotation capability',
      'Anti-vibration rubber mount',
      'Fits phones 4.7" to 6.7"',
      'USB charging compatible',
      'Quick-release mechanism',
    ],
    specifications: {
      material: 'ABS Plastic + Rubber',
      compatibility: '4.7" - 6.7" phones',
      mounting: 'Handlebar Clamp',
    },
    images: [
      '/uploads/Mobile Holder/01.png',
      '/uploads/Mobile Holder/02.png',
    ],
    universal: true,
    featured: true,
    inStock: true,
  },
  {
    id: 'universal-gel-seat',
    name: 'Gel Seat Cushion',
    fullName: 'ZANA Universal Gel Seat Cushion',
    category: 'Comfort & Ergonomics',
    price: 3000,
    description: 'Premium gel cushion for all motorcycles. Medical-grade gel reduces pressure points and fatigue on long rides. Weather-resistant cover with anti-slip base.',
    shortDescription: 'Universal comfort gel seat cushion',
    features: [
      'Medical-grade gel padding',
      'Reduces rider fatigue by 60%',
      'Weather-resistant cover',
      'Non-slip bottom',
      'Fits most motorcycle seats',
    ],
    specifications: {
      material: 'Medical-Grade Gel + Polyester',
      dimensions: '30 × 28 cm',
      thickness: '2.5 cm',
    },
    images: [
      '/uploads/GEL SEAT CUSHION/01.png',
      '/uploads/GEL SEAT CUSHION/02.png',
    ],
    universal: true,
    inStock: true,
  },

  // Add more products here as needed...
];

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByBike = (bikeId: string): Product[] => {
  return products.filter(
    product => product.bikeId === bikeId || product.universal
  );
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getUniversalProducts = (): Product[] => {
  return products.filter(product => product.universal);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    product =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.fullName.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
  );
};

