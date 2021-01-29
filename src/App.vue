<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <h1>Hello!</h1>
    <!-- el html que está aquí se va a repetir en cada página  -->
    <p>   
      <router-link to="/Beer">Go to Beer!!!!</router-link>
    </p>
    <p>
      <router-link to="HelloAlicia">Go to HelloAlicia!!!!</router-link>
    </p>
    <p>
      <router-link to="HelloWorld">Go to HelloWorld!!!!</router-link>
    </p>  
    <p>
      <router-link to="/">Go to  Home!!!!</router-link>
    </p>

    <router-view></router-view>

         <!-- <Beer />
         <HelloAlicia/>
         <HelloWorld msg="Welcome to Your Vue.js App"/>  -->
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  // import HelloAlicia from './components/HelloAlicia.vue'
  // import Beer from './components/Beer.vue'

 export default {
    name: 'App',
    components: {
      // HelloWorld,
      //  HelloAlicia,
      // Beer
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
