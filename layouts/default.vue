<template>
  <v-app dark>
    <v-navigation-drawer
      stateless
      clipped
      permanent
      fixed
      app
      expand-on-hover
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      fixed
      app
    >
      <nuxt-link to='/'>
        <v-toolbar-title v-text="title" />
      </nuxt-link>
      <v-toolbar-items>
        <v-container class='d-flex align-start' fluid>
          <v-icon>
            mdi-white-balance-sunny
          </v-icon>
          <v-switch
            v-model="isDarkMode"
            @change="changeMode"
          ></v-switch>
          <v-icon>
            mdi-moon-waning-crescent
          </v-icon>
        </v-container>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      fixed
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      isDarkMode: false,
      items: [
        {
          icon: 'mdi-note-multiple',
          title: 'Candidatures spontanées',
          to: '/spontaneousapplication'
        },
        {
          icon: 'mdi-plus',
          title: 'Nouvelle candidature',
          to: '/newspontaneousapplication'
        }
      ],
      title: 'canSpo'
    }
  },
  mounted() {
    this.isDarkMode = JSON.parse(localStorage.getItem('darkMode'))
    this.$nuxt.$vuetify.theme.dark = this.isDarkMode // TODO see if we can use watchers when we change the value of this.darkMode
  },
  methods: {
    changeMode() {
      this.$nuxt.$vuetify.theme.dark = this.isDarkMode
      localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode))
    }
  }
}
</script>

<style lang='scss'>
  .v-toolbar__content{
    display: flex;
    align-items: baseline;
    justify-content: space-between;

  }

  .v-toolbar__title{
    text-decoration: none;
  }
</style>