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
                  <div class="btn btn-secondary guest-btn" @click="loadVehicles">
                      <span>Refresh</span>
                      <loader class="absolute" v-if="loaders.loadVehicles" />
                  </div>
                  <div class="add-guest-btn" @click="showAddVehicleModal">
                      <span>Add Vehicle</span>
                  </div>
              </div>
          </div>
          <div class="guest-list-table-section">
            <v-client-table :data="tableData" :columns="columns" :options="options">
              <template slot="edit" slot-scope="props">
                <span class="edit-icon"></span>
              </template>
              <template slot="remove" slot-scope="props">
                <div class="text-center">
                  <span class="remove-icon" title="Remove this Vehicle" @click="removeVehicle(props.row)"></span>
                </div>
              </template>
              <template slot="h__remove">
                <span></span>
              </template>
            </v-client-table>
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
  import Loader from './partials/Loader';
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
      AuthVerification,
      Loader
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
        columns: [ 'id', 'owner', 'reg_no', 'remove' ],
        loaders: {
          loadVehicles: false,
          removeVehicle: false
        }
      }
    },
    methods: {
      showAddVehicleModal () {
        EventBus.$emit('modal-add-vehicle:show')
      },
      loadVehicles () {
        this.loaders.loadVehicles = true
        return this.$store.dispatch('LOAD_VEHICLES').then(response => {
          this.loaders.loadVehicles = false
        }).catch(err => {
          console.error('vehicles', err)
          this.loaders.loadVehicles = false
        })
      },
      removeVehicle ({ reg_no }) {
        if (confirm('Are you sure you want to remove this vehicle?')) {
          this.loaders.removeVehicle = true
          return this.$store.dispatch('REMOVE_VEHICLE', { license_plate: reg_no }).then(response => {
            this.loaders.removeVehicle = false
          }).catch(err => {
            console.error('vehicles:remove', err)
            this.loaders.removeVehicle = false
          })
        }
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

  .loader.absolute {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  .guest-btn {
    display: inline-block;
    position: relative;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    color: #ffffff;
    -webkit-box-shadow: 0 4px 10px 0 rgba(199, 218, 255, 0.5);
    box-shadow: 0 4px 10px 0 rgba(199, 218, 255, 0.5);
    text-transform: capitalize;
    width: 10rem;
    height: 3rem;
    line-height: 1rem;
    text-align: center;
    border-radius: .3rem;
    padding: 1rem;
  }
</style>


<style lang="scss" src="./Dashboard.scss">

</style>

