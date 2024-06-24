import axios from "axios";

export default function useAxios() {
    const baseURL = import.meta.env.VITE_API_URL
    
    const axiosInstance = axios.create({
        baseURL,
        timeout: 30000,
        headers: {
            "Content-Type": "application/json"
        }
    })
    return axiosInstance
}