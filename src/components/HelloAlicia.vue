<template>
  <div class="hello">
    <h1>Page de Fabian</h1>
    <h2 @click="changeName()"> Click ici </h2>
    <h2> {{ name }} </h2>
    <!-- // al dar click en Hello se cambia el nobre Alicia por Marco -->
  </div>
</template>

<script>
export default {
  name: 'HelloAlicia',
  props: {
    msg: String
  },
  data() {
    return {
      name: "Alicia"
    }
  },
  methods: {
    changeName() {     // funcion que cambia el nombre anterior (Alicia) por un nuevo nombre (Marco)
      this.name = "Fabian"
    },
    fetchApi() {
      // prendre le resultat depuis recepts
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
