import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterDiscount.css";

export default function FilterDrafts() {
  return (
    <div className="drats_advanced_search">
      {/* Header */}
      <h3 className="drats_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="drats_advanced_top">
        <div className="drats_field">
          <label>Query Type</label>
          <div className="drats_select">All ▾</div>
        </div>

        <div className="drats_field">
          <label>Form Category</label>
          <div className="drats_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="drats_filter_group">
        <div className="drats_group_title">Filter Group 1</div>

        <div className="drats_rule_row">
          <div className="drats_select">Department ▾</div>
          <div className="drats_select">=</div>
          <div className="drats_input">Housekeeping</div>
          <div className="drats_select">And ▾</div>

          <div className="drats_rule_actions">
            <button className="drats_btn_blue">
              <AddIcon />
            </button>
            <button className="drats_btn_gray">
              <RemoveIcon />
            </button>
            <button className="drats_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="drats_rule_row">
          <div className="drats_select">Assignee ▾</div>
          <div className="drats_select">=</div>
          <div className="drats_input">Aan Hamdani</div>
          <div className="drats_select">—</div>

          <div className="drats_rule_actions">
            <button className="drats_btn_blue">
              <AddIcon />
            </button>
            <button className="drats_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="drats_filter_group">
        <div className="drats_group_title">Filter Group 2</div>

        <div className="drats_rule_row">
          <div className="drats_select">And ▾</div>
          <div className="drats_select">Select Field ▾</div>
          <div className="drats_select">Select Operator ▾</div>
          <div className="drats_select">Select Value ▾</div>
          <div className="drats_select">—</div>

          <div className="drats_rule_actions">
            <button className="drats_btn_blue">
              <AddIcon />
            </button>
            <button className="drats_btn_gray">
              <RemoveIcon />
            </button>
            <button className="drats_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="drats_advanced_footer">
        <button className="drats_add_group">+ Add Filter Group</button>

        <div className="drats_footer_actions">
          <button className="drats_export_btn">Export</button>
          <button className="drats_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
