import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterProducts.css";

export default function FilterProducts() {
  return (
    <div className="products_advanced_search">
      {/* Header */}
      <h3 className="products_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="products_advanced_top">
        <div className="products_field">
          <label>Query Type</label>
          <div className="products_select">All ▾</div>
        </div>

        <div className="products_field">
          <label>Form Category</label>
          <div className="products_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="products_filter_group">
        <div className="products_group_title">Filter Group 1</div>

        <div className="products_rule_row">
          <div className="products_select">Department ▾</div>
          <div className="products_select">=</div>
          <div className="products_input">Housekeeping</div>
          <div className="products_select">And ▾</div>

          <div className="products_rule_actions">
            <button className="products_btn_blue">
              <AddIcon />
            </button>
            <button className="products_btn_gray">
              <RemoveIcon />
            </button>
            <button className="products_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="products_rule_row">
          <div className="products_select">Assignee ▾</div>
          <div className="products_select">=</div>
          <div className="products_input">Aan Hamdani</div>
          <div className="products_select">—</div>

          <div className="products_rule_actions">
            <button className="products_btn_blue">
              <AddIcon />
            </button>
            <button className="products_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="products_filter_group">
        <div className="products_group_title">Filter Group 2</div>

        <div className="products_rule_row">
          <div className="products_select">And ▾</div>
          <div className="products_select">Select Field ▾</div>
          <div className="products_select">Select Operator ▾</div>
          <div className="products_select">Select Value ▾</div>
          <div className="products_select">—</div>

          <div className="products_rule_actions">
            <button className="products_btn_blue">
              <AddIcon />
            </button>
            <button className="products_btn_gray">
              <RemoveIcon />
            </button>
            <button className="products_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="products_advanced_footer">
        <button className="products_add_group">+ Add Filter Group</button>

        <div className="products_footer_actions">
          <button className="products_export_btn">Export</button>
          <button className="products_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
