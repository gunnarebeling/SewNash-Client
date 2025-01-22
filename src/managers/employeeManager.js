const _apiUrl = "http://sewnash-api-env.eba-mcb7difs.us-east-1.elasticb/api/employee";

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