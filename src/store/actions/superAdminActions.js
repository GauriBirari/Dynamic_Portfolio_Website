export const loginSuperAdmin = (session) => {
  return {
    type: "LOGIN_SUPER_ADMIN",
    payload: session,
  };
};
export const logoutSuperAdmin = () => {
  return {
    type: "LOGOUT_SUPER_ADMIN",
  };
};
