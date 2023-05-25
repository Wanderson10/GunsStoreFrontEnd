import axios from "axios";
const api = axios.create({
    baseURL:"https://gunstorebackend-production.up.railway.app/api"
})

export default api