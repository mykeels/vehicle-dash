<template>
   <div class="Dashboard">
      <Navigation />

      <div class="guest-list-container">
          <div class="guest-list-top-section">
              <div class="guest-list-table-title">
                  <span class="table-title-text">Today's Guests</span>
                  <div class="line">
                      <span class="long-line"></span>
                      <span class="short-line"></span>
                  </div>
              </div>
              <div class="add-guest-container">
                  <div class="add-guest-btn"  onClick={this.toggle}>
                      <span>Add Guest</span>
                  </div>
              </div>
          </div>
          <div class="guest-list-table-section">
              <table class="table table-striped">
                  <thead>
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">Guest Name</th>
                          <th scope="col">Host Name</th>
                          <th scope="col">Time In</th>
                          <th scope="col">Time Out</th>
                          <th scope="col">Tag No.</th>
                          <th scope="col">Date</th>
                          <th scope="col">Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <th scope="row">1</th>
                          <td>Grace Ajuya</td>
                          <td>Joseph Cobhams</td>
                          <td>12-01-2018 13:30</td>
                          <td>12-01-2018 15:30</td>
                          <td>AND20190</td>
                          <td>12-01-2018</td>
                          <td>
                              <span class="edit-icon"></span>
                              <span class="remove-icon"></span>
                          </td>
                      </tr>
                      <tr>
                          <th scope="row">2</th>
                          <td>Grace Ajuya</td>
                          <td>Joseph Cobhams</td>
                          <td>12-01-2018 13:30</td>
                          <td>12-01-2018 15:30</td>
                          <td>AND20190</td>
                          <td>12-01-2018</td>
                          <td>
                              <span class="edit-icon"></span>
                              <span class="remove-icon"></span>
                          </td>
                      </tr>
                      <tr>
                          <th scope="row">3</th>
                          <td>Grace Ajuya</td>
                          <td>Joseph Cobhams</td>
                          <td>12-01-2018 13:30</td>
                          <td>12-01-2018 15:30</td>
                          <td>AND20190</td>
                          <td>12-01-2018</td>
                          <td>
                              <span class="edit-icon"></span>
                              <span class="remove-icon"></span>
                          </td>
                      </tr>
                  </tbody>
              </table>
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
    }
  }
</script>

<style lang="scss" src="./Dashboard.scss">

</style>

