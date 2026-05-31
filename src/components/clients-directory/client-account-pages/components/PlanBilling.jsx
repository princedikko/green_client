// PlanBilling.jsx
export default function PlanBilling({ data }) {
  const business = data?.businessProfile;

  return (
    <div className="accountCompClient fx-cl space2">
      <h2 className="fs5 fw600 lh1">Plan & Billing</h2>
      <p className="fs2">
        Manage subscriptions, invoices, and billing methods.
      </p>

      <div className="g g3 space2">
        <div className="fx-cl lh2">
          <span className="fs1">Plan</span>
          <span className="fw500 fs3">
            {business?.subscription?.plan || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Subscription Status</span>
          <span className="fw500 fs3">
            {business?.subscription?.status || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Billing Cycle</span>
          <span className="fw500 fs3">
            {business?.subscription?.billingCycle || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Start Date</span>
          <span className="fw500 fs3">
            {business?.subscription?.startDate || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Expiry Date</span>
          <span className="fw500 fs3">
            {business?.subscription?.expiryDate || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Auto Renew</span>
          <span className="fw500 fs3">
            {business?.subscription?.autoRenew ? "Yes" : "No"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Payment Method</span>
          <span className="fw500 fs3">
            {business?.subscription?.paymentMethod || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Last Payment Date</span>
          <span className="fw500 fs3">
            {business?.subscription?.lastPaymentDate || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Currency</span>
          <span className="fw500 fs3">
            {business?.financialProfile?.baseCurrency || "Not provided"}
          </span>
        </div>

        <div className="fx-cl lh2">
          <span className="fs1">Tax Rate</span>
          <span className="fw500 fs3">
            {business?.financialProfile?.taxRateDefault || "Not provided"}
          </span>
        </div>
      </div>
    </div>
  );
}
