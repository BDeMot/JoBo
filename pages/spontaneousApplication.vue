<template>
<div>
  <div id='export' class="d-flex justify-space-between">
    <v-btn
    @click='download'>
      Exporter BDD au format .json
    </v-btn>
    <v-btn
    disabled>
      Importer fichier .json
    </v-btn>
  </div>

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
    },
    methods: {
      download () {
        const file = new Blob(
          [JSON.stringify(this.applicationList)],
          { type: 'application/json'}
        )
        const fileURL = URL.createObjectURL(file)

        const linkElement = document.createElement('a')
        linkElement.setAttribute('href', fileURL)
        linkElement.setAttribute('download', `canspo_save${new Date().toISOString().split('.')[0]}`)
        linkElement.click()
      }
    }
  }
</script>

<style lang="scss" scoped>
  div .v-card{
    margin: 10px;
  } 
  
  v-btn {
    margin: auto;
  }

  #export{
    margin-bottom: 10vh;
  }

</style>