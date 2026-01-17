import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterBrands.css";

export default function FilterBrands() {
  return (
    <div className="brands_advanced_search">
      {/* Header */}
      <h3 className="brands_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="brands_advanced_top">
        <div className="brands_field">
          <label>Query Type</label>
          <div className="brands_select">All ▾</div>
        </div>

        <div className="brands_field">
          <label>Form Category</label>
          <div className="brands_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="brands_filter_group">
        <div className="brands_group_title">Filter Group 1</div>

        <div className="brands_rule_row">
          <div className="brands_select">Department ▾</div>
          <div className="brands_select">=</div>
          <div className="brands_input">Housekeeping</div>
          <div className="brands_select">And ▾</div>

          <div className="brands_rule_actions">
            <button className="brands_btn_blue">
              <AddIcon />
            </button>
            <button className="brands_btn_gray">
              <RemoveIcon />
            </button>
            <button className="brands_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="brands_rule_row">
          <div className="brands_select">Assignee ▾</div>
          <div className="brands_select">=</div>
          <div className="brands_input">Aan Hamdani</div>
          <div className="brands_select">—</div>

          <div className="brands_rule_actions">
            <button className="brands_btn_blue">
              <AddIcon />
            </button>
            <button className="brands_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="brands_filter_group">
        <div className="brands_group_title">Filter Group 2</div>

        <div className="brands_rule_row">
          <div className="brands_select">And ▾</div>
          <div className="brands_select">Select Field ▾</div>
          <div className="brands_select">Select Operator ▾</div>
          <div className="brands_select">Select Value ▾</div>
          <div className="brands_select">—</div>

          <div className="brands_rule_actions">
            <button className="brands_btn_blue">
              <AddIcon />
            </button>
            <button className="brands_btn_gray">
              <RemoveIcon />
            </button>
            <button className="brands_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="brands_advanced_footer">
        <button className="brands_add_group">+ Add Filter Group</button>

        <div className="brands_footer_actions">
          <button className="brands_export_btn">Export</button>
          <button className="brands_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
