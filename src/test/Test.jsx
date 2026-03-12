import React, { useState } from "react";
import BarcodeScanner from "./Test2";
import SvgInteractiveMap from "../components/public_directory/SvgInteractiveMap";

function Test() {
  const [barcode, setBarcode] = useState("");

  return (
    <div>
      <SvgInteractiveMap />
    </div>
  );
}

export default Test;
