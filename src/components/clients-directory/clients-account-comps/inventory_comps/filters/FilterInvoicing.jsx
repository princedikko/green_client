import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterInvoicing.css";

export default function FilterInvoicing() {
  return (
    <div className="invoicing_advanced_search">
      {/* Header */}
      <h3 className="invoicing_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="invoicing_advanced_top">
        <div className="invoicing_field">
          <label>Query Type</label>
          <div className="invoicing_select">All ▾</div>
        </div>

        <div className="invoicing_field">
          <label>Form Category</label>
          <div className="invoicing_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="invoicing_filter_group">
        <div className="invoicing_group_title">Filter Group 1</div>

        <div className="invoicing_rule_row">
          <div className="invoicing_select">Department ▾</div>
          <div className="invoicing_select">=</div>
          <div className="invoicing_input">Housekeeping</div>
          <div className="invoicing_select">And ▾</div>

          <div className="invoicing_rule_actions">
            <button className="invoicing_btn_blue">
              <AddIcon />
            </button>
            <button className="invoicing_btn_gray">
              <RemoveIcon />
            </button>
            <button className="invoicing_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="invoicing_rule_row">
          <div className="invoicing_select">Assignee ▾</div>
          <div className="invoicing_select">=</div>
          <div className="invoicing_input">Aan Hamdani</div>
          <div className="invoicing_select">—</div>

          <div className="invoicing_rule_actions">
            <button className="invoicing_btn_blue">
              <AddIcon />
            </button>
            <button className="invoicing_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="invoicing_filter_group">
        <div className="invoicing_group_title">Filter Group 2</div>

        <div className="invoicing_rule_row">
          <div className="invoicing_select">And ▾</div>
          <div className="invoicing_select">Select Field ▾</div>
          <div className="invoicing_select">Select Operator ▾</div>
          <div className="invoicing_select">Select Value ▾</div>
          <div className="invoicing_select">—</div>

          <div className="invoicing_rule_actions">
            <button className="invoicing_btn_blue">
              <AddIcon />
            </button>
            <button className="invoicing_btn_gray">
              <RemoveIcon />
            </button>
            <button className="invoicing_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="invoicing_advanced_footer">
        <button className="invoicing_add_group">+ Add Filter Group</button>

        <div className="invoicing_footer_actions">
          <button className="invoicing_export_btn">Export</button>
          <button className="invoicing_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
