import { serveConf as Configuration } from "@/_config";
import Axios from '@/_services/axios.service'
function User(){    
    let vm = this;
    vm.nameStorageField = null;

    vm.verify = async function(args){
        return new Promise(function(resolve,reject){
            let arg = {
                erase   :   false,
                redirect:   false
            }
            arg = args;
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
            }
        });
    }

    vm.login = function(formdata){
        //disini proses ambil credential user
        let credential = null;
        Axios.post(Configuration.authLogIn, formdata)
        .then(response => {
            console.log('Server Response Success');
            credential = response.data;
            //kemudian disimpan ke storage        
            setToStorage(credential);
            vm.getInfo();
        }).catch(response => {
            console.log('Server Response Error');            
            console.log(response);           
        });
    }
    
    vm.logout = function(){
        vm.credential = null;
        Axios.defaults.headers.Authorization = null;
        localStorage.removeItem(vm.nameStorageField);
    }

    vm.init = function(){
        vm.nameStorageField = Configuration.nameStorageField;
        let token = getFromStorage();
        if(token){
            vm.credential.token = `${token.token_type} ${token.access_token}`;
            Axios.defaults.headers.Authorization = vm.credential.token;
        }
        vm.verify({'redirect':true,'erase':'something you dont expect'})
        .then(res=>{
            if(res){
                vm.getInfo();
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
                resolve(true)
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