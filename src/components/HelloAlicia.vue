<template>
  <div class="hello">
    <h1>HelloAlicia</h1>
    <h2 @click="changeName()"> changer le prenom </h2><h2> {{name}} </h2>   
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
        this.name = "Marco"    
      },
      fetchApi () {
          // prendre le resultat depuis recepts
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
