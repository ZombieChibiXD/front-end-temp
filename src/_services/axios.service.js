import axios from "axios";
// import Vue from 'vue'
import {serveConf as configuration} from '@/_config'

let localStore = localStorage.getItem(configuration.nameStorageField);
let token = localStore ? localStorage.token : null;

// const Axios = axios.create({
//     baseURL: configuration.serverLocation,
//     timeout: 1000,
//     headers:    {
//         'Accept' : 'application/json',
//         'Authorization': 'Bearer '+ token, //userLocalStorage.credential.token,
//         // 'X-CSRF-TOKEN': window.Laravel.csrfToken,
//         // 'X-Requested-With': 'XMLHttpRequest'
//     }
// });

const Axios = createInstance(configuration.serverLocation); // will change later

function createInstance(baseURL){
    return axios.create({
        baseURL,
        // timeout: 10000,
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Authorization': null
        },
        timeout:50000,
    });
}


export default Axios;
// export default {
//     install () {
//         Vue.prototype.$http = Axios
//         console.log('Axios Loaded!~~');
//     }
// }

// Temp code Idea
// import { user as userLocalStorage } from '@/_services'

// axiosCred.defaults.baseURL = configuration.serverLocation();
// axiosCred.defaults.timeout = 1000;
// axiosCred.defaults.headers.common['Accept'] = 'application/json';
// // axiosCred.defaults.headers.common['X-CSRF-TOKEN'] =  window.Laravel.csrfToken;
// // axiosCred.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';



// const token = localStorage.getItem(configuration.nameStorageField())
// if(token){
//     axios.defaults.headers.common['Authorization'] = token.token;
//     console.log('Logged in! `From Axios StartUp`');    
// }

// const Axios = new AxiosInit();