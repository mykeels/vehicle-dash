<template>
   <div class="Dashboard">
      <Navigation />

      <div class="guest-list-container">
          <div class="guest-list-top-section">
              <div class="guest-list-table-title">
                  <span class="table-title-text">Vehicles</span>
                  <div class="line">
                      <span class="long-line"></span>
                      <span class="short-line"></span>
                  </div>
              </div>
              <div class="add-guest-container">
                  <div class="add-guest-btn" @click="showAddVehicleModal">
                      <span>Add Vehicle</span>
                  </div>
              </div>
          </div>
          <div class="guest-list-table-section">
            <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
          </div>
          <Add-Vehicle-Modal />
          <Auth-Verification />
      </div>

    <Footer />
  </div>
</template>

<script>
  import Footer from './partials/Footer';
  import Modal from './partials/Modal';
  import Navigation from './partials/Navigation';
  import AddVehicleModal from './Add-Vehicle-Modal';
  import AuthVerification from './Auth-Verification'
  import { EventBus } from '../EventBus'
  import { api } from '../config'

  export default {
    name: 'Dashboard',
    components: {
      Footer,
      Modal,
      Navigation,
      AddVehicleModal,
      AuthVerification
    },
    computed: {
      options () {
        return {

        }
      },
      tableData () {
        return this.$store.state.vehicles
      }
    },
    data () {
      return {
        columns: [ 'id', 'owner', 'reg_no' ]
      }
    },
    methods: {
      showAddVehicleModal () {
        EventBus.$emit('modal-add-vehicle:show')
      },
      loadVehicles () {
        this.$http.get(api('vehicles')).then(response => response.json()).then(response => {
          console.log('vehicles', response)
          this.$store.commit('SET_VEHICLES', response)
        }).catch(err => {
          console.error('vehicles', err)
        })
      }
    },
    mounted () {
      this.loadVehicles()
    }
  }
</script>

<style>
  .modal-add-vehicle .modal-container {
    width: 60%;
  }
</style>


<style lang="scss" src="./Dashboard.scss">

</style>

