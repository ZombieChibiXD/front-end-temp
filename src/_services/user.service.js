import Vue from 'vue'
import { serveConf as Configuration } from "@/_config";
import Axios from '@/_services/axios.service'
Vue.prototype.$http = Axios;
function User(){    
    let vm = this;
    vm.nameStorageField = null;
    vm.initialized = false;


    vm.verify = async function(args){
        return new Promise(function(resolve,reject){
            let arg = {
                erase   :   null,
                redirect:   null
            }
            arg = Object.assign(arg,args);
            let authExist = Vue.prototype.$http.defaults.headers.Authorization ? true: false;
            if(authExist){
                Vue.prototype.$http.get(Configuration.authUser)
                .then(res =>{
                    if(res.data.status == 200)
                        resolve(true);
                    else
                        resolve(false);
                }).catch(res=>{
                    reject(res)
                });
            }
            else{
                if(arg.erase){
                    vm.logout();
                }
                if(arg.redirect){
                    vm.credential = null;
                    Vue.prototype.$http.defaults.headers.Authorization = null
                }
                resolve(false);
            }
        });
    }


    vm.register = function(formdata) {
        return new Promise(function (resolve,reject) {
            let formData = new FormData();
            formData.append('name', formdata.name);
            formData.append('username', formdata.username);
            formData.append('email', formdata.email);
            formData.append('password', formdata.password);
            formData.append('password_confirmation', formdata.password_confirmation);
            formData.append('user_image', formdata.user_image);
            console.log('FormData RegisterVUe');
            console.log(formdata);
            Vue.prototype.$http.post(Configuration.authSignUp, formData, { 
                headers : { 'Content-Type': 'multipart/form-data' } 
            })
            .then(response =>{
                if(response.status == 201){
                    resolve('success');
                }
                else{
                    reject(response);
                }
            })
            .catch(response =>{
                reject(response);
            });

        })
    }

    vm.login = function(formdata){
        return new Promise(function (resolve,reject) {
            //disini proses ambil credential user
            let credential = null;
            Vue.prototype.$http.post(Configuration.authLogIn, formdata)
            .then(response => {
                console.log('Server Response Success');
                credential = response.data;
                //kemudian disimpan ke storage        
                setToStorage(credential);
                vm.init();
                // console.log(Vue.prototype.$http.defaults.headers.Authorization );
                resolve(response.data)
                
            }).catch(response => {
                console.log('Server Response Error');            
                console.log(response);   
                reject(response)        
            });
        });
    }
    
    vm.logout = function(){
        return new Promise(function(resolve,reject){
            Vue.prototype.$http.get(Configuration.authLogOut)
            .then(response =>{
                vm.credential = vm.credentialEmpty;
                Vue.prototype.$http.defaults.headers.Authorization = null;
                localStorage.removeItem(vm.nameStorageField);

                if(response.status =='200'){
                    resolve('trues')
                }
                else{
                    resolve('outs')
                    console.error('You already logged out');
                }
            }).catch(response =>{
                console.log('Error Logging out');
                console.log(response);
                reject(response)
            });
        });
        
    }
    
    vm.clean = function(){
        vm.credential = vm.credentialEmpty;
        Vue.prototype.$http.defaults.headers.Authorization = null;
        localStorage.removeItem(vm.nameStorageField);
    }

    vm.init = function(){
        return new Promise(function(resolve,reject){
            try{
                vm.nameStorageField = Configuration.nameStorageField;
                let token = getFromStorage();
                // console.log(token);
                
                if(token){
                    vm.credential.token = `${token.token_type} ${token.access_token}`;
                    Vue.prototype.$http.defaults.headers.Authorization = vm.credential.token;
                }
                vm.verify()
                .then(res=>{
                    if(res){
                        vm.getInfo().then(res=>{
                            resolve(res);
                        });
                    }
                });
            }
            catch(err){
                reject(err);
            }

        });
    }

    vm.getInfo = function(){
        
        return new Promise(function(resolve,reject){
            //proses ambil data ke server
            Vue.prototype.$http.get(Configuration.authUser)
            .then(response =>{
                //lalu di set ke credential
                let credential = response.data ? response.data : null;
                if(credential){                
                    vm.credential.id          = credential.id;
                    vm.credential.name        = credential.name;
                    vm.credential.username    = credential.username;
                    vm.credential.level       = credential.level;
                    vm.credential.email       = credential.email;
                    vm.credential.user_image  = Configuration.serverLocation+
                                                Configuration.getUserImg(credential.user_image);
                }
                else{
                    console.error('Retriving User Credential Failed. Did you log in?');
                }
                resolve(credential)
            }).catch(response =>{
                console.log('Error Retriving User Data');
                reject(response)
            });
        });
    }

    vm.credential = {
        id          : null,
        name        : null,
        username    : null,
        level       : null,
        email       : null,
        user_image  : null,
        
        token : null
    };

    vm.credentialEmpty = {
        id          : null,
        name        : null,
        username    : null,
        level       : null,
        email       : null,
        user_image  : null,
        
        token : null
    };

    function getFromStorage(){
        //Retreiving Item into LocalStorage
        return JSON.parse(localStorage.getItem(vm.nameStorageField));
    }

    function setToStorage(credential){
        //Putting Item into LocalStorage
        localStorage.setItem(vm.nameStorageField , JSON.stringify(credential));
    }

    vm.init();
}
const user = new User;
export default user;