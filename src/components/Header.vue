<template>
  <div> 
    <!-- el html que está aquí se va a repetir en cada página, <header> --> 
    <h1>Hello!</h1>
    <p>   
      <router-link to="/Beer">Go to Beer!!!!</router-link>
    </p>
    <br>
    <p>
      <router-link to="HelloAlicia">Go to HelloAlicia!!!!</router-link>
    </p>
    <br>
    <p>
      <router-link to="HelloWorld">Go to HelloWorld!!!!</router-link>
    </p>  
    <br>
    <p>
      <router-link to="/">Go to  Home!!!!</router-link>
    </p>        
  </div>
</template>

<script>
  export default {
    name: 'Header'
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
