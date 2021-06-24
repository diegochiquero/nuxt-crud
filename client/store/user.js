import ApiService from '@/services/api.service'

export const state = () => ({
  users: []
})

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  NEW_USER(state, user) {
    state.users.unshift(user)
  },
  ELIMINATE_USER(state, id) {
    state.users = state.users.filter((user) => user._id !== id)
  },
  UPDATE_USERS(state, updUser) {
    const index = state.users.findIndex((user) => user._id === updUser._id)
    if (index !== -1) {
      state.users.splice(index, 1, updUser)
    }
  }
}

export const actions = {
  async loadAllUsers({ commit }) {
    const response = await ApiService.fetchUsers()
    commit('SET_USERS', response.data.user)
  },
  async addUser({ commit }, user) {
    const response = await await ApiService.sumUpUser(user)
    commit('NEW_USER', response.data.user)
  },
  async deleteUser({ commit }, id) {
    await ApiService.removeUser(id)
    commit('ELIMINATE_USER', id)
  },
  async updateUser({ commit }, updUser) {
    const response = await ApiService.actualize(updUser)
    commit('UPDATE_USERS', response.data.user)
  }
}

export const getters = {
  allUsers: (state) => state.users
}
