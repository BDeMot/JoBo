<template>
  <div>
    <p class='presentation'>
      canSpo est la première fonctionnalitée d'un projet, JoBo, une PWA pour gérer sa recherche d'emploi. <br>
          canSpo est elle-même en cours de développement. Si vous souhaitez rapporter un bug, apporter une idée ou suggérer une amélioration,
          n'hésitez pas à laisser une Issue sur le <a href='https://github.com/BDeMot/JoBo'>GitHub du projet.</a>

    </p>
    <v-dialog
      v-model="dialog"
      width="500"
    >

      <v-card>
        <v-card-title class="text-h5 grey ">
          canSpo alpha
        </v-card-title>

        <v-card-text>
          <br>
          MAJ - 9/11/2021 
          <br>
          <br>
          Nouvelles features :
          <ul>
            <li>Dark/Light Mode</li>
            <li>Import/Export de la BDD en format .json</li>
          </ul>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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

<style lang='scss' scoped>
  .presentation {
    width: 60%;
    margin: auto;
    margin-top: 30vh;

  }

</style>