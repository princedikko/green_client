import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterSales.css";

export default function FilterSales() {
  return (
    <div className="sales_advanced_search">
      {/* Header */}
      <h3 className="sales_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="sales_advanced_top">
        <div className="sales_field">
          <label>Query Type</label>
          <div className="sales_select">All ▾</div>
        </div>

        <div className="sales_field">
          <label>Form Category</label>
          <div className="sales_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="sales_filter_group">
        <div className="sales_group_title">Filter Group 1</div>

        <div className="sales_rule_row">
          <div className="sales_select">Department ▾</div>
          <div className="sales_select">=</div>
          <div className="sales_input">Housekeeping</div>
          <div className="sales_select">And ▾</div>

          <div className="sales_rule_actions">
            <button className="sales_btn_blue">
              <AddIcon />
            </button>
            <button className="sales_btn_gray">
              <RemoveIcon />
            </button>
            <button className="sales_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="sales_rule_row">
          <div className="sales_select">Assignee ▾</div>
          <div className="sales_select">=</div>
          <div className="sales_input">Aan Hamdani</div>
          <div className="sales_select">—</div>

          <div className="sales_rule_actions">
            <button className="sales_btn_blue">
              <AddIcon />
            </button>
            <button className="sales_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="sales_filter_group">
        <div className="sales_group_title">Filter Group 2</div>

        <div className="sales_rule_row">
          <div className="sales_select">And ▾</div>
          <div className="sales_select">Select Field ▾</div>
          <div className="sales_select">Select Operator ▾</div>
          <div className="sales_select">Select Value ▾</div>
          <div className="sales_select">—</div>

          <div className="sales_rule_actions">
            <button className="sales_btn_blue">
              <AddIcon />
            </button>
            <button className="sales_btn_gray">
              <RemoveIcon />
            </button>
            <button className="sales_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="sales_advanced_footer">
        <button className="sales_add_group">+ Add Filter Group</button>

        <div className="sales_footer_actions">
          <button className="sales_export_btn">Export</button>
          <button className="sales_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
