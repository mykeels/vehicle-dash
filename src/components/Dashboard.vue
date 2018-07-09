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
      }
    },
    data () {
      return {
        columns: [ 'id', 'owner', 'reg_no' ],
        tableData: [
          {
            id: 14,
            owner: 'Joseph Cobhams',
            reg_no: '12345',
            slack_id: 'U8GSNUN8Z'
          },
          {
            id: 17,
            owner: 'Abdulqahhar Aminujatto',
            reg_no: '098765',
            slack_id: 'U6HKDGE6L'
          },
          {
            id: 18,
            owner: 'Jolomi Otumara',
            reg_no: 'fst-776-cx',
            slack_id: 'U740UK4SG'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" src="./Dashboard.scss">

</style>

