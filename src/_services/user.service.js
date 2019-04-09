import { serveConf as server } from "@/_config";

function User(){
    
    let vm = this;
    let nameStorageField = null;
    vm.verify = function(){
        
    }

    vm.login = function(formdata){
        //disini proses ambil credential user
        let credential = null;
        
        Axios.post(server.oauthToken(), formdata)
        .then(response => {
            console.log('Server Response Success');            
            console.log(response);            
            credential = response;
            Axios.defaults.headers.common['Authorization'] = credential.token;
        })
        .catch(response => {
            console.log('Server Response Error');            
            console.log(response);           
        });

        //kemudian disimpan ke storage
        setToStorage(credential);

        //disimpan juga ke property credential
        vm.credential = credential;
    }
    
    vm.logout = function(){
        vm.credential = null;
        Axios.defaults.headers.common['Authorization'] = null;
        localStorage.removeItem(nameStorageField)
    }

    vm.init = function(){
        nameStorageField = 2213; //TODO: server.nameStorageField
        server.nameStorageField();
        vm.credential = vm.getInfo()
        Axios.defaults.headers.common['Authorization'] = vm.credential.token;
    }

    vm.getInfo = function(){
        //ambil token
        let token = getFromStorage()

        //proses ambil data ke server


        //lalu di set ke credential
        vm.crendetial = {
            id : token.id,
            name : token.name,
            email : token.email,
            token : token.token
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

    vm.init();
}

const user = new User;
export default user;