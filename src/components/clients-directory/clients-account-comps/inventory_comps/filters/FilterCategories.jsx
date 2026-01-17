import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterCategories.css";

export default function FilterDiscount() {
  return (
    <div className="categories_advanced_search">
      {/* Header */}
      <h3 className="categories_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="categories_advanced_top">
        <div className="categories_field">
          <label>Query Type</label>
          <div className="categories_select">All ▾</div>
        </div>

        <div className="categories_field">
          <label>Form Category</label>
          <div className="categories_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="categories_filter_group">
        <div className="categories_group_title">Filter Group 1</div>

        <div className="categories_rule_row">
          <div className="categories_select">Department ▾</div>
          <div className="categories_select">=</div>
          <div className="categories_input">Housekeeping</div>
          <div className="categories_select">And ▾</div>

          <div className="categories_rule_actions">
            <button className="categories_btn_blue">
              <AddIcon />
            </button>
            <button className="categories_btn_gray">
              <RemoveIcon />
            </button>
            <button className="categories_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="categories_rule_row">
          <div className="categories_select">Assignee ▾</div>
          <div className="categories_select">=</div>
          <div className="categories_input">Aan Hamdani</div>
          <div className="categories_select">—</div>

          <div className="categories_rule_actions">
            <button className="categories_btn_blue">
              <AddIcon />
            </button>
            <button className="categories_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="categories_filter_group">
        <div className="categories_group_title">Filter Group 2</div>

        <div className="categories_rule_row">
          <div className="categories_select">And ▾</div>
          <div className="categories_select">Select Field ▾</div>
          <div className="categories_select">Select Operator ▾</div>
          <div className="categories_select">Select Value ▾</div>
          <div className="categories_select">—</div>

          <div className="categories_rule_actions">
            <button className="categories_btn_blue">
              <AddIcon />
            </button>
            <button className="categories_btn_gray">
              <RemoveIcon />
            </button>
            <button className="categories_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="categories_advanced_footer">
        <button className="categories_add_group">+ Add Filter Group</button>

        <div className="categories_footer_actions">
          <button className="categories_export_btn">Export</button>
          <button className="categories_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
