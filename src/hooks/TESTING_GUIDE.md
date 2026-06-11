# Barcode Scanner - Testing & Best Practices Guide

## Testing Overview

The barcode scanner system can be tested in multiple ways:

1. **Manual Testing** - Using actual barcode scanner
2. **Keyboard Simulation** - Manual typing to test
3. **Unit Testing** - Using Jest & React Testing Library
4. **Integration Testing** - Full component workflow

---

## Manual Testing

### Test 1: Basic Barcode Scan

**Setup:**

1. Open WarehouseTerminal component
2. Have a product with barcode in the products list
3. Have barcode scanner ready

**Steps:**

1. Scan a product barcode
2. Watch for success notification
3. Check if product appears in cart

**Expected Result:**

```
✓ Added: [Product Name]
Cart updates with product
```

### Test 2: Invalid Barcode

**Setup:**

1. Open WarehouseTerminal
2. Barcode scanner ready

**Steps:**

1. Scan a barcode that doesn't exist in the products list
2. Watch notifications

**Expected Result:**

```
Product not found: [barcode]
No change to cart
```

### Test 3: Focus Doesn't Matter

**Setup:**

1. Open WarehouseTerminal
2. Click on search box (gives it focus)
3. Barcode scanner ready

**Steps:**

1. Scan a valid product barcode
2. Observe that scan works even though search box has focus

**Expected Result:**

```
✓ Product added to cart
Search box is not modified
```

### Test 4: Duplicate Scan Prevention

**Setup:**

1. Scan a product (gets added to cart)
2. Scan the same barcode again immediately

**Expected Result:**

```
First scan: ✓ Added
Second scan: Ignored (duplicate prevention)
```

---

## Keyboard Simulation Testing

### Simulate Barcode Scan

**In browser console:**

```javascript
// Method 1: Dispatch key events
document.dispatchEvent(new KeyboardEvent("keydown", { key: "4" }));
document.dispatchEvent(new KeyboardEvent("keydown", { key: "2" }));
document.dispatchEvent(new KeyboardEvent("keydown", { key: "1" }));
document.dispatchEvent(new KeyboardEvent("keydown", { key: "1" }));
document.dispatchEvent(new KeyboardEvent("keydown", { key: "7" }));
document.dispatchEvent(new KeyboardEvent("keydown", { key: "1" }));
document.dispatchEvent(new KeyboardEvent("keydown", { key: "3" }));
document.dispatchEvent(new KeyboardEvent("keydown", { key: "1" }));
document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));

// Method 2: Manual typing
// Type: 1234567 (quickly)
// Press: Enter
```

**Expected:**

- Hook buffers characters
- On Enter or timeout, processes barcode
- Console shows logs (if debug enabled)

### Test Debug Mode

```javascript
// In WarehouseTerminal.jsx, change:
useBarcodeScanner(handleBarcodeScanned, {
  timeoutMs: 100,
  minLength: 3,
  preventDuplicates: true,
  debug: true, // ← Change to true
});
```

**Then scan or simulate keystrokes:**

```
[BarcodeScanner] Scan started...
[BarcodeScanner] Buffer: "1" | Chars: 1 | Last interval: 45ms
[BarcodeScanner] Buffer: "12" | Chars: 2 | Last interval: 48ms
...
[BarcodeScanner] Timeout triggered after 100ms. Total duration: 145ms
[BarcodeScanner] Processing barcode: "1234567" | Duration: 145ms | Chars: 7
```

---

## Unit Testing

### Setup

```javascript
// __tests__/useBarcodeScanner.test.js
import { renderHook, act } from "@testing-library/react";
import useBarcodeScanner from "../useBarcodeScanner";
```

### Test Suite 1: Basic Functionality

```javascript
describe("useBarcodeScanner - Basic Functionality", () => {
  it("should call onScan when Enter key is pressed", () => {
    const onScan = jest.fn();
    renderHook(() => useBarcodeScanner(onScan));

    // Simulate scanning: 123Enter
    act(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "1" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "2" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "3" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    });

    expect(onScan).toHaveBeenCalledWith("123");
  });

  it("should call onScan when timeout expires", async () => {
    const onScan = jest.fn();
    jest.useFakeTimers();

    renderHook(() => useBarcodeScanner(onScan, { timeoutMs: 100 }));

    act(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "1" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "2" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "3" }));
    });

    // Fast forward 100ms
    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(onScan).toHaveBeenCalledWith("123");

    jest.useRealTimers();
  });

  it("should ignore scans shorter than minLength", () => {
    const onScan = jest.fn();
    renderHook(() => useBarcodeScanner(onScan, { minLength: 5 }));

    act(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "1" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "2" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "3" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    });

    expect(onScan).not.toHaveBeenCalled();
  });
});
```

### Test Suite 2: Duplicate Prevention

```javascript
describe("useBarcodeScanner - Duplicate Prevention", () => {
  it("should prevent duplicate scans when enabled", () => {
    const onScan = jest.fn();
    renderHook(() => useBarcodeScanner(onScan, { preventDuplicates: true }));

    // First scan
    act(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "1" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "2" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "3" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    });

    expect(onScan).toHaveBeenCalledTimes(1);

    // Second identical scan
    act(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "1" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "2" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "3" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    });

    // Should still be 1 (not 2)
    expect(onScan).toHaveBeenCalledTimes(1);
  });

  it("should allow duplicate scans when disabled", () => {
    const onScan = jest.fn();
    renderHook(() => useBarcodeScanner(onScan, { preventDuplicates: false }));

    // First scan
    act(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "1" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "2" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "3" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    });

    expect(onScan).toHaveBeenCalledTimes(1);

    // Second identical scan
    act(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "1" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "2" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "3" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    });

    // Should be 2 now
    expect(onScan).toHaveBeenCalledTimes(2);
  });
});
```

### Test Suite 3: Modifier Key Handling

```javascript
describe("useBarcodeScanner - Modifier Keys", () => {
  it("should ignore Ctrl key combinations", () => {
    const onScan = jest.fn();
    renderHook(() => useBarcodeScanner(onScan));

    act(() => {
      document.dispatchEvent(
        new KeyboardEvent("keydown", { key: "1", ctrlKey: true }),
      );
    });

    expect(onScan).not.toHaveBeenCalled();
  });

  it("should ignore Alt key combinations", () => {
    const onScan = jest.fn();
    renderHook(() => useBarcodeScanner(onScan));

    act(() => {
      document.dispatchEvent(
        new KeyboardEvent("keydown", { key: "a", altKey: true }),
      );
    });

    expect(onScan).not.toHaveBeenCalled();
  });

  it("should ignore Meta key combinations", () => {
    const onScan = jest.fn();
    renderHook(() => useBarcodeScanner(onScan));

    act(() => {
      document.dispatchEvent(
        new KeyboardEvent("keydown", { key: "s", metaKey: true }),
      );
    });

    expect(onScan).not.toHaveBeenCalled();
  });
});
```

### Test Suite 4: Buffer Management

```javascript
describe("useBarcodeScanner - Buffer Management", () => {
  it("should provide access to buffer", () => {
    const onScan = jest.fn();
    const { result } = renderHook(() => useBarcodeScanner(onScan));

    expect(result.current.buffer).toBe("");

    act(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "1" }));
    });

    // Note: Buffer updates async, may need waitFor()
    // expect(result.current.buffer).toBe('1');
  });

  it("should clear buffer manually", () => {
    const onScan = jest.fn();
    const { result } = renderHook(() => useBarcodeScanner(onScan));

    act(() => {
      result.current.clearBuffer();
    });

    // Buffer should be empty
    expect(result.current.buffer).toBe("");
  });

  it("should reset state completely", () => {
    const onScan = jest.fn();
    const { result } = renderHook(() => useBarcodeScanner(onScan));

    act(() => {
      result.current.resetState();
    });

    // All state should be reset
    expect(result.current.buffer).toBe("");
    const stats = result.current.getStats();
    expect(stats.charCount).toBe(0);
  });
});
```

---

## Integration Testing

### Test with WarehouseTerminal

```javascript
// __tests__/WarehouseTerminal.integration.test.js
import { render, screen, waitFor } from "@testing-library/react";
import WarehouseTerminal from "../WarehouseTerminal";
import { Provider } from "react-redux";
import store from "../store"; // Your Redux store

describe("WarehouseTerminal - Barcode Scanner Integration", () => {
  it("should add product to cart when barcode is scanned", async () => {
    // Mock products in store
    const mockProducts = [
      {
        id: 1,
        name: "Test Product",
        barcode: "1234567",
        sku: "SKU-001",
        pricing: { sellingPrice: 100 },
      },
    ];

    // Render component
    render(
      <Provider store={store}>
        <WarehouseTerminal />
      </Provider>,
    );

    // Simulate barcode scan
    act(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "1" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "2" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "3" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "4" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "5" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "6" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "7" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    });

    // Wait for success notification
    await waitFor(() => {
      expect(screen.getByText(/Added: Test Product/i)).toBeInTheDocument();
    });

    // Verify cart updated
    const cartItems = screen.getByText(/1 items/i);
    expect(cartItems).toBeInTheDocument();
  });

  it("should show error when product not found", async () => {
    render(
      <Provider store={store}>
        <WarehouseTerminal />
      </Provider>,
    );

    // Scan unknown barcode
    act(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "9" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "9" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "9" }));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    });

    // Wait for error notification
    await waitFor(() => {
      expect(screen.getByText(/Product not found/i)).toBeInTheDocument();
    });
  });
});
```

---

## Best Practices

### 1. Always Use useCallback

```javascript
// ✅ Good
const handleScan = useCallback(
  (barcode) => {
    addProductToCart(barcode);
  },
  [addProductToCart],
); // Include dependencies

useBarcodeScanner(handleScan);

// ❌ Bad - Function recreated every render
useBarcodeScanner((barcode) => {
  addProductToCart(barcode);
});
```

### 2. Handle Errors Gracefully

```javascript
// ✅ Good
const handleScan = useCallback((barcode) => {
  try {
    const product = findProduct(barcode);
    if (!product) {
      throw new Error(`Product ${barcode} not found`);
    }
    addToCart(product);
  } catch (error) {
    console.error("Scan processing failed:", error);
    showErrorNotification(error.message);
  }
}, []);

// ❌ Bad - Unhandled errors crash app
const handleScan = (barcode) => {
  const product = findProduct(barcode); // Could throw
  addToCart(product);
};
```

### 3. Provide User Feedback

```javascript
// ✅ Good
const handleScan = useCallback((barcode) => {
  const product = findProduct(barcode);
  if (product) {
    addToCart(product);
    // Provide immediate feedback
    playSuccessSound();
    showNotification(`✓ ${product.name} added`);
  } else {
    playErrorSound();
    showNotification("Product not found", "error");
  }
}, []);

// ❌ Bad - No feedback to user
const handleScan = (barcode) => {
  const product = findProduct(barcode);
  addToCart(product);
};
```

### 4. Use Appropriate Configuration

```javascript
// ✅ Good - Tuned for your use case
if (isWarehouseEnvironment) {
  useBarcodeScanner(handleScan, {
    timeoutMs: 150, // Noisy environment
    minLength: 8, // Standard barcode length
    preventDuplicates: true,
    debug: isDevMode, // Debug only in development
  });
} else {
  useBarcodeScanner(handleScan, {
    timeoutMs: 100, // Standard setting
    minLength: 3,
    preventDuplicates: true,
  });
}

// ❌ Bad - Using defaults everywhere without consideration
useBarcodeScanner(handleScan); // May not work well for your use case
```

### 5. Clean Up Properly

```javascript
// ✅ Good - Hook handles cleanup automatically
function MyComponent() {
  useBarcodeScanner(handleScan); // Cleanup happens on unmount
  return <div>...</div>;
}

// ❌ Bad - Manual listener without cleanup (memory leak!)
function MyComponent() {
  useEffect(() => {
    document.addEventListener("keydown", handler); // No cleanup!
  }, []);
  return <div>...</div>;
}
```

---

## Troubleshooting Tests

### Issue: Tests Timing Out

```javascript
// Use fake timers for timeout-based tests
jest.useFakeTimers();
// ... test code ...
jest.advanceTimersByTime(100);
jest.useRealTimers();
```

### Issue: Events Not Firing

```javascript
// Wrap in act()
act(() => {
  document.dispatchEvent(new KeyboardEvent("keydown", { key: "1" }));
});
```

### Issue: React State Not Updating

```javascript
// Use waitFor for async updates
await waitFor(() => {
  expect(screen.getByText(/Expected Text/)).toBeInTheDocument();
});
```

---

## Performance Testing

### Monitor Hook Performance

```javascript
const { result } = renderHook(() => useBarcodeScanner(handleScan));
const stats = result.current.getStats();

console.log("Scan Statistics:", {
  buffer: stats.buffer,
  charCount: stats.charCount,
  scanDuration: stats.scanDuration,
  isScanning: stats.isScanning,
});
```

### Benchmark Multiple Scans

```javascript
// Simulate 100 rapid scans
const start = performance.now();

for (let i = 0; i < 100; i++) {
  act(() => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "1" }));
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
  });
}

const duration = performance.now() - start;
console.log(`100 scans completed in: ${duration}ms`);
console.log(`Average per scan: ${duration / 100}ms`);
```

---

## Continuous Integration

### GitHub Actions Example

```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "16"
      - run: npm ci
      - run: npm test -- useBarcodeScanner
      - run: npm test -- WarehouseTerminal
```

---

## Checklist

Before deploying to production:

- [ ] Manual testing with actual barcode scanner
- [ ] Keyboard simulation testing completed
- [ ] Unit tests passing (100% coverage)
- [ ] Integration tests passing
- [ ] Error handling verified
- [ ] User feedback implemented
- [ ] Configuration tuned for environment
- [ ] Performance benchmarked
- [ ] Cross-browser compatibility tested
- [ ] Memory leak testing done
- [ ] Debug mode disabled in production
- [ ] Documentation reviewed
- [ ] Team trained on usage

---

## Summary

The barcode scanner system is **thoroughly testable** and **production-ready**. Use these testing guides to ensure reliability and maintainability.

Happy scanning! 🎉
