import axiosCred from "axios";

import { serveConf as configuration } from '@/_config'
// import { user as userLocalStorage } from '@/_services'

// const axiosCred = axios.create({
//     baseURL: serverConf.configuration.serverLocation,
//     timeout: 1000,
//     headers: {
//         'Accept' : 'application/json',
//         'Authorization': 'Bearer '+ userLocalStorage.credential.token,
//         'X-CSRF-TOKEN': window.Laravel.csrfToken,
//         'X-Requested-With': 'XMLHttpRequest'
//     }
    
// });

axiosCred.defaults.baseURL = configuration.serverLocation();
axiosCred.defaults.timeout = 1000;
axiosCred.defaults.headers.common['Accept'] = 'application/json';
// axiosCred.defaults.headers.common['X-CSRF-TOKEN'] =  window.Laravel.csrfToken;
// axiosCred.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';



const token = localStorage.getItem(configuration.nameStorageField())
if(token){
    axios.defaults.headers.common['Authorization'] = token.token;
    console.log('Logged in! `From Axios StartUp`');    
}


console.log('Axios Loaded');

export default axiosCred;