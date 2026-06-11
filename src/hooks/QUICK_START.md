# Barcode Scanner Hook - Quick Start Guide

## 5-Minute Setup

### Step 1: Use the Hook

```jsx
import { useCallback } from "react";
import useBarcodeScanner from "../../hooks/useBarcodeScanner";

function MyComponent() {
  const handleScan = useCallback((barcode) => {
    console.log("Scanned:", barcode);
    // Your logic here
  }, []);

  useBarcodeScanner(handleScan);

  return <div>Ready to scan!</div>;
}
```

### Step 2: That's it!

The hook automatically:

- ✅ Listens globally for barcodes
- ✅ Works without focus
- ✅ Detects barcode completion (Enter or timeout)
- ✅ Cleans up on unmount

---

## Common Patterns

### Pattern 1: Add Product to Cart

```jsx
const handleScan = useCallback(
  (barcode) => {
    const product = products.find((p) => p.barcode === barcode);
    if (product) {
      addToCart(product);
    }
  },
  [products],
);

useBarcodeScanner(handleScan);
```

### Pattern 2: Check In Items

```jsx
const handleScan = useCallback((itemId) => {
  checkInItem(itemId);
  updateUI();
}, []);

useBarcodeScanner(handleScan, {
  preventDuplicates: true,
});
```

### Pattern 3: Inventory Count

```jsx
const [items, setItems] = useState([]);

const handleScan = useCallback((sku) => {
  setItems((prev) => [...prev, sku]);
}, []);

useBarcodeScanner(handleScan);
```

---

## Configuration Quick Reference

```javascript
useBarcodeScanner(handleScan, {
  // Wait this long for next character (default: 100ms)
  timeoutMs: 100,

  // Minimum barcode length (default: 3)
  minLength: 5,

  // Prevent duplicate scans (default: true)
  preventDuplicates: true,

  // Show debug logs (default: false)
  debug: false,
});
```

---

## Real-World Settings

### Fast & Loose

```javascript
{ timeoutMs: 75, minLength: 1, preventDuplicates: false }
```

### Standard (Default)

```javascript
{ timeoutMs: 100, minLength: 3, preventDuplicates: true }
```

### Strict & Reliable

```javascript
{ timeoutMs: 150, minLength: 12, preventDuplicates: true, debug: true }
```

### Warehouse Grade

```javascript
{ timeoutMs: 200, minLength: 8, preventDuplicates: true, debug: true }
```

---

## Troubleshooting

| Problem                  | Solution                             |
| ------------------------ | ------------------------------------ |
| Scans not working        | Enable debug mode: `{ debug: true }` |
| Duplicate scans          | Set `preventDuplicates: true`        |
| Slow detection           | Reduce `timeoutMs` to 75             |
| Too many false positives | Increase `minLength` or `timeoutMs`  |
| Typing being detected    | Increase `timeoutMs` to 150+         |

---

## Testing Your Scanner

1. **Enable debug mode:**

   ```javascript
   useBarcodeScanner(handleScan, { debug: true });
   ```

2. **Check browser console** for logs

3. **Simulate scan with keyboard:**
   - Manually type: `123456Enter`
   - Should see barcode in console

4. **Verify with actual scanner:**
   - Scan a real barcode
   - Should appear in console within 100ms

---

## WarehouseTerminal Integration (Already Done!)

Your `WarehouseTerminal.jsx` already has the hook integrated:

```jsx
const handleBarcodeScanned = useCallback(
  (barcode) => {
    const product = products.find((p) => p.barcode === barcode);
    if (product) {
      addToCart(product); // ✅ Adds to cart automatically
    }
  },
  [products],
);

useBarcodeScanner(handleBarcodeScanned, {
  timeoutMs: 100,
  minLength: 3,
  preventDuplicates: true,
  debug: false,
});
```

**Now you can:**

- Scan any product barcode while using WarehouseTerminal
- Product automatically adds to cart
- Works even with search box or other fields focused

---

## API Reference

```javascript
const {
  buffer, // Current buffer (string)
  clearBuffer, // Clear buffer function
  resetState, // Reset all state function
  getStats, // Get statistics function
} = useBarcodeScanner(onScan, options);

// Examples:
buffer; // "1234567"
clearBuffer(); // Reset buffer
resetState(); // Full reset
getStats(); // { buffer, charCount, lastScan, ... }
```

---

## Common Barcodes

- **UPC-A** (12 digits): `036000291452`
- **EAN-13** (13 digits): `5901234123457`
- **Code 128**: `[encoded data]`
- **Custom SKU**: Whatever your system uses

---

## Pro Tips

1. **Always use `useCallback`** for your handler:

   ```javascript
   const handleScan = useCallback((barcode) => { ... }, [deps]);
   ```

2. **Enable debug on development:**

   ```javascript
   debug: process.env.NODE_ENV === "development";
   ```

3. **Play feedback sounds:**

   ```javascript
   const handleScan = useCallback((barcode) => {
     playSound("success");
     addToCart(barcode);
   }, []);
   ```

4. **Handle errors gracefully:**
   ```javascript
   const handleScan = useCallback((barcode) => {
     try {
       const product = findProduct(barcode);
       addToCart(product);
     } catch (error) {
       showError("Product not found");
     }
   }, []);
   ```

---

## Need More Help?

📖 **Full Documentation**: See `BARCODE_SCANNER_GUIDE.md`

📚 **Examples**: See `BARCODE_SCANNER_EXAMPLES.jsx`

💡 **Source Code**: `useBarcodeScanner.js` (fully documented)

---

## Supported Use Cases

✅ POS Systems (Like your WarehouseTerminal)
✅ Inventory Management
✅ Student ID Scanning
✅ Asset Tracking
✅ Warehouse Receiving
✅ Picking & Packing
✅ Customer Check-In
✅ Any barcode-based workflow

---

**That's it! Start scanning!** 🎉
