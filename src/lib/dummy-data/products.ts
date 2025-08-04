export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  brand: string;
  description: string;
  inStock: boolean;
  isTopSeller?: boolean;
}

export const bestSellingProducts: Product[] = [
  {
    id: "1",
    name: "Premium Whey Protein Isolate",
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.8,
    reviewCount: 1247,
    image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "Protein",
    brand: "NutriMax",
    description: "Ultra-pure whey protein isolate with 25g protein per serving. Perfect for muscle building and recovery.",
    inStock: true,
    isTopSeller: true
  },
  {
    id: "2", 
    name: "Multivitamin Complex",
    price: 29.99,
    rating: 4.6,
    reviewCount: 892,
    image: "/api/placeholder/300/300?text=Multivitamin",
    category: "Vitamins",
    brand: "VitalHealth",
    description: "Complete daily multivitamin with 23 essential vitamins and minerals for overall health support.",
    inStock: true,
    isTopSeller: true
  },
  {
    id: "3",
    name: "Pre-Workout Energy Boost",
    price: 39.99,
    originalPrice: 44.99,
    rating: 4.7,
    reviewCount: 654,
    image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "Pre-Workout",
    brand: "PowerFuel",
    description: "Advanced pre-workout formula with caffeine, beta-alanine, and citrulline for maximum energy and focus.",
    inStock: true,
    isTopSeller: true
  },
  {
    id: "4",
    name: "Omega-3 Fish Oil",
    price: 24.99,
    rating: 4.5,
    reviewCount: 723,
    image: "/api/placeholder/300/300?text=Omega+3",
    category: "Health",
    brand: "OceanPure",
    description: "High-potency omega-3 fish oil with EPA and DHA for heart and brain health support.",
    inStock: true,
    isTopSeller: true
  },
  {
    id: "5",
    name: "Creatine Monohydrate",
    price: 19.99,
    rating: 4.9,
    reviewCount: 1456,
    image: "/api/placeholder/300/300?text=Creatine",
    category: "Performance",
    brand: "StrengthMax",
    description: "Pure creatine monohydrate powder for increased strength, power, and muscle mass.",
    inStock: true,
    isTopSeller: true
  },
  {
    id: "6",
    name: "BCAA Recovery Formula",
    price: 34.99,
    originalPrice: 39.99,
    rating: 4.4,
    reviewCount: 567,
    image: "/api/placeholder/300/300?text=BCAA",
    category: "Recovery",
    brand: "RecoverPro",
    description: "Essential amino acids blend for faster recovery and reduced muscle soreness.",
    inStock: true,
    isTopSeller: true
  },
  // Additional products for better filtering/searching demonstration
  {
    id: "7",
    name: "Casein Protein Powder",
    price: 45.99,
    rating: 4.3,
    reviewCount: 432,
    image: "/api/placeholder/300/300?text=Casein",
    category: "Protein",
    brand: "SlowDigest",
    description: "Slow-releasing casein protein for overnight muscle recovery and growth.",
    inStock: true,
    isTopSeller: false
  },
  {
    id: "8",
    name: "Vitamin D3 + K2",
    price: 18.99,
    rating: 4.7,
    reviewCount: 834,
    image: "/api/placeholder/300/300?text=VitD3",
    category: "Vitamins",
    brand: "SunHealth",
    description: "High-potency vitamin D3 combined with vitamin K2 for bone and immune health.",
    inStock: true,
    isTopSeller: false
  },
  {
    id: "9",
    name: "Plant-Based Protein",
    price: 52.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviewCount: 623,
    image: "/api/placeholder/300/300?text=Plant+Protein",
    category: "Protein",
    brand: "GreenPower",
    description: "Organic plant-based protein blend with pea, hemp, and rice proteins.",
    inStock: true,
    isTopSeller: false
  },
  {
    id: "10",
    name: "Beta-Alanine Powder",
    price: 22.99,
    rating: 4.2,
    reviewCount: 345,
    image: "/api/placeholder/300/300?text=Beta+Alanine",
    category: "Performance",
    brand: "EnduroMax",
    description: "Pure beta-alanine for improved muscular endurance and reduced fatigue.",
    inStock: true,
    isTopSeller: false
  },
  {
    id: "11",
    name: "Magnesium Glycinate",
    price: 16.99,
    rating: 4.6,
    reviewCount: 756,
    image: "/api/placeholder/300/300?text=Magnesium",
    category: "Health",
    brand: "MineralMax",
    description: "Highly absorbable magnesium glycinate for muscle relaxation and sleep support.",
    inStock: true,
    isTopSeller: false
  },
  {
    id: "12",
    name: "Post-Workout Recovery",
    price: 41.99,
    rating: 4.4,
    reviewCount: 298,
    image: "/api/placeholder/300/300?text=Post+Workout",
    category: "Recovery",
    brand: "RecoverPro",
    description: "Complete post-workout formula with protein, carbs, and recovery nutrients.",
    inStock: false,
    isTopSeller: false
  },
  {
    id: "13",
    name: "Collagen Peptides",
    price: 31.99,
    rating: 4.1,
    reviewCount: 512,
    image: "/api/placeholder/300/300?text=Collagen",
    category: "Health",
    brand: "BeautyWell",
    description: "Hydrolyzed collagen peptides for skin, hair, nail, and joint health.",
    inStock: true,
    isTopSeller: false
  },
  {
    id: "14",
    name: "Natural Pre-Workout",
    price: 33.99,
    rating: 4.0,
    reviewCount: 187,
    image: "/api/placeholder/300/300?text=Natural+Pre",
    category: "Pre-Workout",
    brand: "NatureBoost",
    description: "All-natural pre-workout with green tea extract and beetroot powder.",
    inStock: true,
    isTopSeller: false
  },
  {
    id: "15",
    name: "ZMA Complex",
    price: 21.99,
    rating: 4.3,
    reviewCount: 423,
    image: "/api/placeholder/300/300?text=ZMA",
    category: "Recovery",
    brand: "SleepWell",
    description: "Zinc, magnesium, and vitamin B6 for better sleep and muscle recovery.",
    inStock: true,
    isTopSeller: false
  },
  {
    id: "16",
    name: "Probiotics Complex",
    price: 27.99,
    rating: 4.5,
    reviewCount: 634,
    image: "/api/placeholder/300/300?text=Probiotics",
    category: "Health",
    brand: "GutHealth",
    description: "Multi-strain probiotic blend for digestive health and immune support.",
    inStock: true,
    isTopSeller: false
  },
  {
    id: "17",
    name: "L-Carnitine Liquid",
    price: 25.99,
    originalPrice: 29.99,
    rating: 4.2,
    reviewCount: 289,
    image: "/api/placeholder/300/300?text=Carnitine",
    category: "Performance",
    brand: "FatBurn",
    description: "Liquid L-carnitine for enhanced fat metabolism and exercise performance.",
    inStock: true,
    isTopSeller: false
  },
  {
    id: "18",
    name: "Electrolyte Powder",
    price: 23.99,
    rating: 4.4,
    reviewCount: 445,
    image: "/api/placeholder/300/300?text=Electrolytes",
    category: "Performance",
    brand: "HydroMax",
    description: "Sugar-free electrolyte powder for hydration and exercise performance.",
    inStock: true,
    isTopSeller: false
  }
];