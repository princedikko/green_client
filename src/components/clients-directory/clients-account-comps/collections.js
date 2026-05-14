// USERS COLLECTION (For Cashiers, Managers, Admins)
[
  {
    userId: "USR-1001",
    clientId: "CLT-2026-000045",

    personalInfo: {
      fullName: "Abdullahi Dikko",
      email: "admin@dikko.com",
      phone: "+2348012345678",
      profileImage: null,
    },

    auth: {
      authProvider: "LOCAL",
      emailVerified: true,
      phoneVerified: true,
      twoFactorEnabled: true,
      lastLoginAt: "2026-04-30T08:10:00Z",
    },

    role: {
      roleName: "SUPER_ADMIN",
      level: 1,
      permissions: ["ALL"],
    },

    employment: {
      jobTitle: "Business Owner",
      department: "Management",
      employeeType: "OWNER",
      status: "ACTIVE",
      joinedAt: "2026-04-01T00:00:00Z",
    },

    accessControl: {
      warehouseAccess: ["WH-001", "WH-002"],
      moduleAccess: [
        "inventory",
        "orders",
        "production",
        "expenses",
        "reconciliation",
      ],
      restrictedActions: [],
    },

    activity: {
      status: "ONLINE",
      lastActiveAt: "2026-04-30T08:15:00Z",
      loginCount: 120,
    },
  },

  {
    userId: "USR-1002",
    clientId: "CLT-2026-000045",

    personalInfo: {
      fullName: "Aisha Mohammed",
      email: "inventory@dikko.com",
      phone: "+2348091122334",
      profileImage: null,
    },

    auth: {
      authProvider: "LOCAL",
      emailVerified: true,
      phoneVerified: true,
      twoFactorEnabled: false,
      lastLoginAt: "2026-04-29T18:30:00Z",
    },

    role: {
      roleName: "INVENTORY_MANAGER",
      level: 3,
      permissions: ["INVENTORY_VIEW", "INVENTORY_UPDATE", "RECONCILIATION"],
    },

    employment: {
      jobTitle: "Inventory Manager",
      department: "Operations",
      employeeType: "STAFF",
      status: "ACTIVE",
      joinedAt: "2026-02-10T00:00:00Z",
    },

    accessControl: {
      warehouseAccess: ["WH-001"],
      moduleAccess: ["inventory", "reconciliation", "transfers"],
      restrictedActions: ["DELETE_PRODUCTS"],
    },

    activity: {
      status: "OFFLINE",
      lastActiveAt: "2026-04-29T18:30:00Z",
      loginCount: 45,
    },
  },

  {
    userId: "USR-1003",
    clientId: "CLT-2026-000045",

    personalInfo: {
      fullName: "John Peters",
      email: "cashier@dikko.com",
      phone: "+2348074455667",
      profileImage: null,
    },

    auth: {
      authProvider: "LOCAL",
      emailVerified: true,
      phoneVerified: false,
      twoFactorEnabled: false,
      lastLoginAt: "2026-04-28T12:00:00Z",
    },

    role: {
      roleName: "CASHIER",
      level: 5,
      permissions: ["SALES_CREATE", "VIEW_PRODUCTS"],
    },

    employment: {
      jobTitle: "Cashier",
      department: "Sales",
      employeeType: "STAFF",
      status: "ACTIVE",
      joinedAt: "2026-03-01T00:00:00Z",
    },

    accessControl: {
      warehouseAccess: ["WH-002"],
      moduleAccess: ["orders"],
      restrictedActions: ["DELETE_ORDERS", "VIEW_EXPENSES"],
    },

    activity: {
      status: "OFFLINE",
      lastActiveAt: "2026-04-28T12:00:00Z",
      loginCount: 18,
    },
  },
];

// 1️⃣ Product Collection (Master Inventory)
const product_collection = {
  _id: ObjectId("..."),

  sku: "MILK-PEAK-001",
  barcode: "6224001234567", // EAN / UPC
  name: "Peak Milk 170g",
  brand: "Peak",
  category: {
    id: ObjectId("..."),
    name: "Dairy",
  },

  unit: "tin",
  costPrice: 820,
  sellingPrice: 950,
  taxRate: 2.5, // VAT %

  stock: {
    quantity: 245,
    minLevel: 20,
    reorderLevel: 50,
  },

  batchTracking: true,
  expiryTracking: true,

  batches: [
    {
      batchNo: "PK0124A",
      expiryDate: ISODate("2026-01-30"),
      quantity: 120,
      costPrice: 800,
    },
  ],

  supplier: {
    id: ObjectId("..."),
    name: "UAC Foods",
  },

  status: "ACTIVE",
  createdAt: ISODate(),
  updatedAt: ISODate(),
};

const payload = {
  sku: "MILK-PEAK-001",
  barcode: "6224001234567",
  qrcode: "1234567890123",
  name: "Peak Milk 170g",
  brand: "Peak",
  productType: "inventory", // service, digital, subscription
  units: {
    baseUnit: "tin",
    purchaseUnit: "carton",
    conversionRate: 24,
    salesUnit: "tin",
  },
  description: "Business laptop",
  categoryId: "cat-1234",
  supplierId: "uac-5678",

  pricing: {
    costPrice: 650,
    sellingPrice: 820,
    taxRate: 7.5,
    currency: "NGN",
  },

  stock: {
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
      reservedQuantity: 0,
      damagedQuantity: 0,
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
        quantityAvailable: 35,
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
  createdBy: "userId",
  updatedBy: "userId",
  createdAt: new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }),
};
export const ProductoinCollection = {
  productionId: "PROD-2026-000011",
  productionType: "MANUFACTURING",

  status: {
    current: "IN_PROGRESS",
    startedAt: "2026-04-30T06:00:00Z",
    completedAt: null,
  },

  product: {
    productId: "MILK-PEAK-001",
    name: "Peak Milk 170g",
    sku: "MILK-PEAK-001",
    batchNo: "PM-APR-2026-A",
  },

  billOfMaterials: [
    {
      ingredientId: "RAW-FLOUR-001",
      name: "Flour",
      requiredQuantity: 5,
      unit: "kg",
      costPerUnit: 300,
      totalCost: 1500,
    },
    {
      ingredientId: "RAW-SUGAR-001",
      name: "Sugar",
      requiredQuantity: 1,
      unit: "kg",
      costPerUnit: 500,
      totalCost: 500,
    },
    {
      ingredientId: "RAW-YEAST-001",
      name: "Yeast",
      requiredQuantity: 0.2,
      unit: "kg",
      costPerUnit: 2000,
      totalCost: 400,
    },
  ],

  output: {
    plannedQuantity: 100,
    completedQuantity: 0,
    unit: "tin",
  },

  wastage: {
    expectedWaste: 2,
    actualWaste: 0,
    unit: "kg",
  },

  costing: {
    totalMaterialCost: 2400,
    laborCost: 1000,
    overheadCost: 600,
    totalProductionCost: 4000,
    costPerUnit: 40,
  },

  warehouse: {
    productionLocationId: "LOC-PROD-01",
    outputWarehouseId: "sdr3-1234-sdfg-5678",
  },

  inventoryImpact: {
    rawMaterialsConsumed: true,
    finishedGoodsAdded: false,
  },

  qualityControl: {
    checked: false,
    passed: null,
    notes: "",
  },

  schedule: {
    plannedStart: "2026-04-30T06:00:00Z",
    plannedEnd: "2026-04-30T14:00:00Z",
  },

  createdBy: "userId",
  approvedBy: null,

  notes: "Morning production batch",

  auditTrail: [
    {
      action: "CREATED",
      by: "userId",
      timestamp: "2026-04-30T05:50:00Z",
    },
    {
      action: "STARTED",
      by: "userId",
      timestamp: "2026-04-30T06:00:00Z",
    },
  ],
};
// 📌 Used when scanning barcode

// Finds product by barcode

// Confirms stock

// Fetches price, tax, expiry, batch

// 2️⃣ Scan Event (Optional but Used in Big Systems)
// Stores every scan, even before checkout.

const scanevent_collection = {
  _id: ObjectId(),

  sessionId: "POS-TERM-01-20260115",
  cashierId: ObjectId("..."),

  barcode: "6224001234567",
  productId: ObjectId("..."),

  quantity: 1,
  scannedPrice: 950,

  timestamp: ISODate(),
  terminal: "POS-01",
};
// 📌 Used for:

// Fraud detection

// Scan errors

// Analytics (most scanned items)

// 3️⃣ Cart / POS Session (Temporary)
const cart_collection = {
  _id: ObjectId(),

  posSessionId: "POS-01-20260115",
  cashierId: ObjectId("..."),

  items: [
    {
      productId: ObjectId("..."),
      barcode: "6224001234567",
      name: "Peak Milk 170g",

      quantity: 3,
      unitPrice: 950,
      tax: 213.75,
      discount: 0,

      batchNo: "PK0124A",
      expiryDate: ISODate("2026-01-30"),

      subtotal: 2850,
      available: 117,
    },
  ],

  totalQuantity: 3,
  totalTax: 213.75,
  totalAmount: 3063.75,

  status: "OPEN",
  createdAt: ISODate(),
};
// 📌 Lives in DB or Redis
// 📌 Cleared after payment

// 4️⃣ Sales Transaction (Final Receipt)
// THIS is the most important document

const salestranscation_collection = {
  _id: ObjectId(),

  receiptNo: "RCPT-00045321",
  invoiceNo: "INV-00045321",

  posTerminal: "POS-01",
  cashier: {
    id: ObjectId("..."),
    name: "Amina Musa",
  },

  customer: {
    id: ObjectId("..."),
    name: "Walk-in Customer",
    phone: null,
  },

  items: [
    {
      productId: ObjectId("..."),
      sku: "MILK-PEAK-001",
      barcode: "6224001234567",
      name: "Peak Milk 170g",

      quantity: 3,
      unitPrice: 950,
      costPrice: 820,

      batchNo: "PK0124A",
      expiryDate: ISODate("2026-01-30"),

      taxRate: 7.5,
      taxAmount: 213.75,
      discount: 0,

      lineTotal: 2850,
    },
  ],

  payment: {
    subTotal: 2850,
    taxTotal: 23.75,
    discountTotal: 0,
    grandTotal: 3063.75,
    bills: [
      {
        method: "CASH", // CASH | POS | TRANSFER | WALLET
        paidAmount: 3100,
        change: 36.25,
        reference: null,
        tax: null,
      },
    ],
  },

  stockEffected: true,

  createdAt: ISODate(),
};
// 📌 Used for:

// Receipts

// Accounting

// Auditing

// Profit calculation

// 5️⃣ Stock Movement (Very Important)
// Every scan that results in sale must touch this

const stockMovement_collection = {
  _id: ObjectId(),

  productId: ObjectId("..."),
  sku: "MILK-PEAK-001",

  type: "SALE", // SALE | RETURN | ADJUSTMENT | PURCHASE
  quantity: -3,

  reference: {
    receiptNo: "RCPT-00045321",
    invoiceNo: "INV-00045321",
  },

  batchNo: "PK0124A",

  performedBy: ObjectId("..."),
  timestamp: ISODate(),
};
// 📌 This is how real supermarkets never lose stock control

// 6️⃣ Barcode Index (Performance)
db.products.createIndex({ barcode: 1 }, { unique: true });
db.products.createIndex({ sku: 1 });
db.sales.createIndex({ receiptNo: 1 });
db.stock_movements.createIndex({ productId: 1 });
// 7️⃣ Real Scan Flow (Like Supermarket)
// SCAN BARCODE
//    ↓
// Find product by barcode
//    ↓
// Validate stock & expiry
//    ↓
// Add to POS session/cart
//    ↓
// Checkout
//    ↓
// Create SALES document
//    ↓
// Create STOCK_MOVEMENT record
//    ↓
// Update PRODUCT stock
// 8️⃣ If You Want: Next Level
// I can give you:

// 🔹 MERN scan API

// 🔹 USB / camera barcode scanner integration

// 🔹 Offline-first POS logic

// 🔹 Redis POS session design

// 🔹 Profit & loss aggregation queries

// Just say which one.

const DeliveryCollection = {
  deliveryId: "DEL-2026-000321",
  deliveryType: "INBOUND",
  reference: {
    referenceType: "PURCHASE_ORDER",
    referenceId: "PO-2026-000981",
  },

  status: {
    current: "IN_TRANSIT",
    history: [
      {
        state: "CREATED",
        timestamp: "2026-04-29T08:00:00Z",
      },
      {
        state: "DISPATCHED",
        timestamp: "2026-04-29T10:00:00Z",
      },
      {
        state: "IN_TRANSIT",
        timestamp: "2026-04-29T12:00:00Z",
      },
      {
        state: "DELIVERED",
        timestamp: "2026-04-29T12:00:00Z",
      },
    ],
  },

  parties: {
    supplier: {
      supplierId: "SUP-0023",
      name: "ABC Supplies Ltd",
      contact: "+2348012345678",
    },
    customer: null,
    warehouse: {
      warehouseId: "WH-01",
      name: "Main Warehouse",
      location: "Ikeja, Lagos",
    },
  },

  items: [
    {
      productId: "PRD-1001",
      name: "Peak Milk",
      orderedQuantity: 200,
      shippedQuantity: 200,
      receivedQuantity: 0,
      damagedQuantity: 0,
      unit: "Cartons",
    },
    {
      productId: "PRD-1002",
      name: "Coca Cola",
      orderedQuantity: 300,
      shippedQuantity: 300,
      receivedQuantity: 0,
      damagedQuantity: 0,
      unit: "Crates",
    },
  ],

  transport: {
    mode: "ROAD",
    vehicle: {
      vehicleId: "VEH-009",
      plateNumber: "LAG-234-XY",
      driverName: "Ibrahim Musa",
      driverPhone: "+2348098765432",
    },
    carrier: "DHL Logistics",
  },

  tracking: {
    trackingNumber: "TRK-88990011",
    trackingUrl: "https://tracking.example.com/TRK-88990011",
    currentLocation: "Ibadan",
    lastUpdated: "2026-04-29T13:30:00Z",
  },

  schedule: {
    dispatchDate: "2026-04-29T10:00:00Z",
    estimatedArrival: "2026-04-30T18:00:00Z",
    actualArrival: null,
  },

  proofOfDelivery: {
    receivedBy: null,
    signatureUrl: null,
    receivedAt: null,
    notes: null,
  },

  exceptions: [
    {
      type: "DELAY",
      description: "Traffic congestion on Lagos-Ibadan expressway",
      reportedAt: "2026-04-29T14:00:00Z",
    },
  ],

  financials: {
    shippingCost: 25000,
    currency: "NGN",
    paid: false,
  },

  createdBy: "USR-1001",
  createdAt: "2026-04-29T08:00:00Z",

  auditTrail: [
    {
      action: "CREATED",
      by: "USR-1001",
      timestamp: "2026-04-29T08:00:00Z",
    },
    {
      action: "DISPATCHED",
      by: "USR-1003",
      timestamp: "2026-04-29T10:00:00Z",
    },
  ],
};

const transferCollection = {
  transferId: "TRF-2026-000112",
  transferType: "INTERNAL",

  status: {
    current: "IN_TRANSIT",
    history: [
      {
        state: "CREATED",
        timestamp: "2026-04-30T08:00:00Z",
      },
      {
        state: "APPROVED",
        timestamp: "2026-04-30T09:00:00Z",
      },
      {
        state: "DISPATCHED",
        timestamp: "2026-04-30T10:30:00Z",
      },
    ],
  },

  locations: {
    from: {
      locationId: "LOC-WH-01",
      type: "WAREHOUSE",
      name: "Main Warehouse",
      address: "Ikeja, Lagos",
    },
    to: {
      locationId: "LOC-SHOP-02",
      type: "SHOP_FLOOR",
      name: "Retail Shop Floor",
      address: "Surulere, Lagos",
    },
  },

  items: [
    {
      productId: "PRD-1001",
      name: "Peak Milk",
      sku: "PM-200",
      quantityRequested: 50,
      quantityDispatched: 50,
      quantityReceived: 0,
      unit: "Cartons",
    },
  ],

  transport: {
    mode: "ROAD",
    vehicle: {
      vehicleId: "VEH-010",
      plateNumber: "LAG-556-AA",
      driverName: "Sani Bello",
      driverPhone: "+2348011122233",
    },
  },

  schedule: {
    requestedDate: "2026-04-30T08:00:00Z",
    dispatchDate: "2026-04-30T10:30:00Z",
    expectedArrival: "2026-04-30T14:00:00Z",
    actualArrival: null,
  },

  inventoryImpact: {
    sourceDeducted: true,
    destinationAdded: false,
  },

  approval: {
    required: true,
    approvedBy: "USR-2002",
    approvedAt: "2026-04-30T09:00:00Z",
  },

  notes: "Restocking shop floor for daily sales",

  createdBy: "USR-1001",
  createdAt: "2026-04-30T08:00:00Z",

  auditTrail: [
    {
      action: "CREATED",
      by: "USR-1001",
      timestamp: "2026-04-30T08:00:00Z",
    },
    {
      action: "APPROVED",
      by: "USR-2002",
      timestamp: "2026-04-30T09:00:00Z",
    },
    {
      action: "DISPATCHED",
      by: "USR-1003",
      timestamp: "2026-04-30T10:30:00Z",
    },
  ],
};

const AdjustmentCollection = {
  adjustmentId: "ADJ-2026-000078",
  adjustmentType: "RECONCILIATION",

  reference: {
    referenceType: "RECONCILIATION",
    referenceId: "REC-2026-000045",
  },

  status: {
    current: "POSTED",
    createdAt: "2026-04-30T13:30:00Z",
    postedAt: "2026-04-30T14:00:00Z",
  },

  location: {
    locationId: "LOC-WH-01",
    type: "WAREHOUSE",
    name: "Main Warehouse",
  },

  items: [
    {
      productId: "PRD-1001",
      name: "Peak Milk",
      sku: "PM-200",

      systemQuantityBefore: 200,
      physicalQuantity: 190,

      adjustmentQuantity: -10,
      systemQuantityAfter: 190,

      adjustmentType: "DECREASE",
      reason: "Stock shortage from reconciliation",

      discrepancy: {
        type: "SHORTAGE",
        severity: "HIGH",
      },
    },
    {
      productId: "PRD-1002",
      name: "Coca Cola",
      sku: "CC-300",

      systemQuantityBefore: 300,
      physicalQuantity: 305,

      adjustmentQuantity: 5,
      systemQuantityAfter: 305,

      adjustmentType: "INCREASE",
      reason: "Stock overage from reconciliation",

      discrepancy: {
        type: "OVERAGE",
        severity: "LOW",
      },
    },
  ],

  summary: {
    totalAdjustedItems: 2,
    totalIncrease: 5,
    totalDecrease: 10,
    netAdjustment: -5,
  },

  approval: {
    required: true,
    approvedBy: "USR-2001",
    approvedAt: "2026-04-30T13:50:00Z",
  },

  financialImpact: {
    totalValueIncrease: 4000,
    totalValueDecrease: 12000,
    netValueImpact: -8000,
    currency: "NGN",
  },

  notes: "Adjustment after weekly stock reconciliation",

  createdBy: "USR-3001",
  createdAt: "2026-04-30T13:30:00Z",

  auditTrail: [
    {
      action: "CREATED",
      by: "USR-3001",
      timestamp: "2026-04-30T13:30:00Z",
    },
    {
      action: "APPROVED",
      by: "USR-2001",
      timestamp: "2026-04-30T13:50:00Z",
    },
    {
      action: "POSTED",
      by: "USR-3001",
      timestamp: "2026-04-30T14:00:00Z",
    },
  ],
};

const Reconcilation = {
  reconciliationId: "REC-2026-000045",
  reconciliationType: "CYCLE_COUNT",

  status: {
    current: "COMPLETED",
    startedAt: "2026-04-30T07:00:00Z",
    completedAt: "2026-04-30T12:30:00Z",
  },

  location: {
    locationId: "LOC-WH-01",
    type: "WAREHOUSE",
    name: "Main Warehouse",
    address: "Ikeja, Lagos",
  },

  conductedBy: {
    userId: "USR-3001",
    name: "Inventory Officer",
  },

  approvedBy: {
    userId: "USR-2001",
    name: "Supervisor",
    approvedAt: "2026-04-30T13:00:00Z",
  },

  items: [
    {
      productId: "PRD-1001",
      name: "Peak Milk",
      sku: "PM-200",

      systemQuantity: 200,
      physicalQuantity: 190,

      variance: -10,
      varianceType: "SHORTAGE",

      reason: "Possible theft or miscount",
      adjustmentRequired: true,
    },
    {
      productId: "PRD-1002",
      name: "Coca Cola",
      sku: "CC-300",

      systemQuantity: 300,
      physicalQuantity: 305,

      variance: 5,
      varianceType: "OVERAGE",

      reason: "Scanning error during sales",
      adjustmentRequired: true,
    },
  ],

  summary: {
    totalItemsChecked: 2,
    totalShortage: 10,
    totalOverage: 5,
    netVariance: -5,
  },

  inventoryAdjustment: {
    adjustmentId: "ADJ-2026-000078",
    status: "POSTED",
    adjustedAt: "2026-04-30T14:00:00Z",
  },

  method: {
    countMethod: "MANUAL",
    frequency: "WEEKLY",
    notes: "Routine weekly stock verification",
  },

  attachments: [
    {
      type: "IMAGE",
      url: "https://cdn.example.com/reconciliation/photo1.jpg",
    },
  ],

  exceptions: [
    {
      type: "THEFT_SUSPECTED",
      description: "Repeated shortage detected for Peak Milk",
      reportedAt: "2026-04-30T12:45:00Z",
    },
  ],

  createdAt: "2026-04-30T07:00:00Z",

  auditTrail: [
    {
      action: "STARTED",
      by: "USR-3001",
      timestamp: "2026-04-30T07:00:00Z",
    },
    {
      action: "COMPLETED",
      by: "USR-3001",
      timestamp: "2026-04-30T12:30:00Z",
    },
    {
      action: "APPROVED",
      by: "USR-2001",
      timestamp: "2026-04-30T13:00:00Z",
    },
  ],
};

const ExpensesColl = {
  expenseId: "EXP-2026-000321",
  expenseType: "OPERATING_EXPENSE",

  status: {
    current: "APPROVED",
    submittedAt: "2026-04-30T09:00:00Z",
    approvedAt: "2026-04-30T10:30:00Z",
  },

  category: "UTILITIES",

  items: [
    {
      name: "Electricity",
      amount: 45000,
      currency: "NGN",
      description: "Monthly electricity bill",
    },
    {
      name: "Internet",
      amount: 15000,
      currency: "NGN",
      description: "Office internet subscription",
    },
  ],

  payment: {
    totalAmount: 60000,
    currency: "NGN",
    paymentMethod: "BANK_TRANSFER",
    paid: true,
    paidAt: "2026-04-30T11:00:00Z",
    reference: "PAY-INV-88921",
  },

  vendor: {
    name: "IKEDC",
    type: "UTILITY_PROVIDER",
    contact: "support@ikedc.com",
  },

  location: {
    branchId: "BR-001",
    name: "Main Store - Lagos",
  },

  approvedBy: {
    userId: "USR-2001",
    name: "Finance Manager",
  },

  submittedBy: {
    userId: "USR-1001",
    name: "Account Officer",
  },

  receipt: {
    hasReceipt: true,
    receiptUrl: "https://cdn.example.com/expenses/exp-321.pdf",
  },

  schedule: {
    expenseDate: "2026-04-30",
    recurring: false,
    frequency: null,
  },

  impact: {
    affectsInventory: false,
    affectsProfit: true,
    affectsCashFlow: true,
  },

  notes: "Monthly operational expenses for store running",

  createdAt: "2026-04-30T09:00:00Z",

  auditTrail: [
    {
      action: "CREATED",
      by: "USR-1001",
      timestamp: "2026-04-30T09:00:00Z",
    },
    {
      action: "APPROVED",
      by: "USR-2001",
      timestamp: "2026-04-30T10:30:00Z",
    },
    {
      action: "PAID",
      by: "USR-1001",
      timestamp: "2026-04-30T11:00:00Z",
    },
  ],
};
