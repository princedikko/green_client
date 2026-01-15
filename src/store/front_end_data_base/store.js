import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import adminReducer from "../redux/admin_reducer.js";
import staffReducer from "../redux/staff_reducer.js";
import instructorReducer from "../redux/instructor_reducer.js";
import clientReducer from "../redux/client_reducer.js";
import appFormReducer from "../redux/registrationReducer.js";
import admissionReducer from "../redux/admission_reducer.js";
import parentReducer from "../redux/parent_reducer.js";
import executiveReducer from "../redux/executive_reducer.js";
import financeReducer from "../redux/finance_reducer.js";
import agentReducer from "../redux/agent_reducer.js";
import libraryReducer from "../redux/library_reducer.js";
import counselorReducer from "../redux/counselor_reducer.js";
import systemAdminReducer from "../redux/system-admin_reducer.js";
import securityReducer from "../redux/security_reducer.js";
import clientAssesmentReducer from "../redux_computer_base/client_computer_base_reducer.js";
import adminAssesmentReducer from "../redux_computer_base/admin_computer_base_reducer.js";
import staffAssesmentReducer from "../redux_computer_base/staff_computer_base_reducer.js";

// Combine reducers
const rootReducer = combineReducers({
  systemAdminFunction: systemAdminReducer,
  financeFunction: financeReducer,
  adminFunction: adminReducer,
  executiveFunction: executiveReducer,
  instructorFunction: instructorReducer,
  parentFunction: parentReducer,
  counselorFunction: counselorReducer,
  staffFunction: staffReducer,
  libraryFunction: libraryReducer,
  clientFunction: clientReducer,
  agentFunction: agentReducer,
  securityFunction: securityReducer,
  applictaionForm: appFormReducer,
  admissionActions: admissionReducer,
  // storage for computer base assessment and evaluations
  adminAssesment: adminAssesmentReducer,
  staffAssesment: staffAssesmentReducer,
  clientAssesment: clientAssesmentReducer,
});

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with persisted reducer
const store = configureStore({ reducer: persistedReducer });
const persistor = persistStore(store);

export { store, persistor };

// // FUNCTIONS WHITOU REDUX PERSIT *************************************************
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// // call reducer
// import adminReducer from "./admin_reducer.js";
// import staffReducer from "./staff_reducer";
// import clientReducer from "./client_reducer";
// import appFormReducer from "./registrationReducer.js";
// import admissionReducer from "./admission_reducer.js";

// const rootReducer = combineReducers({
//   adminFunction: adminReducer,
//   staffFunction: staffReducer,
//   clientFunction: clientReducer,
//   applictaionForm: appFormReducer,
//   admissionActions: admissionReducer,
// });

// // create store with reducer
// export default configureStore({ reducer: rootReducer });
