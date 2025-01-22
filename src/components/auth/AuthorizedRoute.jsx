/* eslint-disable react/prop-types */
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { verifyUser } from "../../managers/authManager";


// This component returns a Route that either display the prop element
// or navigates to the login. If roles are provided, the route will require
// all of the roles when all is true, or any of the roles when all is false
export const AuthorizedRoute = ({ children, roles }) => {
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const verify = async () => {
        try {
          const res = await verifyUser();
          if (res && res.status === 200) {
            const loggedInUser = jwtDecode(token);
            if (loggedInUser && roles) {
              const userRole = loggedInUser["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
              setAuthed(userRole === roles);
            } else {
              setAuthed(true);
            }
          }
        } catch (error) {
          console.error('Verification failed or invalid token:', error);
        } finally {
          setLoading(false);
        }
      };
      verify();
    } else {
      setLoading(false);
    }
  }, [roles]);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or any other loading indicator
  }

  return authed ? children : <Navigate to="/login" />;
};