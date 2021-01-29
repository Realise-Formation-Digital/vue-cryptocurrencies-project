<template>
    <div>
        <h1>Page cours du Bitcoin</h1>

        {{fetchApi()}}
        <!--
        <h2>Nom de la crypto : {{ cryptoName}}</h2>

         <div v-for="(bpi ,index) in cryptoBpi" :key="index">
            <p> 
            Bpi: {{bpi.code}}
            <br>
            Description: {{bpi.description}}         
            </p> 
        </div>
        -->
<v-card>
    <!--
    <v-card-title>
        <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        >
        </v-text-field>
    </v-card-title>
    -->
    <v-data-table
    :headers="headers"
    :items="desserts"
    :search="search"
    >
        <p>hello world</p>
        
    </v-data-table>
</v-card>

        <!--
        <template>
            <div>
                <v-data-table
                :headers="headers"
                :items="desserts"
                item-key="name"
                class="elevation-1"
                :search="search"
                :custom-filter="filterOnlyCapsText"
                >
                <template v-slot:top>
                    <v-text-field
                    v-model="search"
                    label="Search (UPPER CASE ONLY)"
                    class="mx-4"
                    ></v-text-field>
                </template>
                <template v-slot:body.append>
                    <tr>
                    <td></td>
                    <td>
                        <v-text-field
                        v-model="calories"
                        type="number"
                        label="Less than"
                        ></v-text-field>
                    </td>
                    <td colspan="4"></td>
                    </tr>
                </template>
                </v-data-table>
            </div>
        </template>
        -->
    </div>    
</template>

<script>
export default {
    name: 'BitcoinApi',
    data(){
        return {
            cryptoName: "",
            cryptoBpi : []
        }
    },
    methods: {
        async fetchApi(){
            try {       
                // prendre le resultat de l'api
                const axios = require("axios");
                const result = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
                this.cryptoName = result.data.chartName
                //console.log("Api Bitcoin", result);
                this.cryptoBpi = result.data.bpi
                console.log("crypto bpi", this.cryptoBpi.EUR);
            } catch (error) {
                console.log("Erreur:", error);    
            }
        }
    }
}
</script>

<!--
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
-->

<style scoped>

</style>

