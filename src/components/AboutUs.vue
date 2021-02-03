<template>
  <div class="bitcoinlive">
      <p><v-btn to="/Crypto">Go to Bitcoinlive</v-btn>  
      <v-btn depressed color = #8facce> </v-btn>
      <v-btn to="/">Retourn</v-btn> </p>
      <iframe width="560" height="315" src="https://coinmarketcap.com/fr/embed" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

   <p> <v-btn
          class="mx-4 white--text"
          icon
          href="https://coinmarketcap.com/fr/"
        >
          <v-icon size="24px">
            coinmarketcap
          </v-icon>
      </v-btn>    
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>