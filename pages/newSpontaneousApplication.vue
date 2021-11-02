<template>
  <form>
    <v-row>
      <v-col
        cols='12'
        md='4'
      >
        <v-text-field
          v-model="date"
          :error-messages="dateErrors"
          label="Date"
          required
          @input="$v.date.$touch(), disablingSubmit()"
          @blur="$v.date.$touch()"
        ></v-text-field>
      </v-col>
      <v-col
        cols='12'
        md='4'
      >
        <v-text-field
          v-model="entreprise"
          :error-messages="entrepriseErrors"
          label="Entreprise"
          required
          @input="$v.entreprise.$touch(), disablingSubmit()"
          @blur="$v.entreprise.$touch()"
        ></v-text-field>
      </v-col>
      <v-col
        cols='12'
        md='4'
      >
        <v-text-field
          v-model="poste"
          :error-messages="posteErrors"
          label="Poste"
          required
          @input="$v.poste.$touch(), disablingSubmit()"
          @blur="$v.poste.$touch()"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols='12'
        md='4'
      >
        <v-text-field
          v-model="contact"
          :error-messages="contactErrors"
          label="Contact"
          required
          @input="$v.contact.$touch(), disablingSubmit()"
          @blur="$v.contact.$touch()"
        ></v-text-field>
      </v-col>
      <v-col
        cols='12'
        md='4'
      >
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="Email"
          required
          @input="$v.email.$touch(), disablingSubmit()"
          @blur="$v.email.$touch()"
        ></v-text-field>
      </v-col>
      <v-col
        cols='12'
        md='4'
      >
        <v-text-field
          v-model="telephon"
          :error-messages="telephonErrors"
          label="Numéro de téléphone"
          required
          @input="$v.telephon.$touch(), disablingSubmit()"
          @blur="$v.telephon.$touch()"

        ></v-text-field>
      </v-col>



    </v-row>
    <v-textarea
      v-model='coverLetter'
      filled
      auto-grows
    >
    </v-textarea>

    <v-btn
      class="mr-4"
      :disabled="disabled"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
    <v-snackbar
      :timeout="3000"
      :value="snackbar"
      absolute
      bottom
      outlined
      color="success"
    >
      Candidature spontanée ajoutée!
    </v-snackbar>
  </form>
  
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      date: { required },
      entreprise: { required },
      contact: { required },
      poste: { required },
      email: { required, email },
      telephon: { required }
    },

    data () {
      return {
        date: '',
        entreprise: '',
        poste: '',
        contact: '',
        email: '',
        telephon:'',
        coverLetter: '',
        snackbar: false,
        disabled: true
      }
    },

    computed: {
      posteErrors () {
        const errors = []
        if (!this.$v.poste.$dirty) return errors
        !this.$v.poste.required && errors.push('Ce champ doit être rempli.')
        return errors
      },
      contactErrors () {
        const errors = []
        if (!this.$v.contact.$dirty) return errors
        !this.$v.contact.required && errors.push('Ce champ doit être rempli.')
        return errors
      },
      dateErrors () {
        const errors = []
        if (!this.$v.date.$dirty) return errors
        !this.$v.date.required && errors.push('Ce champ doit être rempli.')
        return errors
      },
      entrepriseErrors () {
        const errors = []
        if (!this.$v.entreprise.$dirty) return errors
        !this.$v.entreprise.required && errors.push('Ce champ doit être rempli.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.required && errors.push('Ce champ doit être rempli.')
        return errors
      },
      telephonErrors () {
        const errors = []
        if (!this.$v.telephon.$dirty) return errors
        !this.$v.telephon.required && errors.push('Ce champ doit être rempli.')
        return errors
      }
      
    },

    methods: {
      disablingSubmit () {
        if (!this.$v.$invalid) {
          this.disabled = false
        } else {
          this.disabled = true
        }

      },
      submit () {
        const newSpontaneousApplication = {
        date: this.date,
        entreprise: this.entreprise,
        poste: this.poste,
        contact: this.contact,
        email: this.email,
        telephon:this.telephon,
        coverLetter: this.coverLetter
        }

        this.$v.$touch()
        if(!this.$v.$invalid){
          this.$store.dispatch('addToDB', newSpontaneousApplication)
          this.snackbar = true
          this.clear()
        }
      },
      clear () {
        this.$v.$reset()
        this.date = ''
        this.entreprise = ''
        this.poste = ''
        this.contact = ''
        this.email = ''
        this.telephon = ''
        this.coverLetter = ''
      },
    },
  }
</script>