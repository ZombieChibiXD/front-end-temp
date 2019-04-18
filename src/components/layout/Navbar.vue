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
        <b-navbar-nav class="ml-auto">          

            <!-- Modal Component -->
            <b-nav-item :to="{ name: 'login' }" v-if="isLogged === false" active-class="active disabled">Login</b-nav-item>
            <!-- <b-nav-item to="login" v-if="isLogged === false">Login</b-nav-item> -->
            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content"><em>{{ UserData.name }}</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item :to="{ name:'logout' } " @click.prevent="signout" active-class="active disabled">Sign Out</b-dropdown-item>
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
            UserData:{
                name:'Hello'
            }
        }
    }, 
    created () {
        this.$bus.$on('logged', () => {
            this.isLogged = this.checkIfIsLogged()
        })
    },
    methods: {
        signout () {
            userCredential.logout();
            this.isLogged = this.checkIfIsLogged()
            this.$router.push('/')
        },
        checkIfIsLogged () {
            console.log('Checking user');
            
            userCredential.verify()
            .then(res =>{
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




