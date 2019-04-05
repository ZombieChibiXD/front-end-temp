function User(){
    let vm = this;
    let nameStorageField = '__mycredential';

    vm.init();

    vm.verify = function(){
        
    }

    vm.login = function(){
        //disini proses ambil credential user
        let credential = null;

        //kemudian disimpan ke storage
        setToStorage(credentail);

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
        //get dari localstorage
        return localStorage.getItem(nameStorageField)
    }

    function setToStorage(credential){
        //set ke local storage
        localStorage.setItem(nameStorageField , credential)
    }
}

const user = new User;
export default user;

//InputBerita.vue
import user from './zuser'

export default {
    beforeRouteEnter( to , from , next ){
        this.name = 'joko subianto'
        user.verify().then(function(){
            next(( vm ) => {
                vm.name = 'joko subianto'
            })
        // }).catch(function(){
        //     next(( vm ) => {
        //         vm.$router.push({
        //             name : 'halaman_error'
        //         })
        //     })
        }).catch(function(){
            location.href = '';
        })
    },
    data(){
        return {
            name : null
        }
    },
    created(){

    },
    mounted(){

    }
}

//InputKategori.vue
import user from './zuser'