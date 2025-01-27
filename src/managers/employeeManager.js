const _apiUrl = "https://localhost:7145/api/employee";

export const getAllEmployees = () => {
    const token = localStorage.getItem('token');
    return fetch(_apiUrl, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }).then(res => res.json());
}