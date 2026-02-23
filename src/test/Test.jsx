import React, { useState } from "react";
import BarcodeScanner from "./Test2";

function Test() {
  const [barcode, setBarcode] = useState("");

  return (
    <div>
      <h2>Barcode Scanner</h2>

      <BarcodeScanner onScan={(code) => setBarcode(code)} />

      <h3>Result: {barcode}</h3>
    </div>
  );
}

export default Test;
