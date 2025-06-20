import axios from 'axios';


// Axios instance for communicating with our API server
const apiClient = axios.create({
   baseURL: 'http://localhost:1234/api/v1', // when working on a development server / backend not yet deployed
   //liveBaseURL: 'https://ticket-api.com' // when working on a live url/ backend deployed
});

export default apiClient;