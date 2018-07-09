<template>
  <div></div>
</template>

<script>
  import jwt from 'jsonwebtoken'

  export default {
    mounted () {
      if (this.$store.state.token) {
        const user = jwt.decode(this.$store.state.token)
        if (!user || user.aud != 'andela.com') {
          this.$router.push({ name: 'login' })
        }
        console.log(user)
      }
      else {
        this.$router.push({ name: 'login' })
      }
    }
  }
</script>

<style>

</style>
