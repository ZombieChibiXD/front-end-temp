<template>
  <div id="app">   
    <div class="main-container">
      <!-- Navbar -->
      <div id="Nav">
        <Navbar/>
      </div>
      <!-- ./Navbar -->
      <div class="Messages">
        <Messages lists="msgs" />
      </div>

      <!-- Content -->
      <section> 
        <div class="container">
          <router-view/>
        </div>
      </section>
      <!-- ./Content -->

      <!-- Footer -->
      <!-- ./Footer -->
    </div>
    <Footers />

  </div>
  
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

/* Begin Costum CSS */
* {
 box-sizing: border-box;
}
*:before,
*:after {
 box-sizing: border-box;
}
html,
body {
 height: 100%;
 position: relative;
}
.main-container {
  background-color: #f5f5f5;
  min-height: 100vh; /* will cover the 100% of viewport */
  /* display: block;
  position: relative;
  margin-bottom: 220px;
  position: relative;
  z-index: 2; */
  /* padding-bottom: 5vh; height of your footer */ 
  width: 100%;
  margin-bottom: 40vh;
  position: relative;
  z-index: 2;
}
footer {
 position: absolute;
 bottom: 0;
 width: 100%;
}
.container{
  min-height: 91vh;
  background-color: rgb(255, 255, 255);
}
/* End Costum CSS */

</style>

<script>

import Navbar from '@/components/layout/Navbar.vue'
import Footers from '@/components/layout/Footers.vue'
import Messages from '@/components/layout/Messages.vue'
export default {
  components:{
    Navbar, Footers, Messages
  }
}
</script>

