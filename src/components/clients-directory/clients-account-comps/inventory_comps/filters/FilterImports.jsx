import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterDiscount.css";

export default function FilterDiscount() {
  return (
    <div className="imports_advanced_search">
      {/* Header */}
      <h3 className="imports_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="imports_advanced_top">
        <div className="imports_field">
          <label>Query Type</label>
          <div className="imports_select">All ▾</div>
        </div>

        <div className="imports_field">
          <label>Form Category</label>
          <div className="imports_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="imports_filter_group">
        <div className="imports_group_title">Filter Group 1</div>

        <div className="imports_rule_row">
          <div className="imports_select">Department ▾</div>
          <div className="imports_select">=</div>
          <div className="imports_input">Housekeeping</div>
          <div className="imports_select">And ▾</div>

          <div className="imports_rule_actions">
            <button className="imports_btn_blue">
              <AddIcon />
            </button>
            <button className="imports_btn_gray">
              <RemoveIcon />
            </button>
            <button className="imports_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="imports_rule_row">
          <div className="imports_select">Assignee ▾</div>
          <div className="imports_select">=</div>
          <div className="imports_input">Aan Hamdani</div>
          <div className="imports_select">—</div>

          <div className="imports_rule_actions">
            <button className="imports_btn_blue">
              <AddIcon />
            </button>
            <button className="imports_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="imports_filter_group">
        <div className="imports_group_title">Filter Group 2</div>

        <div className="imports_rule_row">
          <div className="imports_select">And ▾</div>
          <div className="imports_select">Select Field ▾</div>
          <div className="imports_select">Select Operator ▾</div>
          <div className="imports_select">Select Value ▾</div>
          <div className="imports_select">—</div>

          <div className="imports_rule_actions">
            <button className="imports_btn_blue">
              <AddIcon />
            </button>
            <button className="imports_btn_gray">
              <RemoveIcon />
            </button>
            <button className="imports_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="imports_advanced_footer">
        <button className="imports_add_group">+ Add Filter Group</button>

        <div className="imports_footer_actions">
          <button className="imports_export_btn">Export</button>
          <button className="imports_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
