import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import greenRoutes from "./GeneralRoutes";

export default function Authorization() {
  const systemAdminAuth = useSelector(
    (state) => state.systemAdminFunction.isAuthenticated,
  );
  const financeAuth = useSelector(
    (state) => state.financeFunction.isAuthenticated,
  );
  const executiveAuth = useSelector(
    (state) => state.executiveFunction.isAuthenticated,
  );

  const agentAuth = useSelector((state) => state.agentFunction.isAuthenticated);

  const adminAuth = useSelector((state) => state.adminFunction.isAuthenticated);
  const staffAuth = useSelector((state) => state.staffFunction.isAuthenticated);
  const applicantAuth = useSelector(
    (state) => state.applictaionForm.isAuthenticated,
  );
  const clientAuth = useSelector(
    (state) => state.clientFunction.isAuthenticated,
  );

  return (
    <Routes>
      {greenRoutes.map((req, index) => {
        if (req.isPublic) {
          return <Route path={req.path} element={req.element} key={index} />;
        } else if (req.isSystemAdmin) {
          return (
            <Route
              path={req.path}
              element={
                systemAdminAuth ? (
                  req.element
                ) : (
                  <Navigate to="/information-technology/system-administration/login" />
                )
              }
              key={index}
            />
          );
        } else if (req.isexecutive) {
          return (
            <Route
              path={req.path}
              element={
                executiveAuth ? req.element : <Navigate to="/executive/login" />
              }
              key={index}
            />
          );
        } else if (req.isAdmin) {
          return (
            <Route
              path={req.path}
              element={
                adminAuth ? (
                  req.element
                ) : (
                  <Navigate to="/administration/admin_login" />
                )
              }
              key={index}
            />
          );
        } else if (req.isFinance) {
          return (
            <Route
              path={req.path}
              element={
                financeAuth ? (
                  req.element
                ) : (
                  <Navigate to="/finance/finance_login" />
                )
              }
              key={index}
            />
          );
        } else if (req.isAgent) {
          return (
            <Route
              path={req.path}
              element={
                agentAuth ? req.element : <Navigate to="/agent_unit/login" />
              }
              key={index}
            />
          );
        } else if (req.isStaff) {
          return (
            <Route
              path={req.path}
              element={staffAuth ? req.element : <Navigate to="/staff_login" />}
              key={index}
            />
          );
        } else if (req.isClient) {
          return (
            <Route
              path={req.path}
              element={
                clientAuth ? req.element : <Navigate to="/clients_login" />
              }
              key={index}
            />
          );
        } else if (req.isApplicants) {
          return (
            <Route
              path={req.path}
              element={
                applicantAuth ? (
                  req.element
                ) : (
                  <Navigate to="/admission_status" />
                )
              }
              key={index}
            />
          );
        } else return false;
      })}
    </Routes>
  );
}
