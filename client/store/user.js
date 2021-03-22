export const state = () => ({
  users: []
})

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  }
}

export const actions = {
  async loadAllUsers({ commit }) {
    const response = await this.$axios.get('/user')
    const users = response.data.user
    // eslint-disable-next-line no-console
    console.log(users)
    commit('SET_USERS', users)
  }
}

export const getters = {
  allUsers: (state) => state.users
}
