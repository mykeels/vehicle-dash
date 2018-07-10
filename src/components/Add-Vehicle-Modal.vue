<template>
  <Modal name="add-vehicle" :info="addVehicleModalInfo">
    <template slot="title">
      <div class="col-sm-10">
        <h4 class="modal-title">
          Add Vehicle

        </h4>
      </div>
      <div class="col-sm-2">
        <loader />
      </div>
    </template>
    <div class="action-form-container">
      <div class="form-container">
        <form name="add-vehicle-form" ref="addVehicleForm" @submit="submit">
          <div class="form-group">
            <label class="">Owner's Email</label>
            <input v-model="form.email" placeholder="john.doe@andela.com" type="email" class="form-control" required>
          </div>
          <div class="form-group">
            <label class="">License Plate No.</label>
            <input v-model="form.license_plate" placeholder="AA 123 BCD" type="text" class="form-control" required>
          </div>
          <button class="hidden">Submit</button>
        </form>
      </div>
    </div>
  </Modal>
</template>

<script>
  import Modal from './partials/Modal';
  import Loader from './partials/Loader'
  import { api } from '../config'

  export default {
    props: {

    },
    computed: {

    },
    data () {
      const self = this

      return {
        form: {
          email: null,
          license_plate: null
        },
        loaders: {
          addVehicle: false
        },
        addVehicleModalInfo: {
          okHandler () {
            const form = self.$refs.addVehicleForm
            const btn = form.querySelector('button')
            btn.click()
          }
        }
      }
    },
    components: {
      Modal,
      Loader
    },
    methods: {
      submit (e) {
        e.preventDefault();
        this.loaders.addVehicle = true
        return this.$store.dispatch('ADD_VEHICLE', this.form).then(response => {
          this.loaders.addVehicle = false
          this.reset()
        }).catch(err => {
          console.error('vehicle:add', err)
          this.loaders.addVehicle = false
        })
      },
      reset () {
        this.form.email = null
        this.form.license_plate = null
      }
    },
    mounted () {

    }
  }
</script>

<style>
  .hidden {
    display: none;
  }
</style>
