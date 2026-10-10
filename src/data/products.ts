import { Category, Product } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'All Collections', description: 'Explore our complete range of custom woodwork.' },
  { id: 'sofas', name: 'Wooden Sofas', description: 'Solid wood lounge sofas, 3-seaters, and sectional sofa frames.' },
  { id: 'wardrobes', name: 'Wardrobes / Bero', description: 'Spacious wooden wardrobes with custom shelving, drawers, and polish.' },
  { id: 'chairs', name: 'Wooden Chairs', description: 'Ergonomic dining chairs, armchairs, and traditional carved seats.' },
  { id: 'tables', name: 'Tables', description: 'Solid wood dining tables, study desks, coffee tables, and side tables.' },
  { id: 'benches', name: 'Wooden Benches', description: 'Traditional wooden benches, foyer seats, and dining room seating.' },
  { id: 'beds', name: 'Beds / Cots', description: 'King & queen size solid wood beds with custom headboard carving.' },
  { id: 'doors', name: 'Wooden Doors', description: 'Main entrance teak wood doors, interior doors, and carved frames.' },
  { id: 'storage', name: 'Shelves & Storage', description: 'Custom wall shelves, crockery cabinets, and TV console units.' },
  { id: 'pooja', name: 'Pooja Units', description: 'Sacred wooden pooja mandapams with intricate joinery and brass accents.' },
  { id: 'accessories', name: 'Wooden Accessories', description: 'Handcrafted wooden wall art, mirrors, stools, and decor pieces.' },
  { id: 'custom', name: 'Custom Woodwork', description: 'Architectural woodwork, interior panelling, and customized furniture.' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'sofa-royal-teak',
    name: 'Royal Heritage Teak Sofa Set',
    category: 'sofas',
    categoryLabel: 'Wooden Sofas',
    indicativePrice: '₹18,000 – ₹45,000+',
    priceMin: 18000,
    priceMax: 45000,
    shortDescription: 'Solid teak wood sofa frame with hand-carved armrests and durable joinery.',
    description: 'Custom crafted solid wooden sofa tailored to your living space dimensions. Built using high-density solid timber for decades of comfort.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80'
    ],
    customizationInfo: 'Available in 3-seater, 2-seater, single armchair, or L-shape lounge setups.',
    materialsSuggested: ['Teak Wood', 'Rosewood', 'Country Wood'],
    finishOptions: ['Natural Gloss Polish', 'Matte Walnut Wax', 'Dark Mahogany Stain'],
    isFeatured: true
  },
  {
    id: 'wardrobe-classic-bero',
    name: 'Custom 3-Door Wooden Bero & Wardrobe',
    category: 'wardrobes',
    categoryLabel: 'Wardrobes / Bero',
    indicativePrice: '₹20,000 – ₹55,000+',
    priceMin: 20000,
    priceMax: 55000,
    shortDescription: 'Full-height wooden wardrobe with internal drawers, locker compartment, and hanger rail.',
    description: 'Precision-measured bedroom storage crafted to maximize vertical wall space. Features smooth brass hinges and secure wooden internal compartments.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80'
    ],
    customizationInfo: 'Door layouts, drawer numbers, mirror fitting, and inner shelf heights fully configurable.',
    materialsSuggested: ['Seasoned Teak', 'Plywood with Teak Veneer', 'Hardwood'],
    finishOptions: ['Warm Amber Polish', 'Rosewood Satin finish'],
    isFeatured: true
  },
  {
    id: 'dining-chair-artisan',
    name: 'Artisan Curved Wooden Dining Chair',
    category: 'chairs',
    categoryLabel: 'Wooden Chairs',
    indicativePrice: '₹2,500 – ₹8,000 per chair',
    priceMin: 2500,
    priceMax: 8000,
    shortDescription: 'Ergonomic solid wood dining chair with contoured backrest and smooth joinery.',
    description: 'Handcrafted chair engineered for comfort and structural stability. Built with traditional mortise-and-tenon joints that withstand daily family dining.',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1580481072645-022f9a6d8310?auto=format&fit=crop&w=1000&q=80'
    ],
    customizationInfo: 'Optional upholstered cushion top or pure solid wood contoured seat.',
    materialsSuggested: ['Teak Wood', 'Jackwood', 'Sal Wood'],
    finishOptions: ['Clear Matte Polyurethane', 'Dark Antique Polish'],
    isFeatured: true
  },
  {
    id: 'dining-table-heritage',
    name: 'Grand 6-Seater Wooden Dining Table',
    category: 'tables',
    categoryLabel: 'Tables',
    indicativePrice: '₹8,000 – ₹30,000+',
    priceMin: 8000,
    priceMax: 30000,
    shortDescription: 'Heavy-duty solid wood dining table with hand-bevelled edges and sturdy legs.',
    description: 'The centerpiece of family gatherings. Made with thick timber slabs treated against moisture and wear.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1000&q=80'
    ],
    customizationInfo: 'Available in 4-seater, 6-seater, 8-seater, or custom coffee table sizes.',
    materialsSuggested: ['Teak', 'Country Wood', 'Neem Wood'],
    finishOptions: ['High Gloss Teak Polish', 'Rustic Grain Matt'],
    isFeatured: true
  },
  {
    id: 'bed-king-cot',
    name: 'Imperial Teak King Size Bed & Headboard',
    category: 'beds',
    categoryLabel: 'Beds / Cots',
    indicativePrice: '₹18,000 – ₹60,000+',
    priceMin: 18000,
    priceMax: 60000,
    shortDescription: 'Solid timber king cot with carved panel headboard and optional under-bed storage.',
    description: 'Designed for restful sleep and timeless aesthetic charm. Constructed with heavy support beams and solid slat foundation.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1000&q=80'
    ],
    customizationInfo: 'Custom mattress fit (King, Queen, Single), hydraulic box storage or open frame.',
    materialsSuggested: ['First Quality Teak Wood', 'Veneered Hardwood'],
    finishOptions: ['Natural Teak Honey Polish', 'Dark Espresso Polish'],
    isFeatured: true
  },
  {
    id: 'door-carved-entrance',
    name: 'Traditional Carved Teak Main Door Frame',
    category: 'doors',
    categoryLabel: 'Wooden Doors',
    indicativePrice: '₹15,000 – ₹50,000+',
    priceMin: 15000,
    priceMax: 50000,
    shortDescription: 'Heavy solid teak entrance door with ornamental carving and custom frame moulding.',
    description: 'A welcoming main entrance statement crafted with thick seasoned teak timber to withstand exterior climate conditions.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80'
    ],
    customizationInfo: 'Floral carvings, traditional motifs, brass studs, and custom frame thickness available.',
    materialsSuggested: ['100% Solid Burma Teak', 'Indian Teak'],
    finishOptions: ['Weatherproof PU Clear Coat', 'Dark Teak Oil Polish'],
    isFeatured: true
  },
  {
    id: 'pooja-mandapam-shrine',
    name: 'Traditional Temple Pooja Unit & Shrine',
    category: 'pooja',
    categoryLabel: 'Pooja Units',
    indicativePrice: '₹5,000 – ₹25,000+',
    priceMin: 5000,
    priceMax: 25000,
    shortDescription: 'Custom sacred wood pooja shrine with drawers for lamps, incense, and bells.',
    description: 'Hand-carved pooja mandapam built according to home space requirements with sacred wood joinery principles.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
    ],
    customizationInfo: 'Wall-mounted compact units or freestanding floor mandapams.',
    materialsSuggested: ['Teak Wood', 'Rosewood', 'Jackfruit Wood'],
    finishOptions: ['Gloss Polish with Gold Accents', 'Natural Honey Polish'],
    isFeatured: true
  },
  {
    id: 'bench-traditional-thinnai',
    name: 'Traditional Foyer & Dining Bench',
    category: 'benches',
    categoryLabel: 'Wooden Benches',
    indicativePrice: '₹5,000 – ₹15,000+',
    priceMin: 5000,
    priceMax: 15000,
    shortDescription: 'Sturdy wooden bench for verandah, dining tables, or entryway seating.',
    description: 'Inspired by classic South Indian thinnai seating, built with solid planks and reinforced legs.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80',
    customizationInfo: 'Length from 3ft to 6ft, backrest or backless style.',
    materialsSuggested: ['Teak', 'Hardwood', 'Neem Timber'],
    finishOptions: ['Natural Wax Polish', 'Matte Teak']
  },
  {
    id: 'storage-tv-console',
    name: 'Modern Wooden TV Console & Wall Unit',
    category: 'storage',
    categoryLabel: 'Shelves & Storage',
    indicativePrice: '₹2,500 – ₹15,000+',
    priceMin: 2500,
    priceMax: 15000,
    shortDescription: 'Floating or floor-standing wooden TV unit with cable management ports.',
    description: 'Clean modern storage solution to organize media devices, books, and decorative accents.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80',
    customizationInfo: 'Custom shelf dividers, glass door cabinets, or open display slots.',
    materialsSuggested: ['Teak Plywood', 'Solid Wood Accents'],
    finishOptions: ['Dual Tone Walnut & Ivory', 'Natural Wood Gloss']
  },
  {
    id: 'accessory-wall-art-mirror',
    name: 'Hand-Carved Wooden Frame Mirror & Decor',
    category: 'accessories',
    categoryLabel: 'Wooden Accessories',
    indicativePrice: '₹500 – ₹10,000+',
    priceMin: 500,
    priceMax: 10000,
    shortDescription: 'Decorative carved mirror frame, wooden stools, and customized craft items.',
    description: 'Small timber creations and accent accessories that add warmth to home entryways and living rooms.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    customizationInfo: 'Custom frame sizes, mirror glass inclusion, and carved patterns.',
    materialsSuggested: ['Teak Wood', 'Carved Hardwood'],
    finishOptions: ['Hand-Rubbed Oil Finish', 'Gold Highlight Stain']
  }
];
