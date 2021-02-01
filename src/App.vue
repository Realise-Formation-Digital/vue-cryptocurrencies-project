
<template>
  <v-app>
    <Header/>
    <Home/>
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
    Footer,
    Home
  }
}
</script>

<style>

</style>
