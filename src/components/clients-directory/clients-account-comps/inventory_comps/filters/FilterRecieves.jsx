import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterRecieves.css";

export default function FilterRecieves() {
  return (
    <div className="recieves_advanced_search">
      {/* Header */}
      <h3 className="recieves_advanced_title">Advanced Search</h3>
      {/* Top selectors */}
      <div className="recieves_advanced_top">
        <div className="recieves_field">
          <label>Query Type</label>
          <div className="recieves_select">All ▾</div>
        </div>

        <div className="recieves_field">
          <label>Form Category</label>
          <div className="recieves_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="recieves_filter_group">
        <div className="recieves_group_title">Filter Group 1</div>

        <div className="recieves_rule_row">
          <div className="recieves_select">Department ▾</div>
          <div className="recieves_select">=</div>
          <div className="recieves_input">Housekeeping</div>
          <div className="recieves_select">And ▾</div>

          <div className="recieves_rule_actions">
            <button className="recieves_btn_blue">
              <AddIcon />
            </button>
            <button className="recieves_btn_gray">
              <RemoveIcon />
            </button>
            <button className="recieves_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="recieves_rule_row">
          <div className="recieves_select">Assignee ▾</div>
          <div className="recieves_select">=</div>
          <div className="recieves_input">Aan Hamdani</div>
          <div className="recieves_select">—</div>

          <div className="recieves_rule_actions">
            <button className="recieves_btn_blue">
              <AddIcon />
            </button>
            <button className="recieves_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="recieves_filter_group">
        <div className="recieves_group_title">Filter Group 2</div>

        <div className="recieves_rule_row">
          <div className="recieves_select">And ▾</div>
          <div className="recieves_select">Select Field ▾</div>
          <div className="recieves_select">Select Operator ▾</div>
          <div className="recieves_select">Select Value ▾</div>
          <div className="recieves_select">—</div>

          <div className="recieves_rule_actions">
            <button className="recieves_btn_blue">
              <AddIcon />
            </button>
            <button className="recieves_btn_gray">
              <RemoveIcon />
            </button>
            <button className="recieves_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="recieves_advanced_footer">
        <button className="recieves_add_group">+ Add Filter Group</button>

        <div className="recieves_footer_actions">
          <button className="recieves_export_btn">Export</button>
          <button className="recieves_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
