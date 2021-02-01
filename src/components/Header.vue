<template>
  <div>

     
      <v-toolbar
        padless
        class="#3F51B5"        
      >
      
      <v-app-bar-nav-icon></v-app-bar-nav-icon>



      <v-toolbar-title>Cryptocurrency</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
            to="/">
            Home Page
        </v-btn>    
      <v-spacer></v-spacer>
        <v-btn
            to="/HelloAlicia">
            About Us
        </v-btn>   
        <v-spacer></v-spacer>
        <v-btn
            to="/Crypto">
            Crypto
        </v-btn>      
        <v-spacer></v-spacer>
        <v-btn
            to="/Beer">
            List Page
        </v-btn>       
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
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

</style>
