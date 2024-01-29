import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { API_URL } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Edit() {
  // State variables for form fields
  let [name, setName] = useState("");
  let [userName, setuserName] = useState("");
  let [address, setAddress] = useState("");
  let [companyName, setCompanyName] = useState("");
  let [emailId, setEmailId] = useState("");
  let { id } = useParams();

  // Function to handle the edit operation
  let handleEdit = async () => {
    try {
      let data = { name, userName, address, companyName, emailId };
      let res = await axios.put(`${API_URL}/${id}`, data);
      // console.log(res);
      if (res.status === 200) {
        toast.success("Blog Created Successfully");
        navigate("/dashboard");
      }
    } catch (error) {}
  };

  // Function to fetch data for the specified id from the API
  let getAxiosID = async () => {
    try {
      let data = {};
      let res = await axios.get(`${API_URL}/${id}`);
      if (res.status === 200) {
        setName(res.data.name);
        setuserName(res.data.userName);
        setAddress(res.data.address);
        setCompanyName(res.data.companyName);
        setEmailId(res.data.emailId);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getAxiosID();
  }, []);

  let navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="mt-4">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} style={{ width: "70%", marginLeft: "10rem" }}>
              <Form.Label className="fw-bold">Name</Form.Label>
              <Form.Control
                style={{ width: "50%" }}
                type="email"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} style={{ width: "50%", marginRight: "20rem" }}>
              <Form.Label className="fw-bold">UserName</Form.Label>
              <Form.Control
                style={{ width: "50%" }}
                type="text"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Group
            className="mb-3"
            style={{ width: "50%", marginLeft: "10rem" }}
          >
            <Form.Label className="fw-bold">Address</Form.Label>
            <Form.Control
              style={{ width: "50%" }}
              as="textarea"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            style={{ width: "50%", marginLeft: "10rem" }}
          >
            <Form.Label className="fw-bold">Company Name</Form.Label>
            <Form.Control
              style={{ width: "50%" }}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            style={{ width: "20%", marginLeft: "10rem" }}
          >
            <Form.Label className="fw-bold">Email ID</Form.Label>
            <Form.Control
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </Form.Group>

          <div className="text-center">
            <Button
              variant="success"
              className="fw-bold"
              onClick={() => handleEdit()}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Edit;