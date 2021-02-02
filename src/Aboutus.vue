<template>
  <div id="Aboutus">
    <img alt="personal image" src="../src/img/cripto_logo.jpg">
    <googleMap msg="Qui sommes nous?"/>
    <formulaire-contact msg="Qui sommes nous?"/>
    <data/>
  </div>


</template>

<script>
import googleMap from './components/googleMap.vue'
import data from './components/formulaireContact.vue'

export default {
  name: 'Aboutus',
  components: {
    googleMap,
  }
}


</script>

<style>
#About-us {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
