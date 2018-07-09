import Vue from 'vue'

export default {
  LOGIN_USER (state, { firstName, lastName, name, email, token }) {
    state.user.firstName = firstName
    state.user.lastName = lastName
    state.user.name = name
    state.user.email = email
    state.token = token

    Vue.http.headers.common.Authorization = token ? ('Bearer ' + token) : null
  }
}
