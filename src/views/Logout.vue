<template>
    <div>
        <h1 class="display-5 mx-auto mt3">Logging Out</h1>
        <div class="someimage mx-auto">Hey</div>
        <a @click="asd()" href="#" class="mx-auto">Click me</a>
    </div>
</template>

<script>
import userCredential from '@/_services/user.service'
export default {
    name:'Logout',
    methods:{
        asd(){
            userCredential.logout();
        }
    }
}
</script>




