import { Constants } from "../constant";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'
 
const getDataTokken = async () => {

    try {
        const value = await AsyncStorage.getItem('token')
        if (value !== null) {
            return value
        }
    } catch (e) {
        console.log(e);
    }
}

const axiosInstance = axios.create({
    baseURL: Constants.baseUrl,
    timeout: 10000,
});

axiosInstance.interceptors.request.use(async (config) => {
    let token = await getDataTokken(); 
    if (token) {
        config.headers.Authorization = `Bearer ${token}`; 
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance

