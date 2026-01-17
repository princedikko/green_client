import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterReturn.css";

export default function FilterDiscount() {
  return (
    <div className="returns_advanced_search">
      {/* Header */}
      <h3 className="returns_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="returns_advanced_top">
        <div className="returns_field">
          <label>Query Type</label>
          <div className="returns_select">All ▾</div>
        </div>

        <div className="returns_field">
          <label>Form Category</label>
          <div className="returns_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="returns_filter_group">
        <div className="returns_group_title">Filter Group 1</div>

        <div className="returns_rule_row">
          <div className="returns_select">Department ▾</div>
          <div className="returns_select">=</div>
          <div className="returns_input">Housekeeping</div>
          <div className="returns_select">And ▾</div>

          <div className="returns_rule_actions">
            <button className="returns_btn_blue">
              <AddIcon />
            </button>
            <button className="returns_btn_gray">
              <RemoveIcon />
            </button>
            <button className="returns_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="returns_rule_row">
          <div className="returns_select">Assignee ▾</div>
          <div className="returns_select">=</div>
          <div className="returns_input">Aan Hamdani</div>
          <div className="returns_select">—</div>

          <div className="returns_rule_actions">
            <button className="returns_btn_blue">
              <AddIcon />
            </button>
            <button className="returns_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="returns_filter_group">
        <div className="returns_group_title">Filter Group 2</div>

        <div className="returns_rule_row">
          <div className="returns_select">And ▾</div>
          <div className="returns_select">Select Field ▾</div>
          <div className="returns_select">Select Operator ▾</div>
          <div className="returns_select">Select Value ▾</div>
          <div className="returns_select">—</div>

          <div className="returns_rule_actions">
            <button className="returns_btn_blue">
              <AddIcon />
            </button>
            <button className="returns_btn_gray">
              <RemoveIcon />
            </button>
            <button className="returns_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="returns_advanced_footer">
        <button className="returns_add_group">+ Add Filter Group</button>

        <div className="returns_footer_actions">
          <button className="returns_export_btn">Export</button>
          <button className="returns_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
