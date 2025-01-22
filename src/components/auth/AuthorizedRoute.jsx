/* eslint-disable react/prop-types */
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";


// This component returns a Route that either display the prop element
// or navigates to the login. If roles are provided, the route will require
// all of the roles when all is true, or any of the roles when all is false
export const AuthorizedRoute = ({ children, roles }) => {
  const token = localStorage.getItem('token');
  let authed = false;
  let loggedInUser = null;

  if (token) {
    try {
      loggedInUser = jwtDecode(token);
      if (loggedInUser && roles) {
        const userRole = loggedInUser["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        authed = userRole === roles;
      } else {
        authed = true;
      }
    } catch (error) {
      console.error('Invalid token:', error);
    }
  }

  return authed ? children : <Navigate to="/login" />;
};
