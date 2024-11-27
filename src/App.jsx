import React from "react";

import { ToastContainer } from "react-toastify";
import { ToastConfig } from "./config";
import { Route, Routes } from "react-router-dom";
import SuperAdminSessionContainer from "./containers/SuperAdminSessionContainer";
import AddProjects from "./Administration/AddProjects";
import SuperAdminLogin from "./superadmin/SuperAdminLogin";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <ToastContainer {...ToastConfig} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-admin" element={<SuperAdminLogin />} />
        <Route path="/super-admin" element={<SuperAdminSessionContainer />}>
          <Route path="addprojects" element={<AddProjects />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
