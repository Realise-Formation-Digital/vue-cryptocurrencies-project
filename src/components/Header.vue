<template>
  <div>
      <v-toolbar
         flat
         title
         padless
           class="indigo lighten-1" 
      >

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Cryptocurrency</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn
            depressed
            class="indigo lighten-1" 
            to="/">
            Home Page
        </v-btn>    
       <v-spacer></v-spacer>
        <v-btn
            depressed
            class="indigo lighten-1" 
            to="/HelloAlicia">
            About Us
        </v-btn>   
        <v-spacer></v-spacer>
        <v-btn
            depressed
            class="indigo lighten-1" 
            to="/Information">
            Information
        </v-btn>  
        <v-spacer></v-spacer>
        <v-btn
            depressed
            class="indigo lighten-1" 
            to="/Crypto">
            Crypto
        </v-btn>      
        <v-spacer></v-spacer>
        <v-btn
           depressed
            class="indigo lighten-1" 
            to="/BitcoinApi">
            List Page
        </v-btn>      
        <v-spacer></v-spacer>
        <v-btn
           depressed
            class="indigo lighten-1" 
            to="/Apidecoinpaprika">
            Api-Coinpaprika
        </v-btn>     
      
    </v-toolbar>

  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>

<style>
 v-app-bar-nav-icon{
    background-color:#3F51B5;
 }
</style>



