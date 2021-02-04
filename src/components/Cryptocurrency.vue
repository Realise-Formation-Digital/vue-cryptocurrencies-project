<template>
    <div class="Cryptocurrency">
       <p><v-btn to="/HomePageKilian">Retourn</v-btn></p>
      <br>
      <p><h1>Plateforme de Cryptomonnaies</h1><p><br>

       <img src="../assets/CoinMarketCap.jpg" alt="">
     
    <!--  <br><p><v-btn href="https://coinmarketcap.com/fr/"></v-btn></p> -->
     <p> <v-btn
          class="mx-4 red--text"
          icon
          href="https://coinmarketcap.com/fr/"
        >
          <v-icon size="24px">
            Coin Market Cap
          </v-icon>
      </v-btn>
    </p>
    
    </div>
</template>

<script>
export default {
  name: 'Cryptocurrency'
}
</script>