// Order interfaces and dummy data
export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  brand: string;
  price: number;
  quantity: number;
  total: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  shippedDate?: string;
  deliveredDate?: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentMethod: string;
  trackingNumber?: string;
}

export const adminOrders: Order[] = [
  {
    id: "ord_001",
    orderNumber: "ORD-2024-001",
    customerName: "John Smith",
    customerEmail: "john.smith@email.com",
    status: "delivered",
    orderDate: "2024-01-15T10:30:00Z",
    shippedDate: "2024-01-16T14:20:00Z",
    deliveredDate: "2024-01-18T16:45:00Z",
    items: [
      {
        id: "item_001",
        productId: "1",
        productName: "Premium Whey Protein Isolate",
        brand: "NutriMax",
        price: 49.99,
        quantity: 2,
        total: 99.98
      },
      {
        id: "item_002",
        productId: "5",
        productName: "Creatine Monohydrate",
        brand: "StrengthMax",
        price: 19.99,
        quantity: 1,
        total: 19.99
      }
    ],
    subtotal: 119.97,
    shipping: 8.99,
    tax: 10.40,
    total: 139.36,
    shippingAddress: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA"
    },
    paymentMethod: "Credit Card",
    trackingNumber: "1Z999AA1234567890"
  },
  {
    id: "ord_002",
    orderNumber: "ORD-2024-002",
    customerName: "Sarah Johnson",
    customerEmail: "sarah.j@email.com",
    status: "shipped",
    orderDate: "2024-01-20T09:15:00Z",
    shippedDate: "2024-01-21T11:30:00Z",
    items: [
      {
        id: "item_003",
        productId: "2",
        productName: "Multivitamin Complex",
        brand: "VitalHealth",
        price: 29.99,
        quantity: 1,
        total: 29.99
      },
      {
        id: "item_004",
        productId: "8",
        productName: "Vitamin D3 + K2",
        brand: "SunHealth",
        price: 18.99,
        quantity: 2,
        total: 37.98
      }
    ],
    subtotal: 67.97,
    shipping: 5.99,
    tax: 5.88,
    total: 79.84,
    shippingAddress: {
      street: "456 Oak Ave",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90210",
      country: "USA"
    },
    paymentMethod: "PayPal",
    trackingNumber: "1Z999AA9876543210"
  },
  {
    id: "ord_003",
    orderNumber: "ORD-2024-003",
    customerName: "Mike Davis",
    customerEmail: "mike.davis@email.com",
    status: "processing",
    orderDate: "2024-01-22T14:45:00Z",
    items: [
      {
        id: "item_005",
        productId: "3",
        productName: "Pre-Workout Energy Boost",
        brand: "PowerFuel",
        price: 39.99,
        quantity: 1,
        total: 39.99
      },
      {
        id: "item_006",
        productId: "6",
        productName: "BCAA Recovery Formula",
        brand: "RecoverPro",
        price: 34.99,
        quantity: 1,
        total: 34.99
      }
    ],
    subtotal: 74.98,
    shipping: 6.99,
    tax: 6.50,
    total: 88.47,
    shippingAddress: {
      street: "789 Pine St",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      country: "USA"
    },
    paymentMethod: "Credit Card"
  },
  {
    id: "ord_004",
    orderNumber: "ORD-2024-004",
    customerName: "Emily Chen",
    customerEmail: "emily.chen@email.com",
    status: "pending",
    orderDate: "2024-01-23T16:20:00Z",
    items: [
      {
        id: "item_007",
        productId: "9",
        productName: "Plant-Based Protein",
        brand: "GreenPower",
        price: 52.99,
        quantity: 1,
        total: 52.99
      }
    ],
    subtotal: 52.99,
    shipping: 0.00,
    tax: 4.59,
    total: 57.58,
    shippingAddress: {
      street: "321 Elm Dr",
      city: "Seattle",
      state: "WA",
      zipCode: "98101",
      country: "USA"
    },
    paymentMethod: "Credit Card"
  },
  {
    id: "ord_005",
    orderNumber: "ORD-2024-005",
    customerName: "Robert Wilson",
    customerEmail: "r.wilson@email.com",
    status: "cancelled",
    orderDate: "2024-01-18T08:30:00Z",
    items: [
      {
        id: "item_008",
        productId: "4",
        productName: "Omega-3 Fish Oil",
        brand: "OceanPure",
        price: 24.99,
        quantity: 3,
        total: 74.97
      }
    ],
    subtotal: 74.97,
    shipping: 7.99,
    tax: 6.50,
    total: 89.46,
    shippingAddress: {
      street: "654 Maple Ln",
      city: "Miami",
      state: "FL",
      zipCode: "33101",
      country: "USA"
    },
    paymentMethod: "Credit Card"
  },
  {
    id: "ord_006",
    orderNumber: "ORD-2024-006",
    customerName: "Lisa Anderson",
    customerEmail: "lisa.anderson@email.com",
    status: "delivered",
    orderDate: "2024-01-10T12:00:00Z",
    shippedDate: "2024-01-11T10:15:00Z",
    deliveredDate: "2024-01-13T14:30:00Z",
    items: [
      {
        id: "item_009",
        productId: "11",
        productName: "Magnesium Glycinate",
        brand: "MineralMax",
        price: 16.99,
        quantity: 2,
        total: 33.98
      },
      {
        id: "item_010",
        productId: "16",
        productName: "Probiotics Complex",
        brand: "GutHealth",
        price: 27.99,
        quantity: 1,
        total: 27.99
      }
    ],
    subtotal: 61.97,
    shipping: 5.99,
    tax: 5.38,
    total: 73.34,
    shippingAddress: {
      street: "987 Cedar St",
      city: "Denver",
      state: "CO",
      zipCode: "80201",
      country: "USA"
    },
    paymentMethod: "Credit Card",
    trackingNumber: "1Z999AA5555666777"
  },
  {
    id: "ord_007",
    orderNumber: "ORD-2024-007",
    customerName: "David Brown",
    customerEmail: "david.brown@email.com",
    status: "shipped",
    orderDate: "2024-01-24T11:45:00Z",
    shippedDate: "2024-01-25T09:30:00Z",
    items: [
      {
        id: "item_011",
        productId: "7",
        productName: "Casein Protein Powder",
        brand: "SlowDigest",
        price: 45.99,
        quantity: 1,
        total: 45.99
      },
      {
        id: "item_012",
        productId: "15",
        productName: "ZMA Complex",
        brand: "SleepWell",
        price: 21.99,
        quantity: 1,
        total: 21.99
      }
    ],
    subtotal: 67.98,
    shipping: 6.99,
    tax: 5.90,
    total: 80.87,
    shippingAddress: {
      street: "159 Birch Ave",
      city: "Boston",
      state: "MA",
      zipCode: "02101",
      country: "USA"
    },
    paymentMethod: "PayPal",
    trackingNumber: "1Z999AA7777888999"
  },
  {
    id: "ord_008",
    orderNumber: "ORD-2024-008",
    customerName: "Jessica Martinez",
    customerEmail: "j.martinez@email.com",
    status: "processing",
    orderDate: "2024-01-25T13:20:00Z",
    items: [
      {
        id: "item_013",
        productId: "13",
        productName: "Collagen Peptides",
        brand: "BeautyWell",
        price: 31.99,
        quantity: 2,
        total: 63.98
      },
      {
        id: "item_014",
        productId: "18",
        productName: "Electrolyte Powder",
        brand: "HydroMax",
        price: 23.99,
        quantity: 1,
        total: 23.99
      }
    ],
    subtotal: 87.97,
    shipping: 8.99,
    tax: 7.62,
    total: 104.58,
    shippingAddress: {
      street: "753 Willow St",
      city: "Phoenix",
      state: "AZ",
      zipCode: "85001",
      country: "USA"
    },
    paymentMethod: "Credit Card"
  },
  {
    id: "ord_009",
    orderNumber: "ORD-2024-009",
    customerName: "Kevin Lee",
    customerEmail: "kevin.lee@email.com",
    status: "delivered",
    orderDate: "2024-01-08T15:30:00Z",
    shippedDate: "2024-01-09T12:00:00Z",
    deliveredDate: "2024-01-11T10:15:00Z",
    items: [
      {
        id: "item_015",
        productId: "10",
        productName: "Beta-Alanine Powder",
        brand: "EnduroMax",
        price: 22.99,
        quantity: 2,
        total: 45.98
      }
    ],
    subtotal: 45.98,
    shipping: 5.99,
    tax: 4.20,
    total: 56.17,
    shippingAddress: {
      street: "246 Spruce Dr",
      city: "Portland",
      state: "OR",
      zipCode: "97201",
      country: "USA"
    },
    paymentMethod: "Credit Card",
    trackingNumber: "1Z999AA1111222333"
  },
  {
    id: "ord_010",
    orderNumber: "ORD-2024-010",
    customerName: "Amanda White",
    customerEmail: "amanda.white@email.com",
    status: "pending",
    orderDate: "2024-01-26T10:00:00Z",
    items: [
      {
        id: "item_016",
        productId: "14",
        productName: "Natural Pre-Workout",
        brand: "NatureBoost",
        price: 33.99,
        quantity: 1,
        total: 33.99
      },
      {
        id: "item_017",
        productId: "17",
        productName: "L-Carnitine Liquid",
        brand: "FatBurn",
        price: 25.99,
        quantity: 1,
        total: 25.99
      }
    ],
    subtotal: 59.98,
    shipping: 6.99,
    tax: 5.20,
    total: 72.17,
    shippingAddress: {
      street: "852 Poplar St",
      city: "Nashville",
      state: "TN",
      zipCode: "37201",
      country: "USA"
    },
    paymentMethod: "PayPal"
  },
  {
    id: "ord_011",
    orderNumber: "ORD-2024-011",
    customerName: "Carlos Rodriguez",
    customerEmail: "carlos.rodriguez@email.com",
    status: "shipped",
    orderDate: "2024-01-27T14:30:00Z",
    shippedDate: "2024-01-28T11:20:00Z",
    items: [
      {
        id: "item_018",
        productId: "1",
        productName: "Premium Whey Protein Isolate",
        brand: "NutriMax",
        price: 49.99,
        quantity: 1,
        total: 49.99
      },
      {
        id: "item_019",
        productId: "12",
        productName: "Post-Workout Recovery",
        brand: "RecoverPro",
        price: 41.99,
        quantity: 1,
        total: 41.99
      }
    ],
    subtotal: 91.98,
    shipping: 7.99,
    tax: 7.98,
    total: 107.95,
    shippingAddress: {
      street: "1426 Broadway St",
      city: "San Antonio",
      state: "TX",
      zipCode: "78201",
      country: "USA"
    },
    paymentMethod: "Credit Card",
    trackingNumber: "1Z999AA4444555666"
  },
  {
    id: "ord_012",
    orderNumber: "ORD-2024-012",
    customerName: "Rachel Thompson",
    customerEmail: "rachel.thompson@email.com",
    status: "delivered",
    orderDate: "2024-01-12T09:45:00Z",
    shippedDate: "2024-01-13T15:30:00Z",
    deliveredDate: "2024-01-15T12:20:00Z",
    items: [
      {
        id: "item_020",
        productId: "2",
        productName: "Multivitamin Complex",
        brand: "VitalHealth",
        price: 29.99,
        quantity: 3,
        total: 89.97
      }
    ],
    subtotal: 89.97,
    shipping: 0.00,
    tax: 7.80,
    total: 97.77,
    shippingAddress: {
      street: "892 Valley Road",
      city: "Atlanta",
      state: "GA",
      zipCode: "30301",
      country: "USA"
    },
    paymentMethod: "PayPal",
    trackingNumber: "1Z999AA8888999000"
  },
  {
    id: "ord_013",
    orderNumber: "ORD-2024-013",
    customerName: "Marcus Johnson",
    customerEmail: "marcus.j@email.com",
    status: "processing",
    orderDate: "2024-01-28T16:15:00Z",
    items: [
      {
        id: "item_021",
        productId: "3",
        productName: "Pre-Workout Energy Boost",
        brand: "PowerFuel",
        price: 39.99,
        quantity: 2,
        total: 79.98
      },
      {
        id: "item_022",
        productId: "10",
        productName: "Beta-Alanine Powder",
        brand: "EnduroMax",
        price: 22.99,
        quantity: 1,
        total: 22.99
      }
    ],
    subtotal: 102.97,
    shipping: 8.99,
    tax: 8.92,
    total: 120.88,
    shippingAddress: {
      street: "567 Highland Ave",
      city: "Memphis",
      state: "TN",
      zipCode: "38101",
      country: "USA"
    },
    paymentMethod: "Credit Card"
  },
  {
    id: "ord_014",
    orderNumber: "ORD-2024-014",
    customerName: "Nina Patel",
    customerEmail: "nina.patel@email.com",
    status: "pending",
    orderDate: "2024-01-29T11:00:00Z",
    items: [
      {
        id: "item_023",
        productId: "13",
        productName: "Collagen Peptides",
        brand: "BeautyWell",
        price: 31.99,
        quantity: 1,
        total: 31.99
      },
      {
        id: "item_024",
        productId: "16",
        productName: "Probiotics Complex",
        brand: "GutHealth",
        price: 27.99,
        quantity: 2,
        total: 55.98
      }
    ],
    subtotal: 87.97,
    shipping: 6.99,
    tax: 7.62,
    total: 102.58,
    shippingAddress: {
      street: "234 Garden Lane",
      city: "Sacramento",
      state: "CA",
      zipCode: "95814",
      country: "USA"
    },
    paymentMethod: "Credit Card"
  },
  {
    id: "ord_015",
    orderNumber: "ORD-2024-015",
    customerName: "Trevor Williams",
    customerEmail: "trevor.williams@email.com",
    status: "cancelled",
    orderDate: "2024-01-21T13:30:00Z",
    items: [
      {
        id: "item_025",
        productId: "7",
        productName: "Casein Protein Powder",
        brand: "SlowDigest",
        price: 45.99,
        quantity: 1,
        total: 45.99
      }
    ],
    subtotal: 45.99,
    shipping: 5.99,
    tax: 3.98,
    total: 55.96,
    shippingAddress: {
      street: "789 Mountain View Dr",
      city: "Salt Lake City",
      state: "UT",
      zipCode: "84101",
      country: "USA"
    },
    paymentMethod: "PayPal"
  },
  {
    id: "ord_016",
    orderNumber: "ORD-2024-016",
    customerName: "Sophia Garcia",
    customerEmail: "sophia.garcia@email.com",
    status: "delivered",
    orderDate: "2024-01-14T08:20:00Z",
    shippedDate: "2024-01-15T10:45:00Z",
    deliveredDate: "2024-01-17T14:30:00Z",
    items: [
      {
        id: "item_026",
        productId: "8",
        productName: "Vitamin D3 + K2",
        brand: "SunHealth",
        price: 18.99,
        quantity: 1,
        total: 18.99
      },
      {
        id: "item_027",
        productId: "11",
        productName: "Magnesium Glycinate",
        brand: "MineralMax",
        price: 16.99,
        quantity: 3,
        total: 50.97
      },
      {
        id: "item_028",
        productId: "4",
        productName: "Omega-3 Fish Oil",
        brand: "OceanPure",
        price: 24.99,
        quantity: 1,
        total: 24.99
      }
    ],
    subtotal: 94.95,
    shipping: 8.99,
    tax: 8.25,
    total: 112.19,
    shippingAddress: {
      street: "456 Sunset Blvd",
      city: "Las Vegas",
      state: "NV",
      zipCode: "89101",
      country: "USA"
    },
    paymentMethod: "Credit Card",
    trackingNumber: "1Z999AA2222333444"
  },
  {
    id: "ord_017",
    orderNumber: "ORD-2024-017",
    customerName: "James Mitchell",
    customerEmail: "james.mitchell@email.com",
    status: "shipped",
    orderDate: "2024-01-30T10:15:00Z",
    shippedDate: "2024-01-31T09:30:00Z",
    items: [
      {
        id: "item_029",
        productId: "6",
        productName: "BCAA Recovery Formula",
        brand: "RecoverPro",
        price: 34.99,
        quantity: 2,
        total: 69.98
      },
      {
        id: "item_030",
        productId: "15",
        productName: "ZMA Complex",
        brand: "SleepWell",
        price: 21.99,
        quantity: 1,
        total: 21.99
      }
    ],
    subtotal: 91.97,
    shipping: 7.99,
    tax: 7.98,
    total: 107.94,
    shippingAddress: {
      street: "123 River Road",
      city: "New Orleans",
      state: "LA",
      zipCode: "70112",
      country: "USA"
    },
    paymentMethod: "PayPal",
    trackingNumber: "1Z999AA6666777888"
  },
  {
    id: "ord_018",
    orderNumber: "ORD-2024-018",
    customerName: "Isabella Kim",
    customerEmail: "isabella.kim@email.com",
    status: "processing",
    orderDate: "2024-01-31T15:45:00Z",
    items: [
      {
        id: "item_031",
        productId: "9",
        productName: "Plant-Based Protein",
        brand: "GreenPower",
        price: 52.99,
        quantity: 1,
        total: 52.99
      },
      {
        id: "item_032",
        productId: "14",
        productName: "Natural Pre-Workout",
        brand: "NatureBoost",
        price: 33.99,
        quantity: 1,
        total: 33.99
      }
    ],
    subtotal: 86.98,
    shipping: 6.99,
    tax: 7.55,
    total: 101.52,
    shippingAddress: {
      street: "987 Tech Boulevard",
      city: "Austin",
      state: "TX",
      zipCode: "78701",
      country: "USA"
    },
    paymentMethod: "Credit Card"
  },
  {
    id: "ord_019",
    orderNumber: "ORD-2024-019",
    customerName: "Ryan O'Connor",
    customerEmail: "ryan.oconnor@email.com",
    status: "delivered",
    orderDate: "2024-01-11T12:30:00Z",
    shippedDate: "2024-01-12T14:15:00Z",
    deliveredDate: "2024-01-14T16:45:00Z",
    items: [
      {
        id: "item_033",
        productId: "5",
        productName: "Creatine Monohydrate",
        brand: "StrengthMax",
        price: 19.99,
        quantity: 2,
        total: 39.98
      },
      {
        id: "item_034",
        productId: "17",
        productName: "L-Carnitine Liquid",
        brand: "FatBurn",
        price: 25.99,
        quantity: 2,
        total: 51.98
      }
    ],
    subtotal: 91.96,
    shipping: 8.99,
    tax: 7.98,
    total: 108.93,
    shippingAddress: {
      street: "654 Pine Avenue",
      city: "Minneapolis",
      state: "MN",
      zipCode: "55401",
      country: "USA"
    },
    paymentMethod: "Credit Card",
    trackingNumber: "1Z999AA9999000111"
  },
  {
    id: "ord_020",
    orderNumber: "ORD-2024-020",
    customerName: "Maya Gonzalez",
    customerEmail: "maya.gonzalez@email.com",
    status: "pending",
    orderDate: "2024-02-01T09:00:00Z",
    items: [
      {
        id: "item_035",
        productId: "18",
        productName: "Electrolyte Powder",
        brand: "HydroMax",
        price: 23.99,
        quantity: 3,
        total: 71.97
      }
    ],
    subtotal: 71.97,
    shipping: 0.00,
    tax: 6.24,
    total: 78.21,
    shippingAddress: {
      street: "321 Ocean Drive",
      city: "San Diego",
      state: "CA",
      zipCode: "92101",
      country: "USA"
    },
    paymentMethod: "PayPal"
  },
  {
    id: "ord_021",
    orderNumber: "ORD-2024-021",
    customerName: "Alexander Turner",
    customerEmail: "alex.turner@email.com",
    status: "shipped",
    orderDate: "2024-02-02T11:20:00Z",
    shippedDate: "2024-02-03T13:45:00Z",
    items: [
      {
        id: "item_036",
        productId: "1",
        productName: "Premium Whey Protein Isolate",
        brand: "NutriMax",
        price: 49.99,
        quantity: 2,
        total: 99.98
      },
      {
        id: "item_037",
        productId: "3",
        productName: "Pre-Workout Energy Boost",
        brand: "PowerFuel",
        price: 39.99,
        quantity: 1,
        total: 39.99
      },
      {
        id: "item_038",
        productId: "5",
        productName: "Creatine Monohydrate",
        brand: "StrengthMax",
        price: 19.99,
        quantity: 1,
        total: 19.99
      }
    ],
    subtotal: 159.96,
    shipping: 0.00,
    tax: 13.88,
    total: 173.84,
    shippingAddress: {
      street: "789 University Ave",
      city: "Madison",
      state: "WI",
      zipCode: "53706",
      country: "USA"
    },
    paymentMethod: "Credit Card",
    trackingNumber: "1Z999AA1111333555"
  },
  {
    id: "ord_022",
    orderNumber: "ORD-2024-022",
    customerName: "Victoria Chen",
    customerEmail: "victoria.chen@email.com",
    status: "processing",
    orderDate: "2024-02-03T14:30:00Z",
    items: [
      {
        id: "item_039",
        productId: "12",
        productName: "Post-Workout Recovery",
        brand: "RecoverPro",
        price: 41.99,
        quantity: 1,
        total: 41.99
      },
      {
        id: "item_040",
        productId: "16",
        productName: "Probiotics Complex",
        brand: "GutHealth",
        price: 27.99,
        quantity: 1,
        total: 27.99
      }
    ],
    subtotal: 69.98,
    shipping: 6.99,
    tax: 6.07,
    total: 83.04,
    shippingAddress: {
      street: "456 Market Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
      country: "USA"
    },
    paymentMethod: "Credit Card"
  },
  {
    id: "ord_023",
    orderNumber: "ORD-2024-023",
    customerName: "Benjamin Scott",
    customerEmail: "benjamin.scott@email.com",
    status: "delivered",
    orderDate: "2024-01-16T10:45:00Z",
    shippedDate: "2024-01-17T12:30:00Z",
    deliveredDate: "2024-01-19T15:20:00Z",
    items: [
      {
        id: "item_041",
        productId: "7",
        productName: "Casein Protein Powder",
        brand: "SlowDigest",
        price: 45.99,
        quantity: 1,
        total: 45.99
      },
      {
        id: "item_042",
        productId: "8",
        productName: "Vitamin D3 + K2",
        brand: "SunHealth",
        price: 18.99,
        quantity: 2,
        total: 37.98
      },
      {
        id: "item_043",
        productId: "11",
        productName: "Magnesium Glycinate",
        brand: "MineralMax",
        price: 16.99,
        quantity: 1,
        total: 16.99
      }
    ],
    subtotal: 100.96,
    shipping: 8.99,
    tax: 8.76,
    total: 118.71,
    shippingAddress: {
      street: "123 Capitol Hill",
      city: "Washington",
      state: "DC",
      zipCode: "20001",
      country: "USA"
    },
    paymentMethod: "PayPal",
    trackingNumber: "1Z999AA7777999222"
  },
  {
    id: "ord_024",
    orderNumber: "ORD-2024-024",
    customerName: "Olivia Martinez",
    customerEmail: "olivia.martinez@email.com",
    status: "cancelled",
    orderDate: "2024-01-25T16:00:00Z",
    items: [
      {
        id: "item_044",
        productId: "14",
        productName: "Natural Pre-Workout",
        brand: "NatureBoost",
        price: 33.99,
        quantity: 2,
        total: 67.98
      }
    ],
    subtotal: 67.98,
    shipping: 7.99,
    tax: 5.90,
    total: 81.87,
    shippingAddress: {
      street: "987 Desert Road",
      city: "Tucson",
      state: "AZ",
      zipCode: "85701",
      country: "USA"
    },
    paymentMethod: "Credit Card"
  },
  {
    id: "ord_025",
    orderNumber: "ORD-2024-025",
    customerName: "Daniel Lee",
    customerEmail: "daniel.lee@email.com",
    status: "shipped",
    orderDate: "2024-02-04T13:15:00Z",
    shippedDate: "2024-02-05T10:30:00Z",
    items: [
      {
        id: "item_045",
        productId: "9",
        productName: "Plant-Based Protein",
        brand: "GreenPower",
        price: 52.99,
        quantity: 1,
        total: 52.99
      },
      {
        id: "item_046",
        productId: "13",
        productName: "Collagen Peptides",
        brand: "BeautyWell",
        price: 31.99,
        quantity: 1,
        total: 31.99
      },
      {
        id: "item_047",
        productId: "15",
        productName: "ZMA Complex",
        brand: "SleepWell",
        price: 21.99,
        quantity: 1,
        total: 21.99
      }
    ],
    subtotal: 106.97,
    shipping: 8.99,
    tax: 9.29,
    total: 125.25,
    shippingAddress: {
      street: "654 Riverside Drive",
      city: "Kansas City",
      state: "MO",
      zipCode: "64108",
      country: "USA"
    },
    paymentMethod: "PayPal",
    trackingNumber: "1Z999AA5555777999"
  }
];