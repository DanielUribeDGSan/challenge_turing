import axios from 'axios';

const turingApi = axios.create({
  baseURL: "https://turing-back-nodejs-production.up.railway.app/api"
});


export default turingApi;


