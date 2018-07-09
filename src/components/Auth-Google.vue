<template>
  <Login :error-text="errorText"></Login>
</template>

<script>
  import Login from './Login'
  import queryString from 'query-string'
  import jwt from 'jsonwebtoken'
  import stor from '../utils/stor'
  import { LOGIN_USER } from '../store/store.constants'

  export default {
    props: {

    },
    computed: {

    },
    data () {
      return {
        errorText: null
      }
    },
    components: {
      Login
    },
    methods: {

    },
    mounted () {
      const queries = queryString.parse(location.search)
      if (queries.token) {
        try {
          const user = jwt.decode(queries.token)
          if (!user) throw new Error('Could not parse token')
          this.$store.commit(LOGIN_USER, { ...user.UserInfo, ...queries })
          return this.$router.push({ name: 'dashboard' })
        }
        catch (ex) {
          this.errorText = ex.message || 'An error occurred'
        }
      }
      console.log('auth-google:queries', queries)
    }
  }
</script>

<style>

</style>
