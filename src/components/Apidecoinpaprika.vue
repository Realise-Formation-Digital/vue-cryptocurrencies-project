<template>
  <div>
    <div>
    <h2> Api Coinpaprika/exchanges </h2> 
    <br>
  </div>
    
   <!-- <button @click="chercherAPI()"> Chercher-Api</button>    

    <div v-for="(truc, index) in fichierjson" :key="index">  -->

  <table class="table table-striped white blue--text" > 
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(truc, index) in fichierjson" :key="index">
       <th scope="row">{{ truc.name }}</th>  
       <td>{{ truc.description }}</td>      
    </tr>
   </tbody>
</table>


     <!-- <p>
        Name: {{ truc.name }}
        <br>
        Description: {{ truc.description }}
      </p>    -->

    <!-- </div> -->

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
 .table th, .table td {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
.table th {
  text-align: center;
}
.table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
  padding: 8px;
}
</style>
