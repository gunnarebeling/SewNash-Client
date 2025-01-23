const _apiUrl = "http://sewnash-api-env.eba-t3mcrd2m.us-east-1.elasticbeanstalk.com/api/time";

export const getAllTimes = () => {
    return fetch(_apiUrl).then(res => res.json())
}