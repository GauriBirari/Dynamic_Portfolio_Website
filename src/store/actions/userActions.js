export const loginUser = (session) => {
  return {
    type: "LOGIN_USER",
    payload: session,
  };
};
export const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};
