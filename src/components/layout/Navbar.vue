<template>
    <div>
    <b-navbar toggleable="lg" class="navbars">
        <b-navbar-brand :to="{name:'home'}">Chibi's Website</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item :to="{ name:'about' } " active-class="active disabled">About</b-nav-item>
            <b-nav-item :to="{ name:'login' } " active-class="active disabled">Sign In</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content"><em>{{ UserData.name }}</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item :to="{ name:'logout' } " active-class="active disabled">Sign Out</b-dropdown-item>
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
    beforeCreate( to , from , next ){
        this.name = 'joko subianto'
        next(( vm ) => {
            vm.UserData.name = 'joko subianto'
        });
        // userCredential.verify()
        // .then(res=>{
        //     if(res){
        //         if(!userCredential.credential.name){
        //             userCredential.getInfo()
        //             .then(success=>{
        //                 if(success){
        //                     next(( vm ) => {
        //                         vm.UserData.name = userCredential.credential.name;
        //                     });
        //                 }
        //             });
        //         }
        //         else{
        //             next(( vm ) => {
        //                 vm.UserData.name = 'joko subianto'
        //             });
        //         }

        //     }
        //     next(( vm ) => {
        //         vm.UserData.name = 'joko subianto'
        //     })
        // });
    },
    data(){
        return {
            UserData:{
                name:'Hello'
            }
        }
    },
}
</script>
<style scoped>
.navbars{
    background-color: rgba(46, 241, 255, 0.61);
}
</style>




