<template>
  <div id="app">
    <Header></Header>
    <!-- <router-link to="/home"></router-link> -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show||$route.path=='/home'"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
     // 将其放入App.vue中，只向服务器请求一次
      this.$store.dispatch('categoryList');
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
