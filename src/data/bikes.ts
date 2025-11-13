// Complete bike catalog with all models
export interface Bike {
  id: string;
  brand: string;
  name: string;
  fullName: string;
  folderName: string;
  image: string;
  description: string;
  category: 'Adventure' | 'Cruiser' | 'Sport' | 'Touring' | 'Standard';
}

export const bikes: Bike[] = [
  // BMW
  {
    id: 'bmw-310-gs',
    brand: 'BMW',
    name: '310 GS',
    fullName: 'BMW G310 GS',
    folderName: 'BMW G310 GS',
    image: '/uploads/Bikes Thumbnail/bmw-g-310-gs.webp',
    description: 'Compact adventure bike with versatile capability',
    category: 'Adventure',
  },
  {
    id: 'bmw-f900-gsa',
    brand: 'BMW',
    name: 'F 900 GSA',
    fullName: 'BMW F 900 GSA Adventure',
    folderName: 'BMW F900 GSA',
    image: '/bike-placeholder.svg',
    description: 'Premium adventure touring motorcycle',
    category: 'Adventure',
  },

  // BSA
  {
    id: 'bsa-goldstar-650',
    brand: 'BSA',
    name: 'Gold Star 650',
    fullName: 'BSA Gold Star 650',
    folderName: 'BSA gold star 650',
    image: '/uploads/Bikes Thumbnail/bsa-gold-star.png',
    description: 'Classic British roadster reborn',
    category: 'Standard',
  },

  // Royal Enfield
  {
    id: 're-gt-650',
    brand: 'Royal Enfield',
    name: 'GT 650',
    fullName: 'Royal Enfield GT 650',
    folderName: 'GT 650',
    image: '/uploads/Bikes Thumbnail/Royal-Enfield-Continental-GT-650.avif',
    description: 'Continental GT café racer with parallel-twin engine',
    category: 'Sport',
  },
  {
    id: 're-guerrilla-450',
    brand: 'Royal Enfield',
    name: 'Guerrilla 450',
    fullName: 'Royal Enfield Guerrilla 450',
    folderName: 'Guerrilla 450',
    image: '/uploads/Bikes Thumbnail/Guerrila 450.avif',
    description: 'Modern roadster with aggressive styling',
    category: 'Standard',
  },
  {
    id: 're-himalayan-450',
    brand: 'Royal Enfield',
    name: 'Himalayan 450',
    fullName: 'Royal Enfield Himalayan 450',
    folderName: 'Himalayan 452',
    image: '/uploads/Bikes Thumbnail/himalayan-450.avif',
    description: 'Purpose-built adventure motorcycle',
    category: 'Adventure',
  },
  {
    id: 're-bear-650',
    brand: 'Royal Enfield',
    name: 'Bear 650',
    fullName: 'Royal Enfield Bear 650',
    folderName: 'RE Bear 650',
    image: '/uploads/Bikes Thumbnail/RE bear 650.jpg',
    description: 'Scrambler with classic styling and modern performance',
    category: 'Adventure',
  },
  {
    id: 're-classic-350',
    brand: 'Royal Enfield',
    name: 'Classic 350',
    fullName: 'Royal Enfield Classic 350',
    folderName: 'Royal Enfield Classic 350',
    image: '/bike-placeholder.svg',
    description: 'Iconic retro-styled cruiser',
    category: 'Cruiser',
  },
  {
    id: 're-hunter-350',
    brand: 'Royal Enfield',
    name: 'Hunter 350',
    fullName: 'Royal Enfield Hunter 350',
    folderName: 'Royal Enfield Hunter 350',
    image: '/bike-placeholder.svg',
    description: 'Compact urban roadster',
    category: 'Standard',
  },
  {
    id: 're-interceptor-650',
    brand: 'Royal Enfield',
    name: 'Interceptor 650',
    fullName: 'Royal Enfield Interceptor 650',
    folderName: 'Royal Enfield Interceptor 650',
    image: '/bike-placeholder.svg',
    description: 'Classic parallel-twin roadster',
    category: 'Standard',
  },
  {
    id: 're-meteor-350',
    brand: 'Royal Enfield',
    name: 'Meteor 350',
    fullName: 'Royal Enfield Meteor 350',
    folderName: 'Royal Enfield Meteor 650',
    image: '/bike-placeholder.svg',
    description: 'Easy cruiser for relaxed riding',
    category: 'Cruiser',
  },
  {
    id: 're-scram-411',
    brand: 'Royal Enfield',
    name: 'Scram 411',
    fullName: 'Royal Enfield Scram 411',
    folderName: 'Royal Enfield Himalayan 411',
    image: '/uploads/Bikes Thumbnail/himalayan 411.webp',
    description: 'Scrambler based on Himalayan platform',
    category: 'Adventure',
  },
  {
    id: 're-shotgun-650',
    brand: 'Royal Enfield',
    name: 'Shotgun 650',
    fullName: 'Royal Enfield Shotgun 650',
    folderName: 'Royal Enfield Shotgun 650',
    image: '/bike-placeholder.svg',
    description: 'Bobber-style cruiser with 650 twin',
    category: 'Cruiser',
  },
  {
    id: 're-super-meteor-650',
    brand: 'Royal Enfield',
    name: 'Super Meteor 650',
    fullName: 'Royal Enfield Super Meteor 650',
    folderName: 'RE Super Meteor 650',
    image: '/uploads/Bikes Thumbnail/Royal_Enfield_Super_Meteor_650.jpg',
    description: 'Premium cruiser for long-distance touring',
    category: 'Cruiser',
  },

  // Harley Davidson
  {
    id: 'harley-x440',
    brand: 'Harley Davidson',
    name: 'X440',
    fullName: 'Harley Davidson X440',
    folderName: 'Harley Davidson x440',
    image: '/uploads/Bikes Thumbnail/harley davidson x440.jpg',
    description: 'Entry-level Harley with classic styling',
    category: 'Cruiser',
  },

  // Honda
  {
    id: 'honda-500-nx',
    brand: 'Honda',
    name: '500 NX',
    fullName: 'Honda 500 NX',
    folderName: 'HONDA 500 NX',
    image: '/uploads/Bikes Thumbnail/honda nx 500.webp',
    description: 'Versatile adventure crossover',
    category: 'Adventure',
  },
  {
    id: 'honda-cb-200x',
    brand: 'Honda',
    name: 'CB 200X',
    fullName: 'Honda CB 200X',
    folderName: 'HONDA CB 200 X',
    image: '/uploads/Bikes Thumbnail/honda-cb200x.jpg',
    description: 'Adventure-styled commuter',
    category: 'Adventure',
  },

  // Kawasaki
  {
    id: 'kawasaki-versys-650',
    brand: 'Kawasaki',
    name: 'Versys 650',
    fullName: 'Kawasaki Versys 650',
    folderName: 'KAWASAKI VERSYS 650',
    image: '/uploads/Bikes Thumbnail/kawasaki versys 650.jpg',
    description: 'Sport-touring adventure bike',
    category: 'Adventure',
  },

  // KTM
  {
    id: 'ktm-adv-250-390',
    brand: 'KTM',
    name: 'Adventure 250-390',
    fullName: 'KTM Adventure 250-390',
    folderName: 'KTM adv 250-390',
    image: '/uploads/Bikes Thumbnail/KTM-250-Adventure.jpg',
    description: 'Lightweight adventure machines',
    category: 'Adventure',
  },
  {
    id: 'ktm-adventure',
    brand: 'KTM',
    name: 'Adventure',
    fullName: 'KTM Adventure',
    folderName: 'KTM Adventure',
    image: '/uploads/Bikes Thumbnail/ktm adventure.jpg',
    description: 'Premium adventure touring bike',
    category: 'Adventure',
  },
  {
    id: 'ktm-390-gen3',
    brand: 'KTM',
    name: '390 Duke Gen 3',
    fullName: 'KTM 390 Duke Gen 3',
    folderName: 'KTM duke 390 gen 3',
    image: '/uploads/Bikes Thumbnail/ktm 390 gen 3.webp',
    description: 'Naked street fighter',
    category: 'Sport',
  },

  // Bajaj
  {
    id: 'pulsar-ns-400',
    brand: 'Bajaj',
    name: 'Pulsar NS 400',
    fullName: 'Bajaj Pulsar NS 400',
    folderName: 'Pulsar ns400',
    image: '/uploads/Bikes Thumbnail/pulsar-ns400.avif',
    description: 'Sporty naked streetfighter',
    category: 'Sport',
  },
  {
    id: 'pulsar-ns-400z',
    brand: 'Bajaj',
    name: 'Pulsar NS 400Z',
    fullName: 'Bajaj Pulsar NS 400Z',
    folderName: 'PULSAR NS400Z',
    image: '/uploads/Bikes Thumbnail/pulsar nz400z.webp',
    description: 'Performance-oriented street bike',
    category: 'Sport',
  },

  // Suzuki
  {
    id: 'suzuki-vstrom-650',
    brand: 'Suzuki',
    name: 'V-Strom 650',
    fullName: 'Suzuki V-Strom 650',
    folderName: 'Suzuki V-Strom 650',
    image: '/bike-placeholder.svg',
    description: 'Reliable adventure tourer',
    category: 'Adventure',
  },

  // Triumph
  {
    id: 'triumph-scrambler-400',
    brand: 'Triumph',
    name: 'Scrambler 400X',
    fullName: 'Triumph Scrambler 400X',
    folderName: 'Scrambler 400X',
    image: '/uploads/Bikes Thumbnail/scrambler-400x.webp',
    description: 'Modern scrambler with classic appeal',
    category: 'Adventure',
  },
  {
    id: 'triumph-speed-400',
    brand: 'Triumph',
    name: 'Speed 400',
    fullName: 'Triumph Speed 400',
    folderName: 'Triumph Speed 400',
    image: '/bike-placeholder.svg',
    description: 'Agile roadster with retro styling',
    category: 'Standard',
  },

  // Yezdi
  {
    id: 'yezdi-adventure',
    brand: 'Yezdi',
    name: 'Adventure',
    fullName: 'Yezdi Adventure',
    folderName: 'Yezdi Adventure',
    image: '/bike-placeholder.svg',
    description: 'Adventure tourer with scrambler styling',
    category: 'Adventure',
  },
  {
    id: 'yezdi-roadster',
    brand: 'Yezdi',
    name: 'Roadster',
    fullName: 'Yezdi Roadster',
    folderName: 'Yezdi Roadster',
    image: '/bike-placeholder.svg',
    description: 'Retro roadster with modern tech',
    category: 'Standard',
  },
];

// Get unique brands
export const brands = Array.from(new Set(bikes.map(bike => bike.brand))).sort();

// Get bikes by brand
export const getBikesByBrand = (brand: string): Bike[] => {
  return bikes.filter(bike => bike.brand === brand);
};

// Get bike by ID
export const getBikeById = (id: string): Bike | undefined => {
  return bikes.find(bike => bike.id === id);
};

// Get bikes by category
export const getBikesByCategory = (category: string): Bike[] => {
  return bikes.filter(bike => bike.category === category);
};

