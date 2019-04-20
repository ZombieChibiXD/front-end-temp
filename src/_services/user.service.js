import { serveConf as Configuration } from "@/_config";
import Axios from '@/_services/axios.service'
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
            
            let authExist = Axios.defaults.headers.Authorization ? true: false;
            if(authExist){
                Axios.get(Configuration.authUser)
                .then(res =>{
                    if(res.data.status == 200)
                        resolve(true);
                    else
                        resolve(false);
                }).catch(res=>{
                    console.log(res);
                });
            }
            else{
                if(arg.erase){
                    vm.logout();
                }
                if(arg.redirect){
                    vm.credential = null;
                    Axios.defaults.headers.Authorization = null
                }
                resolve(false);
            }
        });
    }

    vm.login = function(formdata){
        return new Promise(function (resolve,reject) {
            //disini proses ambil credential user
            let credential = null;
            Axios.post(Configuration.authLogIn, formdata)
            .then(response => {
                console.log('Server Response Success');
                credential = response.data;
                //kemudian disimpan ke storage        
                setToStorage(credential);
                vm.init();
                // console.log(Axios.defaults.headers.Authorization );
                resolve(response.data)
                
            }).catch(response => {
                console.log('Server Response Error');            
                console.log(response);   
                reject(response)        
            });
        });
    }
    
    vm.logout = function(){
        
        vm.credential = vm.credentialEmpty;
        Axios.defaults.headers.Authorization = null;
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
                    Axios.defaults.headers.Authorization = vm.credential.token;
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
            Axios.get(Configuration.authUser)
            .then(response =>{
                //lalu di set ke credential
                let credential = response.data ? response.data : null;
                if(credential){                
                    vm.credential.id          = credential.id;
                    vm.credential.name        = credential.name;
                    vm.credential.username    = credential.username;
                    vm.credential.level       = credential.level;
                    vm.credential.email       = credential.email;
                    vm.credential.user_image  = credential.user_image;
                }
                else{
                    console.error('Retriving User Credential Failed. Did you log in?');
                }
                resolve(credential)
            }).catch(response =>{
                console.log('Error Retriving User Data');
                console.log(response);
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