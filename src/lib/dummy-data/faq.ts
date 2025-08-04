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