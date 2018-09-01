<template>
  <div id="app">
    {{ data }}
    <div>
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
