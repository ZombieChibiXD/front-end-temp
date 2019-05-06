<template>
    <div class="container-fluid">
        <div>&nbsp;</div>
        <a @click="asd()" href="#" class="mx-auto my-auto btn btn-lg btn-danger">Click me to log out!</a>
    </div>
</template>

<script>
import userCredential from '@/_services/user.service'
export default {
    name:'Logout',
    methods:{
        asd(){
            userCredential.logout();
            userCredential.clean();
            this.$bus.$emit('logged', { 'state' : 'out' });
            this.$router.push({name:'Home'})
        }
    }, 
    beforeRouteEnter(to,from,next){
            userCredential.logout();
            userCredential.clean();
            next({name:'Home'})
    }
}
</script>




