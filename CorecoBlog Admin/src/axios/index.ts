import axios from "axios";


const BASE_URL = import.meta.env.VITE_APP_BASE_API;
export default {
    get(url: string, params: any) {
        return axios.get(`${BASE_URL}${url}`, {
            params: params
        });
    },

    post(url: string, params: any) {
        return axios.post(url, params);
    },

    put(url: string, params: any) {
        return axios.put(url, params);
    },

    delete(url: string, params: any) {
        return axios.delete(url, {
            params: params
        });
    }
}