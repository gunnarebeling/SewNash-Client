const _apiUrl = "http://sewnash-api-env.eba-mcb7difs.us-east-1.elasticb/api/auth";

export const login = (email, password) => {
  return fetch(_apiUrl + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password: password }),
  }).then((res) => {
    if (res.status !== 200) {
      return Promise.resolve(null);
    } else {
      return res.json().then((data) => {
        localStorage.setItem('token', data.token); // Store the token in local storage
        return tryGetLoggedInUser();
      });
    }
  });
};



export const logout = () => {
  localStorage.removeItem('token');
  
};

export const tryGetLoggedInUser = () => {
  const token = localStorage.getItem('token');
  return fetch(_apiUrl + "/me", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`, // Include the token in the Authorization header
    },
  })
  .then((res) => {
    if (res.status !== 200) {
      console.error('Failed to get logged in user:', res.status);
      return Promise.resolve(null);
    }
    return res.json();
  })
  .then((data) => {
    console.log('Logged in user data:', data);
    return data;
  })
  .catch((error) => {
    console.error('Error fetching logged in user:', error);
    return Promise.resolve(null);
  });
};

export const register = (userProfile) => {
  
  return fetch(_apiUrl + "/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userProfile),
  });
};

export const verifyUser = () => {
  return fetch(_apiUrl + "/verify-user", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    
  });
}
