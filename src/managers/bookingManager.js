const _apiUrl = "http://sewnash-api-env.eba-mcb7difs.us-east-1.elasticbeanstalk.com/api/booking";

export const PostBooking = (booking) => {
    return fetch(_apiUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(booking)
    })
}

export const deleteBooking = (id) => {
    return fetch(`${_apiUrl}/${id}`, {
        method: 'DELETE'
    })
}

export const updateBooking = (id, formData) => {
    return fetch(`${_apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
}