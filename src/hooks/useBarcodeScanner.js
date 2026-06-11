import { useEffect, useRef, useCallback } from "react";

/**
 * Custom React hook for global barcode scanning
 *
 * Works by listening to keyboard events globally (document level).
 * Buffers keystrokes and detects when a barcode scan is complete by:
 * - Enter key press, OR
 * - Timeout after 50-100ms of no input
 *
 * Automatically distinguishes between barcode scans (fast, <500ms) and human typing.
 *
 * @param {Function} onScan - Callback function that receives the scanned barcode
 * @param {Object} options - Configuration options
 * @param {number} options.timeoutMs - Timeout in milliseconds to wait for next character (default: 100)
 * @param {number} options.minLength - Minimum barcode length to process (default: 3)
 * @param {boolean} options.preventDuplicates - Prevent processing identical consecutive scans (default: true)
 * @param {boolean} options.debug - Enable console logging for debugging (default: false)
 *
 * @returns {Object} Hook interface with buffer state and utility methods
 * @returns {string} buffer - Current buffer content (read-only)
 * @returns {Function} clearBuffer - Manual buffer clear function
 * @returns {Function} resetState - Reset all internal state
 *
 * @example
 * const handleScan = (barcode) => {
 *   console.log('Scanned:', barcode);
 *   addProductToCart(barcode);
 * };
 *
 * const { buffer, clearBuffer } = useBarcodeScanner(handleScan, {
 *   timeoutMs: 100,
 *   minLength: 5,
 *   preventDuplicates: true,
 *   debug: true
 * });
 */
const useBarcodeScanner = (onScan, options = {}) => {
  // State references
  const bufferRef = useRef("");
  const timeoutRef = useRef(null);
  const lastScanRef = useRef("");
  const scanStartTimeRef = useRef(null);
  const lastCharTimeRef = useRef(null);
  const charCountRef = useRef(0);

  // Configuration
  const {
    minLength = 3,
    timeoutMs = 100,
    preventDuplicates = true,
    debug = false,
  } = options;

  // Log helper
  const log = useCallback(
    (...args) => {
      if (debug) {
        console.log("[BarcodeScanner]", ...args);
      }
    },
    [debug],
  );

  /**
   * Process and validate scanned barcode
   */
  const processScan = useCallback(
    (barcode) => {
      // Trim whitespace
      const trimmedBarcode = barcode.trim();

      // Validation: minimum length
      if (!trimmedBarcode || trimmedBarcode.length < minLength) {
        log(
          `Barcode too short (${trimmedBarcode.length}/${minLength}):`,
          trimmedBarcode,
        );
        return;
      }

      // Validation: duplicate prevention
      if (preventDuplicates && trimmedBarcode === lastScanRef.current) {
        log("Duplicate scan detected, ignoring:", trimmedBarcode);
        bufferRef.current = "";
        return;
      }

      // Calculate scan duration to verify it's likely a barcode (not human typing)
      const scanDuration = scanStartTimeRef.current
        ? Date.now() - scanStartTimeRef.current
        : 0;

      log(
        `Processing barcode: "${trimmedBarcode}" | Duration: ${scanDuration}ms | Chars: ${charCountRef.current}`,
      );

      // Call the callback
      if (typeof onScan === "function") {
        try {
          onScan(trimmedBarcode);
        } catch (error) {
          console.error("[BarcodeScanner] Error in onScan callback:", error);
        }
      }

      // Update state
      lastScanRef.current = trimmedBarcode;
      bufferRef.current = "";
      charCountRef.current = 0;
      scanStartTimeRef.current = null;
    },
    [onScan, minLength, preventDuplicates, log],
  );

  /**
   * Clear the timeout
   */
  const clearTimout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  /**
   * Handle keyboard events globally
   */
  const handleKeyDown = useCallback(
    (event) => {
      // Ignore if modifier keys are pressed (Ctrl, Alt, Meta, Shift alone)
      // Note: Shift+key combinations are allowed for characters like @, #, etc.
      if (event.ctrlKey || event.altKey || event.metaKey) {
        return;
      }

      // Handle Enter key - complete scan immediately
      if (event.key === "Enter") {
        event.preventDefault();
        clearTimout();
        processScan(bufferRef.current);
        return;
      }

      // Ignore Tab, Escape, and special control keys
      if (event.key.length > 1) {
        return;
      }

      // Allow alphanumeric characters, hyphens, and special characters
      // that are commonly found in barcodes (*, -, /, etc.)
      if (!/[\w\-*/#\-.,;:@!&$%+=<>?^~`|()\\[\]{}]/.test(event.key)) {
        return;
      }

      // Track timing for barcode vs. human typing detection
      const currentTime = Date.now();
      const timeSinceLastChar = lastCharTimeRef.current
        ? currentTime - lastCharTimeRef.current
        : 0;

      // Reset scan window if too much time has passed (human typing detected)
      if (lastCharTimeRef.current && timeSinceLastChar > 500) {
        log("Human typing detected, resetting buffer");
        bufferRef.current = "";
        charCountRef.current = 0;
        scanStartTimeRef.current = null;
      }

      // Initialize scan timer on first character
      if (!scanStartTimeRef.current) {
        scanStartTimeRef.current = currentTime;
        log("Scan started...");
      }

      // Add character to buffer
      bufferRef.current += event.key;
      charCountRef.current += 1;
      lastCharTimeRef.current = currentTime;

      log(
        `Buffer: "${bufferRef.current}" | Chars: ${charCountRef.current} | Last interval: ${timeSinceLastChar}ms`,
      );

      // Clear existing timeout
      clearTimout();

      // Set timeout to complete scan if no more characters arrive
      timeoutRef.current = setTimeout(() => {
        const finalDuration =
          Date.now() - (scanStartTimeRef.current || Date.now());

        log(
          `Timeout triggered after ${timeoutMs}ms. Total duration: ${finalDuration}ms`,
        );

        // Only process if it looks like a barcode (fast scan), not slow human typing
        if (finalDuration < 500) {
          processScan(bufferRef.current);
        } else {
          log("Scan duration too long, likely human typing, ignoring");
          bufferRef.current = "";
          charCountRef.current = 0;
          scanStartTimeRef.current = null;
        }

        lastCharTimeRef.current = null;
      }, timeoutMs);
    },
    [processScan, clearTimout, timeoutMs, log],
  );

  // Setup and cleanup
  useEffect(() => {
    // Use capture phase to intercept events before they reach form elements
    document.addEventListener("keydown", handleKeyDown, true);

    log("Barcode scanner hook mounted");

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
      clearTimout();
      log("Barcode scanner hook unmounted");
    };
  }, [handleKeyDown, clearTimout, log]);

  // Public API
  return {
    // Current buffer content (read-only)
    get buffer() {
      return bufferRef.current;
    },

    // Manual buffer clear
    clearBuffer: () => {
      bufferRef.current = "";
      charCountRef.current = 0;
      clearTimout();
      scanStartTimeRef.current = null;
      lastCharTimeRef.current = null;
      log("Buffer cleared manually");
    },

    // Reset all internal state
    resetState: () => {
      bufferRef.current = "";
      charCountRef.current = 0;
      lastScanRef.current = "";
      scanStartTimeRef.current = null;
      lastCharTimeRef.current = null;
      clearTimout();
      log("All state reset");
    },

    // Get scan statistics (for debugging)
    getStats: () => ({
      buffer: bufferRef.current,
      charCount: charCountRef.current,
      lastScan: lastScanRef.current,
      isScanning: !!scanStartTimeRef.current,
      scanDuration: scanStartTimeRef.current
        ? Date.now() - scanStartTimeRef.current
        : 0,
    }),
  };
};

export default useBarcodeScanner;
