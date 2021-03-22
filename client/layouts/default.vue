<template>
  <v-app>
    <TheHeader />
    <v-main class="white">
      <Nuxt />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheFooter from '../components/TheFooter'
import TheHeader from '../components/TheHeader'

export default {
  components: {
    TheFooter,
    TheHeader
  }
}
</script>

<style></style>
