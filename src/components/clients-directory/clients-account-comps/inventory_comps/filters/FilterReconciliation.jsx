import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterReconciliation.css";

export default function FilterDiscount() {
  return (
    <div className="reconciliation_advanced_search">
      {/* Header */}
      <h3 className="reconciliation_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="reconciliation_advanced_top">
        <div className="reconciliation_field">
          <label>Query Type</label>
          <div className="reconciliation_select">All ▾</div>
        </div>

        <div className="reconciliation_field">
          <label>Form Category</label>
          <div className="reconciliation_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="reconciliation_filter_group">
        <div className="reconciliation_group_title">Filter Group 1</div>

        <div className="reconciliation_rule_row">
          <div className="reconciliation_select">Department ▾</div>
          <div className="reconciliation_select">=</div>
          <div className="reconciliation_input">Housekeeping</div>
          <div className="reconciliation_select">And ▾</div>

          <div className="reconciliation_rule_actions">
            <button className="reconciliation_btn_blue">
              <AddIcon />
            </button>
            <button className="reconciliation_btn_gray">
              <RemoveIcon />
            </button>
            <button className="reconciliation_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="reconciliation_rule_row">
          <div className="reconciliation_select">Assignee ▾</div>
          <div className="reconciliation_select">=</div>
          <div className="reconciliation_input">Aan Hamdani</div>
          <div className="reconciliation_select">—</div>

          <div className="reconciliation_rule_actions">
            <button className="reconciliation_btn_blue">
              <AddIcon />
            </button>
            <button className="reconciliation_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="reconciliation_filter_group">
        <div className="reconciliation_group_title">Filter Group 2</div>

        <div className="reconciliation_rule_row">
          <div className="reconciliation_select">And ▾</div>
          <div className="reconciliation_select">Select Field ▾</div>
          <div className="reconciliation_select">Select Operator ▾</div>
          <div className="reconciliation_select">Select Value ▾</div>
          <div className="reconciliation_select">—</div>

          <div className="reconciliation_rule_actions">
            <button className="reconciliation_btn_blue">
              <AddIcon />
            </button>
            <button className="reconciliation_btn_gray">
              <RemoveIcon />
            </button>
            <button className="reconciliation_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="reconciliation_advanced_footer">
        <button className="reconciliation_add_group">+ Add Filter Group</button>

        <div className="reconciliation_footer_actions">
          <button className="reconciliation_export_btn">Export</button>
          <button className="reconciliation_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
