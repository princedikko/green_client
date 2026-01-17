import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterDiscount.css";

export default function FilterDiscount() {
  return (
    <div className="expenses_advanced_search">
      {/* Header */}
      <h3 className="expenses_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="expenses_advanced_top">
        <div className="expenses_field">
          <label>Query Type</label>
          <div className="expenses_select">All ▾</div>
        </div>

        <div className="expenses_field">
          <label>Form Category</label>
          <div className="expenses_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="expenses_filter_group">
        <div className="expenses_group_title">Filter Group 1</div>

        <div className="expenses_rule_row">
          <div className="expenses_select">Department ▾</div>
          <div className="expenses_select">=</div>
          <div className="expenses_input">Housekeeping</div>
          <div className="expenses_select">And ▾</div>

          <div className="expenses_rule_actions">
            <button className="expenses_btn_blue">
              <AddIcon />
            </button>
            <button className="expenses_btn_gray">
              <RemoveIcon />
            </button>
            <button className="expenses_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="expenses_rule_row">
          <div className="expenses_select">Assignee ▾</div>
          <div className="expenses_select">=</div>
          <div className="expenses_input">Aan Hamdani</div>
          <div className="expenses_select">—</div>

          <div className="expenses_rule_actions">
            <button className="expenses_btn_blue">
              <AddIcon />
            </button>
            <button className="expenses_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="expenses_filter_group">
        <div className="expenses_group_title">Filter Group 2</div>

        <div className="expenses_rule_row">
          <div className="expenses_select">And ▾</div>
          <div className="expenses_select">Select Field ▾</div>
          <div className="expenses_select">Select Operator ▾</div>
          <div className="expenses_select">Select Value ▾</div>
          <div className="expenses_select">—</div>

          <div className="expenses_rule_actions">
            <button className="expenses_btn_blue">
              <AddIcon />
            </button>
            <button className="expenses_btn_gray">
              <RemoveIcon />
            </button>
            <button className="expenses_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="expenses_advanced_footer">
        <button className="expenses_add_group">+ Add Filter Group</button>

        <div className="expenses_footer_actions">
          <button className="expenses_export_btn">Export</button>
          <button className="expenses_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
