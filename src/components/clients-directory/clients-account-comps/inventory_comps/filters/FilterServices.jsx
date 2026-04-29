import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterServices.css";

export default function FilterServices() {
  return (
    <div className="services_advanced_search">
      {/* Header */}
      <h3 className="services_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="services_advanced_top">
        <div className="services_field">
          <label>Query Type</label>
          <div className="services_select">All ▾</div>
        </div>

        <div className="services_field">
          <label>Form Category</label>
          <div className="services_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="services_filter_group">
        <div className="services_group_title">Filter Group 1</div>

        <div className="services_rule_row">
          <div className="services_select">Department ▾</div>
          <div className="services_select">=</div>
          <div className="services_input">Housekeeping</div>
          <div className="services_select">And ▾</div>

          <div className="services_rule_actions">
            <button className="services_btn_blue">
              <AddIcon />
            </button>
            <button className="services_btn_gray">
              <RemoveIcon />
            </button>
            <button className="services_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="services_rule_row">
          <div className="services_select">Assignee ▾</div>
          <div className="services_select">=</div>
          <div className="services_input">Aan Hamdani</div>
          <div className="services_select">—</div>

          <div className="services_rule_actions">
            <button className="services_btn_blue">
              <AddIcon />
            </button>
            <button className="services_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="services_filter_group">
        <div className="services_group_title">Filter Group 2</div>

        <div className="services_rule_row">
          <div className="services_select">And ▾</div>
          <div className="services_select">Select Field ▾</div>
          <div className="services_select">Select Operator ▾</div>
          <div className="services_select">Select Value ▾</div>
          <div className="services_select">—</div>

          <div className="services_rule_actions">
            <button className="services_btn_blue">
              <AddIcon />
            </button>
            <button className="services_btn_gray">
              <RemoveIcon />
            </button>
            <button className="services_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="services_advanced_footer">
        <button className="services_add_group">+ Add Filter Group</button>

        <div className="services_footer_actions">
          <button className="services_export_btn">Export</button>
          <button className="services_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
