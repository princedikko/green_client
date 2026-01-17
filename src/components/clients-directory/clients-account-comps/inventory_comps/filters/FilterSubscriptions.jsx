import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterSubscriptions.css";

export default function FilterSubscription() {
  return (
    <div className="subscription_advanced_search">
      {/* Header */}
      <h3 className="subscription_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="subscription_advanced_top">
        <div className="subscription_field">
          <label>Query Type</label>
          <div className="subscription_select">All ▾</div>
        </div>

        <div className="subscription_field">
          <label>Form Category</label>
          <div className="subscription_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="subscription_filter_group">
        <div className="subscription_group_title">Filter Group 1</div>

        <div className="subscription_rule_row">
          <div className="subscription_select">Department ▾</div>
          <div className="subscription_select">=</div>
          <div className="subscription_input">Housekeeping</div>
          <div className="subscription_select">And ▾</div>

          <div className="subscription_rule_actions">
            <button className="subscription_btn_blue">
              <AddIcon />
            </button>
            <button className="subscription_btn_gray">
              <RemoveIcon />
            </button>
            <button className="subscription_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="subscription_rule_row">
          <div className="subscription_select">Assignee ▾</div>
          <div className="subscription_select">=</div>
          <div className="subscription_input">Aan Hamdani</div>
          <div className="subscription_select">—</div>

          <div className="subscription_rule_actions">
            <button className="subscription_btn_blue">
              <AddIcon />
            </button>
            <button className="subscription_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="subscription_filter_group">
        <div className="subscription_group_title">Filter Group 2</div>

        <div className="subscription_rule_row">
          <div className="subscription_select">And ▾</div>
          <div className="subscription_select">Select Field ▾</div>
          <div className="subscription_select">Select Operator ▾</div>
          <div className="subscription_select">Select Value ▾</div>
          <div className="subscription_select">—</div>

          <div className="subscription_rule_actions">
            <button className="subscription_btn_blue">
              <AddIcon />
            </button>
            <button className="subscription_btn_gray">
              <RemoveIcon />
            </button>
            <button className="subscription_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="subscription_advanced_footer">
        <button className="subscription_add_group">+ Add Filter Group</button>

        <div className="subscription_footer_actions">
          <button className="subscription_export_btn">Export</button>
          <button className="subscription_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
