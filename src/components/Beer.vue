<template>
  <div class="hello">
    <div class="hello">
    <p> List page = Page Api de Gaby et tristan </p>
  </div>
    <h1>List page</h1>
    <button @click="chercherBeer()"> Chercher-Api</button>

    <div v-for="(truc, index) in fichierjson" :key="index">

      <p>
        Name: {{ truc.name }}
        <br>
        Description: {{ truc.description }}

      </p>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Beer',
  props: {
    msg: String
  },
  data() {
    return {
      fichierjson: []
    }
  },
  methods: {

    async chercherBeer() {
      try {
        const axios = require("axios");
       const result = await axios.get("https://api.punkapi.com/v2/beers");
        console.log("Resultat", result)
        this.fichierjson = result.data

      } catch (err) {
        console.error(err)
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
