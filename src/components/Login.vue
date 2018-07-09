<template>
  <div class="Auth">
    <div class="login-screen">
      <div class="left-item">
        <div class="login-panel">
          <div class="inner-login-panel">
            <div class="login-content-panel">
              <img src="/static/images/andela-logo.png" class="App-logo" alt="logo" />
              <h1>Andela Dash</h1>
              <p>Sign in to access your account.</p>
            </div>
            <div class="google-btn-panel">
              <a :href="redirectUrl">
                <img src="/static/images/google-btn.svg" class="Andela-App-logo" alt="andela-logo" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="right-item">
        <div class="slider-panel">
          <div class="inner-slider-panel">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  computed: {
    redirectUrl () {
      return 'https://api-prod-wip.andela.com/login?redirect_url=' + encodeURIComponent(location.href)
    }
  },
  data () {
    return {

    }
  },
  methods: {
    showDashboard () {
      this.$router.push('dashboard')
    }
  }
}
</script>

<style lang="scss" src="./Login.scss">

</style>

