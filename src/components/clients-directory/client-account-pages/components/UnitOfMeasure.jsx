export default function UnitsOfMeasure({ data }) {
  const business = data?.businessProfile;
  const inventory = business?.inventorySettings;
  const financial = business?.financialSettings;

  return (
    <div className="accountCompClient fx-cl space2">
      <h2 className="fs5 fw600 lh1">Units of Measure</h2>
      <p className="fs2">Configure measurement units used in the system.</p>

      <div className="g g3 space2">
        <div className="fx-cl lh2">
          <span className="fs1">Base Currency</span>
          <span className="fw500 fs3">
            {financial?.baseCurrency || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Allowed Currencies</span>
          <span className="fw500 fs3">
            {financial?.allowedCurrencies?.join(", ") || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Stock Valuation Method</span>
          <span className="fw500 fs3">
            {inventory?.stockValuationMethod || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Default Reorder Method</span>
          <span className="fw500 fs3">
            {inventory?.defaultReorderMethod || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Batch Tracking</span>
          <span className="fw500 fs3">
            {inventory?.batchTrackingEnabled ? "Enabled" : "Disabled"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Expiry Tracking</span>
          <span className="fw500 fs3">
            {inventory?.expiryTrackingEnabled ? "Enabled" : "Disabled"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Serial Number Tracking</span>
          <span className="fw500 fs3">
            {inventory?.serialNumberTracking ? "Enabled" : "Disabled"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Negative Stock Allowed</span>
          <span className="fw500 fs3">
            {inventory?.negativeStockAllowed ? "Yes" : "No"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Auto Reorder</span>
          <span className="fw500 fs3">
            {inventory?.autoReorderEnabled ? "Enabled" : "Disabled"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Multi Warehouse</span>
          <span className="fw500 fs3">
            {inventory?.multiWarehouseEnabled ? "Enabled" : "Disabled"}
          </span>
        </div>
      </div>
    </div>
  );
}
