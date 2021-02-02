<template>
  <div>
    <div>
    <h2> Api Coinpaprika/exchanges </h2> 
    <br>
  </div>
    
   <!-- <button @click="chercherAPI()"> Chercher-Api</button>   -->

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
  name: 'Apidecoinpaprika',
  props: {
    msg: String
  },
  data() {
    return {
      fichierjson: []
    }
  },

 async created() {
     await this.chercherAPI()
  },
 
 methods: {

    async chercherAPI() {
      try {
        const axios = require("axios");
        const result = await axios.get("https://api.coinpaprika.com/v1/exchanges");
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
