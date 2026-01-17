import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterTaxRate.css";

export default function FilterDiscount() {
  return (
    <div className="taxrate_advanced_search">
      {/* Header */}
      <h3 className="taxrate_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="taxrate_advanced_top">
        <div className="taxrate_field">
          <label>Query Type</label>
          <div className="taxrate_select">All ▾</div>
        </div>

        <div className="taxrate_field">
          <label>Form Category</label>
          <div className="taxrate_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="taxrate_filter_group">
        <div className="taxrate_group_title">Filter Group 1</div>

        <div className="taxrate_rule_row">
          <div className="taxrate_select">Department ▾</div>
          <div className="taxrate_select">=</div>
          <div className="taxrate_input">Housekeeping</div>
          <div className="taxrate_select">And ▾</div>

          <div className="taxrate_rule_actions">
            <button className="taxrate_btn_blue">
              <AddIcon />
            </button>
            <button className="taxrate_btn_gray">
              <RemoveIcon />
            </button>
            <button className="taxrate_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="taxrate_rule_row">
          <div className="taxrate_select">Assignee ▾</div>
          <div className="taxrate_select">=</div>
          <div className="taxrate_input">Aan Hamdani</div>
          <div className="taxrate_select">—</div>

          <div className="taxrate_rule_actions">
            <button className="taxrate_btn_blue">
              <AddIcon />
            </button>
            <button className="taxrate_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="taxrate_filter_group">
        <div className="taxrate_group_title">Filter Group 2</div>

        <div className="taxrate_rule_row">
          <div className="taxrate_select">And ▾</div>
          <div className="taxrate_select">Select Field ▾</div>
          <div className="taxrate_select">Select Operator ▾</div>
          <div className="taxrate_select">Select Value ▾</div>
          <div className="taxrate_select">—</div>

          <div className="taxrate_rule_actions">
            <button className="taxrate_btn_blue">
              <AddIcon />
            </button>
            <button className="taxrate_btn_gray">
              <RemoveIcon />
            </button>
            <button className="taxrate_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="taxrate_advanced_footer">
        <button className="taxrate_add_group">+ Add Filter Group</button>

        <div className="taxrate_footer_actions">
          <button className="taxrate_export_btn">Export</button>
          <button className="taxrate_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
