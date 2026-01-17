import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterProductServices.css";

export default function FilterDiscount() {
  return (
    <div className="productservices_advanced_search">
      {/* Header */}
      <h3 className="productservices_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="productservices_advanced_top">
        <div className="productservices_field">
          <label>Query Type</label>
          <div className="productservices_select">All ▾</div>
        </div>

        <div className="productservices_field">
          <label>Form Category</label>
          <div className="productservices_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="productservices_filter_group">
        <div className="productservices_group_title">Filter Group 1</div>

        <div className="productservices_rule_row">
          <div className="productservices_select">Department ▾</div>
          <div className="productservices_select">=</div>
          <div className="productservices_input">Housekeeping</div>
          <div className="productservices_select">And ▾</div>

          <div className="productservices_rule_actions">
            <button className="productservices_btn_blue">
              <AddIcon />
            </button>
            <button className="productservices_btn_gray">
              <RemoveIcon />
            </button>
            <button className="productservices_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="productservices_rule_row">
          <div className="productservices_select">Assignee ▾</div>
          <div className="productservices_select">=</div>
          <div className="productservices_input">Aan Hamdani</div>
          <div className="productservices_select">—</div>

          <div className="productservices_rule_actions">
            <button className="productservices_btn_blue">
              <AddIcon />
            </button>
            <button className="productservices_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="productservices_filter_group">
        <div className="productservices_group_title">Filter Group 2</div>

        <div className="productservices_rule_row">
          <div className="productservices_select">And ▾</div>
          <div className="productservices_select">Select Field ▾</div>
          <div className="productservices_select">Select Operator ▾</div>
          <div className="productservices_select">Select Value ▾</div>
          <div className="productservices_select">—</div>

          <div className="productservices_rule_actions">
            <button className="productservices_btn_blue">
              <AddIcon />
            </button>
            <button className="productservices_btn_gray">
              <RemoveIcon />
            </button>
            <button className="productservices_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="productservices_advanced_footer">
        <button className="productservices_add_group">
          + Add Filter Group
        </button>

        <div className="productservices_footer_actions">
          <button className="productservices_export_btn">Export</button>
          <button className="productservices_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
