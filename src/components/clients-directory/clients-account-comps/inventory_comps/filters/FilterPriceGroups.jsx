import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterPriceGroups.css";

export default function FilterDiscount() {
  return (
    <div className="pricegroups_advanced_search">
      {/* Header */}
      <h3 className="pricegroups_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="pricegroups_advanced_top">
        <div className="pricegroups_field">
          <label>Query Type</label>
          <div className="pricegroups_select">All ▾</div>
        </div>

        <div className="pricegroups_field">
          <label>Form Category</label>
          <div className="pricegroups_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="pricegroups_filter_group">
        <div className="pricegroups_group_title">Filter Group 1</div>

        <div className="pricegroups_rule_row">
          <div className="pricegroups_select">Department ▾</div>
          <div className="pricegroups_select">=</div>
          <div className="pricegroups_input">Housekeeping</div>
          <div className="pricegroups_select">And ▾</div>

          <div className="pricegroups_rule_actions">
            <button className="pricegroups_btn_blue">
              <AddIcon />
            </button>
            <button className="pricegroups_btn_gray">
              <RemoveIcon />
            </button>
            <button className="pricegroups_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="pricegroups_rule_row">
          <div className="pricegroups_select">Assignee ▾</div>
          <div className="pricegroups_select">=</div>
          <div className="pricegroups_input">Aan Hamdani</div>
          <div className="pricegroups_select">—</div>

          <div className="pricegroups_rule_actions">
            <button className="pricegroups_btn_blue">
              <AddIcon />
            </button>
            <button className="pricegroups_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="pricegroups_filter_group">
        <div className="pricegroups_group_title">Filter Group 2</div>

        <div className="pricegroups_rule_row">
          <div className="pricegroups_select">And ▾</div>
          <div className="pricegroups_select">Select Field ▾</div>
          <div className="pricegroups_select">Select Operator ▾</div>
          <div className="pricegroups_select">Select Value ▾</div>
          <div className="pricegroups_select">—</div>

          <div className="pricegroups_rule_actions">
            <button className="pricegroups_btn_blue">
              <AddIcon />
            </button>
            <button className="pricegroups_btn_gray">
              <RemoveIcon />
            </button>
            <button className="pricegroups_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pricegroups_advanced_footer">
        <button className="pricegroups_add_group">+ Add Filter Group</button>

        <div className="pricegroups_footer_actions">
          <button className="pricegroups_export_btn">Export</button>
          <button className="pricegroups_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
