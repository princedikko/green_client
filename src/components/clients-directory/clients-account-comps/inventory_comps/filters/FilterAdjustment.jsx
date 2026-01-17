import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterAdjustment.css";

export default function FilterAdjustment() {
  return (
    <div className="adjustment_advanced_search">
      {/* Header */}
      <h3 className="adjustment_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="adjustment_advanced_top">
        <div className="adjustment_field">
          <label>Query Type</label>
          <div className="adjustment_select">All ▾</div>
        </div>

        <div className="adjustment_field">
          <label>Form Category</label>
          <div className="adjustment_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="adjustment_filter_group">
        <div className="adjustment_group_title">Filter Group 1</div>

        <div className="adjustment_rule_row">
          <div className="adjustment_select">Department ▾</div>
          <div className="adjustment_select">=</div>
          <div className="adjustment_input">Housekeeping</div>
          <div className="adjustment_select">And ▾</div>

          <div className="adjustment_rule_actions">
            <button className="adjustment_btn_blue">
              <AddIcon />
            </button>
            <button className="adjustment_btn_gray">
              <RemoveIcon />
            </button>
            <button className="adjustment_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="adjustment_rule_row">
          <div className="adjustment_select">Assignee ▾</div>
          <div className="adjustment_select">=</div>
          <div className="adjustment_input">Aan Hamdani</div>
          <div className="adjustment_select">—</div>

          <div className="adjustment_rule_actions">
            <button className="adjustment_btn_blue">
              <AddIcon />
            </button>
            <button className="adjustment_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="adjustment_filter_group">
        <div className="adjustment_group_title">Filter Group 2</div>

        <div className="adjustment_rule_row">
          <div className="adjustment_select">And ▾</div>
          <div className="adjustment_select">Select Field ▾</div>
          <div className="adjustment_select">Select Operator ▾</div>
          <div className="adjustment_select">Select Value ▾</div>
          <div className="adjustment_select">—</div>

          <div className="adjustment_rule_actions">
            <button className="adjustment_btn_blue">
              <AddIcon />
            </button>
            <button className="adjustment_btn_gray">
              <RemoveIcon />
            </button>
            <button className="adjustment_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="adjustment_advanced_footer">
        <button className="adjustment_add_group">+ Add Filter Group</button>

        <div className="adjustment_footer_actions">
          <button className="adjustment_export_btn">Export</button>
          <button className="adjustment_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
