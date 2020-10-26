<template>
  <div>
    <h5>{{ msg }}</h5>
    <h3>發發網練習</h3>
    <ul>
      <li><router-link to="/index" target="_blank">發發網</router-link><br></li>
      <li><router-link to="/index2" target="_blank">發發網(Ajax Json)</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FafaLink',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
