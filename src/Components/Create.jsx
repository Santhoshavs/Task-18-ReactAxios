import React, { useState } from "react";
import NavBar from "./NavBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { API_URL } from "../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Create() {
  // State variables to store form data
  let [name, setName] = useState("");
  let [userName, setuserName] = useState("");
  let [address, setAddress] = useState("");
  let [companyName, setCompanyName] = useState("");
  let [emailId, setEmailId] = useState("");

  let navigate = useNavigate();

  // Function to handle userData creation
  let handleCreate = async () => {
    try {
      let data = { name, userName, address, companyName, emailId };

      // Axios POST request to create a new blog
      let res = await axios.post(API_URL, data);

      // Check if the userData was created successfully (status code 201)
      if (res.status === 201) {
        toast.success("Blog Created Successfully");

        navigate("/dashboard");
      }
    } catch (error) {
      // Handle any errors during the userData creation process
    }
  };

  return (
    <>
      <NavBar />

      <div className="mt-4">
        {/* Form for creating a new user */}
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

export default Create;