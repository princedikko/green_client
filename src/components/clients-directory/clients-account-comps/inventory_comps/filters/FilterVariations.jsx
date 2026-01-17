import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterVariations.css";

export default function FilterDiscount() {
  return (
    <div className="variations_advanced_search">
      {/* Header */}
      <h3 className="variations_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="variations_advanced_top">
        <div className="variations_field">
          <label>Query Type</label>
          <div className="variations_select">All ▾</div>
        </div>

        <div className="variations_field">
          <label>Form Category</label>
          <div className="variations_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="variations_filter_group">
        <div className="variations_group_title">Filter Group 1</div>

        <div className="variations_rule_row">
          <div className="variations_select">Department ▾</div>
          <div className="variations_select">=</div>
          <div className="variations_input">Housekeeping</div>
          <div className="variations_select">And ▾</div>

          <div className="variations_rule_actions">
            <button className="variations_btn_blue">
              <AddIcon />
            </button>
            <button className="variations_btn_gray">
              <RemoveIcon />
            </button>
            <button className="variations_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="variations_rule_row">
          <div className="variations_select">Assignee ▾</div>
          <div className="variations_select">=</div>
          <div className="variations_input">Aan Hamdani</div>
          <div className="variations_select">—</div>

          <div className="variations_rule_actions">
            <button className="variations_btn_blue">
              <AddIcon />
            </button>
            <button className="variations_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="variations_filter_group">
        <div className="variations_group_title">Filter Group 2</div>

        <div className="variations_rule_row">
          <div className="variations_select">And ▾</div>
          <div className="variations_select">Select Field ▾</div>
          <div className="variations_select">Select Operator ▾</div>
          <div className="variations_select">Select Value ▾</div>
          <div className="variations_select">—</div>

          <div className="variations_rule_actions">
            <button className="variations_btn_blue">
              <AddIcon />
            </button>
            <button className="variations_btn_gray">
              <RemoveIcon />
            </button>
            <button className="variations_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="variations_advanced_footer">
        <button className="variations_add_group">+ Add Filter Group</button>

        <div className="variations_footer_actions">
          <button className="variations_export_btn">Export</button>
          <button className="variations_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
