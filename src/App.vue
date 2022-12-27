<template>
  <!--  <nav class="flex justify-around">-->
  <!--    <router-link to="/">Home</router-link> |-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </nav>-->
  <!--  <router-view/>-->
  <Header/>
  <div class="container">
    <header>
    </Header>
    <main>
      <!-- We want main content here -->
    </main>
    <footer>
      <!-- We want footer content here -->
    </footer>
  </div>
</template>

<script>
import Header from './views/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
