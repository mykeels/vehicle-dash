import { api } from '../config'

export default {
  LOAD_VEHICLES ({ commit }) {
    return this.$http.get(api('vehicles')).then(response => response.json()).then(response => {
      console.log('vehicles', response)
      commit('SET_VEHICLES', response)
      return response
    }).catch(err => {
      console.error('vehicles', err)
      this.loaders.loadVehicles = false
    })
  },

  ADD_VEHICLE ({ dispatch }, vehicle) {
    return this.$http.post(api('vehicle'), vehicle).then(response => response.json()).then(response => {
      console.log('vehicle:add', response)
      return dispatch('LOAD_VEHICLES')
    }).catch(err => {
      console.error('vehicle:add', err)
    })
  }
}
