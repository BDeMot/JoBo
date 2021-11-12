<template>
<div>
  <div id='export' class='float-right'>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            >
            <v-icon>
              mdi-menu
            </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-if='!applicationList.length == 0' link>
              <v-list-item-title @click='download'>
                  <v-icon>
                    mdi-download
                  </v-icon>
                Exporter BDD au format .json
              </v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title @change='upload'>
                <label for="file-upload" class="custom-file-upload">
                  <v-icon>
                  mdi-upload
                  </v-icon>
                    Importer BDD au format .json
                </label>
                <input id="file-upload" type="file" accept='.json'/>
              </v-list-item-title>
            </v-list-item>
      </v-list>
    </v-menu>

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
    class='addNewSponApp'
    color='blue'
    dark
    x-large
    ripple
    to='/newspontaneousapplication'
    >
    <v-icon>
      mdi-plus
    </v-icon>
      Candidature Spontanée
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
      },
      upload (event) {
        const reader = new FileReader()
        reader.addEventListener('loadend', () => {
          const importedDB = JSON.parse(reader.result)

          const underscoreRemover = x => x.split('_')[1]  // TODO : please, fix this nasty thingy thing from deeper hell

          importedDB.forEach(sponApp => {                 // this 
            Object.keys(sponApp).forEach(key => {         //
              const val = sponApp[key]                    //
              delete sponApp[key]                         //
              sponApp[underscoreRemover(key)] = val       //
            })
            this.$store.dispatch('addToDB', sponApp)
          })
        })
        reader.readAsText(event.target.files[0])

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

  #file-upload{
    display: none;
  }

  .custom-file-upload{
    cursor: pointer;
  }

  .addNewSponApp{
    position: absolute;
    top: 30vh;
    left: 50%;
    transform: translateX(-50%);
  }

</style>