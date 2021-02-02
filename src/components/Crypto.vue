<template>
    <div class="bitcoinlive">
      <h1> Bitcoin live price </h1>
      <p><v-btn to="/about-us">Go to About Us</v-btn>
      <v-btn depressed> </v-btn>
      <v-btn to="/">Retourn</v-btn></p>
      <br>
      <iframe src="https://bitcoinity.org"
     width="1500" height="800"
      ></iframe>
    </div>
</template>

<script>
export default {
  name: 'Bitcoinlive'
}
</script>







