import React, { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { server } from "../common";
import { AiFillDelete } from "react-icons/ai";
import { useSelectAccess } from "../store/stateFunctions";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const swalalert = withReactContent(Swal);

const ContactEntries = ({ role }) => {
  const user = useSelectAccess("Super Admin");
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  // Get
  const getData = () => {
    server
      .get("/contact/getallcontacts", {
        headers: {
          "Content-Type": "application/json",
          // Authorization: user.authToken,
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
          toast.error(error?.response?.data?.error);
        } else toast.error(error?.response?.data?.error);
      });
  };

  // Delete gallery
  const deleteInternShip = (data) => {
    swalalert
      .fire({
        title: "Delete Confirmation!",
        text: `Are You Sure That You Want To Delete ${data.link} ?`,
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
            .delete(`/contact/deletecontact/${data._id}`, {
              headers: {
                "Content-Type": "application/json",
                // "auth-Token": user.authToken,
              },
            })
            .then(function (response) {
              console.log("api response", response.data);
              if (response.status === 200 || response.status === 201) {
                swalalert.fire(
                  "Deleted!",
                  "Contact entry has been deleted.",
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

  return (
    <div>
      <div className="container">
        <h2 className="text-center py-4">Contact Entries</h2>

        <table className="table table-striped border">
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Message</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <>
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.message}</td>
                    <td>
                      <div className="btn btn-danger text-white">
                        <AiFillDelete onClick={() => deleteInternShip(item)} />
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactEntries;
