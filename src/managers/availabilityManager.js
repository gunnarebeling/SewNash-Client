const _apiUrl = "http://sewnash-api-env.eba-t3mcrd2m.us-east-1.elasticbeanstalk.com/api/availability";

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