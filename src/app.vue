<template>
  <div id="app">
    {{ data }}
    <p><router-link to="/two">点击跳转two</router-link></p>
    <p><router-link to="/one">点击跳转one</router-link></p>
    <p><router-link to="/two/twos">点击跳转two/twos</router-link></p>
    <div>
      <router-view />

    </div>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        data: '我是Vue'
      }
    }
  }
</script>

<style scoped>
#app {
  color: red;
}
</style>
