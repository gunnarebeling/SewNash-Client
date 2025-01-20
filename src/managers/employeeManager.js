const _apiUrl = "http://sewnash-api-env.eba-mcb7difs.us-east-1.elasticbeanstalk.com/api/employee";

export const getAllEmployees = () => {
    return fetch(_apiUrl).then(res => res.json())
}