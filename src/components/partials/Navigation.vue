<template>
  <div class="navigation-container">
    <div class="Navigation">
      <nav class="navbar navbar-expand-md navbar-light bg-white">
        <a href="/" class="navbar-brand">
        <img src="/static/images/a-logo.png" class="navigation-logo" alt="andela in-app logo">
        </a>
        <button type="button" class="navbar-toggler">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
          <ul class="ml-auto navbar-nav">
            <li class="nav-item opacity-0">
              <div class="input-group">
                <input placeholder="search" type="text" class="form-control">
                <div class="input-group-append">
                  <button class="btn btn-secondary">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </li>
            <DropdownMenuItem>
              <template slot="text">
                <span class="avatar">
                  <img src="http://via.placeholder.com/30x30" class="rounded" alt="user avatar">
                </span>
                Aminujatto Abdulqahhar
              </template>
              <template>
                <button type="button" tabindex="0" class="dropdown-item">Guest History</button>
                <div tabindex="-1" class="dropdown-divider"></div>
                <button type="button" tabindex="0" class="dropdown-item">Log Out</button>
              </template>
            </DropdownMenuItem>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
  import DropdownMenuItem from './DropdownMenuItem';

  export default {
    name: 'Navigation',
    components: {
      DropdownMenuItem
    }
  }
</script>

<style lang="scss">
@import '../../css/base';

.Navigation {
    color: $andela-grey-text;
    .opacity-0 {
      visibility: hidden;
    }
    .navigation-logo {
        width: 10rem;
        height: 100%;
    }
    li.nav-item {
        margin-left: 1.2rem;

        @include smm {
            margin-left: 0;
            margin-top: 1.2rem
        }
        .form-control {
            border-top-left-radius: 1.25rem;
            border-bottom-left-radius: 1.25rem;

            &:focus {
                box-shadow: none;
                outline: none;
                border-color: $search-input-border-color;
            }
        }
        button {
            border-top-right-radius: 1.25rem;
            border-bottom-right-radius: 1.25rem;
        }
    }
    .dropdown-divider {
        @include smm {
            border-top: 1px solid #fff;
        }
    }
    .dropdown-menu {
        @include smm {
            border: 1px solid #fff;
        }
    }
}
</style>
