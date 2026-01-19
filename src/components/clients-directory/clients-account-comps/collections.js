// Below is a production-grade MongoDB document design used in POS / supermarket / mall systems (like Prokip, Odoo POS, Square, Lightspeed).
// This is what gets saved when a barcode is scanned and a sale happens.

// I’ll keep it advanced but clean, real-world level.

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
  taxRate: 7.5, // VAT %

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

  summary: {
    subTotal: 2850,
    taxTotal: 213.75,
    discountTotal: 0,
    grandTotal: 3063.75,
  },

  payment: {
    method: "CASH", // CASH | POS | TRANSFER | WALLET
    paidAmount: 3100,
    change: 36.25,
    reference: null,
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
