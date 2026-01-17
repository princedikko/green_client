import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterUnits.css";

export default function FilterDiscount() {
  return (
    <div className="units_advanced_search">
      {/* Header */}
      <h3 className="units_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="units_advanced_top">
        <div className="units_field">
          <label>Query Type</label>
          <div className="units_select">All ▾</div>
        </div>

        <div className="units_field">
          <label>Form Category</label>
          <div className="units_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="units_filter_group">
        <div className="units_group_title">Filter Group 1</div>

        <div className="units_rule_row">
          <div className="units_select">Department ▾</div>
          <div className="units_select">=</div>
          <div className="units_input">Housekeeping</div>
          <div className="units_select">And ▾</div>

          <div className="units_rule_actions">
            <button className="units_btn_blue">
              <AddIcon />
            </button>
            <button className="units_btn_gray">
              <RemoveIcon />
            </button>
            <button className="units_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="units_rule_row">
          <div className="units_select">Assignee ▾</div>
          <div className="units_select">=</div>
          <div className="units_input">Aan Hamdani</div>
          <div className="units_select">—</div>

          <div className="units_rule_actions">
            <button className="units_btn_blue">
              <AddIcon />
            </button>
            <button className="units_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="units_filter_group">
        <div className="units_group_title">Filter Group 2</div>

        <div className="units_rule_row">
          <div className="units_select">And ▾</div>
          <div className="units_select">Select Field ▾</div>
          <div className="units_select">Select Operator ▾</div>
          <div className="units_select">Select Value ▾</div>
          <div className="units_select">—</div>

          <div className="units_rule_actions">
            <button className="units_btn_blue">
              <AddIcon />
            </button>
            <button className="units_btn_gray">
              <RemoveIcon />
            </button>
            <button className="units_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="units_advanced_footer">
        <button className="units_add_group">+ Add Filter Group</button>

        <div className="units_footer_actions">
          <button className="units_export_btn">Export</button>
          <button className="units_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
