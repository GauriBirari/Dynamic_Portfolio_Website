import React from "react";

import { ToastContainer } from "react-toastify";
import { ToastConfig } from "./config";
import { Route, Routes } from "react-router-dom";
import SuperAdminSessionContainer from "./containers/SuperAdminSessionContainer";
import AddProjects from "./Administration/AddProjects";
import SuperAdminLogin from "./superadmin/SuperAdminLogin";
import Home from "./pages/Home";
import ContactEntries from "./Administration/ContactEntries";
import AddAbout from "./Administration/AddAbout";
import AddSkills from "./Administration/AddSkills";
import AddCertification from "./Administration/AddCertification";
import AddProfilePhoto from "./Administration/AddProfilePhoto";

const App = () => {
  return (
    <>
      <ToastContainer {...ToastConfig} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-admin" element={<SuperAdminLogin />} />
        <Route path="/super-admin" element={<SuperAdminSessionContainer />}>
          <Route path="addprojects" element={<AddProjects />} />
          <Route path="contactentries" element={<ContactEntries />} />
          <Route path="addabout" element={<AddAbout />} />
          <Route path="addskills" element={<AddSkills />} />
          <Route path="addcertificates" element={<AddCertification />} />
          <Route path="addprofilephoto" element={<AddProfilePhoto />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
