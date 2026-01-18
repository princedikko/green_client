import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./reportsFilters.css";

export default function ReportsFilters() {
  return (
    <div className="reportsmain_advanced_search">
      {/* Header */}
      <h3 className="reportsmain_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="reportsmain_advanced_top">
        <div className="reportsmain_field">
          <label>Query Type</label>
          <div className="reportsmain_select">All ▾</div>
        </div>

        <div className="reportsmain_field">
          <label>Form Category</label>
          <div className="reportsmain_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="reportsmain_filter_group">
        <div className="reportsmain_group_title">Filter Group 1</div>

        <div className="reportsmain_rule_row">
          <div className="reportsmain_select">Department ▾</div>
          <div className="reportsmain_select">=</div>
          <div className="reportsmain_input">Housekeeping</div>
          <div className="reportsmain_select">And ▾</div>

          <div className="reportsmain_rule_actions">
            <button className="reportsmain_btn_blue">
              <AddIcon />
            </button>
            <button className="reportsmain_btn_gray">
              <RemoveIcon />
            </button>
            <button className="reportsmain_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="reportsmain_rule_row">
          <div className="reportsmain_select">Assignee ▾</div>
          <div className="reportsmain_select">=</div>
          <div className="reportsmain_input">Aan Hamdani</div>
          <div className="reportsmain_select">—</div>

          <div className="reportsmain_rule_actions">
            <button className="reportsmain_btn_blue">
              <AddIcon />
            </button>
            <button className="reportsmain_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="reportsmain_filter_group">
        <div className="reportsmain_group_title">Filter Group 2</div>

        <div className="reportsmain_rule_row">
          <div className="reportsmain_select">And ▾</div>
          <div className="reportsmain_select">Select Field ▾</div>
          <div className="reportsmain_select">Select Operator ▾</div>
          <div className="reportsmain_select">Select Value ▾</div>
          <div className="reportsmain_select">—</div>

          <div className="reportsmain_rule_actions">
            <button className="reportsmain_btn_blue">
              <AddIcon />
            </button>
            <button className="reportsmain_btn_gray">
              <RemoveIcon />
            </button>
            <button className="reportsmain_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="reportsmain_advanced_footer">
        <button className="reportsmain_add_group">+ Add Filter Group</button>

        <div className="reportsmain_footer_actions">
          <button className="reportsmain_export_btn">Export</button>
          <button className="reportsmain_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
