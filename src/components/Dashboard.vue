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
                  <div class="add-guest-btn"  onClick={this.toggle}>
                      <span>Add Vehicle</span>
                  </div>
              </div>
          </div>
          <div class="guest-list-table-section">
            <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
          </div>
          <Modal>
              <div class="action-form-container">
                  Hello World
              </div>
          </Modal>
      </div>

    <Footer />
  </div>
</template>

<script>
  import Footer from './partials/Footer';
  import Modal from './partials/Modal';
  import Navigation from './partials/Navigation';

  export default {
    name: 'Dashboard',
    components: {
      Footer,
      Modal,
      Navigation
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
    }
  }
</script>

<style lang="scss" src="./Dashboard.scss">

</style>

