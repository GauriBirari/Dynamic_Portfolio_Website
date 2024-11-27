import { removeSuperAdminToken } from "../../common";
import { superAdminTokenName } from "../../config";

const getUserFromLocalStorage = () => {
  try {
    const superadmin = JSON.parse(sessionStorage.getItem(superAdminTokenName));
    if (superadmin && superadmin.authToken && superadmin.loggedInTime) {
      return superadmin;
    } else {
      removeSuperAdminToken();
      return null;
    }
  } catch (error) {
    removeSuperAdminToken();
    return null;
  }
};

const getInitial = () => {
  return getUserFromLocalStorage();
};

const superAdminReducer = (state = getInitial(), action) => {
  switch (action.type) {
    case "LOGIN_SUPER_ADMIN":
      const { loggedInTime, authToken } = action.payload;
      const newState = {
        loggedInTime: loggedInTime || Date.now(),
        authToken: authToken,
      };
      sessionStorage.setItem(superAdminTokenName, JSON.stringify(newState));
      return newState;
    case "LOGOUT_SUPER_ADMIN":
      removeSuperAdminToken();
      return null;
    default:
      return state;
  }
};

export default superAdminReducer;
