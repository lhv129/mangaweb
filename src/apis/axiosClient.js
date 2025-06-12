import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://manga.thinkdiff.us',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosClient;