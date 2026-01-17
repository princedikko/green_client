import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterDiscripancies.css";

export default function FilterDiscripancies() {
  return (
    <div className="discripancies_advanced_search">
      {/* Header */}
      <h3 className="discripancies_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="discripancies_advanced_top">
        <div className="discripancies_field">
          <label>Query Type</label>
          <div className="discripancies_select">All ▾</div>
        </div>

        <div className="discripancies_field">
          <label>Form Category</label>
          <div className="discripancies_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="discripancies_filter_group">
        <div className="discripancies_group_title">Filter Group 1</div>

        <div className="discripancies_rule_row">
          <div className="discripancies_select">Department ▾</div>
          <div className="discripancies_select">=</div>
          <div className="discripancies_input">Housekeeping</div>
          <div className="discripancies_select">And ▾</div>

          <div className="discripancies_rule_actions">
            <button className="discripancies_btn_blue">
              <AddIcon />
            </button>
            <button className="discripancies_btn_gray">
              <RemoveIcon />
            </button>
            <button className="discripancies_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="discripancies_rule_row">
          <div className="discripancies_select">Assignee ▾</div>
          <div className="discripancies_select">=</div>
          <div className="discripancies_input">Aan Hamdani</div>
          <div className="discripancies_select">—</div>

          <div className="discripancies_rule_actions">
            <button className="discripancies_btn_blue">
              <AddIcon />
            </button>
            <button className="discripancies_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="discripancies_filter_group">
        <div className="discripancies_group_title">Filter Group 2</div>

        <div className="discripancies_rule_row">
          <div className="discripancies_select">And ▾</div>
          <div className="discripancies_select">Select Field ▾</div>
          <div className="discripancies_select">Select Operator ▾</div>
          <div className="discripancies_select">Select Value ▾</div>
          <div className="discripancies_select">—</div>

          <div className="discripancies_rule_actions">
            <button className="discripancies_btn_blue">
              <AddIcon />
            </button>
            <button className="discripancies_btn_gray">
              <RemoveIcon />
            </button>
            <button className="discripancies_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="discripancies_advanced_footer">
        <button className="discripancies_add_group">+ Add Filter Group</button>

        <div className="discripancies_footer_actions">
          <button className="discripancies_export_btn">Export</button>
          <button className="discripancies_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
