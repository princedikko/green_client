import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterProduction.css";

export default function FilterDiscount() {
  return (
    <div className="production_advanced_search">
      {/* Header */}
      <h3 className="production_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="production_advanced_top">
        <div className="production_field">
          <label>Query Type</label>
          <div className="production_select">All ▾</div>
        </div>

        <div className="production_field">
          <label>Form Category</label>
          <div className="production_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="production_filter_group">
        <div className="production_group_title">Filter Group 1</div>

        <div className="production_rule_row">
          <div className="production_select">Department ▾</div>
          <div className="production_select">=</div>
          <div className="production_input">Housekeeping</div>
          <div className="production_select">And ▾</div>

          <div className="production_rule_actions">
            <button className="production_btn_blue">
              <AddIcon />
            </button>
            <button className="production_btn_gray">
              <RemoveIcon />
            </button>
            <button className="production_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="production_rule_row">
          <div className="production_select">Assignee ▾</div>
          <div className="production_select">=</div>
          <div className="production_input">Aan Hamdani</div>
          <div className="production_select">—</div>

          <div className="production_rule_actions">
            <button className="production_btn_blue">
              <AddIcon />
            </button>
            <button className="production_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="production_filter_group">
        <div className="production_group_title">Filter Group 2</div>

        <div className="production_rule_row">
          <div className="production_select">And ▾</div>
          <div className="production_select">Select Field ▾</div>
          <div className="production_select">Select Operator ▾</div>
          <div className="production_select">Select Value ▾</div>
          <div className="production_select">—</div>

          <div className="production_rule_actions">
            <button className="production_btn_blue">
              <AddIcon />
            </button>
            <button className="production_btn_gray">
              <RemoveIcon />
            </button>
            <button className="production_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="production_advanced_footer">
        <button className="production_add_group">+ Add Filter Group</button>

        <div className="production_footer_actions">
          <button className="production_export_btn">Export</button>
          <button className="production_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
