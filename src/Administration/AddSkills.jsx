import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { InputAdornment } from "@mui/material";

import { server } from "../common";
import { AxiosError } from "axios";
import { Formik, useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useSelectAccess } from "../store/stateFunctions";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

const initialValues = {
  title: "",
  languages: "",
  link: "",
  image: null,
};

const swalalert = withReactContent(Swal);

const AddProjects = ({ role }) => {
  const user = useSelectAccess("Super Admin");

  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setIsEditMode(false);
    setSelectedData(null);
    formik.setValues(initialValues);
    setShow(true);
  };

  const handleShowEdit = (data) => {
    setSelectedData(data);
    setIsEditMode(true);
    setShow(true);
  };

  useEffect(() => {
    getData();
    if (isEditMode && selectedData) {
      formik.setValues({
        title: selectedData.title,
        languages: selectedData.languages,
        link: selectedData.link,
        image: selectedData.image,
      });
    }
  }, [isEditMode, selectedData]);

  // Get
  const getData = () => {
    server
      .get("/project/getallprojects", {
        headers: {
          "Content-Type": "application/json",
          // "auth-token": user.authToken,
        },
      })
      .then(function (response) {
        console.log("api response", response.data);
        if (response.status === 200 || response.status === 201) {
          setData(response.data);
        }
      })
      .catch(function (error) {
        if (error instanceof AxiosError && error.response?.data?.message)
          toast.error(error.response.data.message);
        else if (error.response?.data?.error) {
          toast.error(error.response.data.error);
        } else toast.error("Failed to connect to server");
      });
  };

  // Delete
  const deleteTalk = (data) => {
    swalalert
      .fire({
        title: "Delete Confirmation!",
        text: `Are You Sure That You Want To Delete ${data.title} ?`,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        confirmButtonClass: "btn btn-success",
        cancelButtonClass: "btn btn-danger",
        buttonsStyling: true,
      })
      .then(function (swalObject) {
        if (swalObject.isConfirmed) {
          server
            .delete(`/product/deleteproducts/${data._id}`, {
              headers: {
                "Content-Type": "application/json",
                Authorization: user.authToken,
              },
            })
            .then(function (response) {
              console.log("api response", response.data);
              if (response.status === 200 || response.status === 201) {
                swalalert.fire(
                  "Deleted!",
                  "Product has been deleted.",
                  "success"
                );
                getData();
              }
            })
            .catch((error) => {
              toast.error(error.response.data.message);
            });
        } else {
          swalalert.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
        //success method
      });
  };

  // update
  const handleUpdate = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("languages", values.languages);
    formData.append("link", values.link);

    if (values.image) {
      formData.append("image", values.image);
    }

    server
      .put(`/product/updateproducts/${values._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: user.authToken,
        },
      })
      .then(function (response) {
        formik.resetForm();
        getData();
        toast.success("Products Updated successfully");
        handleClose();
      })
      .catch(function (error) {
        if (error.response?.data?.message)
          toast.error(error.response.data.message);
        else if (error.response?.data?.error) {
          toast.error(error.response.data.error);
        } else toast.error("Failed to connect to server");
      });
  };

  const formik = useFormik({
    initialValues: isEditMode ? selectedData : initialValues,
    validationSchema: Yup.object({
      title: Yup.string().required("Enter a Product title"),
      languages: Yup.string().required("Enter a Product languages"),
      link: Yup.string().required("Enter a Product type"),
      image: Yup.mixed().required("Please select an image"),
    }),
    onSubmit: (values, action) => {
      if (isEditMode) {
        handleUpdate({ ...values, _id: selectedData._id });
      } else {
        if (!values.image) {
          toast.error("Please select a images");
          return;
        }
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("languages", values.languages);
        formData.append("link", values.link);
        formData.append("image", values.image);

        server
          .post("/project/addproject", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: user.authToken,
            },
          })
          .then(function (response) {
            if (response.status === 200 || response.status === 201) {
              toast.success("Data Added successfully");
              formik.resetForm();
              handleClose();
              getData();
            }
          })
          .catch(function (error) {
            if (error.response?.data?.message)
              toast.error(error.response.data.message);
            else if (error.response?.data?.error) {
              toast.error(error.response.data.error);
            } else toast.error("Failed to connect to server");
          });
      }
    },
  });

  return (
    <>
      {console.log(formik.values.errors)}
      <div
        className="container"
        style={{ overflow: "scroll", height: "470px" }}
      >
        <div className="d-flex position-relative mb-3 justify-content-center ">
          <h5 className="m-auto text-center">Previous Products</h5>
          <Button variant="contained" color="info" onClick={handleShow}>
            Add Products
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {isEditMode ? "Edit Products Details" : "Add Products Details"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={formik.handleSubmit}>
                <div className="form-outline mb-2">
                  <TextField
                    name="title"
                    margin="dense"
                    type="text"
                    placeholder="Title"
                    variant="outlined"
                    label="Title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    fullWidth
                    required
                  ></TextField>
                  {formik.errors.title ? (
                    <p className="text-danger">{formik.errors.title}</p>
                  ) : null}
                </div>
                <div className="form-outline mb-2">
                  <TextField
                    name="languages"
                    margin="dense"
                    type="text"
                    placeholder="Languages"
                    variant="outlined"
                    label="Languages"
                    value={formik.values.languages}
                    onChange={formik.handleChange}
                    fullWidth
                    required
                  ></TextField>
                  {formik.errors.languages ? (
                    <p className="text-danger">{formik.errors.languages}</p>
                  ) : null}
                </div>

                <div className="mb-2">
                  <FormControl fullWidth required className="mt-2">
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Category"
                      variant="outlined"
                      name="type"
                      value={formik.values.type}
                      onChange={formik.handleChange}
                      required
                    >
                      {/* <MenuItem value="city">City </MenuItem> */}
                      <MenuItem value="frontend">Frontend</MenuItem>
                      <MenuItem value="backend">Backend</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                    {formik.errors.type ? (
                      <p className="text-danger mb-0">{formik.errors.type}</p>
                    ) : null}
                  </FormControl>
                </div>

                <div className="form-outline mb-2">
                  <TextField
                    name="image"
                    margin="dense"
                    type="file"
                    variant="outlined"
                    label="Products Images"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <label htmlFor="image">Upload Image</label>
                        </InputAdornment>
                      ),
                      inputProps: {
                        accept: ".jpg, .png, .jpeg",
                        onChange: (event) => {
                          formik.setFieldValue(
                            "image",
                            event.currentTarget.files[0]
                          );
                        },
                      },
                    }}
                  />
                  {formik.errors.image ? (
                    <p className="text-danger">{formik.errors.image}</p>
                  ) : null}
                </div>
                <div className="pt-1 mb-2 ">
                  <Button variant="contained" type="submit">
                    {isEditMode ? "Update" : "Post"}
                  </Button>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </div>
        <div className="container" style={{ overflow: "scroll" }}>
          <table className="table table-striped border">
            <thead>
              <tr>
                <th scope="col">Sr. No</th>
                <th scope="col">Product Name</th>
                <th scope="col">languages</th>
                <th scope="col">Category</th>
                <th scope="col">Images</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.title}</td>
                    <td>{item.languages}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>
                      <a href={item.image} target="_blank">
                        <img
                          width="50"
                          height="50"
                          src={item.image}
                          // alt={item.file}
                        />
                      </a>
                    </td>

                    <td>
                      <button className="btn btn-success text-white">
                        <AiFillEdit onClick={() => handleShowEdit(item)} />
                      </button>
                    </td>
                    <td>
                      <div className="btn btn-danger text-white">
                        <AiFillDelete onClick={() => deleteTalk(item)} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddProjects;