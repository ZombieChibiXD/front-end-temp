import axios from "axios";

import { serveConf as configuration } from '@/_config'
import { user as userLocalStorage } from '@/services'

const axiosCred = axios.create({
    baseURL: configuration.serverLocation,
    timeout: 1000,
    headers: {
        'Accept' : 'application/json',
        'Authorization': 'Bearer '+ userLocalStorage.credential.token
    }
});

export default axiosCred;