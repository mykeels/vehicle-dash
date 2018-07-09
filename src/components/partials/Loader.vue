<template>
  <div class="loader" :style="{ width: size + 'px', height: size + 'px' }"></div>
</template>

<script>
  export default {
      name: 'Loader',
      props: {
        size: {
          type: Number,
          default: 30
        }
      }
  }
</script>

<style>
  .loader {
    border: 5px solid #f3f3f3;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
    border-top: 5px solid #555;
    border-radius: 50%;
  }

  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }
</style>
