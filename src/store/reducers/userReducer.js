import { removeUserToken } from "../../common";
import { userTokenName } from "../../config";

const getUserFromLocalStorage = () => {
  try {
    const user = JSON.parse(sessionStorage.getItem(userTokenName)); // Changed to localStorage
    if (user && user.authToken && user.loggedInTime) {
      console.log("Returning User:", user);
      return user;
    } else {
      removeUserToken();
      return null;
    }
  } catch (error) {
    removeUserToken();
    return null;
  }
};

const getInitial = () => {
  return getUserFromLocalStorage();
};

const userReducer = (state = getInitial(), action) => {
  switch (action.type) {
    case "LOGIN_USER":
      const { loggedInTime, authToken } = action.payload;
      const newState = {
        loggedInTime: loggedInTime || Date.now(),
        authToken: authToken,
      };
      sessionStorage.setItem(userTokenName, JSON.stringify(newState));
      return newState;
    case "LOGOUT_USER":
      removeUserToken();
      return null;

    default:
      return state;
  }
};

export default userReducer;
