<template>
  <Modal name="add-vehicle">
    <template slot="title">
      <h4 class="modal-title">Add Vehicle</h4>
    </template>
    <div class="action-form-container">
      <div class="form-container">
        <form name="add-vehicle-form">
          <div class="form-group">
            <label for="addHostName" class="">Owner's Email</label>
            <input name="hostName" placeholder="john.doe@andela.com" type="text" class="form-control">
          </div>
          <div class="form-group">
            <label for="addGuestName" class="">License Plate No.</label>
            <input name="license_plate" placeholder="AA 123 BCD" type="text" class="form-control">
          </div>
        </form>
      </div>
    </div>
  </Modal>
</template>

<script>
  import Modal from './partials/Modal';

  export default {
    props: {

    },
    computed: {

    },
    data () {
      return {

      }
    },
    components: {
      Modal
    },
    methods: {

    },
    mounted () {

    }
  }
</script>

<style>

</style>
