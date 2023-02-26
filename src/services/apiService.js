import axios from "axios";

import {API_KEY_V4, baseURL} from "../configs";

const apiService = axios.create({baseURL})

apiService.interceptors.request.use(
    async config => {
        config.headers = {
            'Authorization': `Bearer ${API_KEY_V4}`,
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        }
        return config});

export {
    apiService
}
