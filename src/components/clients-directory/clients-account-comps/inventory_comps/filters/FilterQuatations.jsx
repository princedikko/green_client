import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterQuatations.css";

export default function FilterQuatations() {
  return (
    <div className="quatations_advanced_search">
      {/* Header */}
      <h3 className="quatations_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="quatations_advanced_top">
        <div className="quatations_field">
          <label>Query Type</label>
          <div className="quatations_select">All ▾</div>
        </div>

        <div className="quatations_field">
          <label>Form Category</label>
          <div className="quatations_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="quatations_filter_group">
        <div className="quatations_group_title">Filter Group 1</div>

        <div className="quatations_rule_row">
          <div className="quatations_select">Department ▾</div>
          <div className="quatations_select">=</div>
          <div className="quatations_input">Housekeeping</div>
          <div className="quatations_select">And ▾</div>

          <div className="quatations_rule_actions">
            <button className="quatations_btn_blue">
              <AddIcon />
            </button>
            <button className="quatations_btn_gray">
              <RemoveIcon />
            </button>
            <button className="quatations_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="quatations_rule_row">
          <div className="quatations_select">Assignee ▾</div>
          <div className="quatations_select">=</div>
          <div className="quatations_input">Aan Hamdani</div>
          <div className="quatations_select">—</div>

          <div className="quatations_rule_actions">
            <button className="quatations_btn_blue">
              <AddIcon />
            </button>
            <button className="quatations_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="quatations_filter_group">
        <div className="quatations_group_title">Filter Group 2</div>

        <div className="quatations_rule_row">
          <div className="quatations_select">And ▾</div>
          <div className="quatations_select">Select Field ▾</div>
          <div className="quatations_select">Select Operator ▾</div>
          <div className="quatations_select">Select Value ▾</div>
          <div className="quatations_select">—</div>

          <div className="quatations_rule_actions">
            <button className="quatations_btn_blue">
              <AddIcon />
            </button>
            <button className="quatations_btn_gray">
              <RemoveIcon />
            </button>
            <button className="quatations_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="quatations_advanced_footer">
        <button className="quatations_add_group">+ Add Filter Group</button>

        <div className="quatations_footer_actions">
          <button className="quatations_export_btn">Export</button>
          <button className="quatations_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
