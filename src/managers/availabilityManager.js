const _apiUrl = "http://sewnash-api-env.eba-mcb7difs.us-east-1.elasticbeanstalk.com/api/availability";

export const postAvailability = (availability) => {
    return fetch(_apiUrl, {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(availability)
    })
}