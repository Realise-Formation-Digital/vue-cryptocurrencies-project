<template>
    <div>
        <h1>Page cours du Bitcoin</h1>
   
              
        <v-data-table
        :headers="headers"
        :items="cryptocurrency"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
        >
        </v-data-table>
      
    </div>    
</template>

<script>
export default {
    name: 'BitcoinApi',
    async mounted(){
        await this.fetchApi();
    },
    data(){
        return { 
            page: 1,
            pageCount: 0,
            itemsPerPage: 10,
            headers: [
                {
                    text: 'Chart name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'EURO', value: 'euro'},
                { text: 'GBP', value: 'gbp'},
                { text: 'USD', value: 'usd'},
            ],
            cryptocurrency:[ 
                {
                    name: '',
                    euro: 159,
                    gbp: 6.0,
                    usd: 24,
                }        
            ],
              
        }
    },
    methods: {
        async fetchApi(){
            try {       
                // prendre le resultat de l'api
                const axios = require("axios");
                const result = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
                
                /*
                for (let i = 0; i<data.lengt; i++){
                    const objectToInsert = {
                        name: data[i].name,
                        bpi: data[i].bpi
                    }
                    this.desserts.push(objectToInsert)
                }
                */

                
                console.log(result.data)
                this.cryptocurrency[0].name = result.data.chartName;
                
                this.cryptocurrency[0].euro = result.data.bpi.EUR.rate;
                this.cryptocurrency[0].gbp = result.data.bpi.GBP.rate;
                this.cryptocurrency[0].usd = result.data.bpi.USD.rate;

                console.log("Bitcoin bpi EURO :", result.data.bpi);

            } catch (error) {
                console.log("Erreur:", error);    
            }
        }
    }
}
</script>



<style scoped>

</style>

