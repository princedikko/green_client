const salesData = [
  {
    customerName: "Ahmed Musa",
    date: "2026-01-01",
    invoiceNo: "INV-1001",
    paymentStatus: "Paid",
    totalAmount: 45000,
    totalPaid: 45000,
    sellDue: 0,
    quantity: 5,
    action: "View",
  },
  {
    customerName: "Zainab Bello",
    date: "2026-01-02",
    invoiceNo: "INV-1002",
    paymentStatus: "Partial",
    totalAmount: 78000,
    totalPaid: 50000,
    sellDue: 28000,
    quantity: 8,
    action: "View",
  },
  {
    customerName: "Sadiq Lawal",
    date: "2026-01-03",
    invoiceNo: "INV-1003",
    paymentStatus: "Unpaid",
    totalAmount: 120000,
    totalPaid: 0,
    sellDue: 120000,
    quantity: 12,
    action: "View",
  },
  {
    customerName: "Maryam Sadiya",
    date: "2026-01-04",
    invoiceNo: "INV-1004",
    paymentStatus: "Paid",
    totalAmount: 65000,
    totalPaid: 65000,
    sellDue: 0,
    quantity: 6,
    action: "View",
  },
  {
    customerName: "Ibrahim Danjuma",
    date: "2026-01-05",
    invoiceNo: "INV-1005",
    paymentStatus: "Partial",
    totalAmount: 94000,
    totalPaid: 60000,
    sellDue: 34000,
    quantity: 9,
    action: "View",
  },
  {
    customerName: "Aisha Kabir",
    date: "2026-01-06",
    invoiceNo: "INV-1006",
    paymentStatus: "Paid",
    totalAmount: 30000,
    totalPaid: 30000,
    sellDue: 0,
    quantity: 3,
    action: "View",
  },
  {
    customerName: "Abdul Rahman",
    date: "2026-01-07",
    invoiceNo: "INV-1007",
    paymentStatus: "Unpaid",
    totalAmount: 50000,
    totalPaid: 0,
    sellDue: 50000,
    quantity: 4,
    action: "View",
  },
  {
    customerName: "Fatima Sule",
    date: "2026-01-08",
    invoiceNo: "INV-1008",
    paymentStatus: "Paid",
    totalAmount: 87000,
    totalPaid: 87000,
    sellDue: 0,
    quantity: 7,
    action: "View",
  },
  {
    customerName: "Mustapha Adamu",
    date: "2026-01-09",
    invoiceNo: "INV-1009",
    paymentStatus: "Partial",
    totalAmount: 110000,
    totalPaid: 70000,
    sellDue: 40000,
    quantity: 11,
    action: "View",
  },
  {
    customerName: "Hafsat Yahaya",
    date: "2026-01-10",
    invoiceNo: "INV-1010",
    paymentStatus: "Paid",
    totalAmount: 42000,
    totalPaid: 42000,
    sellDue: 0,
    quantity: 5,
    action: "View",
  },

  // ---- Auto-generated continuation ----
  ...Array.from({ length: 200 }, (_, i) => {
    const id = 1011 + i;
    return {
      customerName: `Customer ${id}`,
      date: `2026-01-${(i + 11).toString().padStart(2, "0")}`,
      invoiceNo: `INV-${id}`,
      paymentStatus: i % 3 === 0 ? "Paid" : i % 3 === 1 ? "Partial" : "Unpaid",
      totalAmount: 50000 + i * 3000,
      totalPaid:
        i % 3 === 0 ? 50000 + i * 3000 : i % 3 === 1 ? 30000 + i * 2000 : 0,
      sellDue:
        i % 3 === 0
          ? 0
          : i % 3 === 1
            ? 50000 + i * 3000 - (30000 + i * 2000)
            : 50000 + i * 3000,
      quantity: (i % 10) + 1,
      action: "View",
    };
  }),
];

const productsData = [
  {
    sku: "MILK-PEAK-001",
    barcode: "6224001234567",
    qrcode: "1234567890123",
    name: "Peak Milk 170g",
    brand: "Peak",
    units: { baseUnit: "tin", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 650,
      sellingPrice: 820,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 35,
      reorderLevel: 5,
      reorderQuantity: 10,

      minLevel: 20,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 3 - Rack B",
        quantity: 35,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PK0124A",
          costPrice: 800,
          quantity: 100,
          manufactureDate: "2024-01-01",
          expiryDate: "2026-01-30",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: {
      weight: null,
      length: null,
      width: null,
      height: null,
    },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "NOODLE-IND-001",
    barcode: "6224001234568",
    qrcode: "1234567890124",
    name: "Indomie Instant Noodles 70g",
    brand: "Indomie",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 120,
      sellingPrice: 150,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 120,
      reorderLevel: 20,
      reorderQuantity: 50,

      minLevel: 60,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 3 - Rack C",
        quantity: 120,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "IN0124A",
          costPrice: 100,
          quantity: 200,
          manufactureDate: "2024-02-01",
          expiryDate: "2025-02-01",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: {
      weight: null,
      length: null,
      width: null,
      height: null,
    },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "COLA-COC-001",
    barcode: "6224001234569",
    qrcode: "1234567890125",
    name: "Coca-Cola 330ml",
    brand: "Coca-Cola",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 200,
      sellingPrice: 250,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 200,
      reorderLevel: 50,
      reorderQuantity: 100,

      minLevel: 100,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 1 - Rack A",
        quantity: 200,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "CC0124A",
          costPrice: 180,
          quantity: 300,
          manufactureDate: "2024-01-15",
          expiryDate: "2025-01-15",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: {
      weight: null,
      length: null,
      width: null,
      height: null,
    },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "FANTA-001",
    barcode: "6224001234570",
    qrcode: "1234567890126",
    name: "Fanta 330ml",
    brand: "Fanta",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 200,
      sellingPrice: 250,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 180,
      reorderLevel: 40,
      reorderQuantity: 100,

      minLevel: 90,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 1 - Rack B",
        quantity: 180,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "FA0124A",
          costPrice: 180,
          quantity: 250,
          manufactureDate: "2024-01-16",
          expiryDate: "2025-01-16",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: {
      weight: null,
      length: null,
      width: null,
      height: null,
    },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SPRITE-001",
    barcode: "6224001234571",
    qrcode: "1234567890127",
    name: "Sprite 330ml",
    brand: "Sprite",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 200,
      sellingPrice: 250,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 160,
      reorderLevel: 30,
      reorderQuantity: 80,

      minLevel: 80,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 1 - Rack C",
        quantity: 160,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "SP0124A",
          costPrice: 180,
          quantity: 200,
          manufactureDate: "2024-01-17",
          expiryDate: "2025-01-17",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: {
      weight: null,
      length: null,
      width: null,
      height: null,
    },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "MILK-PEAK-002",
    barcode: "6224001234572",
    qrcode: "1234567890128",
    name: "Peak Evaporated Milk 400g",
    brand: "Peak",
    units: { baseUnit: "tin", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 500,
      sellingPrice: 650,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 70,
      reorderLevel: 10,
      reorderQuantity: 30,

      minLevel: 40,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 2 - Rack A",
        quantity: 70,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PK0124B",
          costPrice: 550,
          quantity: 120,
          manufactureDate: "2024-01-05",
          expiryDate: "2026-01-05",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: {
      weight: null,
      length: null,
      width: null,
      height: null,
    },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "MILK-MILO-001",
    barcode: "6224001234573",
    qrcode: "1234567890129",
    name: "Milo 200g",
    brand: "Milo",
    units: { baseUnit: "tin", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 400,
      sellingPrice: 500,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 90,
      reorderLevel: 15,
      reorderQuantity: 40,

      minLevel: 50,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 2 - Rack B",
        quantity: 90,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "MI0124A",
          costPrice: 450,
          quantity: 150,
          manufactureDate: "2024-02-01",
          expiryDate: "2026-02-01",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: {
      weight: null,
      length: null,
      width: null,
      height: null,
    },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "JUICE-CHIV-001",
    barcode: "6224001234574",
    qrcode: "1234567890130",
    name: "Chivita Apple Juice 1L",
    brand: "Chivita",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 450,
      sellingPrice: 600,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 100,
      reorderLevel: 20,
      reorderQuantity: 50,

      minLevel: 50,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 2 - Rack C",
        quantity: 100,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "CH0124A",
          costPrice: 480,
          quantity: 180,
          manufactureDate: "2024-01-20",
          expiryDate: "2025-12-20",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: {
      weight: null,
      length: null,
      width: null,
      height: null,
    },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "MAGGI-001",
    barcode: "6224001234575",
    qrcode: "1234567890131",
    name: "Maggi Seasoning 50g",
    brand: "Maggi",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 100,
      sellingPrice: 150,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 300,
      reorderLevel: 50,
      reorderQuantity: 100,

      minLevel: 100,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 4 - Rack A",
        quantity: 300,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "MG0124A",
          costPrice: 80,
          quantity: 500,
          manufactureDate: "2024-02-05",
          expiryDate: "2025-02-05",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: {
      weight: null,
      length: null,
      width: null,
      height: null,
    },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "ROYCO-001",
    barcode: "6224001234576",
    qrcode: "1234567890132",
    name: "Royco Chicken Cubes 100g",
    brand: "Royco",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 180,
      sellingPrice: 220,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 250,
      reorderLevel: 50,
      reorderQuantity: 100,

      minLevel: 120,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 4 - Rack B",
        quantity: 250,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "RC0124A",
          costPrice: 200,
          quantity: 400,
          manufactureDate: "2024-01-10",
          expiryDate: "2025-01-10",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: {
      weight: null,
      length: null,
      width: null,
      height: null,
    },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "NUTELLA-001",
    barcode: "6224001234577",
    qrcode: "1234567890133",
    name: "Nutella 200g",
    brand: "Nutella",
    units: { baseUnit: "jar", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 900,
      sellingPrice: 1100,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 80,
      reorderLevel: 15,
      reorderQuantity: 30,

      minLevel: 40,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 5 - Rack A",
        quantity: 80,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "NU0124A",
          costPrice: 950,
          quantity: 150,
          manufactureDate: "2024-02-01",
          expiryDate: "2025-12-31",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "BLUEBAND-001",
    barcode: "6224001234578",
    qrcode: "1234567890134",
    name: "Blue Band Margarine 500g",
    brand: "Blue Band",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 750,
      sellingPrice: 900,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 60,
      reorderLevel: 10,
      reorderQuantity: 20,

      minLevel: 30,
      sellingQuantity: 1,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 5 - Rack B",
        quantity: 60,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "BB0124A",
          costPrice: 780,
          quantity: 120,
          manufactureDate: "2024-01-05",
          expiryDate: "2025-12-31",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "TANTALIZER-001",
    barcode: "6224001234579",
    qrcode: "1234567890135",
    name: "Tantalizer Fried Chicken",
    brand: "Tantalizer",
    units: { baseUnit: "meal", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 1200,
      sellingPrice: 1500,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 40,
      reorderLevel: 5,
      reorderQuantity: 10,

      minLevel: 20,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 6 - Rack A",
        quantity: 40,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "TA0124A",
          costPrice: 1300,
          quantity: 80,
          manufactureDate: "2024-03-01",
          expiryDate: "2024-03-15",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "COLA-COC-002",
    barcode: "6224001234580",
    qrcode: "1234567890136",
    name: "Coca-Cola 500ml",
    brand: "Coca-Cola",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 250,
      sellingPrice: 300,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 150,
      reorderLevel: 30,
      reorderQuantity: 70,

      minLevel: 75,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 1 - Rack A",
        quantity: 150,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "CC0124B",
          costPrice: 230,
          quantity: 250,
          manufactureDate: "2024-02-01",
          expiryDate: "2025-02-01",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "FANTA-002",
    barcode: "6224001234581",
    qrcode: "1234567890137",
    name: "Fanta 500ml",
    brand: "Fanta",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 250,
      sellingPrice: 300,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 140,
      reorderLevel: 30,
      reorderQuantity: 60,

      minLevel: 70,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 1 - Rack B",
        quantity: 140,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "FA0124B",
          costPrice: 230,
          quantity: 200,
          manufactureDate: "2024-02-02",
          expiryDate: "2025-02-02",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SPRITE-002",
    barcode: "6224001234582",
    qrcode: "1234567890138",
    name: "Sprite 500ml",
    brand: "Sprite",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 250,
      sellingPrice: 300,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 130,
      reorderLevel: 25,
      reorderQuantity: 60,

      minLevel: 65,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 1 - Rack C",
        quantity: 130,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "SP0124B",
          costPrice: 230,
          quantity: 180,
          manufactureDate: "2024-02-03",
          expiryDate: "2025-02-03",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "INDOMIE-VEG-001",
    barcode: "6224001234583",
    qrcode: "1234567890139",
    name: "Indomie Vegetable Noodles 70g",
    brand: "Indomie",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 130,
      sellingPrice: 160,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 150,
      reorderLevel: 20,
      reorderQuantity: 50,

      minLevel: 60,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 3 - Rack D",
        quantity: 150,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "IV0124A",
          costPrice: 120,
          quantity: 250,
          manufactureDate: "2024-02-05",
          expiryDate: "2025-02-05",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "MAGGI-002",
    barcode: "6224001234584",
    qrcode: "1234567890140",
    name: "Maggi Noodles 70g",
    brand: "Maggi",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 120,
      sellingPrice: 150,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 180,
      reorderLevel: 30,
      reorderQuantity: 60,

      minLevel: 90,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 3 - Rack E",
        quantity: 180,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "MG0124B",
          costPrice: 100,
          quantity: 300,
          manufactureDate: "2024-02-06",
          expiryDate: "2025-02-06",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "ROYCO-002",
    barcode: "6224001234585",
    qrcode: "1234567890141",
    name: "Royco Beef Cubes 100g",
    brand: "Royco",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 180,
      sellingPrice: 220,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 200,
      reorderLevel: 40,
      reorderQuantity: 80,

      minLevel: 100,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 4 - Rack C",
        quantity: 200,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "RC0124B",
          costPrice: 200,
          quantity: 350,
          manufactureDate: "2024-02-07",
          expiryDate: "2025-02-07",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    sku: "MILK-PEAK-003",
    barcode: "6224001234586",
    qrcode: "1234567890142",
    name: "Peak UHT Milk 1L",
    brand: "Peak",
    units: { baseUnit: "tetra", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 750,
      sellingPrice: 950,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 60,
      reorderLevel: 10,
      reorderQuantity: 20,

      minLevel: 30,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 2 - Rack D",
        quantity: 60,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PK0124C",
          costPrice: 780,
          quantity: 100,
          manufactureDate: "2024-02-10",
          expiryDate: "2026-02-10",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "MILK-MILO-002",
    barcode: "6224001234587",
    qrcode: "1234567890143",
    name: "Milo UHT 1L",
    brand: "Milo",
    units: { baseUnit: "tetra", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 700,
      sellingPrice: 900,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 70,
      reorderLevel: 15,
      reorderQuantity: 30,

      minLevel: 35,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 2 - Rack E",
        quantity: 70,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "MI0124B",
          costPrice: 720,
          quantity: 120,
          manufactureDate: "2024-02-12",
          expiryDate: "2026-02-12",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "JUICE-CHIV-002",
    barcode: "6224001234588",
    qrcode: "1234567890144",
    name: "Chivita Orange Juice 1L",
    brand: "Chivita",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 450,
      sellingPrice: 600,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 100,
      reorderLevel: 20,
      reorderQuantity: 50,

      minLevel: 50,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 2 - Rack F",
        quantity: 100,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "CH0124B",
          costPrice: 480,
          quantity: 180,
          manufactureDate: "2024-02-15",
          expiryDate: "2025-12-15",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "BISCUIT-LAY-001",
    barcode: "6224001234589",
    qrcode: "1234567890145",
    name: "Lay’s Potato Chips 50g",
    brand: "Lay’s",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 200,
      sellingPrice: 250,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 200,
      reorderLevel: 40,
      reorderQuantity: 80,

      minLevel: 100,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 6 - Rack B",
        quantity: 200,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "LY0124A",
          costPrice: 180,
          quantity: 300,
          manufactureDate: "2024-02-18",
          expiryDate: "2025-02-18",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "BISCUIT-LAY-002",
    barcode: "6224001234590",
    qrcode: "1234567890146",
    name: "Lay’s Potato Chips 100g",
    brand: "Lay’s",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 350,
      sellingPrice: 450,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 150,
      reorderLevel: 30,
      reorderQuantity: 60,

      minLevel: 75,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 6 - Rack C",
        quantity: 150,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "LY0124B",
          costPrice: 320,
          quantity: 250,
          manufactureDate: "2024-02-19",
          expiryDate: "2025-02-19",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SNACK-PEPPER-001",
    barcode: "6224001234591",
    qrcode: "1234567890147",
    name: "Pepper Soup Mix 50g",
    brand: "Golden Penny",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 150,
      sellingPrice: 200,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 300,
      reorderLevel: 50,
      reorderQuantity: 100,

      minLevel: 100,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 7 - Rack A",
        quantity: 300,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PS0124A",
          costPrice: 140,
          quantity: 400,
          manufactureDate: "2024-02-20",
          expiryDate: "2025-02-20",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "BREAD-BAKER-001",
    barcode: "6224001234592",
    qrcode: "1234567890148",
    name: "Baker’s Bread 500g",
    brand: "Baker’s",
    units: { baseUnit: "loaf", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 250,
      sellingPrice: 350,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 100,
      reorderLevel: 20,
      reorderQuantity: 50,

      minLevel: 50,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 8 - Rack A",
        quantity: 100,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "BR0124A",
          costPrice: 240,
          quantity: 150,
          manufactureDate: "2024-02-21",
          expiryDate: "2024-08-21",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "BREAD-BAKER-002",
    barcode: "6224001234593",
    qrcode: "1234567890149",
    name: "Baker’s Bread 1kg",
    brand: "Baker’s",
    units: { baseUnit: "loaf", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 450,
      sellingPrice: 600,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 80,
      reorderLevel: 15,
      reorderQuantity: 30,

      minLevel: 40,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 8 - Rack B",
        quantity: 80,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "BR0124B",
          costPrice: 420,
          quantity: 120,
          manufactureDate: "2024-02-22",
          expiryDate: "2024-08-22",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "PASTA-ELBA-001",
    barcode: "6224001234594",
    qrcode: "1234567890150",
    name: "Elba Spaghetti 500g",
    brand: "Elba",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 400,
      sellingPrice: 500,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 120,
      reorderLevel: 25,
      reorderQuantity: 50,

      minLevel: 60,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 9 - Rack A",
        quantity: 120,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PA0124A",
          costPrice: 380,
          quantity: 200,
          manufactureDate: "2024-02-25",
          expiryDate: "2025-02-25",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    sku: "PASTA-ELBA-002",
    barcode: "6224001234595",
    qrcode: "1234567890151",
    name: "Elba Macaroni 500g",
    brand: "Elba",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 380,
      sellingPrice: 480,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 130,
      reorderLevel: 25,
      reorderQuantity: 50,

      minLevel: 65,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 9 - Rack B",
        quantity: 130,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PA0124B",
          costPrice: 400,
          quantity: 220,
          manufactureDate: "2024-02-26",
          expiryDate: "2025-02-26",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "OIL-PEPPER-001",
    barcode: "6224001234596",
    qrcode: "1234567890152",
    name: "Golden Penny Vegetable Oil 1L",
    brand: "Golden Penny",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 900,
      sellingPrice: 1100,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 90,
      reorderLevel: 15,
      reorderQuantity: 30,

      minLevel: 45,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 10 - Rack A",
        quantity: 90,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "GO0124A",
          costPrice: 920,
          quantity: 150,
          manufactureDate: "2024-03-01",
          expiryDate: "2026-03-01",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "OIL-PEPPER-002",
    barcode: "6224001234597",
    qrcode: "1234567890153",
    name: "Golden Penny Vegetable Oil 2L",
    brand: "Golden Penny",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 1700,
      sellingPrice: 2100,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 60,
      reorderLevel: 10,
      reorderQuantity: 20,

      minLevel: 30,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 10 - Rack B",
        quantity: 60,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "GO0124B",
          costPrice: 1750,
          quantity: 120,
          manufactureDate: "2024-03-02",
          expiryDate: "2026-03-02",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SUGAR-ROYAL-001",
    barcode: "6224001234598",
    qrcode: "1234567890154",
    name: "Royal Sugar 1kg",
    brand: "Royal",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 450,
      sellingPrice: 550,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 120,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 60,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 11 - Rack A",
        quantity: 120,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "RS0124A",
          costPrice: 430,
          quantity: 200,
          manufactureDate: "2024-03-03",
          expiryDate: "2026-03-03",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SUGAR-ROYAL-002",
    barcode: "6224001234599",
    qrcode: "1234567890155",
    name: "Royal Sugar 5kg",
    brand: "Royal",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 2100,
      sellingPrice: 2500,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 50,
      reorderLevel: 10,
      reorderQuantity: 20,

      minLevel: 25,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 11 - Rack B",
        quantity: 50,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "RS0124B",
          costPrice: 2000,
          quantity: 100,
          manufactureDate: "2024-03-04",
          expiryDate: "2026-03-04",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "TEA-LIPTON-001",
    barcode: "6224001234600",
    qrcode: "1234567890156",
    name: "Lipton Tea 100 Tea Bags",
    brand: "Lipton",
    units: { baseUnit: "box", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 1800,
      sellingPrice: 2200,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 80,
      reorderLevel: 15,
      reorderQuantity: 30,

      minLevel: 40,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 12 - Rack A",
        quantity: 80,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "LT0124A",
          costPrice: 1750,
          quantity: 150,
          manufactureDate: "2024-03-05",
          expiryDate: "2026-03-05",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "TEA-LIPTON-002",
    barcode: "6224001234601",
    qrcode: "1234567890157",
    name: "Lipton Tea 50 Tea Bags",
    brand: "Lipton",
    units: { baseUnit: "box", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 950,
      sellingPrice: 1200,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 100,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 50,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 12 - Rack B",
        quantity: 100,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "LT0124B",
          costPrice: 920,
          quantity: 180,
          manufactureDate: "2024-03-06",
          expiryDate: "2026-03-06",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "COFFEE-NESCAF-001",
    barcode: "6224001234602",
    qrcode: "1234567890158",
    name: "Nescafe Coffee 200g",
    brand: "Nescafe",
    units: { baseUnit: "jar", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 1200,
      sellingPrice: 1500,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 70,
      reorderLevel: 15,
      reorderQuantity: 30,

      minLevel: 35,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 13 - Rack A",
        quantity: 70,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "NC0124A",
          costPrice: 1150,
          quantity: 120,
          manufactureDate: "2024-03-07",
          expiryDate: "2026-03-07",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    sku: "COFFEE-NESCAF-002",
    barcode: "6224001234603",
    qrcode: "1234567890159",
    name: "Nescafe Coffee 100g",
    brand: "Nescafe",
    units: { baseUnit: "jar", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 650,
      sellingPrice: 820,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 90,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 45,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 13 - Rack B",
        quantity: 90,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "NC0124B",
          costPrice: 620,
          quantity: 150,
          manufactureDate: "2024-03-08",
          expiryDate: "2026-03-08",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SODA-COKE-001",
    barcode: "6224001234604",
    qrcode: "1234567890160",
    name: "Coca-Cola 330ml",
    brand: "Coca-Cola",
    units: { baseUnit: "can", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 150,
      sellingPrice: 200,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 200,
      reorderLevel: 50,
      reorderQuantity: 100,

      minLevel: 100,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 14 - Rack A",
        quantity: 200,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "CC0124A",
          costPrice: 140,
          quantity: 300,
          manufactureDate: "2024-03-09",
          expiryDate: "2025-03-09",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SODA-COKE-002",
    barcode: "6224001234605",
    qrcode: "1234567890161",
    name: "Coca-Cola 1.5L",
    brand: "Coca-Cola",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 550,
      sellingPrice: 700,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 150,
      reorderLevel: 30,
      reorderQuantity: 60,

      minLevel: 75,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 14 - Rack B",
        quantity: 150,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "CC0124B",
          costPrice: 520,
          quantity: 250,
          manufactureDate: "2024-03-10",
          expiryDate: "2025-03-10",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SODA-FANTA-001",
    barcode: "6224001234606",
    qrcode: "1234567890162",
    name: "Fanta 330ml",
    brand: "Fanta",
    units: { baseUnit: "can", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 150,
      sellingPrice: 200,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 180,
      reorderLevel: 40,
      reorderQuantity: 80,

      minLevel: 90,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 15 - Rack A",
        quantity: 180,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "FA0124A",
          costPrice: 140,
          quantity: 280,
          manufactureDate: "2024-03-11",
          expiryDate: "2025-03-11",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SODA-FANTA-002",
    barcode: "6224001234607",
    qrcode: "1234567890163",
    name: "Fanta 1.5L",
    brand: "Fanta",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 550,
      sellingPrice: 700,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 120,
      reorderLevel: 25,
      reorderQuantity: 50,

      minLevel: 60,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 15 - Rack B",
        quantity: 120,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "FA0124B",
          costPrice: 520,
          quantity: 220,
          manufactureDate: "2024-03-12",
          expiryDate: "2025-03-12",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "WATER-VERNA-001",
    barcode: "6224001234608",
    qrcode: "1234567890164",
    name: "Verna Natural Mineral Water 500ml",
    brand: "Verna",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 100,
      sellingPrice: 150,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 300,
      reorderLevel: 50,
      reorderQuantity: 100,

      minLevel: 150,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 16 - Rack A",
        quantity: 300,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "VE0124A",
          costPrice: 90,
          quantity: 400,
          manufactureDate: "2024-03-13",
          expiryDate: "2026-03-13",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "WATER-VERNA-002",
    barcode: "6224001234609",
    qrcode: "1234567890165",
    name: "Verna Natural Mineral Water 1.5L",
    brand: "Verna",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 250,
      sellingPrice: 350,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 150,
      reorderLevel: 30,
      reorderQuantity: 60,

      minLevel: 75,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 16 - Rack B",
        quantity: 150,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "VE0124B",
          costPrice: 240,
          quantity: 200,
          manufactureDate: "2024-03-14",
          expiryDate: "2026-03-14",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "JUICE-CHIV-003",
    barcode: "6224001234610",
    qrcode: "1234567890166",
    name: "Chivita Apple Juice 1L",
    brand: "Chivita",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 450,
      sellingPrice: 600,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 120,
      reorderLevel: 20,
      reorderQuantity: 50,

      minLevel: 60,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 2 - Rack G",
        quantity: 120,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "CH0124C",
          costPrice: 480,
          quantity: 180,
          manufactureDate: "2024-03-15",
          expiryDate: "2025-12-15",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    sku: "JUICE-CHIV-004",
    barcode: "6224001234611",
    qrcode: "1234567890167",
    name: "Chivita Mixed Fruit Juice 1L",
    brand: "Chivita",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 470,
      sellingPrice: 620,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 110,
      reorderLevel: 20,
      reorderQuantity: 50,

      minLevel: 55,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 2 - Rack H",
        quantity: 110,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "CH0124D",
          costPrice: 450,
          quantity: 170,
          manufactureDate: "2024-03-16",
          expiryDate: "2025-12-16",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "MILK-PEAK-004",
    barcode: "6224001234612",
    qrcode: "1234567890168",
    name: "Peak Milk 1L",
    brand: "Peak",
    units: { baseUnit: "tetra", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 800,
      sellingPrice: 1000,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 50,
      reorderLevel: 10,
      reorderQuantity: 20,

      minLevel: 25,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 2 - Rack I",
        quantity: 50,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PK0124D",
          costPrice: 780,
          quantity: 90,
          manufactureDate: "2024-03-17",
          expiryDate: "2026-03-17",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "MILK-MILO-003",
    barcode: "6224001234613",
    qrcode: "1234567890169",
    name: "Milo UHT 500ml",
    brand: "Milo",
    units: { baseUnit: "tetra", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 380,
      sellingPrice: 500,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 70,
      reorderLevel: 15,
      reorderQuantity: 30,

      minLevel: 35,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 2 - Rack J",
        quantity: 70,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "MI0124C",
          costPrice: 370,
          quantity: 120,
          manufactureDate: "2024-03-18",
          expiryDate: "2026-03-18",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "BISCUIT-LAY-003",
    barcode: "6224001234614",
    qrcode: "1234567890170",
    name: "Lay’s Barbecue Chips 50g",
    brand: "Lay’s",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 220,
      sellingPrice: 280,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 180,
      reorderLevel: 40,
      reorderQuantity: 80,

      minLevel: 90,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 6 - Rack D",
        quantity: 180,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "LY0124C",
          costPrice: 200,
          quantity: 300,
          manufactureDate: "2024-03-19",
          expiryDate: "2025-03-19",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "BISCUIT-LAY-004",
    barcode: "6224001234615",
    qrcode: "1234567890171",
    name: "Lay’s Salted Chips 50g",
    brand: "Lay’s",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 210,
      sellingPrice: 260,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 190,
      reorderLevel: 40,
      reorderQuantity: 80,

      minLevel: 95,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 6 - Rack E",
        quantity: 190,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "LY0124D",
          costPrice: 190,
          quantity: 300,
          manufactureDate: "2024-03-20",
          expiryDate: "2025-03-20",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SNACK-PEPPER-002",
    barcode: "6224001234616",
    qrcode: "1234567890172",
    name: "Golden Penny Pepper Soup Mix 100g",
    brand: "Golden Penny",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 250,
      sellingPrice: 300,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 250,
      reorderLevel: 50,
      reorderQuantity: 100,

      minLevel: 125,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 7 - Rack B",
        quantity: 250,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PS0124B",
          costPrice: 240,
          quantity: 400,
          manufactureDate: "2024-03-21",
          expiryDate: "2025-03-21",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "BREAD-BAKER-003",
    barcode: "6224001234617",
    qrcode: "1234567890173",
    name: "Baker’s Bread 750g",
    brand: "Baker’s",
    units: { baseUnit: "loaf", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 320,
      sellingPrice: 450,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 90,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 45,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 8 - Rack C",
        quantity: 90,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "BR0124C",
          costPrice: 300,
          quantity: 150,
          manufactureDate: "2024-03-22",
          expiryDate: "2024-09-22",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "PASTA-ELBA-003",
    barcode: "6224001234618",
    qrcode: "1234567890174",
    name: "Elba Spaghetti 1kg",
    brand: "Elba",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 750,
      sellingPrice: 950,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 100,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 50,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 9 - Rack C",
        quantity: 100,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PA0124C",
          costPrice: 720,
          quantity: 180,
          manufactureDate: "2024-03-23",
          expiryDate: "2025-03-23",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    sku: "RICE-ROYAL-001",
    barcode: "6224001234619",
    qrcode: "1234567890175",
    name: "Royal Stallion Rice 5kg",
    brand: "Royal Stallion",
    units: { baseUnit: "bag", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 3500,
      sellingPrice: 4200,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 80,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 40,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 17 - Rack A",
        quantity: 80,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "RR0124A",
          costPrice: 3400,
          quantity: 120,
          manufactureDate: "2024-03-24",
          expiryDate: "2026-03-24",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "RICE-ROYAL-002",
    barcode: "6224001234620",
    qrcode: "1234567890176",
    name: "Royal Stallion Rice 10kg",
    brand: "Royal Stallion",
    units: { baseUnit: "bag", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 6800,
      sellingPrice: 8200,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 60,
      reorderLevel: 15,
      reorderQuantity: 30,

      minLevel: 30,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 17 - Rack B",
        quantity: 60,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "RR0124B",
          costPrice: 6700,
          quantity: 100,
          manufactureDate: "2024-03-25",
          expiryDate: "2026-03-25",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "FLOUR-ALOKO-001",
    barcode: "6224001234621",
    qrcode: "1234567890177",
    name: "Aloko Wheat Flour 1kg",
    brand: "Aloko",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 600,
      sellingPrice: 750,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 150,
      reorderLevel: 30,
      reorderQuantity: 60,

      minLevel: 75,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 18 - Rack A",
        quantity: 150,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "AL0124A",
          costPrice: 580,
          quantity: 200,
          manufactureDate: "2024-03-26",
          expiryDate: "2025-03-26",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "FLOUR-ALOKO-002",
    barcode: "6224001234622",
    qrcode: "1234567890178",
    name: "Aloko Wheat Flour 5kg",
    brand: "Aloko",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 2800,
      sellingPrice: 3400,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 80,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 40,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 18 - Rack B",
        quantity: 80,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "AL0124B",
          costPrice: 2750,
          quantity: 150,
          manufactureDate: "2024-03-27",
          expiryDate: "2025-03-27",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "OIL-VEG-003",
    barcode: "6224001234623",
    qrcode: "1234567890179",
    name: "Golden Penny Vegetable Oil 500ml",
    brand: "Golden Penny",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 450,
      sellingPrice: 600,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 100,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 50,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 10 - Rack C",
        quantity: 100,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "GO0124C",
          costPrice: 440,
          quantity: 180,
          manufactureDate: "2024-03-28",
          expiryDate: "2026-03-28",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SUGAR-ROYAL-003",
    barcode: "6224001234624",
    qrcode: "1234567890180",
    name: "Royal Sugar 2kg",
    brand: "Royal",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 850,
      sellingPrice: 1100,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 70,
      reorderLevel: 15,
      reorderQuantity: 30,

      minLevel: 35,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 11 - Rack C",
        quantity: 70,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "RS0124C",
          costPrice: 830,
          quantity: 120,
          manufactureDate: "2024-03-29",
          expiryDate: "2026-03-29",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "TEA-LIPTON-003",
    barcode: "6224001234625",
    qrcode: "1234567890181",
    name: "Lipton Green Tea 50 Bags",
    brand: "Lipton",
    units: { baseUnit: "box", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 1000,
      sellingPrice: 1300,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 90,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 45,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 12 - Rack C",
        quantity: 90,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "LT0124C",
          costPrice: 980,
          quantity: 150,
          manufactureDate: "2024-03-30",
          expiryDate: "2026-03-30",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    sku: "TEA-LIPTON-004",
    barcode: "6224001234626",
    qrcode: "1234567890182",
    name: "Lipton Black Tea 50 Bags",
    brand: "Lipton",
    units: { baseUnit: "box", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 950,
      sellingPrice: 1250,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 85,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 42,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 12 - Rack D",
        quantity: 85,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "LT0124D",
          costPrice: 920,
          quantity: 140,
          manufactureDate: "2024-03-31",
          expiryDate: "2026-03-31",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "OIL-VEG-004",
    barcode: "6224001234627",
    qrcode: "1234567890183",
    name: "Golden Penny Vegetable Oil 1L",
    brand: "Golden Penny",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 850,
      sellingPrice: 1100,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 90,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 45,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 10 - Rack D",
        quantity: 90,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "GO0124D",
          costPrice: 830,
          quantity: 160,
          manufactureDate: "2024-04-01",
          expiryDate: "2026-04-01",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SUGAR-ROYAL-004",
    barcode: "6224001234628",
    qrcode: "1234567890184",
    name: "Royal Sugar 5kg",
    brand: "Royal",
    units: { baseUnit: "bag", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 2100,
      sellingPrice: 2700,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 60,
      reorderLevel: 15,
      reorderQuantity: 30,

      minLevel: 30,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 11 - Rack D",
        quantity: 60,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "RS0124D",
          costPrice: 2050,
          quantity: 100,
          manufactureDate: "2024-04-02",
          expiryDate: "2026-04-02",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "PASTA-ELBA-004",
    barcode: "6224001234629",
    qrcode: "1234567890185",
    name: "Elba Macaroni 1kg",
    brand: "Elba",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 780,
      sellingPrice: 980,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 110,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 55,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 9 - Rack D",
        quantity: 110,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PA0124D",
          costPrice: 750,
          quantity: 180,
          manufactureDate: "2024-04-03",
          expiryDate: "2025-04-03",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "BREAD-BAKER-004",
    barcode: "6224001234630",
    qrcode: "1234567890186",
    name: "Baker’s Bread 500g",
    brand: "Baker’s",
    units: { baseUnit: "loaf", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 220,
      sellingPrice: 320,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 130,
      reorderLevel: 30,
      reorderQuantity: 60,

      minLevel: 65,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 8 - Rack D",
        quantity: 130,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "BR0124D",
          costPrice: 210,
          quantity: 200,
          manufactureDate: "2024-04-04",
          expiryDate: "2024-10-04",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SNACK-PEPPER-003",
    barcode: "6224001234631",
    qrcode: "1234567890187",
    name: "Golden Penny Pepper Soup Mix 200g",
    brand: "Golden Penny",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 480,
      sellingPrice: 620,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 200,
      reorderLevel: 50,
      reorderQuantity: 100,

      minLevel: 100,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 7 - Rack C",
        quantity: 200,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PS0124C",
          costPrice: 470,
          quantity: 350,
          manufactureDate: "2024-04-05",
          expiryDate: "2025-04-05",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    sku: "SNACK-PEPPER-004",
    barcode: "6224001234632",
    qrcode: "1234567890188",
    name: "Golden Penny Pepper Soup Mix 500g",
    brand: "Golden Penny",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 1100,
      sellingPrice: 1400,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 150,
      reorderLevel: 30,
      reorderQuantity: 60,

      minLevel: 75,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 7 - Rack D",
        quantity: 150,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PS0124D",
          costPrice: 1080,
          quantity: 250,
          manufactureDate: "2024-04-06",
          expiryDate: "2025-04-06",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "JUICE-CHIV-005",
    barcode: "6224001234633",
    qrcode: "1234567890189",
    name: "Chivita Apple Juice 1L",
    brand: "Chivita",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 460,
      sellingPrice: 600,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 120,
      reorderLevel: 25,
      reorderQuantity: 50,

      minLevel: 60,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 2 - Rack K",
        quantity: 120,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "CH0124E",
          costPrice: 440,
          quantity: 200,
          manufactureDate: "2024-04-07",
          expiryDate: "2025-12-07",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "MILK-PEAK-005",
    barcode: "6224001234634",
    qrcode: "1234567890190",
    name: "Peak Milk 500ml",
    brand: "Peak",
    units: { baseUnit: "tetra", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 450,
      sellingPrice: 600,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 75,
      reorderLevel: 15,
      reorderQuantity: 30,

      minLevel: 40,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 2 - Rack L",
        quantity: 75,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PK0124E",
          costPrice: 440,
          quantity: 120,
          manufactureDate: "2024-04-08",
          expiryDate: "2026-04-08",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "MILK-MILO-004",
    barcode: "6224001234635",
    qrcode: "1234567890191",
    name: "Milo UHT 1L",
    brand: "Milo",
    units: { baseUnit: "tetra", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 700,
      sellingPrice: 900,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 60,
      reorderLevel: 12,
      reorderQuantity: 24,

      minLevel: 30,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 2 - Rack M",
        quantity: 60,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "MI0124D",
          costPrice: 680,
          quantity: 100,
          manufactureDate: "2024-04-09",
          expiryDate: "2026-04-09",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "BISCUIT-LAY-005",
    barcode: "6224001234636",
    qrcode: "1234567890192",
    name: "Lay’s Cheddar Chips 50g",
    brand: "Lay’s",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 230,
      sellingPrice: 300,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 200,
      reorderLevel: 40,
      reorderQuantity: 80,

      minLevel: 100,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 6 - Rack F",
        quantity: 200,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "LY0124E",
          costPrice: 210,
          quantity: 300,
          manufactureDate: "2024-04-10",
          expiryDate: "2025-04-10",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "BISCUIT-LAY-006",
    barcode: "6224001234637",
    qrcode: "1234567890193",
    name: "Lay’s Salt & Vinegar Chips 50g",
    brand: "Lay’s",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 220,
      sellingPrice: 280,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 180,
      reorderLevel: 35,
      reorderQuantity: 70,

      minLevel: 90,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 6 - Rack G",
        quantity: 180,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "LY0124F",
          costPrice: 210,
          quantity: 280,
          manufactureDate: "2024-04-11",
          expiryDate: "2025-04-11",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    sku: "COFFEE-NESCA-004",
    barcode: "6224001234638",
    qrcode: "1234567890194",
    name: "Nescafe Classic 200g",
    brand: "Nescafe",
    units: { baseUnit: "jar", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 1200,
      sellingPrice: 1500,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 90,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 45,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 5 - Rack A",
        quantity: 90,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "NC0124D",
          costPrice: 1180,
          quantity: 140,
          manufactureDate: "2024-04-12",
          expiryDate: "2026-04-12",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "COFFEE-NESCA-005",
    barcode: "6224001234639",
    qrcode: "1234567890195",
    name: "Nescafe Classic 100g",
    brand: "Nescafe",
    units: { baseUnit: "jar", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 650,
      sellingPrice: 820,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 120,
      reorderLevel: 25,
      reorderQuantity: 50,

      minLevel: 60,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 5 - Rack B",
        quantity: 120,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "NC0124E",
          costPrice: 640,
          quantity: 200,
          manufactureDate: "2024-04-13",
          expiryDate: "2026-04-13",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "COCOA-MILO-005",
    barcode: "6224001234640",
    qrcode: "1234567890196",
    name: "Milo Activ-Go 400g",
    brand: "Milo",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 850,
      sellingPrice: 1100,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 100,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 50,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 3 - Rack F",
        quantity: 100,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "MI0124E",
          costPrice: 830,
          quantity: 150,
          manufactureDate: "2024-04-14",
          expiryDate: "2026-04-14",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "COCOA-MILO-006",
    barcode: "6224001234641",
    qrcode: "1234567890197",
    name: "Milo Activ-Go 200g",
    brand: "Milo",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 450,
      sellingPrice: 600,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 150,
      reorderLevel: 30,
      reorderQuantity: 60,

      minLevel: 75,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 3 - Rack G",
        quantity: 150,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "MI0124F",
          costPrice: 440,
          quantity: 200,
          manufactureDate: "2024-04-15",
          expiryDate: "2026-04-15",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SNACK-BISCUIT-007",
    barcode: "6224001234642",
    qrcode: "1234567890198",
    name: "Oreo Biscuit 154g",
    brand: "Oreo",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 600,
      sellingPrice: 780,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 200,
      reorderLevel: 50,
      reorderQuantity: 100,

      minLevel: 100,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 6 - Rack H",
        quantity: 200,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "OR0124G",
          costPrice: 580,
          quantity: 300,
          manufactureDate: "2024-04-16",
          expiryDate: "2025-04-16",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SNACK-BISCUIT-008",
    barcode: "6224001234643",
    qrcode: "1234567890199",
    name: "Oreo Biscuit 95g",
    brand: "Oreo",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 350,
      sellingPrice: 480,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 250,
      reorderLevel: 50,
      reorderQuantity: 100,

      minLevel: 125,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 6 - Rack I",
        quantity: 250,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "OR0124H",
          costPrice: 340,
          quantity: 400,
          manufactureDate: "2024-04-17",
          expiryDate: "2025-04-17",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    sku: "OIL-VEG-005",
    barcode: "6224001234644",
    qrcode: "1234567890200",
    name: "Mamador Vegetable Oil 1L",
    brand: "Mamador",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 820,
      sellingPrice: 1050,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 90,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 45,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 10 - Rack E",
        quantity: 90,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "MV0124E",
          costPrice: 800,
          quantity: 150,
          manufactureDate: "2024-04-18",
          expiryDate: "2026-04-18",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "RICE-TITA-005",
    barcode: "6224001234645",
    qrcode: "1234567890201",
    name: "Tita Rice 50kg",
    brand: "Tita",
    units: { baseUnit: "bag", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 25000,
      sellingPrice: 30000,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 40,
      reorderLevel: 10,
      reorderQuantity: 20,

      minLevel: 20,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 14 - Rack A",
        quantity: 40,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "TR0124E",
          costPrice: 24500,
          quantity: 60,
          manufactureDate: "2024-04-19",
          expiryDate: "2026-04-19",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SUGAR-ROYAL-005",
    barcode: "6224001234646",
    qrcode: "1234567890202",
    name: "Royal Sugar 2kg",
    brand: "Royal",
    units: { baseUnit: "bag", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 900,
      sellingPrice: 1150,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 70,
      reorderLevel: 15,
      reorderQuantity: 30,

      minLevel: 35,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 11 - Rack E",
        quantity: 70,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "RS0124E",
          costPrice: 880,
          quantity: 120,
          manufactureDate: "2024-04-20",
          expiryDate: "2026-04-20",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "PASTA-ELBA-005",
    barcode: "6224001234647",
    qrcode: "1234567890203",
    name: "Elba Spaghetti 1kg",
    brand: "Elba",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 800,
      sellingPrice: 1000,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 100,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 50,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 9 - Rack E",
        quantity: 100,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PA0124E",
          costPrice: 780,
          quantity: 160,
          manufactureDate: "2024-04-21",
          expiryDate: "2025-04-21",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "TEA-LIPTON-005",
    barcode: "6224001234648",
    qrcode: "1234567890204",
    name: "Lipton Green Tea 25 Bags",
    brand: "Lipton",
    units: { baseUnit: "box", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 600,
      sellingPrice: 800,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 90,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 45,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 12 - Rack E",
        quantity: 90,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "LT0124E",
          costPrice: 580,
          quantity: 140,
          manufactureDate: "2024-04-22",
          expiryDate: "2026-04-22",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    sku: "BREAD-BAKER-006",
    barcode: "6224001234653",
    qrcode: "1234567890209",
    name: "Baker’s Whole Wheat Bread 1kg",
    brand: "Baker’s",
    units: { baseUnit: "loaf", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 450,
      sellingPrice: 600,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 80,
      reorderLevel: 15,
      reorderQuantity: 30,

      minLevel: 40,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 8 - Rack F",
        quantity: 80,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "BR0124F",
          costPrice: 430,
          quantity: 120,
          manufactureDate: "2024-04-27",
          expiryDate: "2024-10-27",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "PASTA-ELBA-006",
    barcode: "6224001234654",
    qrcode: "1234567890210",
    name: "Elba Macaroni 500g",
    brand: "Elba",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 450,
      sellingPrice: 600,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 120,
      reorderLevel: 25,
      reorderQuantity: 50,

      minLevel: 60,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 9 - Rack F",
        quantity: 120,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PA0124F",
          costPrice: 440,
          quantity: 200,
          manufactureDate: "2024-04-28",
          expiryDate: "2025-04-28",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "TEA-LIPTON-006",
    barcode: "6224001234655",
    qrcode: "1234567890211",
    name: "Lipton Black Tea 50 Bags",
    brand: "Lipton",
    units: { baseUnit: "box", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 550,
      sellingPrice: 720,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 100,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 50,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 12 - Rack F",
        quantity: 100,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "LT0124F",
          costPrice: 530,
          quantity: 150,
          manufactureDate: "2024-04-29",
          expiryDate: "2026-04-29",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "OIL-VEG-006",
    barcode: "6224001234656",
    qrcode: "1234567890212",
    name: "Mamador Vegetable Oil 2L",
    brand: "Mamador",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 1550,
      sellingPrice: 1900,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 70,
      reorderLevel: 15,
      reorderQuantity: 30,

      minLevel: 35,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 10 - Rack F",
        quantity: 70,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "MV0124F",
          costPrice: 1500,
          quantity: 120,
          manufactureDate: "2024-04-30",
          expiryDate: "2026-04-30",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    sku: "RICE-TITA-006",
    barcode: "6224001234657",
    qrcode: "1234567890213",
    name: "Tita Rice 25kg",
    brand: "Tita",
    units: { baseUnit: "bag", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 13500,
      sellingPrice: 16000,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 60,
      reorderLevel: 15,
      reorderQuantity: 30,

      minLevel: 30,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 14 - Rack B",
        quantity: 60,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "TR0124F",
          costPrice: 13200,
          quantity: 100,
          manufactureDate: "2024-05-01",
          expiryDate: "2026-05-01",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SUGAR-ROYAL-006",
    barcode: "6224001234658",
    qrcode: "1234567890214",
    name: "Royal Sugar 5kg",
    brand: "Royal",
    units: { baseUnit: "bag", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 2200,
      sellingPrice: 2700,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 50,
      reorderLevel: 10,
      reorderQuantity: 20,

      minLevel: 25,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 11 - Rack F",
        quantity: 50,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "RS0124F",
          costPrice: 2100,
          quantity: 80,
          manufactureDate: "2024-05-02",
          expiryDate: "2026-05-02",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "COFFEE-NESCA-006",
    barcode: "6224001234659",
    qrcode: "1234567890215",
    name: "Nescafe Gold 200g",
    brand: "Nescafe",
    units: { baseUnit: "jar", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 1350,
      sellingPrice: 1700,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 80,
      reorderLevel: 20,
      reorderQuantity: 40,

      minLevel: 40,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 5 - Rack C",
        quantity: 80,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "NC0124F",
          costPrice: 1320,
          quantity: 120,
          manufactureDate: "2024-05-03",
          expiryDate: "2026-05-03",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "COCOA-MILO-007",
    barcode: "6224001234660",
    qrcode: "1234567890216",
    name: "Milo Activ-Go 1kg",
    brand: "Milo",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 600,
      sellingPrice: 800,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 150,
      reorderLevel: 30,
      reorderQuantity: 60,

      minLevel: 75,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 3 - Rack H",
        quantity: 150,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "MI0124G",
          costPrice: 580,
          quantity: 200,
          manufactureDate: "2024-05-04",
          expiryDate: "2026-05-04",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "COCOA-MILO-008",
    barcode: "6224001234661",
    qrcode: "1234567890217",
    name: "Milo Activ-Go 500g",
    brand: "Milo",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 350,
      sellingPrice: 480,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 200,
      reorderLevel: 40,
      reorderQuantity: 80,
      minLevel: 100,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 3 - Rack I",
        quantity: 200,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "MI0124H",
          costPrice: 340,
          quantity: 300,
          manufactureDate: "2024-05-05",
          expiryDate: "2026-05-05",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SNACK-BISCUIT-009",
    barcode: "6224001234662",
    qrcode: "1234567890218",
    name: "Oreo Biscuit 200g",
    brand: "Oreo",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 800,
      sellingPrice: 1050,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 180,
      reorderLevel: 40,
      reorderQuantity: 80,
      minLevel: 90,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 6 - Rack J",
        quantity: 180,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "OR0124I",
          costPrice: 780,
          quantity: 250,
          manufactureDate: "2024-05-06",
          expiryDate: "2025-05-06",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SNACK-BISCUIT-010",
    barcode: "6224001234663",
    qrcode: "1234567890219",
    name: "Oreo Biscuit 150g",
    brand: "Oreo",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 600,
      sellingPrice: 780,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 220,
      reorderLevel: 50,
      reorderQuantity: 100,
      minLevel: 110,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 6 - Rack K",
        quantity: 220,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "OR0124J",
          costPrice: 580,
          quantity: 300,
          manufactureDate: "2024-05-07",
          expiryDate: "2025-05-07",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "COFFEE-NESCA-007",
    barcode: "6224001234664",
    qrcode: "1234567890220",
    name: "Nescafe Gold 100g",
    brand: "Nescafe",
    units: { baseUnit: "jar", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 700,
      sellingPrice: 900,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 150,
      reorderLevel: 30,
      reorderQuantity: 60,
      minLevel: 75,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 5 - Rack D",
        quantity: 150,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "NC0124G",
          costPrice: 680,
          quantity: 200,
          manufactureDate: "2024-05-08",
          expiryDate: "2026-05-08",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "MILK-PEAK-002",
    barcode: "6224001234665",
    qrcode: "1234567890221",
    name: "Peak Milk 1L",
    brand: "Peak",
    units: { baseUnit: "carton", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 950,
      sellingPrice: 1200,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 60,
      reorderLevel: 15,
      reorderQuantity: 30,
      minLevel: 30,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 3 - Rack C",
        quantity: 60,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PK0124B",
          costPrice: 920,
          quantity: 100,
          manufactureDate: "2024-05-09",
          expiryDate: "2026-05-09",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "MILK-PEAK-003",
    barcode: "6224001234666",
    qrcode: "1234567890222",
    name: "Peak Milk 500ml",
    brand: "Peak",
    units: { baseUnit: "carton", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 550,
      sellingPrice: 700,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 120,
      reorderLevel: 30,
      reorderQuantity: 60,
      minLevel: 60,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 3 - Rack D",
        quantity: 120,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PK0124C",
          costPrice: 530,
          quantity: 200,
          manufactureDate: "2024-05-10",
          expiryDate: "2026-05-10",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "MILK-PEAK-004",
    barcode: "6224001234667",
    qrcode: "1234567890223",
    name: "Peak Milk 250ml",
    brand: "Peak",
    units: { baseUnit: "carton", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 320,
      sellingPrice: 450,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 200,
      reorderLevel: 50,
      reorderQuantity: 100,
      minLevel: 100,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 3 - Rack E",
        quantity: 200,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PK0124D",
          costPrice: 300,
          quantity: 300,
          manufactureDate: "2024-05-11",
          expiryDate: "2026-05-11",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "JUICE-CHIV-007",
    barcode: "6224001234668",
    qrcode: "1234567890224",
    name: "Chivita Apple Juice 1L",
    brand: "Chivita",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 460,
      sellingPrice: 600,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 120,
      reorderLevel: 25,
      reorderQuantity: 50,
      minLevel: 60,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 2 - Rack O",
        quantity: 120,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "CH0124G",
          costPrice: 440,
          quantity: 200,
          manufactureDate: "2024-05-12",
          expiryDate: "2025-12-12",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "JUICE-CHIV-008",
    barcode: "6224001234669",
    qrcode: "1234567890225",
    name: "Chivita Pineapple Juice 1L",
    brand: "Chivita",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 460,
      sellingPrice: 600,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 100,
      reorderLevel: 20,
      reorderQuantity: 40,
      minLevel: 50,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 2 - Rack P",
        quantity: 100,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "CH0124H",
          costPrice: 440,
          quantity: 160,
          manufactureDate: "2024-05-13",
          expiryDate: "2025-12-13",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SNACK-CANDY-007",
    barcode: "6224001234670",
    qrcode: "1234567890226",
    name: "Choki Choki Mango 20g",
    brand: "Choki Choki",
    units: { baseUnit: "stick", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: { costPrice: 50, sellingPrice: 80, taxRate: 7.5, currency: "NGN" },

    stock: {
      quantityAvailable: 500,
      reorderLevel: 100,
      reorderQuantity: 200,
      minLevel: 250,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 7 - Rack L",
        quantity: 500,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "CC0124G",
          costPrice: 45,
          quantity: 800,
          manufactureDate: "2024-05-14",
          expiryDate: "2025-05-14",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SNACK-CANDY-008",
    barcode: "6224001234671",
    qrcode: "1234567890227",
    name: "Choki Choki Chocolate Vanilla 20g",
    brand: "Choki Choki",
    units: { baseUnit: "stick", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: { costPrice: 50, sellingPrice: 80, taxRate: 7.5, currency: "NGN" },

    stock: {
      quantityAvailable: 500,
      reorderLevel: 100,
      reorderQuantity: 200,
      minLevel: 250,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 7 - Rack M",
        quantity: 500,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "CC0124H",
          costPrice: 45,
          quantity: 800,
          manufactureDate: "2024-05-15",
          expiryDate: "2025-05-15",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "BREAD-BAKER-007",
    barcode: "6224001234672",
    qrcode: "1234567890228",
    name: "Baker’s Multigrain Bread 1kg",
    brand: "Baker’s",
    units: { baseUnit: "loaf", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 480,
      sellingPrice: 650,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 100,
      reorderLevel: 20,
      reorderQuantity: 40,
      minLevel: 50,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 8 - Rack G",
        quantity: 100,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "BR0124G",
          costPrice: 460,
          quantity: 160,
          manufactureDate: "2024-05-16",
          expiryDate: "2024-11-16",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "JUICE-CHIV-008",
    barcode: "6224001234669",
    qrcode: "1234567890225",
    name: "Chivita Pineapple Juice 1L",
    brand: "Chivita",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 460,
      sellingPrice: 600,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 100,
      reorderLevel: 20,
      reorderQuantity: 40,
      minLevel: 50,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 2 - Rack P",
        quantity: 100,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "CH0124H",
          costPrice: 440,
          quantity: 160,
          manufactureDate: "2024-05-13",
          expiryDate: "2025-12-13",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SNACK-CANDY-007",
    barcode: "6224001234670",
    qrcode: "1234567890226",
    name: "Choki Choki Mango 20g",
    brand: "Choki Choki",
    units: { baseUnit: "stick", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: { costPrice: 50, sellingPrice: 80, taxRate: 7.5, currency: "NGN" },

    stock: {
      quantityAvailable: 500,
      reorderLevel: 100,
      reorderQuantity: 200,
      minLevel: 250,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 7 - Rack L",
        quantity: 500,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "CC0124G",
          costPrice: 45,
          quantity: 800,
          manufactureDate: "2024-05-14",
          expiryDate: "2025-05-14",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SNACK-CANDY-008",
    barcode: "6224001234671",
    qrcode: "1234567890227",
    name: "Choki Choki Chocolate Vanilla 20g",
    brand: "Choki Choki",
    units: { baseUnit: "stick", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: { costPrice: 50, sellingPrice: 80, taxRate: 7.5, currency: "NGN" },

    stock: {
      quantityAvailable: 500,
      reorderLevel: 100,
      reorderQuantity: 200,
      minLevel: 250,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 7 - Rack M",
        quantity: 500,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "CC0124H",
          costPrice: 45,
          quantity: 800,
          manufactureDate: "2024-05-15",
          expiryDate: "2025-05-15",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "BREAD-BAKER-007",
    barcode: "6224001234672",
    qrcode: "1234567890228",
    name: "Baker’s Multigrain Bread 1kg",
    brand: "Baker’s",
    units: { baseUnit: "loaf", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 480,
      sellingPrice: 650,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 100,
      reorderLevel: 20,
      reorderQuantity: 40,
      minLevel: 50,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 8 - Rack G",
        quantity: 100,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "BR0124G",
          costPrice: 460,
          quantity: 160,
          manufactureDate: "2024-05-16",
          expiryDate: "2024-11-16",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "RICE-TITA-007",
    barcode: "6224001234677",
    qrcode: "1234567890233",
    name: "Tita Rice 10kg",
    brand: "Tita",
    units: { baseUnit: "bag", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 5500,
      sellingPrice: 6500,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 80,
      reorderLevel: 15,
      reorderQuantity: 30,
      minLevel: 40,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 14 - Rack C",
        quantity: 80,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "TR0124G",
          costPrice: 5400,
          quantity: 120,
          manufactureDate: "2024-05-21",
          expiryDate: "2026-05-21",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SUGAR-ROYAL-007",
    barcode: "6224001234678",
    qrcode: "1234567890234",
    name: "Royal Sugar 10kg",
    brand: "Royal",
    units: { baseUnit: "bag", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 4300,
      sellingPrice: 5200,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 70,
      reorderLevel: 15,
      reorderQuantity: 30,
      minLevel: 35,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 11 - Rack G",
        quantity: 70,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "RS0124G",
          costPrice: 4200,
          quantity: 100,
          manufactureDate: "2024-05-22",
          expiryDate: "2026-05-22",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "COFFEE-NESCA-008",
    barcode: "6224001234679",
    qrcode: "1234567890235",
    name: "Nescafe Classic 200g",
    brand: "Nescafe",
    units: { baseUnit: "jar", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 1200,
      sellingPrice: 1500,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 90,
      reorderLevel: 20,
      reorderQuantity: 40,
      minLevel: 45,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 5 - Rack E",
        quantity: 90,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "NC0124H",
          costPrice: 1150,
          quantity: 150,
          manufactureDate: "2024-05-23",
          expiryDate: "2026-05-23",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "COCOA-MILO-009",
    barcode: "6224001234680",
    qrcode: "1234567890236",
    name: "Milo Activ-Go 750g",
    brand: "Milo",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 450,
      sellingPrice: 600,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 130,
      reorderLevel: 30,
      reorderQuantity: 60,
      minLevel: 65,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 3 - Rack J",
        quantity: 130,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "MI0124I",
          costPrice: 430,
          quantity: 200,
          manufactureDate: "2024-05-24",
          expiryDate: "2026-05-24",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "SNACK-BISCUIT-011",
    barcode: "6224001234681",
    qrcode: "1234567890237",
    name: "Oreo Biscuit 300g",
    brand: "Oreo",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 1200,
      sellingPrice: 1500,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 140,
      reorderLevel: 30,
      reorderQuantity: 60,
      minLevel: 70,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 6 - Rack L",
        quantity: 140,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "OR0124K",
          costPrice: 1150,
          quantity: 200,
          manufactureDate: "2024-05-25",
          expiryDate: "2025-05-25",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "JUICE-CHIV-009",
    barcode: "6224001234682",
    qrcode: "1234567890238",
    name: "Chivita Mixed Fruit Juice 1L",
    brand: "Chivita",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 460,
      sellingPrice: 600,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 110,
      reorderLevel: 25,
      reorderQuantity: 50,
      minLevel: 55,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 2 - Rack Q",
        quantity: 110,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "CH0124I",
          costPrice: 440,
          quantity: 160,
          manufactureDate: "2024-05-26",
          expiryDate: "2025-12-26",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "OIL-VEG-008",
    barcode: "6224001234683",
    qrcode: "1234567890239",
    name: "Mamador Vegetable Oil 2L",
    brand: "Mamador",
    units: { baseUnit: "bottle", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 1650,
      sellingPrice: 2000,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 90,
      reorderLevel: 20,
      reorderQuantity: 40,
      minLevel: 45,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 10 - Rack H",
        quantity: 90,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "MV0124H",
          costPrice: 1600,
          quantity: 140,
          manufactureDate: "2024-05-27",
          expiryDate: "2026-05-27",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sku: "PASTA-ELBA-008",
    barcode: "6224001234684",
    qrcode: "1234567890240",
    name: "Elba Macaroni 500g",
    brand: "Elba",
    units: { baseUnit: "pack", purchaseUnit: "carton", conversionRate: 24 },
    description: "Business laptop",
    categoryId: "",
    supplierId: "uac-5678",
    productType: "inventory",

    pricing: {
      costPrice: 460,
      sellingPrice: 600,
      taxRate: 7.5,
      currency: "NGN",
    },

    stock: {
      quantityAvailable: 130,
      reorderLevel: 30,
      reorderQuantity: 60,
      minLevel: 65,
      sellingQuantity: 1,
    },

    warehouses: [
      {
        warehouseId: "sdr3-1234-sdfg-5678",
        location: "Aisle 9 - Rack H",
        quantity: 130,
      },
    ],

    batch: {
      batchTracking: true,
      expiryTracking: true,
      trackingMethod: "FEFO",
      batches: [
        {
          batchNo: "PA0124H",
          costPrice: 440,
          quantity: 200,
          manufactureDate: "2024-05-28",
          expiryDate: "2025-05-28",
          warehouseId: "sdr3-1234-sdfg-5678",
        },
      ],
    },
    dimensions: { weight: null, length: null, width: null, height: null },
    images: [],
    trackInventory: true,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
const brands = [
  "Samsung",
  "Apple",
  "Sony",
  "LG",
  "Xiaomi",
  "Infinix",
  "Tecno",
  "Huawei",
  "Nokia",
  "HP",
  "Dell",
  "Lenovo",
  "Acer",
  "Asus",
  "Microsoft",
  "Canon",
  "Nikon",
  "Panasonic",
  "Bosch",
  "Philips",
  "Panasonic",
  "Oppo",
  "Vivo",
  "OnePlus",
  "Motorola",
  "TCL",
  "Hisense",
  "Razer",
  "Logitech",
  "Anker",
  "Bose",
  "JBL",
  "Midea",
  "Gree",
  "Haier",
  "RCA",
  "Sharp",
  "Hitachi",
];

const contacts = [
  {
    name: "Samira Abudullahi",
    state: "minna",
    address: "kajsdf klasdfjlkasdf",
    tel: "24234455878",
  },
  {
    name: "Samira Abudullahi",
    state: "minna",
    address: "kajsdf klasdfjlkasdf",
    tel: "24234455878",
  },
  {
    name: "Samira Abudullahi",
    state: "minna",
    address: "kajsdf klasdfjlkasdf",
    tel: "24234455878",
  },
  {
    name: "Samira Abudullahi",
    state: "minna",
    address: "kajsdf klasdfjlkasdf",
    tel: "24234455878",
  },
  {
    name: "Samira Abudullahi",
    state: "minna",
    address: "kajsdf klasdfjlkasdf",
    tel: "24234455878",
  },
  {
    name: "Samira Abudullahi",
    state: "minna",
    address: "kajsdf klasdfjlkasdf",
    tel: "24234455878",
  },
  {
    name: "Samira Abudullahi",
    state: "minna",
    address: "kajsdf klasdfjlkasdf",
    tel: "24234455878",
  },
];
export default salesData;
export { productsData, contacts };
