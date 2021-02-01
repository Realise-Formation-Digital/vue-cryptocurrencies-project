<template>
  <div>

<v-toolbar dense>
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
            to="/HelloWorld">
            HelloWorld
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

    <!-- el html que está aquí se va a repetir en cada página, <header> 
    <h1>Hello!</h1>
    <p>
      <router-link to="/Beer">Go to Beer!!!!</router-link>
    </p>
    <br>
    <p>
      <router-link to="HelloAlicia">Go to HelloAlicia!!!!</router-link>
    </p>
    <br>
    <p>
      <router-link to="HelloWorld">Go to HelloWorld!!!!</router-link>
    </p>
    <br>
    <p>
      <router-link to="/">Go to Home!!!!</router-link>
    </p>     -->
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>

</style>
