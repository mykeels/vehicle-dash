<template>
  <footer class="Footer">
      <div class="footer-logo">
          <div class="footer-logo-bg"></div>
      </div>
      <div class="footer-copyright">
          <span>©2018 All Rights Reserved.</span>
      </div>
  </footer>
</template>

<style lang="scss">
@import '../../css/base';

.Footer {
    background-color: $andela-white;
    height: 5rem;
    overflow: hidden;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 1rem 1rem 0 1rem;
    color: $andela-grey-text;
    margin-top: 1rem;
    box-shadow: 10px -1px 1px 0px $andela-grey-text;
    z-index: 1;

    .footer-logo {
        display: inline-block;
        order: 0;

        .footer-logo-bg {
            background-image: url("../../../static/images/a-logo.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position-y: center;
            width: 8rem;
            height: 100%;
            margin-left: 2rem;
            line-height: 2rem;

            @include smm {
                margin-left: 1rem;
                margin-bottom: 1rem;
            }
        }
    }

    .footer-copyright {
        display: inline-block;
        order: 1;
        margin-right: 2rem;
        padding: 1rem;
        font-family: "DINPro-Light";

        span {
            display: inline-block;
            text-align: center;
            padding-top: 0.5rem;
        }

        @include smm {
            margin-right: unset;
        }
    }

    &:after {
        content: '';
        display: block;
    }
}
</style>

<script>
  export default {
    name: 'Footer'
  }
</script>
