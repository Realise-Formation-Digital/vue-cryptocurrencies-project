<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <p><router-link to="/">Go to  Home!!!!</router-link></p>

    <p><router-link to="/Beer">Go to Beer!!!!</router-link></p>

    <p><router-link to="/BitcoinApi">Api Bitcoin </router-link></p>

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
