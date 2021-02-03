<template>
    <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>

        <v-btn
          class="mx-4 white--text"
          icon
          href="https://www.facebook.com/"
        >
          <v-icon size="24px">
            mdi-facebook
          </v-icon>
        </v-btn>

        <v-btn
          class="mx-4 white--text"
          icon
          href="https://twitter.com/"
        >
        <v-icon size="24px">
            mdi-twitter
          </v-icon>
        </v-btn>

        <v-btn
          class="mx-4 white--text"
          icon
          href="https://realise.ch/fr/home-page"
        >
          <v-icon size="24px">
            mdi-home
          </v-icon>
        </v-btn>

        <v-btn
          class="mx-4 white--text"
          icon
          href="https://www.instagram.com/"
        >
          <v-icon size="24px">
            mdi-instagram
          </v-icon>
        </v-btn>
        
      </v-card-text>

     <!-- <button @click="chercherAPI()"> Chercher-Api</button>   -->

      <v-card-text class="white--text pt-0">
      Une monnaie numérique dans laquelle les transactions sont vérifiées et les enregistrements conservés par un système décentralisé utilisant la cryptographie, plutôt que par une autorité centralisée.
      "Les crypto-monnaies décentralisées telles que le bitcoin fournissent désormais un débouché pour la richesse personnelle qui est au-delà de la restriction et de la confiscation"
        
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>

export default {
  name: 'Footer',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-home',
      'mdi-instagram',
    ],
  }),
}


</script>


<style>

</style>

