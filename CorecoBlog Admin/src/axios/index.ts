import axios from "axios";


const BASE_URL = import.meta.env.VITE_APP_BASE_API;
export default {
    get(url: string, params: any) {
        return axios.get(`${BASE_URL}${url}`, {
            params: params,
            timeout: 1000,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}
        });
    },

    post(url: string, data: any, cfg: any = {
        data: data,
        timeout: 1000,
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}
    }) {
        return axios.post(`${BASE_URL}${url}`, data,cfg);
    },

    put(url: string, data: any) {
        return axios.put(`${BASE_URL}${url}`, data, {
            timeout: 1000,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}
        });
    },

    delete(url: string, data: any) {
        return axios.delete(`${BASE_URL}${url}`, {
            data: data,
            timeout: 1000,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}
        });
    }
}