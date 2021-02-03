<template>
    <div class="Cryptocurrency">

      <h1>Plateforme de Cryptomonnaies</h1>

       <img src="../assets/CoinMarketCap.png" alt="">
     
    <!--  <br><p><v-btn href="https://coinmarketcap.com/fr/"></v-btn></p> -->
     <p> <v-btn
          class="mx-4 white--text"
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