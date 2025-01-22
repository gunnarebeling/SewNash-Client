const _apiUrl = "http://sewnash-api-env.eba-mcb7difs.us-east-1.elasticb/api/time";

export const getAllTimes = () => {
    return fetch(_apiUrl).then(res => res.json())
}