import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterDiscount.css";

export default function FilterDiscount() {
  return (
    <div className="discount2026_advanced_search">
      {/* Header */}
      <h3 className="discount2026_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="discount2026_advanced_top">
        <div className="discount2026_field">
          <label>Query Type</label>
          <div className="discount2026_select">All ▾</div>
        </div>

        <div className="discount2026_field">
          <label>Form Category</label>
          <div className="discount2026_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="discount2026_filter_group">
        <div className="discount2026_group_title">Filter Group 1</div>

        <div className="discount2026_rule_row">
          <div className="discount2026_select">Department ▾</div>
          <div className="discount2026_select">=</div>
          <div className="discount2026_input">Housekeeping</div>
          <div className="discount2026_select">And ▾</div>

          <div className="discount2026_rule_actions">
            <button className="discount2026_btn_blue">
              <AddIcon />
            </button>
            <button className="discount2026_btn_gray">
              <RemoveIcon />
            </button>
            <button className="discount2026_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="discount2026_rule_row">
          <div className="discount2026_select">Assignee ▾</div>
          <div className="discount2026_select">=</div>
          <div className="discount2026_input">Aan Hamdani</div>
          <div className="discount2026_select">—</div>

          <div className="discount2026_rule_actions">
            <button className="discount2026_btn_blue">
              <AddIcon />
            </button>
            <button className="discount2026_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="discount2026_filter_group">
        <div className="discount2026_group_title">Filter Group 2</div>

        <div className="discount2026_rule_row">
          <div className="discount2026_select">And ▾</div>
          <div className="discount2026_select">Select Field ▾</div>
          <div className="discount2026_select">Select Operator ▾</div>
          <div className="discount2026_select">Select Value ▾</div>
          <div className="discount2026_select">—</div>

          <div className="discount2026_rule_actions">
            <button className="discount2026_btn_blue">
              <AddIcon />
            </button>
            <button className="discount2026_btn_gray">
              <RemoveIcon />
            </button>
            <button className="discount2026_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="discount2026_advanced_footer">
        <button className="discount2026_add_group">+ Add Filter Group</button>

        <div className="discount2026_footer_actions">
          <button className="discount2026_export_btn">Export</button>
          <button className="discount2026_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
