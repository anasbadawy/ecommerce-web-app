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
  }
];