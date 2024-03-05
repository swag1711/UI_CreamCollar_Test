import React from 'react';
import { useNavigate } from 'react-router-dom';
import Keycloak_config from '../services/Keycloak_config';
 
const Logout = () => {
  const navigate = useNavigate();
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
// Use apiBaseUrl in your code

 
  const handleLogout = () => {
    // Retrieve the refresh token and client secret from local storage
    const refreshToken = localStorage.getItem('refreshToken');
   
   
    if (refreshToken) {
      // Send a request to the Keycloak logout endpoint with the refresh token and client secret
      fetch(`${apiBaseUrl}/realms/creamcollar/protocol/openid-connect/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        // Include the refresh_token and client_secret parameters
        body: `client_id=creamcollar_client&client_secret=${Keycloak_config.client_secret}&refresh_token=${refreshToken}`,
      })
        .then((response) => {
          if (response.ok) {
            // Successfully logged out
            // Clear user data, tokens, and refresh token from local storage
            localStorage.removeItem('refreshToken');
            navigate('/');
          } else {
            // Handle logout failure
            console.error('Logout failed');
          }
        })
        .catch((error) => {
          console.error('Error during logout:', error);
        });
    } else {
      // The refresh token is not found in local storage
      console.error('Refresh Token not found');
      navigate('/');
    }
  };
 
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
 
export default Logout;
 