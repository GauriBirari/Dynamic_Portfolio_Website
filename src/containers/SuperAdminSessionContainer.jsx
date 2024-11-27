import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { logoutAccess, useSelectAccess } from "../store/stateFunctions";
import { BiLogOut } from "react-icons/bi";
import Sidebar from "../superadmin/Sidebar";
// import { Outlet } from "react-router-dom";

const SuperAdminSessionContainer = () => {
  document.title = "Super Admin";
  // const superadmin = useSelectAccess("Super Admin");

  return (
    <>
      <div className="row ">
        <Sidebar role="Super Admin" />
        {/* {superadmin ? <Outlet /> : <Navigate to="/super-admin" />} */}
      </div>
    </>
  );
};

export default SuperAdminSessionContainer;
