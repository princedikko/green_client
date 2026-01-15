import "./sales.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Quatations({ breadcrumbs, setChangeView, changeview }) {
  return (
    <div className="salesCompContainer">
      <div className="fx-cl space4">
        <div className="sales_breadcrumbs">
          <strong>{breadcrumbs.active && breadcrumbs.active}</strong>{" "}
          <KeyboardArrowRightIcon fontSize="small" />{" "}
          {breadcrumbs.active_display && breadcrumbs.active_display}{" "}
          <KeyboardArrowRightIcon fontSize="small" /> All Sales
        </div>
        <div className="sales_headings">Headings Here</div>
        <div className="sales_actionBar">Action Bar here</div>
        <div className="sales_main">Main Sales Component here</div>
        <div className="sales_footer">Footer here</div>
      </div>
    </div>
  );
}
