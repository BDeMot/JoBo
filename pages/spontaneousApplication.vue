<template>
  <div class='d-flex justify-space-between flex-wrap'>
    <application-card
    v-for='(application) in applicationList'
    :key='application.id' 
    :date='application.date'
    :entreprise='application.entreprise'
    :poste='application.poste'
    />
    <v-btn 
    v-if='applicationList.length == 0'
    color='blue'
    dark
    x-large
    ripple
    to='/newspontaneousapplication'
    >
      Ajoutez une Candidature Spontanée
    </v-btn>
  </div>
</template>

<script>
  import applicationCard from '../components/applicationCard.vue'

  export default {
    components : {
      applicationCard
    },
    computed: {
      applicationList() {
        return this.$store.state.listOfSpontaneousApplication
      }
    },
    mounted() {
      this.$store.dispatch('getFromDB')
    }
  }
</script>

<style lang="scss" scoped>
  div .v-card{
    margin: 10px;
  }

  .v-btn {
    margin: auto;
    margin-top: 30vh;
  }

</style>