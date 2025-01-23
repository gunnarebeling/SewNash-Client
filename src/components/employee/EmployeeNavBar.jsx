
import { NavLink as RRNavLink, useNavigate } from "react-router-dom";
import {
Button,
Nav,
NavLink,
NavItem,
Navbar,
NavbarBrand,
NavbarToggler,
Collapse,
} from "reactstrap";

import { useContext, useState } from "react";
import { UserContext } from "../../App";
import './EmployeeNavBar.css'


export default function EmployeeNavBar() {
    const { loggedInUser, setLoggedInUser} = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className="nav-bg" color="light" light expand="md" fixed="top">
      <NavbarBrand className="mr-auto" tag={RRNavLink} to="/">
        <img 
          src="http://sewnash-app.s3-website-us-east-1.amazonaws.com/SewNash1.png" 
          alt="SewNash Logo" 
          className="img-fluid" 
          style={{ height: '80px' }} 
        />
      </NavbarBrand>

      {/* Toggler for smaller screens */}
      <NavbarToggler onClick={toggleNavbar} />

      {/* Collapsible part of the navbar */}
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mx-auto d-flex justify-content-center " navbar>
          <NavItem className="mx-3">
            <NavLink tag={RRNavLink} onClick={toggleNavbar} to="/employee">
              Bookings
            </NavLink>
          </NavItem>
          <NavItem className="mx-3">
            <NavLink tag={RRNavLink} onClick={toggleNavbar} to="classes">
              Classes
            </NavLink>
          </NavItem>
          {loggedInUser?.role === "Admin" && 
            <NavItem className="mx-3">
              <NavLink tag={RRNavLink} onClick={toggleNavbar} to="/employee/register">
                Register Employee
              </NavLink>
            </NavItem>
          }
          </Nav>
          <Nav className="ms-auto">

            <NavItem>
                <Button
                className="logout-btn"
                onClick={(e) => {
                    e.preventDefault();
                    localStorage.removeItem('token');
                    setLoggedInUser(null);
                    navigate("/");
                    
                }}
                >
                Logout
                </Button>
            </NavItem>
          </Nav>
      </Collapse>
    </Navbar>
  );
}