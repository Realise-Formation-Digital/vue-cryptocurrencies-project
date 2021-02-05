<template>
  <div id="appk">
<!--<<<<<<< Updated upstream
    <img alt="Vue logo" src="./assets/bitcoin-logo.jpg"> 
    <p> <router-link to="/">Home Page</router-link> </p>
    <p><router-link to="/about-us">About Us</router-link></p>
    <p><router-link to="/bitcoinLive">Bitcoin Live</router-link></p>
      <router-view></router-view> -->
    
    <img alt="Vue logo" src="../assets/bitcoin-logo.jpg" width="700" height="400"><br> <!-- LOGO -->

    <!-- <p> <router-link to="/">Présentation CCS</router-link></p>-->
    <br><p><v-btn to="/PresentationCcs">Présentation CCS</v-btn></p>

    <!-- <p> <router-link to="/Cryptocurrency">Plateforme Cryptomonnaies</router-link></p> -->
    <br><p><v-btn to="/Cryptocurrency">Plateforme Cryptomonnaies</v-btn></p>

    <!-- <p> <router-link to="/bitcoinLive">Bitcoin in Live</router-link></p> -->
    <br><p><v-btn to="/Bitcoinlive">Bitcoin in Live</v-btn></p><br>

  </div>
</template>

<script>

export default {
  name: 'HomePageKilian',
  components: {
  }
}
</script>



 