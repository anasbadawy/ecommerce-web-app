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
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "Recovery",
    brand: "RecoverPro",
    description: "Essential amino acids blend for faster recovery and reduced muscle soreness.",
    inStock: true,
    isTopSeller: true
  }
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    id: "1",
    question: "How do I choose the right protein supplement?",
    answer: "The right protein supplement depends on your goals, dietary restrictions, and preferences. Whey protein is ideal for post-workout recovery, casein for sustained protein release, and plant-based options for those with dairy sensitivities. Consider your daily protein needs, timing of consumption, and any allergies when making your choice.",
    category: "Products"
  },
  {
    id: "2",
    question: "When is the best time to take supplements?",
    answer: "Timing varies by supplement type. Take protein within 30 minutes post-workout, pre-workout 15-30 minutes before exercise, multivitamins with breakfast, and omega-3s with meals for better absorption. Always follow the specific instructions on each product label.",
    category: "Usage"
  },
  {
    id: "3",
    question: "Are your products third-party tested?",
    answer: "Yes, all our supplements undergo rigorous third-party testing for purity, potency, and safety. We work with certified laboratories to ensure our products meet the highest quality standards and are free from contaminants, banned substances, and heavy metals.",
    category: "Quality"
  },
  {
    id: "4",
    question: "What is your return policy?",
    answer: "We offer a 30-day money-back guarantee on all products. If you're not completely satisfied, you can return unopened items for a full refund. Opened products can be returned within 30 days for store credit. Original shipping costs are non-refundable.",
    category: "Policy"
  },
  {
    id: "5",
    question: "Do you offer free shipping?",
    answer: "Yes! We provide free standard shipping on all orders over $50 within the continental US. Orders typically arrive within 2-3 business days. Express shipping options are available for an additional fee if you need your supplements sooner.",
    category: "Shipping"
  },
  {
    id: "6",
    question: "Can I take multiple supplements together?",
    answer: "Most supplements can be safely combined, but it's important to avoid exceeding recommended daily values for any nutrient. Some combinations may enhance absorption (like vitamin D with calcium), while others may compete (like iron with calcium). Consult with a healthcare professional for personalized advice.",
    category: "Usage"
  },
  {
    id: "7",
    question: "How should I store my supplements?",
    answer: "Store supplements in a cool, dry place away from direct sunlight and moisture. Keep them in their original containers with tightly sealed lids. Avoid storing in bathrooms or kitchens where humidity can vary. Most supplements are stable at room temperature, but check individual product labels for specific storage requirements.",
    category: "Storage"
  },
  {
    id: "8",
    question: "Are your supplements safe for athletes?",
    answer: "Yes, our supplements are tested for banned substances and are safe for competitive athletes. We follow strict manufacturing processes and work with NSF Certified for Sport and Informed Sport programs to ensure compliance with anti-doping regulations. Look for certified products in our athlete-friendly collection.",
    category: "Sports"
  }
];