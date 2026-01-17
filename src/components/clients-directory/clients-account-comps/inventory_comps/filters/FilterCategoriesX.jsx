import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterCategoriesX.css";

export default function FilterCategoriesX() {
  return (
    <div className="categoriesx_advanced_search">
      {/* Header */}
      <h3 className="categoriesx_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="categoriesx_advanced_top">
        <div className="categoriesx_field">
          <label>Query Type</label>
          <div className="categoriesx_select">All ▾</div>
        </div>

        <div className="categoriesx_field">
          <label>Form Category</label>
          <div className="categoriesx_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="categoriesx_filter_group">
        <div className="categoriesx_group_title">Filter Group 1</div>

        <div className="categoriesx_rule_row">
          <div className="categoriesx_select">Department ▾</div>
          <div className="categoriesx_select">=</div>
          <div className="categoriesx_input">Housekeeping</div>
          <div className="categoriesx_select">And ▾</div>

          <div className="categoriesx_rule_actions">
            <button className="categoriesx_btn_blue">
              <AddIcon />
            </button>
            <button className="categoriesx_btn_gray">
              <RemoveIcon />
            </button>
            <button className="categoriesx_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="categoriesx_rule_row">
          <div className="categoriesx_select">Assignee ▾</div>
          <div className="categoriesx_select">=</div>
          <div className="categoriesx_input">Aan Hamdani</div>
          <div className="categoriesx_select">—</div>

          <div className="categoriesx_rule_actions">
            <button className="categoriesx_btn_blue">
              <AddIcon />
            </button>
            <button className="categoriesx_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="categoriesx_filter_group">
        <div className="categoriesx_group_title">Filter Group 2</div>

        <div className="categoriesx_rule_row">
          <div className="categoriesx_select">And ▾</div>
          <div className="categoriesx_select">Select Field ▾</div>
          <div className="categoriesx_select">Select Operator ▾</div>
          <div className="categoriesx_select">Select Value ▾</div>
          <div className="categoriesx_select">—</div>

          <div className="categoriesx_rule_actions">
            <button className="categoriesx_btn_blue">
              <AddIcon />
            </button>
            <button className="categoriesx_btn_gray">
              <RemoveIcon />
            </button>
            <button className="categoriesx_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="categoriesx_advanced_footer">
        <button className="categoriesx_add_group">+ Add Filter Group</button>

        <div className="categoriesx_footer_actions">
          <button className="categoriesx_export_btn">Export</button>
          <button className="categoriesx_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
