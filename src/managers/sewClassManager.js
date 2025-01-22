const _apiUrl = "https://localhost:7145/api/sewclass";

export const getAllClasses = () => {
    return fetch(_apiUrl).then(res => res.json())
}

export const getClassById = (id) => {
    return fetch(`${_apiUrl}/${id}`).then(res => res.json())
}
export const postClass = (formData) => {
    return fetch(`${_apiUrl}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
}

export const deleteClass = (id) => {
    return fetch(`${_apiUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json"
        }
    })
}

export const updateClass = (id, formData) => {
    return fetch(`${_apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
}