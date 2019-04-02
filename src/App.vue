<template>
  <div id="app">   
    <div class="main-container">
      <!-- Navbar -->
      <div id="nav">
        <Navbar/>
      </div>
      <!-- ./Navbar -->

      <!-- Content -->
      <section> 
        <div class="container">
          <router-view/>
        </div>
      </section>
      <!-- ./Content -->

      <!-- Footer -->
      <Footers />
      <!-- ./Footer -->
    </div> 
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
 background-color: #f5f5f5;
}
.main-container {
 min-height: 100vh; /* will cover the 100% of viewport */
 overflow: hidden;
 display: block;
 position: relative;
 padding-bottom: 5vh; /* height of your footer */
}
footer {
 position: absolute;
 bottom: 0;
 width: 100%;
}
.container{
  min-height: 89vh;
  background-color: rgb(255, 255, 255);
}
/* End Costum CSS */

</style>
<script>
import Navbar from '@/views/layout/Navbar.vue'
import Footers from '@/views/layout/Footers.vue'
export default {
  components:{
    Navbar, Footers
  }
}
</script>

