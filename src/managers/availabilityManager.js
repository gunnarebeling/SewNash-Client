const _apiUrl = "https://localhost:7145/api/availability";

export const postAvailability = (availability) => {
    return fetch(_apiUrl, {
        method: 'POST',
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(availability)
    })
}