<template>
    <router-view/>
</template>
<script>
// import $ from 'jquery'
// import  '@/assets/js/app.js'
// import  '@'
export default {
  mounted(){
    // console.log($('.navbar-item'))
  }
}
</script>

<style lang="css">
/* @import "../src/assets/css/bootstrap.min.css"; */
/* @import "../src/assets/css/app.css"; */
/* @import "../src/assets/css/swiper.min.css"; */
/* @import "../src/assets/css/iconfont.css"; */
</style>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
