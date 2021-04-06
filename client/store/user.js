export const state = () => ({
  users: []
})

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  NEW_USER(state, user) {
    state.users.unshift(user)
  }
}

export const actions = {
  async loadAllUsers({ commit }) {
    const response = await this.$axios.get('/user')
    commit('SET_USERS', response.data.user)
  },
  async addUser({ commit }, user) {
    const response = await this.$axios.post('/users', user)
    commit('NEW_USER', response.data.user)
  } // ,
  // async deleteUser({ commit }, id) {
  //   await this.$axios.delete
  // }
}

export const getters = {
  allUsers: (state) => state.users
}
