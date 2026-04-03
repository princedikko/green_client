import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import adminReducer from "../redux/admin_reducer.js";
import staffReducer from "../redux/staff_reducer.js";
import clientReducer from "../redux/client_reducer.js";
import appFormReducer from "../redux/registrationReducer.js";
import hybridReducer from "../redux/hybrid_reducer.js";
import executiveReducer from "../redux/executive_reducer.js";
import financeReducer from "../redux/finance_reducer.js";
import agentReducer from "../redux/agent_reducer.js";
import systemAdminReducer from "../redux/system-admin_reducer.js";
import mongodbReducer from "../redux/mongodb.js";

// Combine reducers
const rootReducer = combineReducers({
  systemAdminFunction: systemAdminReducer,
  financeFunction: financeReducer,
  adminFunction: adminReducer,
  executiveFunction: executiveReducer,
  staffFunction: staffReducer,
  clientFunction: clientReducer,
  agentFunction: agentReducer,
  applictaionForm: appFormReducer,
  hybridActions: hybridReducer,
  mongodbActions: mongodbReducer,
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
