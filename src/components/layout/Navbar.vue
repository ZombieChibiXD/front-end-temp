<template>
    <div>
    <b-navbar toggleable="lg" class="navbars">
        <b-navbar-brand :to="{name:'Home'}" > <img src="@/assets/logo.png" height="40vh"></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
            <b-nav-item :to="{ name: 'Tag',params: { tagname: 'popular' } }" active-class='active disabled'>Popular</b-nav-item>
            <b-nav-item :to="{ name: 'Tag',params: { tagname: 'entertaiment' } }" active-class='active disabled'>Entertaiment</b-nav-item>
            <b-nav-item :to="{ name: 'Tag',params: { tagname: 'sports' } }" active-class='active disabled'>Sports</b-nav-item>
            <b-nav-item :to="{ name: 'Tag',params: { tagname: 'lifestyle' } }" active-class='active disabled'>Lifestyle</b-nav-item>
            <b-nav-item :to="{ name:'About' } " active-class="active disabled">About</b-nav-item>
          <b-nav-item :to="{ name: 'CreateArtikel' }" active-class='active disabled'>Insert</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" v-if="isLogged === false">
            <b-nav-item :to="{ name: 'Login' }" active-class="active disabled">Login</b-nav-item>
            <b-nav-item class="disabled">/</b-nav-item>
            <b-nav-item :to="{ name: 'Register' }" active-class="active disabled">Register</b-nav-item>
            <!-- <b-nav-item to="login" v-if="isLogged === false">Login</b-nav-item> -->
        </b-navbar-nav >
        <b-navbar-nav v-if="isLogged === true" class="ml-auto"> 
            <b-nav-item :to="{ name: 'CreateArtikel' }" active-class='active disabled'>Create article</b-nav-item>    
            <!-- Modal Component -->
            <b-nav-item-dropdown right >
            <!-- Using 'button-content' slot -->
                <template slot="button-content"><em>{{ UserData.name }}</em></template>
                <b-dropdown-item href="#"  >Profile</b-dropdown-item>
                <b-dropdown-item @click.prevent="signout">Sign Out</b-dropdown-item>
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
            UserData:{
                name:''
            }
        }
    }, 
    created () {
        this.$bus.$on('logged', () => {
            this.isLogged = true;
            if(this.isLogged){
                this.checkIfIsLogged()
            }
        })
        // this.$bus.$on('fromlogin', () => {
        //     
        // })
    },
    mounted(){
        this.$bus.$on('logging_state', emitted =>{
            console.log(emitted);
            
            switch (emitted.state) {
                case 'logging':
                    this.$swal({
                        title: 'Logging in...',
                        onOpen: () => {
                            this.$swal.showLoading()
                        },
                        text:'Please wait~',
                        showConfirmButton: false,
                        allowOutsideClick: false
                    });
                    this.fromLogin = true;
                    break;
                case 'logged':
                    this.$swal.close();
                    this.$toasted.show("You have logged in", { 
                        action : {
                            text : 'Got it!',
                            onClick : (e, toastObject) => { toastObject.goAway(0);  }
                        },
                        theme: "outline", 
                        position: "top-right", 
                        duration : 5000
                    });
                    this.$router.push('/')
                    break;
                case 'failed':
                    this.$swal.close();
                    this.$swal('Oops','Login Failed','error');
                    break;
                case 'error':
                    this.$swal.close();
                    this.$swal('Unexpected error occured!','Check your connection, and please reload the page','error');
                    break;
                default:
                    console.log('Critical error in navbar swithcase : '+emitted);
                    console.log(emitted);
                    
                    break;
            }
        })
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
                    this.UserData.name = 'Logging out';
                    userCredential.logout()
                    .then(res=>{
                        this.isLogged = false;
                        this.$router.push({ name: 'Login'})
                        this.$toasted.show("You have logged out", { 
                            action : {
                                text : 'Got it!',
                                onClick : (e, toastObject) => { toastObject.goAway(0);  }
                            },
            
                            theme: "outline", 
                            position: "top-right", 
                            duration : 5000
                        });
                        this.UserData.name = '';
                        this.isLogged = false;
                    })
                    .catch(res=>{
                        console.err(res)
                    });
                }
            })
        },
        checkIfIsLogged () {
            userCredential.verify()
            .then(res =>{
                console.log('Verify Response : ' + res);
                if(res){
                    if(!userCredential.credential.name){
                        this.UserData.name = 'Getting User...';
                        userCredential.getInfo()
                        .then(res =>{
                            console.log(userCredential.credential.name);
                            this.UserData.name =  userCredential.credential.name.replace(/ .*/,'');
                        });
                    }
                    else{
                        this.UserData.name = userCredential.credential.name.replace(/ .*/,'');
                    }
                }
                if(this.fromLogin){
                    this.fromLogin = false;
                    this.$bus.$emit('logging_state',{ 'state' : 'logged'});
                }
                this.isLogged = res ? true : false;
            })
            .catch(res=>{
                console.error(res);
                this.$bus.$emit('logging_state',{ 'state' : 'error' })
            });
        }

    }
}
</script>
<style scoped>
.navbars{
    background-color:lightcyan;
}
</style>




