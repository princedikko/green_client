import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterDiscrepancies.css";

export default function FilterDiscrepancies() {
  return (
    <div className="discrepancies_advanced_search">
      {/* Header */}
      <h3 className="discrepancies_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="discrepancies_advanced_top">
        <div className="discrepancies_field">
          <label>Query Type</label>
          <div className="discrepancies_select">All ▾</div>
        </div>

        <div className="discrepancies_field">
          <label>Form Category</label>
          <div className="discrepancies_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="discrepancies_filter_group">
        <div className="discrepancies_group_title">Filter Group 1</div>

        <div className="discrepancies_rule_row">
          <div className="discrepancies_select">Department ▾</div>
          <div className="discrepancies_select">=</div>
          <div className="discrepancies_input">Housekeeping</div>
          <div className="discrepancies_select">And ▾</div>

          <div className="discrepancies_rule_actions">
            <button className="discrepancies_btn_blue">
              <AddIcon />
            </button>
            <button className="discrepancies_btn_gray">
              <RemoveIcon />
            </button>
            <button className="discrepancies_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="discrepancies_rule_row">
          <div className="discrepancies_select">Assignee ▾</div>
          <div className="discrepancies_select">=</div>
          <div className="discrepancies_input">Aan Hamdani</div>
          <div className="discrepancies_select">—</div>

          <div className="discrepancies_rule_actions">
            <button className="discrepancies_btn_blue">
              <AddIcon />
            </button>
            <button className="discrepancies_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="discrepancies_filter_group">
        <div className="discrepancies_group_title">Filter Group 2</div>

        <div className="discrepancies_rule_row">
          <div className="discrepancies_select">And ▾</div>
          <div className="discrepancies_select">Select Field ▾</div>
          <div className="discrepancies_select">Select Operator ▾</div>
          <div className="discrepancies_select">Select Value ▾</div>
          <div className="discrepancies_select">—</div>

          <div className="discrepancies_rule_actions">
            <button className="discrepancies_btn_blue">
              <AddIcon />
            </button>
            <button className="discrepancies_btn_gray">
              <RemoveIcon />
            </button>
            <button className="discrepancies_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="discrepancies_advanced_footer">
        <button className="discrepancies_add_group">+ Add Filter Group</button>

        <div className="discrepancies_footer_actions">
          <button className="discrepancies_export_btn">Export</button>
          <button className="discrepancies_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
