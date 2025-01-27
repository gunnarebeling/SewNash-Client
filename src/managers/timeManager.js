const _apiUrl = "https://localhost:7145/api/time";

export const getAllTimes = () => {
    return fetch(_apiUrl).then(res => res.json())
}