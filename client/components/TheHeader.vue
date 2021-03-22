<template>
  <nav>
    <v-app-bar app elevate-on-scroll class="white">
      <v-row justify="center" no-gutters>
        <v-toolbar-items justify="center" class="hidden-sm-and-down">
          <nuxt-link :to="{ name: 'index' }"
            ><v-btn text color="blue" float class="my-3">Home</v-btn></nuxt-link
          >
          <nuxt-link :to="{ name: 'user' }"
            ><v-btn text color="blue" float class="my-3">Crud</v-btn></nuxt-link
          >
        </v-toolbar-items>
      </v-row>
      <v-menu top offset-y>
        <template #activator="{ on }">
          <v-app-bar-nav-icon
            class="hidden-md-and-up"
            color="blue-grey"
            dark
            v-on="on"
          ></v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item>
            <nuxt-link :to="{ name: 'index' }">
              <v-icon class="mr-2" color="blue lighten-2">mdi-home</v-icon
              ><v-list-item-action-text
                class="blue-grey--text text--darken-2 body-1"
                >Home</v-list-item-action-text
              ></nuxt-link
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <nuxt-link :to="{ name: 'user' }">
              <v-icon class="mr-2" color="teal lighten-1"
                >mdi-account-edit</v-icon
              ><v-list-item-action-text
                class="blue-grey--text text--darken-2 body-1"
                >Crud</v-list-item-action-text
              ></nuxt-link
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </nav>
</template>
<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
