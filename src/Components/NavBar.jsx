import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function NavBar() {
  let navigate = useNavigate();

  return (
    <>
      {/* Sticky navigation bar  */}
      <div
        style={{
          position: "sticky",
          zIndex: 1,
          top: 0,
          backgroundColor:"lightgoldenrodyellow",
        }}
      >
        <Navbar expand="lg" className="">
          <Container>
            <Navbar.Brand>
              <b>Employee Details</b>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="text-center">
                <Nav className="mx-auto">
                  <Nav.Link onClick={() => navigate("/dashboard")}>
                    <b className="btn btn-outline-dark fw-bold text-info">
                      DashBoard
                    </b>
                  </Nav.Link>
                  <Nav.Link onClick={() => navigate("/create")}>
                    <b className="btn btn-outline-dark fw-bold text-info">
                      Create
                    </b>
                  </Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;