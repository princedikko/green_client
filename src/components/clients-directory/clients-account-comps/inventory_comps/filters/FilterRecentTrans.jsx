import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import "./filterRecentTrans.css";

export default function FilterRecentTrans() {
  return (
    <div className="recent_trans_advanced_search">
      {/* Header */}
      <h3 className="recent_trans_advanced_title">Advanced Search</h3>

      {/* Top selectors */}
      <div className="recent_trans_advanced_top">
        <div className="recent_trans_field">
          <label>Query Type</label>
          <div className="recent_trans_select">All ▾</div>
        </div>

        <div className="recent_trans_field">
          <label>Form Category</label>
          <div className="recent_trans_select">All ▾</div>
        </div>
      </div>

      {/* Filter Group 1 */}
      <div className="recent_trans_filter_group">
        <div className="recent_trans_group_title">Filter Group 1</div>

        <div className="recent_trans_rule_row">
          <div className="recent_trans_select">Department ▾</div>
          <div className="recent_trans_select">=</div>
          <div className="recent_trans_input">Housekeeping</div>
          <div className="recent_trans_select">And ▾</div>

          <div className="recent_trans_rule_actions">
            <button className="recent_trans_btn_blue">
              <AddIcon />
            </button>
            <button className="recent_trans_btn_gray">
              <RemoveIcon />
            </button>
            <button className="recent_trans_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="recent_trans_rule_row">
          <div className="recent_trans_select">Assignee ▾</div>
          <div className="recent_trans_select">=</div>
          <div className="recent_trans_input">Aan Hamdani</div>
          <div className="recent_trans_select">—</div>

          <div className="recent_trans_rule_actions">
            <button className="recent_trans_btn_blue">
              <AddIcon />
            </button>
            <button className="recent_trans_btn_gray">
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Group 2 */}
      <div className="recent_trans_filter_group">
        <div className="recent_trans_group_title">Filter Group 2</div>

        <div className="recent_trans_rule_row">
          <div className="recent_trans_select">And ▾</div>
          <div className="recent_trans_select">Select Field ▾</div>
          <div className="recent_trans_select">Select Operator ▾</div>
          <div className="recent_trans_select">Select Value ▾</div>
          <div className="recent_trans_select">—</div>

          <div className="recent_trans_rule_actions">
            <button className="recent_trans_btn_blue">
              <AddIcon />
            </button>
            <button className="recent_trans_btn_gray">
              <RemoveIcon />
            </button>
            <button className="recent_trans_btn_red">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="recent_trans_advanced_footer">
        <button className="recent_trans_add_group">+ Add Filter Group</button>

        <div className="recent_trans_footer_actions">
          <button className="recent_trans_export_btn">Export</button>
          <button className="recent_trans_search_btn">Search</button>
        </div>
      </div>
    </div>
  );
}
