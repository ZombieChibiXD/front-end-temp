<template>
    <div>
    <b-navbar toggleable="lg" type="dark" class="navbars justify-content-center">
        <b-navbar-brand :to="{name:'Home'}" class="d-flex justify-content-start mr-auto">ThisIsNews.com</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="w-100" is-nav>
            <b-navbar-nav class="w-75 justify-content-center mx-auto">
                <b-nav-item :to="{ name: 'Tag',params: { tagname: 'new' } }" active-class='active disabled'>Newest</b-nav-item>
                <b-nav-item :to="{ name: 'Tag',params: { tagname: 'popular' } }" active-class='active disabled'>Popular</b-nav-item>
                <b-nav-item :to="{ name: 'Tag',params: { tagname: 'entertaiment' } }" active-class='active disabled'>Entertaiment</b-nav-item>
                <b-nav-item :to="{ name: 'Tag',params: { tagname: 'sports' } }" active-class='active disabled'>Sports</b-nav-item>
                <b-nav-item :to="{ name: 'Tag',params: { tagname: 'lifestyle' } }" active-class='active disabled'>Lifestyle</b-nav-item>
                <b-nav-item :to="{ name: 'Tag',params: { tagname: 'politic' } }" active-class='active disabled'>Politic</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item v-if="isLogged === false" :to="{ name: 'Login' }" active-class="active disabled">Login</b-nav-item>
                <b-nav-item v-if="isLogged === false" :to="{ name: 'Register' }" active-class="active disabled">Register</b-nav-item>

                <!-- Modal Component -->
                <b-nav-item-dropdown v-if="isLogged === true" right >
                <!-- Using 'button-content' slot -->
                    <template v-if="isLogged === true" slot="button-content"><em>{{ UserData.name }}</em></template>
                    <b-dropdown-item v-if="isLogged === true" href="#"  >Profile</b-dropdown-item>
                    <b-dropdown-item v-if="isLogged === true && UserData.level<2" :to="{ name:'Admin' }"  >Admin Page</b-dropdown-item>
                    <b-dropdown-item v-if="isLogged === true" @click.prevent="signout">Sign Out</b-dropdown-item>
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
            isLogged:false,
            fromLogin:false,
            checkingLogin:false,
            UserData:{
                name:'',
                level:''
            }
        }
    }, 
    created () {
        this.$bus.$on('logged', () => {
            if(!this.checkingLogin)
                this.checkingLogin = true;
                this.checkIfIsLogged()
        })
        // this.$bus.$on('fromlogin', () => {
        //     
        // })
    },
    mounted(){
        this.$bus.$emit('logged', { 'state' : 'check' });
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
                        if(res == 'trues'){
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
                        }
                        else{
                            this.isLogged = false;
                            this.$router.push({ name: 'Login'})
                        }
                        this.UserData.name = '';
                        this.UserData.level = '';
                        this.UserData.user_image = '';
                    })
                    .catch(res=>{
                        this.UserData.name = '';
                        this.UserData.level = '';
                        this.UserData.user_image = '';
                        this.isLogged = false;
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
                            
                            console.log(res.name);
                            this.UserData.name =  userCredential.credential.name.replace(/ .*/,'');
                            this.UserData.level = userCredential.credential.level;
                            this.UserData.user_image = userCredential.credential.user_image;
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
                this.checkingLogin = false;
            })
            .catch(res=>{
                
                this.isLogged = false;
                console.error(res);
                this.isLogged =  false;
                this.$bus.$emit('logging_state',{ 'state' : 'error' })
                this.checkingLogin = false;
            });
        }

    }
}
</script>

<style scoped>
.navbars{
    background-color: darkkhaki;
}
.menus{
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;
    
}
</style>




