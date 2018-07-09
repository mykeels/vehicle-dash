<template>
  <div :class="className" v-if="visible">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper" @click="close">
          <div class="modal-container">

            <div class="modal-header" v-if="!noTitle">
              <slot name="title" :info="info">
                <div>{{title}}</div>
              </slot>
            </div>

            <div class="modal-body">
              <slot :info="info">
                <div v-html="body"></div>
              </slot>
            </div>

            <div class="modal-footer only" v-if="!noFooter">
              <div>
                <slot name="footer" :info="info">
                  <div>{{footer}}</div>
                </slot>
              </div>
            </div>

            <div class="modal-footer close-footer" v-if="!noButtons">
              <input type="button" v-if="!noCancel" class="modal-button modal-cancel-button" @click="cancel()" :value="cancelText || 'Cancel'">
              <input type="button" class="modal-button modal-ok-button" @click="ok()" :value="okText || 'OK'">
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
    /**
     See README.md for docs
     */
    import { EventBus } from '../../EventBus'

    export default {
        name: 'modal',
        props: {
            name: String,
            noTitle: Boolean,
            noFooter: Boolean,
            noCancel: Boolean,
            noButtons: Boolean,
            info: Object,
            className: String,
            cancelText: String,
            okText: String,
            onCancel: Function,
            noWrapperClose: Boolean,
            isVisible: Boolean
        },
        data() {
            return {
                title: '',
                body: '',
                footer: '',
                visible: this.isVisible || false
            }
        },
        methods: {
            close(e) {
                if (!e || (e.target && (!this.noWrapperClose && e.target.classList.contains('modal-wrapper')))) {
                    this.visible = false;
                    EventBus.$emit(`modal${this.name ? '-' + this.name : ''}:close`)
                }
            },
            cancel() {
                if (this.info && typeof(this.info.cancelHandler) === 'function') this.info.cancelHandler(this.info);
                else this.close();
            },
            ok() {
                if (this.info && typeof(this.info.okHandler) === 'function') this.info.okHandler();
                else this.close();
            },
            show (opts = {}) {
                this.title = opts.title || ''
                this.body = opts.body || ''
                this.footer = opts.footer || ''
                this.visible = true
            }
        },
        mounted() {
            EventBus.$on(`modal${this.name ? '-' + this.name : ''}:show`, (opts) => {
                this.show(opts)
            })

            EventBus.$on(`modal${this.name ? '-' + this.name : ''}:hide`, () => {
                this.close()
            })
        }
    }
</script>

<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
        max-height: 100vh;
        overflow-y: auto;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-button {
        float: right;
    }

    /*
    * The following styles are auto-applied to elements with
    * transition="modal" when their visibility is toggled
    * by Vue.js.
    *
    * You can easily play with the modal transition by editing
    * these styles.
    */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .modal-footer.close-footer {
        padding: 0px;
        border: none;
    }
</style>
