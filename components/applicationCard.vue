<template>
  <v-card
      class="mx-auto"
      max-width="344"
      min-width="344"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4 date">
          {{ date }}
        </div>
          <v-list-item-title class="text-h5 mb-1 entreprise">
            {{ entreprise }}
          </v-list-item-title>
          <v-list-item-subtitle class="poste"> {{ poste }} </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

  <v-card-actions>
  </v-card-actions>
    <application-details key=""

    />
  </v-card>


</template>

<script>
  import applicationDetails from './applicationDetails.vue'

  export default {
    name: 'ApplicationCard',
    components: {
      applicationDetails
    },
    props: {
      date: {
        default: "", // TODO: verify this is correct
        type: String
      },
      entreprise: {
        default: "", // TODO: verify this is correct
        type: String
      },
      poste: {
        default: "", // TODO: verify this is correct
        type: String
      }

    }
  }
</script>

<style>

</style>