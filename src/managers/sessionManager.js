const _apiUrl = "http://sewnash-api-env.eba-t3mcrd2m.us-east-1.elasticbeanstalk.com/api/session";

export const getSessionByClassId = (classId) => {
    return fetch(`${_apiUrl}/class/${classId}`).then(res => res.json())
}
export const getSessionById = (sessionId) => {
    return fetch(`${_apiUrl}/${sessionId}`).then(res => res.json())
}
export const getAllSessions = () => {
    const token = localStorage.getItem('token');
    return fetch(_apiUrl, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }).then(res => res.json());
}

export const deleteSession = (id) => {
    const token = localStorage.getItem('token');
    return fetch(`${_apiUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
}

export const lockUnlockSession = (id) => {
    const token = localStorage.getItem('token');
    return fetch(`${_apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
}

export const getSessionsByDate = (date) => {
    if (!(date instanceof Date)) {
        date = new Date(date); // Convert to Date object
    }
    date = date.toISOString().split('T')[0]
    return fetch(`${_apiUrl}/date?date=${date}`).then(res => res.json())
}
