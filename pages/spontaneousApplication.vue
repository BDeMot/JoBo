<template>
  <div class='d-flex justify-space-between flex-wrap'>
    <application-card
    v-for='(application) in applicationList'
    :key='application.id' 
    :date='application.date'
    :entreprise='application.entreprise'
    :poste='application.poste'
    />
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

</style>