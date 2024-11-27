import store from ".";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  logoutSuperAdmin,
  setSuperAdminDashboard,
} from "./actions/superAdminActions";
import { logoutUser } from "./actions/userActions";

export function useSelectAccess(role) {
  return useSelector((store) => {
    switch (role) {
      case "Super Admin":
        return store.superadmin;
      case "user":
        return store.user;
      default:
        return null;
    }
  });
}

export function logoutAccess(role) {
  switch (role) {
    case "Super Admin":
      store.dispatch(logoutSuperAdmin());
      break;

    case "user":
      store.dispatch(logoutUser());
      break;
    default:
      return;
  }
  toast.info("Logout successful", { toastId: "LogoutReplacable" });
}
