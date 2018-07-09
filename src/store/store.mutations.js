import Vue from 'vue'
import stor from '../utils/stor'

export default {
  LOGIN_USER (state, { firstName, lastName, name, email, token, picture }) {
    state.user.firstName = firstName
    state.user.lastName = lastName
    state.user.name = name
    state.user.email = email
    state.user.photo = picture
    state.token = token

    Vue.http.headers.common.Authorization = token ? ('Bearer ' + token) : null

    stor.add('access-token', token)
  },

  RESTORE_TOKEN (state) {
    state.token = stor.get('access-token')
  },

  RESET_AUTH (state) {
    stor.remove('access-token')
    state.token = null
    state.user.firstName = null
    state.user.lastName = null
    state.user.name = null
    state.user.email = null
    state.user.photo = null

    Vue.http.headers.common.Authorization = null
  },

  SET_VEHICLES (state, { vehicles }) {
    state.vehicles = vehicles
  }
}
