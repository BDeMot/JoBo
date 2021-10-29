<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >

    <v-card>
      <v-card-title class="text-h5 grey ">
        canSpo alpha
      </v-card-title>

      <v-card-text>
        canSpo est la première fonctionnalitée d'un projet, JoBo, une PWA pour gérer sa recherche d'emploi. <br>
        canSpo est elle-même en cours de développement. Si vous souhaitez rapporter un bug, ou suggérer une amélioration,
        merci de laisser une Issue sur le GitHub du projet.

      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="dialog = false"
        >
          Oui chef!
        </v-btn>
      </v-card-actions>
    </v-card>
    </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        dialog: true,
      }
    },
  }
</script>