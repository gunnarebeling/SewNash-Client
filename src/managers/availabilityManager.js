const _apiUrl = "http://sewnash-api-env.eba-mcb7difs.us-east-1.elasticb/api/availability";

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