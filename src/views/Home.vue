<template>
  <div class="container-fluid">
    <button class="btn btn-danger" v-on:click="checkAxios()">Click me</button>
  </div>
</template>

<script>

import post from '@/_services/post.service'

export default {
  name: 'home',
  methods:{
    checkAxios(){
      post.test();
    }
  }
}
</script>

