import { useEffect } from "react";
import "./warehouseAlert.css";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";

export default function WarehouseAlert({ alert, setAlert }) {
  useEffect(() => {
    if (!alert) return;

    const timer = setTimeout(() => {
      setAlert(null);
    }, 6000);

    return () => clearTimeout(timer);
  }, [alert, setAlert]);

  if (!alert) return null;

  const renderIcon = () => {
    switch (alert.type) {
      case "success":
        return <CheckCircleIcon fontSize="large" />;

      case "error":
        return <ErrorIcon fontSize="large" />;

      case "warning":
        return <WarningIcon fontSize="large" />;

      case "info":
      default:
        return <InfoIcon fontSize="large" />;
    }
  };

  return (
    <div className={`warehouse-alert ${alert.type} `}>
      <div className="alertCont fx-jb fx-ac space4">
        <div className="fx-ac space1">
          {renderIcon()}
          {alert.message}
        </div>

        <div className="warehouse-progress"></div>

        <button onClick={() => setAlert(null)}>
          <CloseIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}
