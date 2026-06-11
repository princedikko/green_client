# Barcode Scanner Hook - Complete Guide

## Overview

The `useBarcodeScanner` custom React hook provides a **production-ready, global barcode scanning system** that works seamlessly across your React application without requiring a dedicated input field or focus management.

## Key Features

✅ **Global Barcode Detection** - Works across the entire application  
✅ **No Focus Required** - Scans work even when input fields are focused  
✅ **Smart Timing Detection** - Distinguishes barcode scans from human typing  
✅ **Timeout-Based Completion** - Completes scan after 50-100ms of inactivity  
✅ **Enter Key Support** - Also completes scan on Enter key press  
✅ **Duplicate Prevention** - Prevents processing identical consecutive scans  
✅ **Event Listener Cleanup** - Proper cleanup on unmount  
✅ **Debug Mode** - Optional console logging for troubleshooting  
✅ **Production Ready** - Error handling and edge cases covered

## Installation

The hook is located at:

```
src/hooks/useBarcodeScanner.js
```

## Basic Usage

### Simple Example

```jsx
import { useState } from "react";
import useBarcodeScanner from "../../hooks/useBarcodeScanner";

function MyComponent() {
  const [lastBarcode, setLastBarcode] = useState("");

  const handleScan = (barcode) => {
    console.log("Barcode scanned:", barcode);
    setLastBarcode(barcode);
  };

  useBarcodeScanner(handleScan);

  return (
    <div>
      <h1>Last Scanned: {lastBarcode}</h1>
    </div>
  );
}
```

### With Configuration Options

```jsx
useBarcodeScanner(handleScan, {
  timeoutMs: 100, // Wait 100ms for next character
  minLength: 5, // Require minimum 5 characters
  preventDuplicates: true, // Don't process identical scans twice
  debug: true, // Show console logs for debugging
});
```

## Hook API

### Parameters

```javascript
useBarcodeScanner(onScan, options);
```

#### `onScan` (required)

- **Type**: `Function`
- **Description**: Callback function invoked when barcode is complete
- **Parameters**: `barcode` (string)

#### `options` (optional)

```javascript
{
  timeoutMs: 100,           // Timeout in milliseconds (default: 100)
  minLength: 3,             // Minimum barcode length (default: 3)
  preventDuplicates: true,  // Prevent duplicate scans (default: true)
  debug: false              // Enable console logging (default: false)
}
```

### Return Value

The hook returns an object with the following properties:

```javascript
{
  buffer: string,           // Current buffer content (read-only)
  clearBuffer: Function,    // Manually clear the buffer
  resetState: Function,     // Reset all internal state
  getStats: Function        // Get scan statistics for debugging
}
```

## Use Cases

### 1. POS System (WarehouseTerminal)

```jsx
const handleBarcodeScanned = useCallback(
  (barcode) => {
    const product = products.find((p) => p.barcode === barcode);

    if (product) {
      addToCart(product);
      enqueueSnackbar("✓ Added to cart", { variant: "success" });
    } else {
      enqueueSnackbar("Product not found", { variant: "error" });
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

### 2. Inventory Management System

```jsx
function InventoryPage() {
  const [scannedProducts, setScannedProducts] = useState([]);

  const handleScan = useCallback((barcode) => {
    // Look up product
    const product = fetchProductByBarcode(barcode);

    if (product) {
      setScannedProducts((prev) => [...prev, product]);
      logScan(barcode, "in"); // Log inventory in
    }
  }, []);

  useBarcodeScanner(handleScan, {
    timeoutMs: 150,
    minLength: 8,
    preventDuplicates: false, // Allow rescanning same item
  });

  return (
    <div>
      {scannedProducts.map((p) => (
        <div key={p.id}>
          {p.name} - {p.barcode}
        </div>
      ))}
    </div>
  );
}
```

### 3. Student ID Card Scanning

```jsx
function StudentCheckIn() {
  const handleStudentIdScanned = (studentId) => {
    // Mark student as present
    checkInStudent(studentId);
    playSuccessSound();
  };

  useBarcodeScanner(handleStudentIdScanned, {
    timeoutMs: 100,
    minLength: 6,
    preventDuplicates: true, // Prevent double check-in
  });

  return <h1>Scan student ID card</h1>;
}
```

### 4. Warehouse Receiving System

```jsx
function ReceivingDock() {
  const handlePalletScanned = (palletBarcode) => {
    // Update receiving status
    updatePalletStatus(palletBarcode, "received");
  };

  useBarcodeScanner(handlePalletScanned, {
    timeoutMs: 200, // Slightly longer for warehouse environment
    minLength: 10,
    preventDuplicates: true,
    debug: process.env.NODE_ENV === "development",
  });

  return <ReceivingList />;
}
```

## How It Works

### Barcode Detection Algorithm

1. **Listen Phase**: Hook listens to all `keydown` events globally
2. **Buffer Phase**: Characters are accumulated in a buffer
3. **Timing Phase**:
   - If Enter is pressed → Scan complete immediately
   - If 100ms passes with no input → Scan complete
4. **Validation Phase**:
   - Check minimum length requirement
   - Check for duplicates (if enabled)
   - Verify scan duration is < 500ms (likely barcode, not typing)
5. **Callback Phase**: Invoke `onScan()` with validated barcode

### Barcode vs. Typing Detection

The hook automatically distinguishes between:

**Barcode Scans (accepted):**

- 3-20 characters
- All characters arrive within 50-200ms
- Consistent rapid input
- Often ends with Enter

**Human Typing (rejected):**

- Gaps of 100ms+ between keystrokes
- Total duration > 500ms
- Variable timing

### Event Capture

Uses **capture phase** (`addEventListener(..., true)`) to intercept events before form elements, ensuring scans work even when:

- Input fields are focused
- Search boxes are active
- Modals are open
- Textareas have focus

## Advanced Features

### Debug Mode

Enable detailed logging:

```jsx
useBarcodeScanner(handleScan, { debug: true });
```

Console output example:

```
[BarcodeScanner] Scan started...
[BarcodeScanner] Buffer: "123456" | Chars: 6 | Last interval: 45ms
[BarcodeScanner] Buffer: "1234567" | Chars: 7 | Last interval: 48ms
[BarcodeScanner] Timeout triggered after 100ms. Total duration: 145ms
[BarcodeScanner] Processing barcode: "1234567" | Duration: 145ms | Chars: 7
```

### Manual Buffer Control

```jsx
const { buffer, clearBuffer, resetState, getStats } =
  useBarcodeScanner(handleScan);

// Manually clear buffer
clearBuffer();

// Reset all state
resetState();

// Get statistics
const stats = getStats();
console.log(stats);
// Output: {
//   buffer: "1234567",
//   charCount: 7,
//   lastScan: "1234567",
//   isScanning: false,
//   scanDuration: 145
// }
```

## Configuration Examples

### Fast Processing (Quick Feedback)

```jsx
useBarcodeScanner(handleScan, {
  timeoutMs: 75, // Complete quickly
  minLength: 3, // Accept short codes
  preventDuplicates: false,
});
```

### Strict Processing (Accuracy)

```jsx
useBarcodeScanner(handleScan, {
  timeoutMs: 150, // Wait longer for completion
  minLength: 12, // Require longer codes (UPC-A standard)
  preventDuplicates: true,
});
```

### Warehouse Mode (Robust)

```jsx
useBarcodeScanner(handleScan, {
  timeoutMs: 200, // Account for environment noise
  minLength: 8,
  preventDuplicates: true,
  debug: true, // Log everything for troubleshooting
});
```

## Barcode Format Support

The hook supports scanning any barcode that:

- ✅ Contains alphanumeric characters
- ✅ Contains special characters: `-`, `*`, `/`, `#`, `.`, `,`, `;`, `:`, `@`, `!`, `&`, `$`, `%`, `+`, `=`, `<`, `>`, `?`, `^`, `~`, `` ` ``, `|`, `()`, `[]`, `{}`
- ✅ Ends with Enter key or timeout
- ✅ Is 3+ characters (configurable)

### Common Barcode Types

- **UPC-A**: 12 digits (e.g., 036000291452)
- **EAN-13**: 13 digits (e.g., 5901234123457)
- **Code 128**: Alphanumeric with special chars
- **Custom SKUs**: Any format your system uses

## Error Handling

### Callback Errors

The hook wraps the callback in try-catch:

```jsx
const handleScan = (barcode) => {
  throw new Error("Processing failed"); // Won't crash the app
};

useBarcodeScanner(handleScan); // Errors are logged to console
```

### Validation Errors

Automatic validation prevents invalid scans:

```jsx
useBarcodeScanner(handleScan, {
  minLength: 5, // Shorter scans are silently ignored
});
```

## Performance Considerations

- **Memory**: Minimal - only stores current buffer and last scan
- **CPU**: Negligible - simple string operations
- **Event Listeners**: Single listener on document (capture phase)
- **Cleanup**: Automatic on component unmount

## Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 10.1+
- ✅ Edge 79+
- ✅ Modern mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Scans Not Being Detected

**Check 1: Debug Mode**

```jsx
useBarcodeScanner(handleScan, { debug: true });
```

**Check 2: Verify Callback is Called**

```jsx
const handleScan = (barcode) => {
  console.log("SCAN RECEIVED:", barcode); // Add explicit log
};
```

**Check 3: Barcode Length**

```jsx
useBarcodeScanner(handleScan, {
  minLength: 1, // Temporarily accept any length
});
```

### Duplicate Scans Being Processed

**Solution**: Enable duplicate prevention

```jsx
useBarcodeScanner(handleScan, {
  preventDuplicates: true,
});
```

### Scans Triggering Too Slowly

**Solution**: Reduce timeout

```jsx
useBarcodeScanner(handleScan, {
  timeoutMs: 75, // Complete faster
});
```

### Input Field Being Modified

This hook only listens for keyboard events and buffers them internally - it never modifies input fields. If you notice text appearing:

1. It's likely the scanner hardware is also typing to an input
2. Configure scanner to output only to your app
3. Or use a blind input field: `<input style={{ display: 'none' }} />`

## Testing

### Unit Test Example

```javascript
import { renderHook } from "@testing-library/react";
import useBarcodeScanner from "./useBarcodeScanner";

describe("useBarcodeScanner", () => {
  it("should call onScan with barcode on Enter key", () => {
    const onScan = jest.fn();
    renderHook(() => useBarcodeScanner(onScan));

    // Simulate typing
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "1" }));
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "2" }));
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "3" }));
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));

    expect(onScan).toHaveBeenCalledWith("123");
  });

  it("should ignore modifier keys", () => {
    const onScan = jest.fn();
    renderHook(() => useBarcodeScanner(onScan));

    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "1", ctrlKey: true }),
    );

    expect(onScan).not.toHaveBeenCalled();
  });
});
```

## Changelog

### v1.0.0 (Initial Release)

- Global keyboard listening
- Barcode vs. typing detection
- Duplicate prevention
- Enter key support
- Timeout-based completion
- Debug mode
- Full cleanup on unmount

## License

This hook is part of the Universe Inventory System.

## Support

For issues or questions:

1. Check the troubleshooting section above
2. Enable debug mode to see detailed logs
3. Review your configuration options
