import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterOpeningStock.css";

export default function FilterOpeningStock() {
  return (
    <div className="openingstock_advanced_search">
      {/* Header */}
      <h3 className="openingstock_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="openingstock_advanced_top">
        <div className="openingstock_field">
          <label>Query Type</label>
          <div className="openingstock_select">All ▾</div>
        </div>

        <div className="openingstock_field">
          <label>Form Category</label>
          <div className="openingstock_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="openingstock_filter_group">
        <div className="openingstock_group_title">Filter Group 1</div>

        <div className="openingstock_rule_row">
          <div className="openingstock_select">Department ▾</div>
          <div className="openingstock_select">=</div>
          <div className="openingstock_input">Housekeeping</div>
          <div className="openingstock_select">And ▾</div>

          <div className="openingstock_rule_actions">
            <button className="openingstock_btn_blue">
              <AddIcon />
            </button>
            <button className="openingstock_btn_gray">
              <RemoveIcon />
            </button>
            <button className="openingstock_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="openingstock_rule_row">
          <div className="openingstock_select">Assignee ▾</div>
          <div className="openingstock_select">=</div>
          <div className="openingstock_input">Aan Hamdani</div>
          <div className="openingstock_select">—</div>

          <div className="openingstock_rule_actions">
            <button className="openingstock_btn_blue">
              <AddIcon />
            </button>
            <button className="openingstock_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="openingstock_filter_group">
        <div className="openingstock_group_title">Filter Group 2</div>

        <div className="openingstock_rule_row">
          <div className="openingstock_select">And ▾</div>
          <div className="openingstock_select">Select Field ▾</div>
          <div className="openingstock_select">Select Operator ▾</div>
          <div className="openingstock_select">Select Value ▾</div>
          <div className="openingstock_select">—</div>

          <div className="openingstock_rule_actions">
            <button className="openingstock_btn_blue">
              <AddIcon />
            </button>
            <button className="openingstock_btn_gray">
              <RemoveIcon />
            </button>
            <button className="openingstock_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="openingstock_advanced_footer">
        <button className="openingstock_add_group">+ Add Filter Group</button>

        <div className="openingstock_footer_actions">
          <button className="openingstock_export_btn">Export</button>
          <button className="openingstock_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
