<template>
  <div id="app">
    {{ data }}
    <p><router-link to="/two">点击跳转two</router-link></p>
    <p><router-link to="/one">点击跳转one</router-link></p>
    <p><router-link to="/two/twos">点击跳转two/twos</router-link></p>
    <div>
      <router-view />
    </div>
    <div >
      <p>{{ count }}</p>
      <button @click="addcount">增加</button>
    </div>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        data: '我是Vue',
        count: this.$store.state.count
      }
    },
    methods: {
      addcount () {
        this.$store.commit('updateCount', 1)
        this.count = this.$store.state.count
      }
    }
  }
</script>

<style scoped>
#app {
  color: red;
}
</style>
