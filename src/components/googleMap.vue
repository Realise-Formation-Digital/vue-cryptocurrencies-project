<template>
  
  <div class="map">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
    </p>
    <h3>Ou nous trouver</h3>
    <li>
      <ul><a href="-babel" target="_blank" rel="noopener">8, rue Viguet - 1227 les Acacias</a></ul>
      <ul><a href="-babel" target="_blank" rel="noopener">+41(0)223086010</a></ul>
      <ul><a href="-babel" target="_blank" rel="noopener">info@realise.ch</a></ul>
    </li>

    <li>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d690.4682424710675!2d6.128121629000231!3d46.19308647394404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c7b2e1299827b%3A0xb6bbc30dd8e5306f!2sr%C3%A9alise%20-%20magasin%20d&#39;informatique%20d&#39;occasion!5e0!3m2!1sfr!2sfr!4v1612169124356!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </li>

    <h3>Nous sommes aussi present?</h3>
    <ul>
      <!-- Add font awesome icons -->
      <li><a href="https://www.facebook.com/RealiseGeneve" class="fa fa-facebook"></a></li>
      <li><a href="https://www.youtube.com/channel/UC7cMk5JX4utTJEL3zHFnuMw/featured" class="fa fa-youtube"></a></li>
      <li><a href="https://www.linkedin.com/company/r-alise/?originalSubdomain=fr" class="fa fa-linkedin"></a></li>

    </ul>
    <h3>Nous contacter</h3>
    <ul>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: 'googleMap',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
