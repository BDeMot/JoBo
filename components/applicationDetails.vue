<template>
  <v-row justify="center">
    <v-dialog
      v-model='dialog'
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Ouvrir
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Candidature Spontanée</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Date"
                  required
                  :value='spontaneousApplicationDetails.date'
                  readonly
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Entreprise"
                  :value="spontaneousApplicationDetails.entreprise"
                  readonly
                > </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Poste"
                  :value='spontaneousApplicationDetails.poste'
                  readonly
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Contact"
                  required
                  :value='spontaneousApplicationDetails.contact'
                  readonly
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Email"
                  :value='spontaneousApplicationDetails.email'
                  readonly
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Numéro de téléphone"
                  :value='spontaneousApplicationDetails.telephon'
                  readonly
                ></v-text-field>
              </v-col>
              <v-textarea
                filled
                auto-grows
                :value='spontaneousApplicationDetails.coverLetter'
                readonly
              >
    </v-textarea>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
            <v-btn
            color="red darken-1"
            text
            @click='deleteThis'
          >
            Supprimer
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click='dialog = false'
          >
            Fermer
          </v-btn>
          <!-- <v-btn
            color="blue darken-1"
            text
            @click='updateInDB'
          >
            Enregistrer
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

  export default {
    name: 'ApplicationDetails',
    data() {
      return {
        spontaneousApplicationDetails : {},
        dialog: false
        
      }
    },
    mounted() {
      const filterThisSponApp = this.$store.state.listOfSpontaneousApplication.filter(current => current.id === this.$parent.$parent.$vnode.key)
      this.spontaneousApplicationDetails = filterThisSponApp[0]
    },
    methods: {
      deleteThis() {
        this.$store.dispatch('deleteInDB', this.$parent.$parent.$vnode.key)

      }
    }
  }
</script>