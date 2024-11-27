import { Button, TextField } from "@mui/material";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { server } from "../common";
// import configContext from "../contexts/configContext/configContexts";
import { loginSuperAdmin } from "../store/actions/superAdminActions";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

const initialValues = {
  email: "",
  password: "",
};

function SuperAdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Super Admin Login";
  }, []);

  // const { setProgress } = useContext(configContext);
  const {
    values,

    handleChange,
    handleSubmit,
    errors,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Please Enter Your Email"),
      password: Yup.string()
        .min(2, "Enter details")
        .required("Please Enter Your password"),
    }),

    onSubmit: (values, action) => {
      // setProcessing(true);
      // setProgress(10);
      console.log(values);
      server
        .post(
          "/admin/login",
          values,

          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log("api response", response.data);
          if (response.status === 200 || response.status === 201) {
            if (response.data) {
              dispatch(loginSuperAdmin({ authToken: response.data.token }));
              toast.success("Super Admin Login successfully");
              navigate("/super-admin/addproducts");
              resetForm();
              // setProgress(100);
            }
            // setProcessing(false);
          }
        })
        .catch(function (error) {
          if (error instanceof AxiosError && error.response?.data?.message)
            toast.error(error.response.data.message);
          else if (error.response?.data?.error) {
            toast.error(error.response.data.error);
          } else toast.error("Failed to connect to server");
          // setProcessing(false);
          // setProgress(100);
        });
    },
  });
  // console.log(errors);

  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow" style={{ borderRadius: "1rem" }}>
                <div className="card-body text-center">
                  {/* <img
                    className="mb-3  "
                    width="100"
                    height="100"
                    src="/logo.png"
                  /> */}
                  <h3 className="mb-3 text-center ">DigiMart Admin Login</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                      <TextField
                        name="email"
                        margin="dense"
                        type="email"
                        placeholder="example@gmail.com"
                        variant="outlined"
                        label="Email Id"
                        value={values.email}
                        onChange={handleChange}
                        fullWidth
                        required
                      ></TextField>
                      {errors.email ? (
                        <p className="text-danger">{errors.email}</p>
                      ) : null}
                    </div>

                    <div className="mb-2">
                      <TextField
                        name="password"
                        margin="dense"
                        type="password"
                        placeholder="Password"
                        variant="outlined"
                        label="Password"
                        value={values.password}
                        onChange={handleChange}
                        fullWidth
                        required
                      ></TextField>
                      {errors.password ? (
                        <p className="text-danger">{errors.password}</p>
                      ) : null}
                    </div>

                    <Button variant="contained" type="submit" className="w-100">
                      Login
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SuperAdminLogin;
