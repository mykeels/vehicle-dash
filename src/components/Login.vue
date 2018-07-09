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
              <div class="error-text" v-if="errorText">{{ errorText }}</div>
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
import { url } from '../config'
import jwt from 'jsonwebtoken'
import { LOGIN_USER, RESTORE_TOKEN } from '../store/store.constants'

export default {
  name: 'Login',
  props: {
    errorText: String
  },
  computed: {
    redirectUrl () {
      return 'https://api-prod-wip.andela.com/login?redirect_url=' + encodeURIComponent(url('auth'))
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
  },
  mounted () {
    this.$store.commit(RESTORE_TOKEN)
    if (this.$store.state.token) {
      const user = jwt.decode(this.$store.state.token)
      if (user) {
        this.$store.commit(LOGIN_USER, { ...user.UserInfo, token: this.$store.state.token })
        return this.$router.push({ name: 'dashboard' })
      }
    }
  }
}
</script>

<style>
  .error-text {
    color: red;
  }
</style>


<style lang="scss" src="./Login.scss">

</style>

