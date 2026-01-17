import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterTransfers.css";

export default function FilterDiscount() {
  return (
    <div className="transfers_advanced_search">
      {/* Header */}
      <h3 className="transfers_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="transfers_advanced_top">
        <div className="transfers_field">
          <label>Query Type</label>
          <div className="transfers_select">All ▾</div>
        </div>

        <div className="transfers_field">
          <label>Form Category</label>
          <div className="transfers_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="transfers_filter_group">
        <div className="transfers_group_title">Filter Group 1</div>

        <div className="transfers_rule_row">
          <div className="transfers_select">Department ▾</div>
          <div className="transfers_select">=</div>
          <div className="transfers_input">Housekeeping</div>
          <div className="transfers_select">And ▾</div>

          <div className="transfers_rule_actions">
            <button className="transfers_btn_blue">
              <AddIcon />
            </button>
            <button className="transfers_btn_gray">
              <RemoveIcon />
            </button>
            <button className="transfers_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="transfers_rule_row">
          <div className="transfers_select">Assignee ▾</div>
          <div className="transfers_select">=</div>
          <div className="transfers_input">Aan Hamdani</div>
          <div className="transfers_select">—</div>

          <div className="transfers_rule_actions">
            <button className="transfers_btn_blue">
              <AddIcon />
            </button>
            <button className="transfers_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="transfers_filter_group">
        <div className="transfers_group_title">Filter Group 2</div>

        <div className="transfers_rule_row">
          <div className="transfers_select">And ▾</div>
          <div className="transfers_select">Select Field ▾</div>
          <div className="transfers_select">Select Operator ▾</div>
          <div className="transfers_select">Select Value ▾</div>
          <div className="transfers_select">—</div>

          <div className="transfers_rule_actions">
            <button className="transfers_btn_blue">
              <AddIcon />
            </button>
            <button className="transfers_btn_gray">
              <RemoveIcon />
            </button>
            <button className="transfers_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="transfers_advanced_footer">
        <button className="transfers_add_group">+ Add Filter Group</button>

        <div className="transfers_footer_actions">
          <button className="transfers_export_btn">Export</button>
          <button className="transfers_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
