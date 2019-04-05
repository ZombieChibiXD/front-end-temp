import { serveConf as server } from "@/_config";
import { axiosCred as Axios } from "@/_services"
function User(){
    
    let vm = this;
    let nameStorageField = server.nameStorageField;

    vm.init();

    vm.verify = function(){
        
    }

    vm.login = function(formdata){
        //disini proses ambil credential user
        let credential = null;
        
        Axios.post(server.oauthToken(), formdata, asdasd)
        .then({
            
        })
        .catch({

        });

        //kemudian disimpan ke storage
        setToStorage(credential);

        //disimpan juga ke property credential
        vm.credential = credential;
    }
    
    vm.logout = function(){
        vm.credential = null;
        localStorage.removeItem(nameStorageField)
    }

    vm.init = function(){
        vm.credential = vm.getInfo()
    }

    vm.getInfo = function(){
        //ambil token
        let token = getFromStorage()

        //proses ambil data ke server

        //lalu di set ke credential
        vm.crendetial = {
            id : null,
            name : null
        }
    }

    vm.credential = {
        token : null,
        name : null,
        id : null,
        email : null
    };

    function getFromStorage(){
        //Retreiving Item into LocalStorage
        return localStorage.getItem(nameStorageField)
    }

    function setToStorage(credential){
        //Putting Item into LocalStorage
        localStorage.setItem(nameStorageField , credential)
    }
}

const user = new User;
export default user;