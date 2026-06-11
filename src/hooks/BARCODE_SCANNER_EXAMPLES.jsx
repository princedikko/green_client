/**
 * Barcode Scanner Hook - Complete Examples
 *
 * This file contains production-ready examples for various use cases
 */

// ============================================================================
// EXAMPLE 1: POS SYSTEM (WarehouseTerminal Integration)
// ============================================================================

import useBarcodeScanner from "../../hooks/useBarcodeScanner";
import { useCallback } from "react";

function POSSystemExample() {
  const handleBarcodeScanned = useCallback(
    (barcode) => {
      // Find product by barcode
      const product = products.find(
        (p) => p.barcode === barcode || p.sku === barcode,
      );

      if (!product) {
        enqueueSnackbar(`Product not found: ${barcode}`, {
          variant: "error",
          autoHideDuration: 3000,
        });
        return;
      }

      // Create cart item
      const cartItem = {
        saleId: `SALE-${Math.floor(Math.random() * 1000000)}`,
        sku: product.sku,
        name: product.name,
        barcode: product.barcode,
        soldQuantity: 1,
        pricing: {
          costPrice: product.pricing.costPrice,
          sellingPrice: product.pricing.sellingPrice,
          discount: 0,
          taxRate: product.pricing.taxRate,
        },
      };

      // Add to cart
      dispatch(Action.addtoCart(cartItem));

      // Show success
      enqueueSnackbar(`✓ Added: ${product.name}`, {
        variant: "success",
        autoHideDuration: 2000,
      });
    },
    [products, dispatch, enqueueSnackbar],
  );

  // Initialize hook
  useBarcodeScanner(handleBarcodeScanned, {
    timeoutMs: 100,
    minLength: 3,
    preventDuplicates: true,
    debug: false,
  });

  return <WarehouseTerminal />;
}

// ============================================================================
// EXAMPLE 2: INVENTORY MANAGEMENT SYSTEM
// ============================================================================

import { useState, useCallback } from "react";

function InventoryReceivingSystem() {
  const [receivedItems, setReceivedItems] = useState([]);
  const [scannedItemsCount, setScannedItemsCount] = useState(0);

  const handleItemScanned = useCallback(
    (barcode) => {
      // Look up product in database
      const product = fetchProductByBarcode(barcode);

      if (!product) {
        console.warn(`Unknown item: ${barcode}`);
        playErrorSound();
        return;
      }

      // Check if already received
      const isAlreadyReceived = receivedItems.some(
        (item) => item.barcode === barcode,
      );

      if (isAlreadyReceived) {
        console.log(`Item already received: ${barcode}`);
        // This is handled by preventDuplicates option
        return;
      }

      // Mark as received
      const newItem = {
        id: product.id,
        name: product.name,
        barcode: product.barcode,
        sku: product.sku,
        quantity: 1,
        receivedAt: new Date().toISOString(),
      };

      setReceivedItems((prev) => [...prev, newItem]);
      setScannedItemsCount((prev) => prev + 1);

      // Log to server
      logReceiving({
        barcode,
        warehouse: "Main",
        timestamp: new Date().toISOString(),
      });

      // Feedback
      playSuccessSound();
      showNotification(`Received: ${product.name} (${product.sku})`);
    },
    [receivedItems],
  );

  useBarcodeScanner(handleItemScanned, {
    timeoutMs: 150,
    minLength: 8,
    preventDuplicates: true,
    debug: false,
  });

  return (
    <div className="receiving-dock">
      <h1>Inventory Receiving</h1>
      <div className="stats">
        <p>Items Scanned: {scannedItemsCount}</p>
      </div>
      <div className="items-list">
        {receivedItems.map((item, idx) => (
          <div key={idx} className="item-card">
            <h3>{item.name}</h3>
            <p>SKU: {item.sku}</p>
            <p>Barcode: {item.barcode}</p>
            <p>Received: {new Date(item.receivedAt).toLocaleTimeString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// EXAMPLE 3: STUDENT ID CARD CHECK-IN SYSTEM
// ============================================================================

function StudentCheckInKiosk() {
  const [checkedInStudents, setCheckedInStudents] = useState([]);
  const [checkInTime] = useState(new Date());

  const handleStudentIdScanned = useCallback(
    (studentId) => {
      // Validate student ID format
      if (!/^\d{6,}$/.test(studentId)) {
        console.warn(`Invalid student ID format: ${studentId}`);
        playErrorSound();
        showMessage("Invalid ID format", "error");
        return;
      }

      // Look up student
      const student = fetchStudentById(studentId);

      if (!student) {
        console.warn(`Student not found: ${studentId}`);
        playErrorSound();
        showMessage("Student not found", "error");
        return;
      }

      // Check if already checked in
      const isAlreadyCheckedIn = checkedInStudents.some(
        (s) => s.id === studentId,
      );

      if (isAlreadyCheckedIn) {
        console.log(`Student already checked in: ${student.name}`);
        showMessage("Already checked in", "warning");
        return;
      }

      // Check student in
      const attendance = {
        studentId: student.id,
        name: student.name,
        email: student.email,
        checkInTime: new Date().toISOString(),
        className: student.className,
      };

      setCheckedInStudents((prev) => [...prev, attendance]);

      // Log attendance
      logAttendance(attendance);

      // Success feedback
      playSuccessSound();
      showMessage(`Welcome, ${student.name}!`, "success");

      // Send notification
      sendCheckInNotification(student);
    },
    [checkedInStudents],
  );

  useBarcodeScanner(handleStudentIdScanned, {
    timeoutMs: 100,
    minLength: 6,
    preventDuplicates: true,
    debug: false,
  });

  return (
    <div className="checkin-kiosk">
      <div className="display">
        <h1>Class Check-In</h1>
        <p className="time">{checkInTime.toLocaleTimeString()}</p>
        <p className="instruction">Scan your student ID card</p>
      </div>

      <div className="count">
        <p>
          Students Checked In: <strong>{checkedInStudents.length}</strong>
        </p>
      </div>

      <div className="list">
        {checkedInStudents.map((student, idx) => (
          <div key={idx} className="student-item">
            <span>{student.name}</span>
            <span>{new Date(student.checkInTime).toLocaleTimeString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// EXAMPLE 4: WAREHOUSE PICKING/PACKING SYSTEM
// ============================================================================

function WarehousePickingCart() {
  const [pickList, setPickList] = useState([]);
  const [pickedItems, setPickedItems] = useState([]);

  const handleBarcodeScanned = useCallback(
    (barcode) => {
      // Find item in pick list
      const itemInList = pickList.find((item) => item.barcode === barcode);

      if (!itemInList) {
        console.warn(`Item not in pick list: ${barcode}`);
        playErrorSound();
        showMessage("Item not in this pick list", "error");
        return;
      }

      // Check if already picked
      const alreadyPicked = pickedItems.some(
        (item) => item.barcode === barcode,
      );

      if (alreadyPicked) {
        console.log(`Item already picked: ${barcode}`);
        showMessage("Already picked", "warning");
        return;
      }

      // Mark as picked
      const pickedItem = {
        ...itemInList,
        pickedAt: new Date().toISOString(),
        pickedBy: currentUser.id,
      };

      setPickedItems((prev) => [...prev, pickedItem]);

      // Update location map
      updateLocationMap(pickedItem);

      // Check if pick list complete
      const isComplete = pickList.length === pickedItems.length + 1;

      if (isComplete) {
        playSuccessSound();
        showMessage("Pick list complete!", "success");
        completePicking(pickList);
      } else {
        playSuccessSound();
        showMessage(`Picked: ${itemInList.name}`, "success");
      }
    },
    [pickList, pickedItems],
  );

  useBarcodeScanner(handleBarcodeScanned, {
    timeoutMs: 100,
    minLength: 5,
    preventDuplicates: false, // Allow rescanning if needed
    debug: false,
  });

  return (
    <div className="picking-cart">
      <h2>Pick List #{pickList[0]?.orderId}</h2>

      <div className="progress">
        <div className="bar">
          <div
            className="fill"
            style={{
              width: `${(pickedItems.length / pickList.length) * 100}%`,
            }}
          />
        </div>
        <p>
          {pickedItems.length} of {pickList.length} items picked
        </p>
      </div>

      <div className="items">
        {pickList.map((item, idx) => {
          const isPicked = pickedItems.some((p) => p.barcode === item.barcode);
          return (
            <div
              key={idx}
              className={`item ${isPicked ? "picked" : "pending"}`}
            >
              <input type="checkbox" checked={isPicked} readOnly />
              <div className="info">
                <h4>{item.name}</h4>
                <p>Location: {item.location}</p>
                <p>Qty: {item.quantity}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// EXAMPLE 5: ASSET TRACKING SYSTEM
// ============================================================================

function AssetTrackingSystem() {
  const [scannedAssets, setScannedAssets] = useState([]);
  const [locationFilter, setLocationFilter] = useState("all");

  const handleAssetScanned = useCallback(
    (assetCode) => {
      // Look up asset
      const asset = fetchAssetByCode(assetCode);

      if (!asset) {
        console.warn(`Asset not found: ${assetCode}`);
        return;
      }

      // Verify asset is in expected location
      const isInExpectedLocation =
        locationFilter === "all" || asset.location === locationFilter;

      if (!isInExpectedLocation) {
        showMessage(
          `Asset is in ${asset.location}, expected ${locationFilter}`,
          "warning",
        );
      }

      // Record scan
      const scanRecord = {
        assetId: asset.id,
        assetName: asset.name,
        assetCode: asset.code,
        location: asset.location,
        status: asset.status,
        condition: asset.condition,
        scannedAt: new Date().toISOString(),
        scannedBy: currentUser.id,
      };

      setScannedAssets((prev) => [...prev, scanRecord]);

      // Send to server
      logAssetScan(scanRecord);

      // Show feedback
      showMessage(`✓ ${asset.name} confirmed`, "success");
    },
    [locationFilter],
  );

  useBarcodeScanner(handleAssetScanned, {
    timeoutMs: 120,
    minLength: 5,
    preventDuplicates: true,
    debug: false,
  });

  return (
    <div className="asset-tracking">
      <h1>Asset Tracking Audit</h1>

      <div className="controls">
        <label>Location Filter:</label>
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="all">All Locations</option>
          <option value="warehouse">Warehouse</option>
          <option value="office">Office</option>
          <option value="field">Field</option>
        </select>
      </div>

      <div className="stats">
        <p>
          Assets Scanned: <strong>{scannedAssets.length}</strong>
        </p>
        <p>Scan Time: {new Date().toLocaleTimeString()}</p>
      </div>

      <div className="assets-list">
        {scannedAssets.map((scan, idx) => (
          <div key={idx} className="asset-record">
            <h4>{scan.assetName}</h4>
            <p>Code: {scan.assetCode}</p>
            <p>Location: {scan.location}</p>
            <p>Status: {scan.status}</p>
            <p className="time">
              {new Date(scan.scannedAt).toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// EXAMPLE 6: ADVANCED - WITH CUSTOM HOOKS AND STATE MANAGEMENT
// ============================================================================

import { useReducer, useCallback } from "react";

function AdvancedBarcodeScannerExample() {
  const initialState = {
    scans: [],
    lastScan: null,
    totalScans: 0,
    errors: [],
    isProcessing: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_SCAN":
        return {
          ...state,
          scans: [...state.scans, action.payload],
          lastScan: action.payload,
          totalScans: state.totalScans + 1,
        };
      case "ADD_ERROR":
        return {
          ...state,
          errors: [...state.errors, action.payload],
        };
      case "CLEAR_SCANS":
        return { ...state, scans: [], lastScan: null };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleScan = useCallback((barcode) => {
    // Validate
    if (!barcode || barcode.length < 3) {
      dispatch({
        type: "ADD_ERROR",
        payload: { message: "Invalid barcode", barcode },
      });
      return;
    }

    // Process
    try {
      const result = processBarcode(barcode);
      dispatch({
        type: "ADD_SCAN",
        payload: {
          barcode,
          result,
          timestamp: new Date().toISOString(),
        },
      });
    } catch (error) {
      dispatch({
        type: "ADD_ERROR",
        payload: { message: error.message, barcode },
      });
    }
  }, []);

  useBarcodeScanner(handleScan, {
    timeoutMs: 100,
    minLength: 3,
    preventDuplicates: true,
    debug: true,
  });

  return (
    <div className="advanced-scanner">
      <h1>Advanced Barcode Scanner</h1>
      <div className="stats">
        <p>Total Scans: {state.totalScans}</p>
        <p>Last Scan: {state.lastScan?.barcode}</p>
        <p>Errors: {state.errors.length}</p>
      </div>

      <button onClick={() => dispatch({ type: "CLEAR_SCANS" })}>
        Clear Scans
      </button>

      {state.errors.length > 0 && (
        <div className="errors">
          {state.errors.map((error, idx) => (
            <p key={idx} className="error">
              {error.message}
            </p>
          ))}
        </div>
      )}

      <div className="scans">
        {state.scans.map((scan, idx) => (
          <div key={idx} className="scan-item">
            <p>{scan.barcode}</p>
            <p>{scan.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Export examples for documentation
// ============================================================================

export {
  POSSystemExample,
  InventoryReceivingSystem,
  StudentCheckInKiosk,
  WarehousePickingCart,
  AssetTrackingSystem,
  AdvancedBarcodeScannerExample,
};
