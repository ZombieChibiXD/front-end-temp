<template>
    <div>
    <b-navbar toggleable="lg" class="navbars">
        <b-navbar-brand :to="{name:'home'}">Chibi's Website</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item :to="{ name:'about' } " active-class="active disabled">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" v-if="isLogged === false">
            <b-nav-item :to="{ name: 'login' }" active-class="active disabled">Login</b-nav-item>
            <b-nav-item class="disabled">/</b-nav-item>
            <b-nav-item :to="{ name: 'login' }" active-class="active disabled">Register</b-nav-item>
            <!-- <b-nav-item to="login" v-if="isLogged === false">Login</b-nav-item> -->
        </b-navbar-nav >
        <b-navbar-nav v-if="isLogged === true" class="ml-auto">     
            <!-- Modal Component -->
            <b-nav-item-dropdown right >
            <!-- Using 'button-content' slot -->
                <template slot="button-content"><em>{{ UserData.name }}</em></template>
                <b-dropdown-item href="#"  >Profile</b-dropdown-item>
                <b-dropdown-item to="#" @click.prevent="signout" active-class="active disabled">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
import userCredential from '@/_services/user.service'
export default {
    name:'Navbar',
    data(){
        return {
            isLogged:this.checkIfIsLogged(),
            fromLogin:false,
            firstStart:true,
            UserData:{
                name:'Hi'
            }
        }
    }, 
    created () {
        this.$bus.$on('logged', () => {
            if(!this.isLogged){
                this.fromLogin = true;
            }
            this.isLogged = true;
            if(this.isLogged){
                this.checkIfIsLogged()
            }
        })
        // this.$bus.$on('fromlogin', () => {
        //     
        // })
    },
    methods: {
        signout () {
            this.$swal.fire({
            title: 'Log out?',
            text: "You'll be sent to login page!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Log out!'
            }).then((result) => {
            if (result.value) {
                userCredential.logout();
                this.isLogged = false;
                this.$router.push('/')
                this.$toasted.show("You have logged out", { 
                    action : {
                        text : 'Got it!',
                        onClick : (e, toastObject) => { toastObject.goAway(0);  }
                    },
    
                    theme: "outline", 
                    position: "top-right", 
                    duration : 5000
                });
            }
            })
        },
        checkIfIsLogged () {
            console.log('Checking user');
            
            userCredential.verify()
            .then(res =>{
                if(res){
                    this.UserData.name = userCredential.credential.name;
                    if(this.fromLogin || this.firstStart){
                        
                    }
                }
                this.isLogged = res ? true : false;
            });
        }

    }
}
</script>
<style scoped>
.navbars{
    background-color: rgba(46, 241, 255, 0.61);
}
</style>




