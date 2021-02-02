<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Ci-dessous, quelques liens qui vous permettront de naviguer sur les différentes plateformes de Cryptomonnaies
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>

    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://www.youtube.com/watch?v=bJhT9-9uM3M&t=1s" target="_blank" rel="noopener">Crypto Conseil Suisse</a></li>
      <li><a href="https://www.coingecko.com/fr" target="_blank" rel="noopener">Coin Gecko</a></li>
      <li><a href="https://www.coingecko.com/fr/pi%C3%A8ces/bitcoin" target="_blank" rel="noopener">Bitcoin Price</a></li>
      <li><a href="https://bitcoin.org/fr//vuejs" target="_blank" rel="noopener">Bitcoin.org</a></li>
      <li><a href="https://bitcoinity.org/.vuejs.org" target="_blank" rel="noopener">Bitcoin LIVE</a></li>
    </ul>


    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
