import { combineReducers } from "redux";
import userReducer from "./userReducer";
import superAdminReducer from "./superAdminReducer";

const rootReducers = combineReducers({
  user: userReducer,
  superadmin: superAdminReducer,
});

export default rootReducers;
