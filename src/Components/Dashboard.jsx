import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { API_URL } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Dashboard() {
  let navigate = useNavigate();
  let [axiosData, setAxiosData] = useState([]);

  // Effect hook to fetch data from the API on component mount
  useEffect(() => {
    getAxios();
  }, []);

  // Function to fetch data from the API
  let getAxios = async () => {
    try {
      let res = await axios.get(API_URL);
      if (res.status === 200) {
        // Update the state with the fetched data
        setAxiosData(res.data);
      }
    } catch (error) {
      toast.error("Error fetching data from the API");
    }
  };

  // Function to handle userData deletion
  let handleDelete = async (id) => {
    try {
      let res = await axios.delete(`${API_URL}/${id}`);
      if (res.status === 200) {
        toast.success("Blog Deleted Successfully!");
        getAxios();
      }
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };

  return (
    <>
      <NavBar />
      <div>
        {/* Table for displaying blog data */}
        <Table responsive bordered striped hover className="overflow-auto mt-4">
          <thead>
            <tr>
              <th className="text-center fw-bold">#</th>
              <th className="text-center fw-bold">Name</th>
              <th className="text-center fw-bold">User Name</th>
              <th className="text-center fw-bold">Address</th>
              <th className="text-center fw-bold">Company Name</th>
              <th className="text-center fw-bold">Email</th>
              <th className="text-center fw-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {axiosData.map((e, i) => {
              console.log(e);
              return (
                <tr key={i}>
                  {/* Displaying userData data */}
                  <td className="text-center">{i + 1}</td>
                  <td className="text-center">{e.name}</td>
                  <td className="text-center">{e.userName}</td>
                  <td className="text-center">{` ${e.address}`}</td>

                  <td className="text-center">{e.companyName}</td>
                  <td className="text-center">{e.emailId}</td>
                  <td className="text-center">
                    <Button
                      variant="info"
                      className="mt-2"
                      onClick={() => navigate(`/edit/${e.id}`)}
                    >
                      <b>Edit</b>
                    </Button>
                    <br className="d-md-none" />
                    <Button
                      variant="danger"
                      className="mt-2 mx-2"
                      onClick={() => handleDelete(e.id)}
                    >
                      <b>Delete</b>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Dashboard;