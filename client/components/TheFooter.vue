<template>
  <v-footer color="white" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="icon in icons"
        :key="icon.src"
        :href="icon.href"
        class="mx-4 py-4"
        icon
        target="_blank"
        :color="icon.color"
      >
        <v-icon size="24px">
          {{ icon.src }}
        </v-icon>
      </v-btn>
      <v-col class="py-4 text-center grey--text text--darken-2" cols="12"
        ><v-layout wrap
          ><v-flex xs12 sm6>
            {{ new Date().getFullYear() }} —
            <span class="grey--text text--darken-2">Nuxt</span>
            <span class="font-weight-light grey--text text--darken-2"
              >crud</span
            ></v-flex
          >
          <v-flex xs12 sm6>
            <span class="font-weight-light grey--text text--darken-2">
              Made with </span
            ><v-icon class="pb-1 ml-1" small color="pink"
              >mdi-cards-heart</v-icon
            >
            <span class="ml-2 font-weight-light grey--text text--darken-2"
              >by</span
            >
            <span class="ml-2"
              ><a href="https://about.me/diegochiquero" target="_blank"
                >Diego Chiquero</a
              ></span
            >
          </v-flex>
        </v-layout>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data: () => ({
    icons: [
      {
        src: 'mdi-facebook',
        href: 'https://www.facebook.com/chiquerodiego',
        color: 'primary'
      },
      {
        src: 'mdi-twitter',
        href: 'https://www.twitter.com/chiquerodiego',
        color: 'blue'
      },
      {
        src: 'mdi-linkedin',
        href: 'https://www.linkedin.com/in/diego-chiquero-mena/',
        color: 'blue darken-2'
      },
      {
        src: 'mdi-github',
        href: 'https://github.com/diegochiquero',
        color: 'secondary'
      }
    ]
  })
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
