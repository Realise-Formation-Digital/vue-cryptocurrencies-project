<template>
   <v-app id="idapp">
    <Header/>
    <v-main>
      <v-container
          fluid
          :fill-height="true">
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  #idapp{
   margin: 0; 
   padding: 0;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale; 
   text-align: center;
   background-color: #8facce;
   min-height: 100vh;
}
</style>
