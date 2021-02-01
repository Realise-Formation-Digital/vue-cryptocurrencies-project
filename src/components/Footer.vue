<template>
  <div>
    <v-footer
        padless
        class="#3F51B5"
    >
      <v-card
          flat
          tile
          class="indigo lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
         <p> Une monnaie numérique dans laquelle les transactions sont vérifiées et les enregistrements conservés par un système décentralisé utilisant la cryptographie, plutôt que par une autorité centralisée.</p>
         <p>"Les crypto-monnaies décentralisées telles que le bitcoin fournissent désormais un débouché pour la richesse personnelle qui est au-delà de la restriction et de la confiscation"</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
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

