import { api } from '../config'

export default {
  LOAD_VEHICLES ({ commit }) {
    return this.$http.get(api('vehicles')).then(response => response.json()).then(response => {
      console.log('vehicles', response)
      commit('SET_VEHICLES', response)
      return response
    })
  },

  ADD_VEHICLE ({ dispatch }, vehicle) {
    return this.$http.post(api('vehicle'), vehicle).then(response => response.json()).then(response => {
      console.log('vehicle:add', response)
      return dispatch('LOAD_VEHICLES')
    })
  },

  REMOVE_VEHICLE ({ dispatch }, { license_plate }) {
    return this.$http.delete(api(`vehicle/${license_plate}`)).then(response => response.json()).then(response => {
      console.log('vehicle:remove', response)
      return dispatch('LOAD_VEHICLES')
    })
  }
}
