<template>
  <div class="hello">
   <h1>Beer</h1>
    <button @click="chercherBeer()"> Chercher-Beer </button>

    <div v-for="(truc, index) in fichierjson" :key="index">

        <p> 
          Name: {{truc.name}}
          <br>
          Description: {{truc.description}}
         
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

    }catch(err) {
      console.error(err)
    }
  }

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
