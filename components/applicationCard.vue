<template>
  <v-card
      class="mx-auto"
      width='250px'
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4 date">
          {{ date }}
        </div>
          <v-list-item-title class="text-h5 mb-1 entreprise">
            {{ entreprise }}
          </v-list-item-title>
          <v-list-item-subtitle class="poste"> 
            {{ poste }} 
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    
    <application-details :key='key' />


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
        default: "",
        type: String
      },
      entreprise: {
        default: "",
        type: String
      },
      poste: {
        default: "",
        type: String
      }

    },
    computed:{
      key() {
        return this.$vnode.key
      }
    }
  }
</script>

<style>
</style>