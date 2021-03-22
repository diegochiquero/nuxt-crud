<template>
  <div class="home">
    <v-container class="my-16 pt-12">
      <v-row class="mt-1">
        <v-col
          v-for="logo in logos"
          :key="logo.alt"
          cols="12"
          md="2"
          justify="center"
          align="center"
        >
          <v-img
            max-heigth="250"
            max-width="250"
            :alt="logo.alt"
            :src="logo.src"
          />
        </v-col>
      </v-row>
    </v-container>
    <h1 class="font-weight-light display-2" justify="center" align="center">
      Welcome to NUXT CRUD
    </h1>
    <h2 class="font-weight-thin" justify="center" align="center">
      MongoDB + Express + Vue + NuxtJS + NodeJS + Vuetify + Docker
    </h2>
    <h3 class="subtitle-1 mb-12" justify="center" align="center">
      Frontend / Backend
    </h3>
  </div>
</template>

<script>
// Below images are in "static" folder, no need to specify it

export default {
  name: 'Home',
  data: () => ({
    logos: [
      { src: '/mongodb-logo.png', alt: 'mongo logo' },
      { src: '/expressjs-logo.png', alt: 'express logo' },
      { src: '/vue-logo.png', alt: 'vue logo' },
      { src: '/nuxt-logo.png', alt: 'nuxtjs logo' },
      { src: '/node-logo.png', alt: 'node logo' },
      { src: '/vuetify-logo.png', alt: 'vuetify logo' }
    ]
  })
}
</script>
