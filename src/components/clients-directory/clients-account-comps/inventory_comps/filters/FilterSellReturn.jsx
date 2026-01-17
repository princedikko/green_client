import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterSellReturn.css";

export default function FilterSellReturn() {
  return (
    <div className="sellreturn_advanced_search">
      {/* Header */}
      <h3 className="sellreturn_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="sellreturn_advanced_top">
        <div className="sellreturn_field">
          <label>Query Type</label>
          <div className="sellreturn_select">All ▾</div>
        </div>

        <div className="sellreturn_field">
          <label>Form Category</label>
          <div className="sellreturn_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="sellreturn_filter_group">
        <div className="sellreturn_group_title">Filter Group 1</div>

        <div className="sellreturn_rule_row">
          <div className="sellreturn_select">Department ▾</div>
          <div className="sellreturn_select">=</div>
          <div className="sellreturn_input">Housekeeping</div>
          <div className="sellreturn_select">And ▾</div>

          <div className="sellreturn_rule_actions">
            <button className="sellreturn_btn_blue">
              <AddIcon />
            </button>
            <button className="sellreturn_btn_gray">
              <RemoveIcon />
            </button>
            <button className="sellreturn_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="sellreturn_rule_row">
          <div className="sellreturn_select">Assignee ▾</div>
          <div className="sellreturn_select">=</div>
          <div className="sellreturn_input">Aan Hamdani</div>
          <div className="sellreturn_select">—</div>

          <div className="sellreturn_rule_actions">
            <button className="sellreturn_btn_blue">
              <AddIcon />
            </button>
            <button className="sellreturn_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="sellreturn_filter_group">
        <div className="sellreturn_group_title">Filter Group 2</div>

        <div className="sellreturn_rule_row">
          <div className="sellreturn_select">And ▾</div>
          <div className="sellreturn_select">Select Field ▾</div>
          <div className="sellreturn_select">Select Operator ▾</div>
          <div className="sellreturn_select">Select Value ▾</div>
          <div className="sellreturn_select">—</div>

          <div className="sellreturn_rule_actions">
            <button className="sellreturn_btn_blue">
              <AddIcon />
            </button>
            <button className="sellreturn_btn_gray">
              <RemoveIcon />
            </button>
            <button className="sellreturn_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="sellreturn_advanced_footer">
        <button className="sellreturn_add_group">+ Add Filter Group</button>

        <div className="sellreturn_footer_actions">
          <button className="sellreturn_export_btn">Export</button>
          <button className="sellreturn_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
