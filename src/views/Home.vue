<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <FafaLink msg="Welcome to Fafa"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FafaLink from '@/components/FafaLink.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    FafaLink
  }
}
</script>
