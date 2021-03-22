<template>
  <div>
    <h1>Hello world!!!</h1>
    <div v-for="user in users" :key="user._id">
      <p>{{ user.username }}</p>
    </div>
    <!-- <p>{{allUsers}}</p> -->
  </div>
</template>

<script>
import { mapState /*, mapGetters */ } from 'vuex'

export default {
  async fetch({ store, error }) {
    try {
      await store.dispatch('user/loadAllUsers')
    } catch (e) {
      error({
        statusCode: 503,
        message:
          'Unable to fetch event at this time. Please try again. USE TO THIS (i18n)'
      })
    }
  },
  head() {
    return {
      title: `${this.users[0].username} - shown`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.users[0]._id
        }
      ]
    }
  },
  computed: {
    ...mapState('user', ['users']) /*,
    ...mapGetters('user',['allUsers']) */
  }
}
// "getters" is the same "computed" in vue and "state" is the same "data"
</script>

<style lang="scss" scoped></style>
