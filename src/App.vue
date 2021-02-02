<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/bitcoin-logo.jpg"> 
    <p> <router-link to="/">Home Page</router-link> </p>
    <p><router-link to="/about-us">About Us</router-link></p>
    <p><router-link to="/bitcoinLive">Bitcoin Live</router-link></p>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

 