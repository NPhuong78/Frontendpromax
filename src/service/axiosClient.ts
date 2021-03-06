import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json',
    },
  //  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config) => {
    
    return config;
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error;
});

export default axiosClient;