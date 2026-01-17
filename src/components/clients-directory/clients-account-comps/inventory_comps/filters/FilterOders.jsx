import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterOders.css";

export default function FilterOrders() {
  return (
    <div className="orders_advanced_search">
      {/* Header */}
      <h3 className="orders_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="orders_advanced_top">
        <div className="orders_field">
          <label>Query Type</label>
          <div className="orders_select">All ▾</div>
        </div>

        <div className="orders_field">
          <label>Form Category</label>
          <div className="orders_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="orders_filter_group">
        <div className="orders_group_title">Filter Group 1</div>

        <div className="orders_rule_row">
          <div className="orders_select">Department ▾</div>
          <div className="orders_select">=</div>
          <div className="orders_input">Housekeeping</div>
          <div className="orders_select">And ▾</div>

          <div className="orders_rule_actions">
            <button className="orders_btn_blue">
              <AddIcon />
            </button>
            <button className="orders_btn_gray">
              <RemoveIcon />
            </button>
            <button className="orders_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="orders_rule_row">
          <div className="orders_select">Assignee ▾</div>
          <div className="orders_select">=</div>
          <div className="orders_input">Aan Hamdani</div>
          <div className="orders_select">—</div>

          <div className="orders_rule_actions">
            <button className="orders_btn_blue">
              <AddIcon />
            </button>
            <button className="orders_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="orders_filter_group">
        <div className="orders_group_title">Filter Group 2</div>

        <div className="orders_rule_row">
          <div className="orders_select">And ▾</div>
          <div className="orders_select">Select Field ▾</div>
          <div className="orders_select">Select Operator ▾</div>
          <div className="orders_select">Select Value ▾</div>
          <div className="orders_select">—</div>

          <div className="orders_rule_actions">
            <button className="orders_btn_blue">
              <AddIcon />
            </button>
            <button className="orders_btn_gray">
              <RemoveIcon />
            </button>
            <button className="orders_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="orders_advanced_footer">
        <button className="orders_add_group">+ Add Filter Group</button>

        <div className="orders_footer_actions">
          <button className="orders_export_btn">Export</button>
          <button className="orders_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
