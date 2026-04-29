import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterdelivery.css";

export default function FilterDelivery() {
  return (
    <div className="delivery_advanced_search">
      {/* Header */}
      <h3 className="delivery_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="delivery_advanced_top">
        <div className="delivery_field">
          <label>Query Type</label>
          <div className="delivery_select">All ▾</div>
        </div>

        <div className="delivery_field">
          <label>Form Category</label>
          <div className="delivery_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="delivery_filter_group">
        <div className="delivery_group_title">Filter Group 1</div>

        <div className="delivery_rule_row">
          <div className="delivery_select">Department ▾</div>
          <div className="delivery_select">=</div>
          <div className="delivery_input">Housekeeping</div>
          <div className="delivery_select">And ▾</div>

          <div className="delivery_rule_actions">
            <button className="delivery_btn_blue">
              <AddIcon />
            </button>
            <button className="delivery_btn_gray">
              <RemoveIcon />
            </button>
            <button className="delivery_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="delivery_rule_row">
          <div className="delivery_select">Assignee ▾</div>
          <div className="delivery_select">=</div>
          <div className="delivery_input">Aan Hamdani</div>
          <div className="delivery_select">—</div>

          <div className="delivery_rule_actions">
            <button className="delivery_btn_blue">
              <AddIcon />
            </button>
            <button className="delivery_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="delivery_filter_group">
        <div className="delivery_group_title">Filter Group 2</div>

        <div className="delivery_rule_row">
          <div className="delivery_select">And ▾</div>
          <div className="delivery_select">Select Field ▾</div>
          <div className="delivery_select">Select Operator ▾</div>
          <div className="delivery_select">Select Value ▾</div>
          <div className="delivery_select">—</div>

          <div className="delivery_rule_actions">
            <button className="delivery_btn_blue">
              <AddIcon />
            </button>
            <button className="delivery_btn_gray">
              <RemoveIcon />
            </button>
            <button className="delivery_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="delivery_advanced_footer">
        <button className="delivery_add_group">+ Add Filter Group</button>

        <div className="delivery_footer_actions">
          <button className="delivery_export_btn">Export</button>
          <button className="delivery_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
