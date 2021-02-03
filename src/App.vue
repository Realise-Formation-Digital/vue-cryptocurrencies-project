<template>
  <div id="app">
<<<<<<< Updated upstream
    <img alt="Vue logo" src="./assets/bitcoin-logo.jpg"> 
    <p> <router-link to="/">Home Page</router-link> </p>
    <p><router-link to="/about-us">About Us</router-link></p>
    <p><router-link to="/bitcoinLive">Bitcoin Live</router-link></p>
      <router-view></router-view>
=======
    

    <img alt="Vue logo" src="./assets/bitcoin-logo.jpg" width="900" height="600"><br> <!-- LOGO -->

    <!-- <p> <router-link to="/">Présentation CCS</router-link></p>-->
    <br><p><v-btn to="/">Présentation CCS</v-btn></p>


    <!-- <p> <router-link to="/Cryptocurrency">Plateforme Cryptomonnaies</router-link></p> -->
    <br><p><v-btn to="/Cryptocurrency">Plateforme Cryptomonnaies</v-btn></p>


    <!-- <p> <router-link to="/bitcoinLive">Bitcoin in Live</router-link></p> -->
    <br><p><v-btn to="/bitcoinlive">Bitcoin in Live</v-btn></p><br>

      <router-view></router-view>

>>>>>>> Stashed changes
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

 