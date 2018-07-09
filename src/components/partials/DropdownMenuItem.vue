<template>
  <li class="dropdown show nav-item">
    <a :aria-haspopup="`${isOpen}`" href="#" class="dropdown-toggle nav-link" :aria-expanded="`${isOpen}`" @click="toggle">
      <slot name="text">{{text}}</slot>
    </a>
    <div tabindex="-1" role="menu" aria-hidden="false" class="dropdown-menu dropdown-menu-right" :class="{ show: isOpen }">
      <slot></slot>
    </div>
  </li>
</template>

<script>
  export default {
    props: [ 'text' ],
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      toggle () {
        this.isOpen = !this.isOpen;
      }
    }
  }
</script>

<style>

</style>
