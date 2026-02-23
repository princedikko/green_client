import React, { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

const BarcodeScanner = ({ onScan }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    const scannerId = "barcode-reader";

    const html5QrCode = new Html5Qrcode(scannerId);
    scannerRef.current = html5QrCode;

    const config = {
      fps: 10,
      qrbox: { width: 300, height: 150 },

      // ✅ Scan BARCODE only (faster)
      formatsToSupport: [
        Html5Qrcode.FORMATS?.CODE_128,
        Html5Qrcode.FORMATS?.EAN_13,
        Html5Qrcode.FORMATS?.UPC_A,
        Html5Qrcode.FORMATS?.UPC_E,
      ],
    };

    html5QrCode
      .start(
        {
          facingMode: "environment",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        }, // back camera
        config,
        (decodedText) => {
          console.log("Scanned:", decodedText);
          onScan(decodedText);
        },
        (error) => {
          // ignore scan errors
        },
      )
      .catch((err) => console.log(err));

    // cleanup
    return () => {
      html5QrCode
        .stop()
        .then(() => html5QrCode.clear())
        .catch(() => {});
    };
  }, [onScan]);

  return <div id="barcode-reader" style={{ width: "100%" }} />;
};

export default BarcodeScanner;
